import { withPluginApi } from 'discourse/lib/plugin-api';
import PageTracker from 'discourse/lib/page-tracker';

function __push() {
  const i = $('.adsense').size();
  const j = $('.adsense .adsbygoogle ins ins').size();

  $('ins.adsbygoogle').each(function(){
    if ($(this).html() === '') {
      window.adsbygoogle.push({});
    }
  });
  if(i>j) {
    window.setTimeout(__push, 300);
  }
}

function __reload_gads () {
  const ads = document.getElementById("adsense_loader");
  if (ads) {
    // clear the old element and its state
    //ads.remove();
    ads.parentNode.removeChild(ads);
    for (var key in window) {
      if (key.indexOf("google") !== -1){
        window[key] = undefined;
      }
    }
  }
  window.adsbygoogle = [];
  const ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true; ga.id="adsense_loader";
  ga.src = '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
  const s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  window.setTimeout(__push, 200);
}

function oldPluginCode() {
  PageTracker.current().on('change', __reload_gads);
}

function initializeAdsense(api) {
  api.onPageChange(__reload_gads);
}

export default {
  name: "apply-adsense",
  initialize(container) {

    const siteSettings = container.lookup('site-settings:main');
    const publisherCode = (siteSettings.adsense_publisher_code || '').trim();

    if (publisherCode.length) {
      withPluginApi('0.1', initializeAdsense, { noApi: oldPluginCode });
    }
  }
};
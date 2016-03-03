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

    const currentUser = container.lookup('current-user:main');
    const siteSettings = container.lookup('site-settings:main');
    const publisherCode = (siteSettings.adsense_publisher_code || '').trim();

    Ember.Handlebars.helper('adsenseBlock', (width, height, slotid) => {
      if ((currentUser) && ( currentUser.get('trust_level') > siteSettings.adsense_through_trust_level )) {
          return "";
      }

      const position = slotid.replace('_mobile', '');
      if (siteSettings['adsense_show_' + position]) {
        return new Handlebars.SafeString('<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>' +
          '<div class="adsense adsense_' + slotid.trim() + '">' +
          '<ins class="adsbygoogle" style="display:inline-block;width:' +
          width + 'px;height:'+ height + 'px" data-ad-client="' + publisherCode +
          '" data-ad-slot="' + siteSettings['adsense_ad_slot_' + slotid.trim()] + '"></ins>' +
          '</div>' +
          '<script> (adsbygoogle = window.adsbygoogle || []).push({}); </script>'
        );
      }

      return "";
    });

    if (publisherCode.length) {
      withPluginApi('0.1', initializeAdsense, { noApi: oldPluginCode });
    }
  }
};

(function() {

  Handlebars.registerHelper('adsenseBlock', function(width, height, slotid) {
    var currentUser = Discourse.User.current();
    if ((currentUser) && ( currentUser.get('trust_level') > Discourse.SiteSettings.adsense_through_trust_level )) {
        return "";
    }

    var position = slotid.replace('_mobile', '');
    if (eval('Discourse.SiteSettings.adsense_show_' + position)) {

      // we only currently support one ad per page, 
      // because we don't get the push({}) method to work correctly
      if (slotid == 'topic_bottom' && eval('Discourse.SiteSettings.adsense_show_topic_top')) {
        return "";
      }
      if (slotid == 'topic_bottom_mobile' && eval('Discourse.SiteSettings.adsense_show_topic_top_mobile')) {
        return "";
      }

      return new Handlebars.SafeString('<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>' +
        '<div class="adsense adsense_' + slotid.trim() + '">' +
        '<ins class="adsbygoogle" style="display:inline-block;width:' + 
        width + 'px;height:'+ height + 'px" data-ad-client="' + Discourse.SiteSettings.adsense_publisher_code.trim() + 
        '" data-ad-slot="' + eval('Discourse.SiteSettings.adsense_ad_slot_' + slotid.trim()) + '"></ins>' +
        '</div>' + 
        '<script> (adsbygoogle = window.adsbygoogle || []).push({}); </script>'
      );
    } 
    return "";
  });

})();

(function() {
 
  function __reload_gads () {
    var ads = document.getElementById("adsense_loader");
    if (ads) {
      // clear the old element and its state
      ads.remove();
      for (key in window) {
        if (key.indexOf("google") !== -1){
          window[key] = undefined;
        }
      }
    }
 
    window.adsbygoogle = [];
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true; ga.id="adsense_loader";
    ga.src = '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  }
 
  Discourse.PageTracker.current().on('change', function(url) {
    try {
      __reload_gads();
      if(typeof adsbygoogle !== "undefined"){
        adsbygoogle.push({});
      }
    } catch (ignore) {}
  });
 
  __reload_gads();
 
})();


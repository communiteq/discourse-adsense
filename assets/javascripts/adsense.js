(function() {

  Handlebars.registerHelper('adsenseBlock', function(width, height, slotid) {
    var currentUser = Discourse.User.current();
    if ((currentUser) && ( currentUser.get('trust_level') > Discourse.SiteSettings.adsense_through_trust_level )) {
        return "";
    }

    var position = slotid.replace('_mobile', '');
    if (Discourse.SiteSettings['adsense_show_' + position]) {

      return new Handlebars.SafeString('<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>' +
        '<div class="adsense adsense_' + slotid.trim() + '">' +
        '<ins class="adsbygoogle" style="display:inline-block;width:' + 
        width + 'px;height:'+ height + 'px" data-ad-client="' + Discourse.SiteSettings.adsense_publisher_code.trim() + 
        '" data-ad-slot="' + Discourse.SiteSettings['adsense_ad_slot_' + slotid.trim()] + '"></ins>' +
        '</div>' + 
        '<script> (adsbygoogle = window.adsbygoogle || []).push({}); </script>'
      );
    } 
    return "";
  });

})();

(function() {

  function __push() {
    var i = $('.adsense').size();
    var j = $('.adsense ins ins').size();
 
    $('ins.adsbygoogle').each(function(){
      if ($(this).html() == '') {
        adsbygoogle.push({});
      }
    });
    if(i>j) { 
      window.setTimeout(__push, 300);
    }
  }
 
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
    window.setTimeout(__push, 200);
  }
 
  Discourse.PageTracker.current().on('change', function(url) {
    if('' != Discourse.SiteSettings.adsense_publisher_code) {
      __reload_gads();
    }
  });
 
 
})();


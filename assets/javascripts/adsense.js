(function() {

  Handlebars.registerHelper('adsenseBlock', function(width, height, slotid) {
    var currentUser = Discourse.User.current();
    if ((currentUser) && ( currentUser.get('trust_level') > Discourse.SiteSettings.adsense_through_trust_level )) {
        return "";
    }

    var position = slotid.replace('_mobile', '');
    if (eval('Discourse.SiteSettings.adsense_show_' + position)) {
      return new Handlebars.SafeString('<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>' +
        '<div class="adsense adsense_' + slotid + '">' +
        '<ins class="adsbygoogle" style="display:inline-block;width:' + 
        width + 'px;height:'+ height + 'px" data-ad-client="' + Discourse.SiteSettings.adsense_publisher_code + 
        '" data-ad-slot="' + eval('Discourse.SiteSettings.adsense_ad_slot_' + slotid) + '"></ins>' +
        '</div>' + 
        '<script> (adsbygoogle = window.adsbygoogle || []).push({}); </script>'
      );
    } 
    return "";
  });

})();

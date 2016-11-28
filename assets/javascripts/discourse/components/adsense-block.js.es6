import loadScript from 'discourse/lib/load-script';

export default Ember.Component.extend({
  visible: false,
  slotId: null,
  adStyle: null,

  init() {
    this._super();

    const { siteSettings } = this;
    const slot = this.get('slot').trim();
    const position = slot.replace('_mobile', '');
    this.set('publisherCode', (siteSettings.adsense_publisher_code || '').trim());


    this.set('slotTrim', slot);

    const userSee = (!this.currentUser) ||
                     (this.currentUser.get('trust_level') <= siteSettings.adsense_through_trust_level);


    if (userSee && siteSettings[`adsense_show_${position}`]) {
      this.set('visible', true);
      this.set('slotId', siteSettings[`adsense_ad_slot_${slot}`]);
      const { width, height } = this.getProperties('width', 'height');
      this.set('adStyle', `display:inline-block; width:${width}px; height:${height}px;`.htmlSafe());
    }
  },

  didInsertElement() {
    this._super();
    loadScript(`//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`).then(() => {
      const adsbygoogle = window.adsbygoogle || [];
      adsbygoogle.push({});
    });
  }

});


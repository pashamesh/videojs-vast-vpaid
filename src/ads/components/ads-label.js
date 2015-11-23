var AdsLabel = videojs.extend(getComponent('Component'), {
  /** @constructor */
  constructor: function (player, options) {
    videojs.getComponent('Component').call(this, player, options);

    var that = this;

    // We asynchronously reposition the ads label element
    setTimeout(function () {
      var currentTimeComp = player.controlBar &&( player.controlBar.getChild("timerControls") || player.controlBar.getChild("currentTimeDisplay") );
      if(currentTimeComp) {
        player.controlBar.el().insertBefore(that.el(), currentTimeComp.el());
      }
      dom.removeClass(that.el(), 'vjs-label-hidden');
    }, 0);
  }
});

AdsLabel.prototype.createEl = function () {
  return videojs.getComponent('Component').prototype.createEl.call(this, 'div', {
    className: 'vjs-ads-label vjs-control vjs-label-hidden',
    innerHTML: 'Advertisement'
  });
};

videojs.registerComponent('AdsLabel', AdsLabel);

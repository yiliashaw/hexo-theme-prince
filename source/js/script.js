function init() {
  $('body .hidden-prince').each(function () {
    $(this).fadeIn(600).removeClass('hidden-prince');
  });

  $('.post-block p img').each(function () {
    $(this).wrap('<a data-fancybox="images" href="' + this.src + '" data-caption=" ' + this.alt + '" class="fancybox"></a>');
    $(this).attr('src', this.src+'?imageMogr2/thumbnail/300x300/gravity/North/crop/200x200');
  });

  if ($.fancybox) {
    $('.fancybox').fancybox({
      thumbs: {
        // showOnStart: true
      },
      caption: function (instance, item) {
        var caption, link;

        if (item.type === 'image') {
          caption = $(this).data('caption');
          link = '<a href="' + item.src + '">Download</a>';

          return (caption ? caption : '') + link;
        }
      },

    });
    // $.fancybox.defaults.speed = 1000;
  }
}

init();

$(document).ready(function() {
  // Masonry
  var $box = $('.box-mason');
  $box.imagesLoaded(function() {
    var options = {
      itemSelector: '.box',
      columnWidth: function(containerWidth) {
        if (containerWidth < 480) {
          return containerWidth;
        } else if (containerWidth < 900) {
          return containerWidth/2;
        } else if (containerWidth < 1200) {
          return containerWidth/3;
        } else if (containerWidth < 1600) {
          return containerWidth/4;
        }
        return 300;
      },
      isAnimated: true
    };
    var optionsRight = $.extend(true, { isRTL: true }, options);

    $box.not('.box-mason-right').masonry(options);
    $box.filter('.box-mason-right').masonry(optionsRight);
  });

  // Slideshow
  (function() {
    var images = [
      'img/photos/slideshow/1.jpeg',
      'img/photos/slideshow/2.jpeg',
      'img/photos/slideshow/3.jpeg',
      'img/photos/slideshow/4.jpeg',
      'img/photos/slideshow/5.jpeg',
    ];
    var duration = 8000;

    var index = 0;
    var $slides = $('.slideshow');

    var ready = false;
    var onReady = function() {
      if (!elapsed) {
        ready = true;
        return;
      }
      next();
    };

    var elapsed = false;
    var onElapsed = function() {
      if (!ready) {
        elapsed = true;
        return;
      }
      next();
    };

    var next = function() {
      $slides.fadeTo(1000, 0, function() {
        $slides
          .css('background-image', 'url(' + images[index] + ')')
          .fadeTo(1000, 1);
      });
      elapsed = false;
      ready   = false;

      index = (index + 1) % images.length;

      var preload = (index + 1) % images.length;
      var image = new Image();
      image.src = images[preload];
      image.onload = onReady;
      setTimeout(onElapsed, duration);
    };

    var image = new Image();
    image.src = images[1];
    image.onload = onReady;
    setTimeout(onElapsed, duration);
  })();

  // Navigation
  (function() {
    var fixed = false;

    var $doc = $(document);
    var $screen = $('.screen');
    var $slideshow = $('.slideshow');

    var $header = $('header');
    var $h1 = $('h1 img');

    var scroll = function(e) {
      if ($doc.width() < 600) {
        $header.css('left', 0);
        $h1.css('opacity', 1);
        $slideshow.css('top', 0);
        return;
      }

      var scroll = $doc.scrollTop();
      var height = $screen.offset().top;
      var percent = scroll/height;

      $h1.css('opacity', Math.max(0, 1-percent*2));

      var left = Math.min(0, -120 + percent * 130);
      $header.css('left', left + 'px');

      // Disabled parallex effect because it lags
      // $slideshow.css('top', (scroll/2) + 'px');
    };
    scroll();
    $doc.scroll(scroll);
  })();

  // Delayed loading of some images
  // Unused: Using fancybox instead
  /*(function() {
    var $doc = $(document);
    var $win = $(window);

    setTimeout(function() {
      $('.demand').each(function() {
        var $this = $(this);
        $this.load(function() {
          $this.hide().fadeIn(500);
        });
        $this.attr('src', $this.data('src'));
        $this.removeClass('demand');

        $this.click(function() {
          var src = $this.data('src');
          src.replace('thumbs', 'photos');
          window.open(src, '_blank');
        });
      });
    }, 4000);
  })();*/

  // Images on demand
  // Unused: Using fancybox instead
  /*
  (function() {
    var $doc = $(document);
    var $win = $(window);

    var buckets = { };
    var size    = 100;

    $('.demand').each(function() {
      var $this = $(this);
      var offset = $this.position().top;

      var i = Math.floor(offset/size);
      if (!buckets[i]) {
        buckets[i] = { loaded: false, images: [] };
      }
      buckets[i].images.push($this);
    });

    var fadeIn = function() {
      $(this).hide().fadeIn(500);
    };
    var scroll = function() {
      var up = $doc.scrollTop();
      var down = up + $win.height();

      var start = Math.floor(up/size);
      var end = Math.ceil(down/size);
      for (var i = start; i <= end; i++) {
        if (buckets[i] && !buckets[i].loaded) {
          for (var j = 0; j < buckets[i].images.length; j++) {
            var image = buckets[i].images[j];
            image.load(fadeIn);
            image.attr('src', image.data('src'));
            image.removeClass('demand');
          }
          buckets[i].loaded = true;
        }
      }
    };
    scroll();
    $doc.scroll(scroll);
  })();*/


  // Animated anchor links
  $('a[href*=#]').each(function() {
    $(this).click(function(e) {
      e.preventDefault();

      var target = this.hash;
      var scroll = 0;

      var offset = $(target).offset();
      if (offset) scroll = offset.top;

      $('html, body').animate({ scrollTop: scroll }, 600);
    });
  });

});
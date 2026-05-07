$(document).ready(function () {

  /* =============================================
     1. THEME TOGGLE
     ============================================= */
  var savedTheme = localStorage.getItem('theme') || 'dark-mode';
  $('body').removeClass('dark-mode light-mode').addClass(savedTheme);
  updateThemeIcon(savedTheme);
  updateIconSkills(savedTheme);

  $('#themeToggle').on('click', function () {
    if ($('body').hasClass('dark-mode')) {
      $('body').removeClass('dark-mode').addClass('light-mode');
      localStorage.setItem('theme', 'light-mode');
      updateThemeIcon('light-mode');
      updateIconSkills('light-mode');
    } else {
      $('body').removeClass('light-mode').addClass('dark-mode');
      localStorage.setItem('theme', 'dark-mode');
      updateThemeIcon('dark-mode');
      updateIconSkills('dark-mode');
    }
  });

  function updateThemeIcon(theme) {
    if (theme === 'dark-mode') {
      $('#themeIcon').attr('src', 'asset/moon.png').attr('alt', 'Switch to Light Mode');
    } else {
      $('#themeIcon').attr('src', 'asset/moon-light.png').attr('alt', 'Switch to Dark Mode');
    }
  }

  function updateIconSkills(theme) {
    if (theme === 'dark-mode') {
      $('#web').attr('src', 'asset/web-development.png');
      $('#ml').attr('src', 'asset/machine-learning.png');
      $('#tools').attr('src', 'asset/tools-dark.png');
      $('#database').attr('src', 'asset/database-dark.png');
    } else {
      $('#web').attr('src', 'asset/web-development-light.png');
      $('#ml').attr('src', 'asset/machine-learning-light.png');
      $('#tools').attr('src', 'asset/tools-light.png');
      $('#database').attr('src', 'asset/database-light.png');
    }
  }


  /* =============================================
     2. PHOTO HOVER
     ============================================= */
  $('.photo-hover').hover(
    function () { $(this).addClass('colored'); },
    function () { $(this).removeClass('colored'); }
  );


  /* =============================================
     3. TYPING EFFECT (index.html only)
     ============================================= */
  var $typingTarget = $('#typing-target');
  if ($typingTarget.length) {
    var texts = ['I am Developer', 'I am Fadhil', 'I am a Creator'];
    var textIndex = 0;
    var charIndex = 0;
    var isDeleting = false;

    function typeWriter() {
      var currentText = texts[textIndex];

      if (isDeleting) {
        $typingTarget.text(currentText.substring(0, charIndex - 1));
        charIndex--;
      } else {
        $typingTarget.text(currentText.substring(0, charIndex + 1));
        charIndex++;
      }

      var speed = isDeleting ? 60 : 100;

      if (!isDeleting && charIndex === currentText.length) {
        speed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        speed = 400;
      }

      setTimeout(typeWriter, speed);
    }

    typeWriter();
  }


  /* =============================================
     4. SMOOTH SCROLL
     ============================================= */
  $('.smooth-scroll').on('click', function (e) {
    var target = $(this).attr('href');
    if (target && target.startsWith('#')) {
      e.preventDefault();
      var $target = $(target);
      if ($target.length) {
        $('html, body').animate({ scrollTop: $target.offset().top - 80 }, 700, 'swing');
      }
    }
  });


  /* =============================================
     5. FADE-IN ON SCROLL
     ============================================= */
  function checkFadeIn() {
    var windowBottom = $(window).scrollTop() + $(window).height();
    $('.fade-section').each(function () {
      if (windowBottom > $(this).offset().top + 80) {
        $(this).addClass('visible');
      }
    });
  }

  checkFadeIn();
  $(window).on('scroll', checkFadeIn);


  /* =============================================
     6. ACCORDION (about.html only)
     ============================================= */
  if ($('.accordion-item').length) {
    // Open first accordion by default
    $('.accordion-item').first().addClass('open').find('.accordion-body').show();

    $('.accordion-header').on('click', function () {
      var $item = $(this).closest('.accordion-item');
      var $body = $item.find('.accordion-body');

      if ($item.hasClass('open')) {
        $body.slideUp(300);
        $item.removeClass('open');
      } else {
        $('.accordion-item.open').each(function () {
          $(this).find('.accordion-body').slideUp(300);
          $(this).removeClass('open');
        });
        $body.slideDown(300);
        $item.addClass('open');
      }
    });
  }


  /* =============================================
     7. BACK TO TOP BUTTON
     ============================================= */
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 400) {
      $('#backToTop').fadeIn(300);
    } else {
      $('#backToTop').fadeOut(300);
    }
  });

  $('#backToTop').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 600, 'swing');
  });

});
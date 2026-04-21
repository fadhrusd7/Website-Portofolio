$(document).ready(function () {

  var savedTheme = localStorage.getItem('theme') || 'dark-mode';
  $('body').removeClass('dark-mode light-mode').addClass(savedTheme);
  updateThemeIcon(savedTheme);

  $('#themeToggle').on('click', function () {
    if ($('body').hasClass('dark-mode')) {
      $('body').removeClass('dark-mode').addClass('light-mode');
      localStorage.setItem('theme', 'light-mode');
      updateThemeIcon('light-mode');
    } else {
      $('body').removeClass('light-mode').addClass('dark-mode');
      localStorage.setItem('theme', 'dark-mode');
      updateThemeIcon('dark-mode');
    }
  });

  function updateThemeIcon(theme) {
    if (theme === 'dark-mode') {
      $('#themeIcon').attr('src', 'asset/moon.png').attr('alt', 'Switch to Light Mode');
    } else {
      $('#themeIcon').attr('src', 'asset/moon-light.png').attr('alt', 'Switch to Dark Mode');
    }
  }



  $('.photo-hover').hover(
    function () {
      $(this).addClass('colored');
    },
    function () {
      $(this).removeClass('colored');
    }
  );


  /* =============================================
     3. TYPING EFFECT
     ============================================= */
  var typingTarget = $('#typing-target');
  if (typingTarget.length) {
    var texts = ['I am Developer', 'I am Fadhil', 'I am a Creator'];
    var textIndex = 0;
    var charIndex = 0;
    var isDeleting = false;

    function typeWriter() {
      var currentText = texts[textIndex];

      if (isDeleting) {
        typingTarget.text(currentText.substring(0, charIndex - 1));
        charIndex--;
      } else {
        typingTarget.text(currentText.substring(0, charIndex + 1));
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
      var targetSection = $(target);
      if (targetSection.length) {
        $('html, body').animate(
          { scrollTop: targetSection.offset().top - 80 },
          700,
          'swing'
        );
      }
    }
  });

  $('.nav-links .page-link').on('click', function (e) {
    var href = $(this).attr('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      var targetSection = $(href);
      if (targetSection.length) {
        $('html, body').animate(
          { scrollTop: targetSection.offset().top - 80 },
          700
        );
      }
    }
  });


  /* =============================================
     5. FADE-IN SAAT SCROLL (Scroll Animation)
     ============================================= */
  function checkFadeIn() {
    var windowBottom = $(window).scrollTop() + $(window).height();

    $('.fade-section').each(function () {
      var sectionTop = $(this).offset().top;

      if (windowBottom > sectionTop + 80) {
        $(this).addClass('visible');
      }
    });
  }

  checkFadeIn();

  $(window).on('scroll', function () {
    checkFadeIn();
  });

});
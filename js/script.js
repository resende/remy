$('.enter_link').click(function () {
    $(this).parent('#splashscreen').fadeOut(600);
});

// makes sure the whole site is loaded
jQuery(window).load(function() {
        // will first fade out the loading animation
  jQuery("#status").fadeOut();
        // will fade out the whole DIV that covers the website.
  jQuery("#preloader").delay(1000).fadeOut("slow");
})

// Random Background Hero on Page Load and Refresh
// http://stackoverflow.com/questions/19369426/random-background-image-on-refresh

function randomHero() {
    var heroPics = ['img/background/BG1.gif', 'img/background/BG2.gif', 'img/background/BG3.gif', 'img/background/BG4.gif', 'img/background/BG6.gif', 'img/background/BG8.gif'];

    $('body').css({
        'background' : 'url('+ heroPics[Math.floor(Math.random() * heroPics.length)] + ') no-repeat',
        'background-attachment' : 'scroll',
        // 'background-position' : '50% 50%',
        'background-size' : 'cover'
    });
}

// Show Random Image on Page Load
randomHero();


$(document).ready(function () {

/*-------------------------
HEADER
-------------------------*/

function titleRise () {
    $('.title').addClass('hover');
    $(".title").animate({bottom:"15%", opacity:"1"}, 1000);
};

setTimeout(function () {
    titleRise();
}, 4500);

$(window).scroll(function () {
    titleRise();
});

$(".title").hover(function () {
    $('.title').text('Portfolio');
}, function () {
    $('.title').text('');
        setTimeout(function () {
            if (document.querySelector(".title").innerHTML === "") {
            $('.title').html('<span class="name">Allan Cheung</span>Front-End Web Development');
            }
        }, 300);
});

$("#title").click(function () {
    $('html, body').animate({scrollTop: $('#portfolio').offset().top
    }, 1000);
});

/*--------TYPER----------*/


/*$(".text-icon").hover(function() {
    $(".hover-text").css({'display':'inline'});
    $(".hover-text").addClass('typer');
    TyperSetup();
}, function () {
    $(".hover-text").css({'display':'none'});
    $(".hover-text").removeClass('typer');
});*/
/*--------NAV-BAR----------*/

$(".home-nav").click(function () {
    $('html, body').animate({scrollTop: $('header').offset().top
    }, 1000);
});

$(".skills-nav").click(function () {
    $('html, body').animate({scrollTop: $('#skills').offset().top -200
    }, 1000);
});

$(".portfolio-nav").click(function () {
    $('html, body').animate({scrollTop: $('#portfolio').offset().top
    }, 1000);
});


$(".about-me-nav").click(function () {
    $('html, body').animate({scrollTop: $('#about-me').offset().top
    }, 1000);
});

$(".contact-nav").click(function () {
    $('html, body').animate({scrollTop: $('#contact').offset().top
    }, 1000);
});

/*--------STICKY-BAR----------*/

$('.bars').click(function (){
    $('.side-bar').slideToggle();
    $('.bars').hide();
    $('.cross').show();
});

$('.cross').click(function (){
    $('.side-bar').slideToggle();
    $('.cross').hide();
    $('.bars').show();
});

$('.h1Bot').waypoint(function (direction){
    if (direction === 'down') {
        $('.sticky').fadeIn();
    } else {
        $('.sticky').fadeOut();
        $('.side-bar').slideUp();
        $('.cross').hide();
        $('.bars').show();
    }
});

$(".home-nav").hover(function (){
    $(".home-nav").addClass("animated pulse");
}, function (){
    $(".home-nav").removeClass("animated pulse");
});

$(".skills-nav").hover(function (){
    $(".skills-nav").addClass("animated pulse");
}, function (){
    $(".skills-nav").removeClass("animated pulse");
});

$(".portfolio-nav").hover(function (){
    $(".portfolio-nav").addClass("animated pulse");
}, function (){
    $(".portfolio-nav").removeClass("animated pulse");
});

$(".about-me-nav").hover(function (){
    $(".about-me-nav").addClass("animated pulse");
}, function (){
    $(".about-me-nav").removeClass("animated pulse");
});

$(".contact-nav").hover(function (){
    $(".contact-nav").addClass("animated pulse");
}, function (){
    $(".contact-nav").removeClass("animated pulse");
});

/*----------------------------
SKILLS
----------------------------*/

$('#skills').waypoint(function (direction){
        $('#skills-waypoint').css({opacity: '1'});
        $('#skills-waypoint').addClass('animated bounceInUp');
    },{
    offset: 500
    }
);


/*----------------------------
PORTFOLIO
----------------------------*/

/*SLIDE ANIMATION*/

$("#simon-icon").click(function () {
    if (document.querySelector('#simon-des').style.display === 'block') {
        $('#simon-des').slideUp();
        $('html, body').animate({scrollTop: $('#portfolio').offset().top
      }, 1000);
   }else {
        $("[id$=des]").slideUp();
        $('#simon-des').slideDown();
        setTimeout( function () {
            $('html, body').animate({scrollTop: $('#simon-des').offset().top
            }, 1000);
        }, 410);
   }
});

$("#pomodoro-icon").click(function () {
    if (document.querySelector('#pomodoro-des').style.display === 'block') {
        $('#pomodoro-des').slideUp();
        $('html, body').animate({scrollTop: $('#portfolio').offset().top
      }, 1000);
    } else {
        $("[id$=des]").slideUp();
        $('#pomodoro-des').slideDown();
        setTimeout( function () {
            $('html, body').animate({scrollTop: $('#pomodoro-des').offset().top
            }, 1000);
        }, 410);
    }
});

$("#tictactoe-icon").click(function () {
    if (document.querySelector('#tictactoe-des').style.display === 'block') {
        $('#tictactoe-des').slideUp();
        $('html, body').animate({scrollTop: $('#portfolio').offset().top
      }, 1000);
    } else {
        $("[id$=des]").slideUp();
        $('#tictactoe-des').slideDown();
        setTimeout( function () {
            $('html, body').animate({scrollTop: $('#tictactoe-des').offset().top
            }, 1000);
        }, 410);
    }
});

$("#calculator-icon").click(function () {
    if (document.querySelector('#calculator-des').style.display === 'block') {
        $('#calculator-des').slideUp();
        $('html, body').animate({scrollTop: $('#portfolio').offset().top
      }, 1000);
    } else {
        $("[id$=des]").slideUp();
        $('#calculator-des').slideDown();
        setTimeout( function () {
            $('html, body').animate({scrollTop: $('#calculator-des').offset().top
             }, 1000);
        }, 410);
    }
});

$("#quote-icon").click(function () {
    if (document.querySelector('#quote-des').style.display === 'block') {
        $('#quote-des').slideUp();
        $('html, body').animate({scrollTop: $('#portfolio').offset().top
      }, 1000);
    } else {
        $("[id$=des]").slideUp();
        $('#quote-des').slideDown();
        setTimeout ( function () {
            $('html, body').animate({scrollTop: $('#quote-des').offset().top
             }, 1000);
        }, 410);
    }
});

$("#weather-icon").click(function () {
    if (document.querySelector('#weather-des').style.display === 'block') {
        $('#weather-des').slideUp();
        $('html, body').animate({scrollTop: $('#portfolio').offset().top
      }, 1000);
    } else {
        $("[id$=des]").slideUp();
        $('#weather-des').slideDown();
        setTimeout (function () {
            $('html, body').animate({scrollTop: $('#weather-des').offset().top
            }, 1000);
        }, 410);
    }
});

$("#wiki-icon").click(function () {
    if (document.querySelector('#wiki-des').style.display === 'block') {
        $('#wiki-des').slideUp();
        $('html, body').animate({scrollTop: $('#portfolio').offset().top
      }, 1000);
    } else {
        $("[id$=des]").slideUp();
        $('#wiki-des').slideDown();
        setTimeout (function () {
            $('html, body').animate({scrollTop: $('#wiki-des').offset().top
            }, 1000);
        }, 410);
    }
});

$("#twitch-icon").click(function () {
    if (document.querySelector('#twitch-des').style.display === 'block') {
        $('#twitch-des').slideUp();
        $('html, body').animate({scrollTop: $('#portfolio').offset().top
      }, 1000);
    } else {
        $("[id$=des]").slideUp();
        $('#twitch-des').slideDown();
        setTimeout (function () {
            $('html, body').animate({scrollTop: $('#twitch-des').offset().top
            }, 1000);
        }, 410);
    }
});

/*UP BTN*/

$(".fa-chevron-up").click(function (){
    $("[id$=des]").slideUp();
    $('html, body').animate({scrollTop: $('#portfolio').offset().top
    }, 1000);
});

/*----------------------------
ABOUT ME
----------------------------*/

/* Timeline Animation */



/* FUTURE NODE */

var jello = 0
var fnodeTrigger = 0

$('#future-node').hover(function () {
    if (jello === 0) {
        $('#future-node').addClass('infinite animated jello');
        $('#future-node').css({cursor:'pointer'});
    }
}, function () {
    $('#future-node').removeClass('infinite animated jello');
});



$('#future-node').click(function (){
    jello = 1;
    if (fnodeTrigger === 0){
    $('#future-node').animate({
        height: '500',
        width: '500',
        'border-radius':'15',
        top: '180',
        left: '-300'
    }, 1500);
    $('.node').css({display:'none'});
    $('#future-node').css({'transform':'rotate(35deg)'});
    $('#future-node').removeClass('infinite animated jello');
    $('.line').css({'border-bottom': 'none'});
    $('#timeline').addClass('animated fadeOutDown');
    setTimeout(function () {
        $('#future').removeClass('fadeOut');
        $('#future').css({'display':'block'});
        $('#future').addClass('animated fadeInUp');
        $('#timeline').css({opacity: '0'});
    }, 1500);
    fnodeTrigger = 1;
  } else {
    jello = 0;
    $('#future').removeClass('fadeInUp');
    $('#future').addClass('fadeOut');
    $('#future-node').animate({
        height: '20',
        width: '20',
        'border-radius':'50%',
        top: '0',
        left: '0',
    }, 1500);
    setTimeout(function () {
        $('#future').css({'display':'none'});
        $('#timeline').removeClass('fadeOutDown');
        $('#timeline').addClass('fadeInUp');
        $('.node').css({display:'block'});
        $('#future-node').css({'transform':'rotate(-35deg)'});
        $('.line').css({'border-bottom': '5px solid #581100'});
        $('#timeline').css({opacity: '1'});
    }, 1500);

      fnodeTrigger = 0;
  }
});

/* About me Waypoint */

$('#about-me').waypoint(function (direction){

    //description
        $('#me').css({opacity: '1'});
        $('#me').addClass('animated flipInY');

    //timeline
        $('#timeline-box').animate({
            height: '560',
            top: '0'
        }, 2000, function (){
            var historyArr = ['#weird', '#htmlcss', '#FCC', '#compliance', '#resident', '#uni', '#high', '#primary'];
            var lineArr = ['#weird-line', '#htmlcss-line', '#FCC-line', '#compliance-line', '#resident-line', '#uni-line', '#high-line', '#primary-line'];

console.log(historyArr);
console.log(lineArr);

            historyArr.forEach(function (item, index) {
                setTimeout (function () {
                  console.log($('item'));
                   $('item').addClass('animated flipInX');
                }, 400 * index);
            })
        });

    }, {
    offset: 100
});




}); //doc ready

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

/*---------NAVBAR--------*/    
    
/*$("#home-nav").click(function () {
    $('html, body').animate({scrollTop: $('#').offset().top
    }, 1000);
}); ----REMINDER-------*/
    
$("#skills-nav").click(function () {
    $('html, body').animate({scrollTop: $('#skills').offset().top
    }, 1000);
});
    
$("#portfolio-nav").click(function () {
    $('html, body').animate({scrollTop: $('#portfolio').offset().top
    }, 1000);
});
    
    
$("#about-me-nav").click(function () {
    $('html, body').animate({scrollTop: $('#about-me').offset().top
    }, 1000);
});
    
$("#contact-nav").click(function () {
    $('html, body').animate({scrollTop: $('#contact').offset().top
    }, 1000);
});
    

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
    //$(".portfolio").css({height:"auto"});
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
    
$('#primary-node').hover(function () { 
    $('#primary-node').addClass("animated pulse infinite");
    $('#primary-node').css({border: "2px solid #9c1e00", "background-color":"#fff3f1"});
    $('#primary').addClass('animated fadeInLeft');
}, function () {
    $('#primary-node').removeClass("animated pulse infinite");
    $('#primary-node').css({"background-color":"#581100", border: "none"});
    $('#primary').removeClass('animated fadeInLeft');
});
    
$('#high-node').hover(function () { 
    $('#high-node').addClass("animated pulse infinite");
    $('#high-node').css({border: "2px solid #9c1e00", "background-color":"#fff3f1"});
    $('#high').addClass('animated fadeInRight');
}, function () {
    $('#high-node').removeClass("animated pulse infinite");
    $('#high-node').css({"background-color":"#581100", border: "none"});
    $('#high').removeClass('animated fadeInRight');
});
    
$('#uni-node').hover(function () { 
    $('#uni-node').addClass("animated pulse infinite");
    $('#uni-node').css({border: "2px solid #9c1e00", "background-color":"#fff3f1"});
    $('#uni').addClass('animated fadeInLeft');
}, function () {
    $('#uni-node').removeClass("animated pulse infinite");
    $('#uni-node').css({"background-color":"#581100", border: "none"});
    $('#uni').removeClass('animated fadeInLeft');
});

$('#resident-node').hover(function () { 
    $('#resident-node').addClass("animated pulse infinite");
    $('#resident-node').css({border: "2px solid #9c1e00", "background-color":"#fff3f1"});
    $('#resident').addClass('animated fadeInRight');
}, function () {
    $('#resident-node').removeClass("animated pulse infinite");
    $('#resident-node').css({"background-color":"#581100", border: "none"});
    $('#resident').removeClass('animated fadeInRight');
});
    
$('#compliance-node').hover(function () { 
    $('#compliance-node').addClass("animated pulse infinite");
    $('#compliance-node').css({border: "2px solid #9c1e00", "background-color":"#fff3f1"});
    $('#compliance').addClass('animated fadeInLeft');
}, function () {
    $('#compliance-node').removeClass("animated pulse infinite");
    $('#compliance-node').css({"background-color":"#581100", border: "none"});
    $('#compliance').removeClass('animated fadeInLeft');
});
    
$('#htmlcss-node').hover(function () { 
    $('#htmlcss-node').addClass("animated pulse infinite");
    $('#htmlcss-node').css({border: "2px solid #9c1e00", "background-color":"#fff3f1"});
    $('#htmlcss').addClass('animated fadeInRight');
}, function () {
    $('#htmlcss-node').removeClass("animated pulse infinite");
    $('#htmlcss-node').css({"background-color":"#581100", border: "none"});
    $('#htmlcss').removeClass('animated fadeInRight');
});
    
$('#FCC-node').hover(function () { 
    $('#FCC-node').addClass("animated pulse infinite");
    $('#FCC-node').css({border: "2px solid #9c1e00", "background-color":"#fff3f1"});
    $('#FCC').addClass('animated fadeInLeft');
}, function () {
    $('#FCC-node').removeClass("animated pulse infinite");
    $('#FCC-node').css({"background-color":"#581100", border: "none"});
    $('#FCC').removeClass('animated fadeInLeft');
});
    
$('#weird-node').hover(function () { 
    $('#weird-node').addClass("animated pulse infinite");
    $('#weird-node').css({border: "2px solid #9c1e00", "background-color":"#fff3f1"});
    $('#weird').addClass('animated fadeInRight');
}, function () {
    $('#weird-node').removeClass("animated pulse infinite");
    $('#weird-node').css({"background-color":"#581100", border: "none"});
    $('#weird').removeClass('animated fadeInRight');
});
    
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
        left: '-280'
    }, 1500);
    $('.node').css({display:'none'});
    $('#future-node').css({'transform':'rotate(35deg)', cursor: 'default'});
    $('#future-node').removeClass('infinite animated jello'); 
    $('.line').css({'border-bottom': 'none'});
    setTimeout(function () {
    $('#future').addClass('animated fadeInUp');   
    $('#future').css({'display':'block'});   
    }, 1500);
    fnodeTrigger = 1;  
  } else {
    jello = 0;
    $('#future').css({'display':'none'});   
    $('#future-node').animate({
        height: '20', 
        width: '20', 
        'border-radius':'50%',
        top: '0',
        left: '0',
    }, 1500);
    setTimeout(function () {
    $('.node').css({display:'block'});
    $('#future-node').css({'transform':'rotate(-35deg)'});
    $('.line').css({'border-bottom': '5px solid #581100'});
    }, 1500);
      fnodeTrigger = 0;
  }
});

    
    
    
    
    
    
    
}); //doc ready

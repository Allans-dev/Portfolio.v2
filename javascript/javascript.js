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
}, 3000);

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


}); //doc ready

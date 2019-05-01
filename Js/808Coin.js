var bannerTimer;
$(function () {
    var partJson = {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        }
    };
    var jsonUri = "data:text/plain;base64," + window.btoa(JSON.stringify(partJson));
    particlesJS.load('teamLayout', jsonUri, function () {
        console.log('done');
    });
    $('#bannerPar').ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.03,
    });
    $('#bannerPar').ripples("play");
    var typed = new Typed("#typing", {
        typeSpeed: 50,
        backDelay: 3000,
        loop: true,
        loopCount: Infinity,
        strings: ["Secure, ^400 fast and ^400 More Bass!", "Cryptocurrency ^200 for ^100 everyone"]
    });
    $(".menu a[data-key]").each(function () {
        $(this).on("click tap", function () {
            var key = $(this).attr("data-key");
            $("html, body").animate({
                scrollTop: $("." + key).offset().top - 80
            }, 2000);
        });
    });
    $(".leftArr").on("click tap", function () {
        $('.mainTimeline').animate({
            scrollLeft: 0
        }, 3000);
    });
    $(".rightArr").on("click tap", function () {
        $('.mainTimeline').animate({
            scrollLeft: $(".timelineContainer").width()
        }, 3000);
    });
    $('.mainTimeline').animate({
        scrollLeft: $(".timelineItem[data-flag]").eq(0).offset().left - 100
    }, 100);
    calcualteRoadmap();
    autoBannerDropWater();
    $(window).on("resize", function () {
        calcualteRoadmap();
    });
})

function calcualteRoadmap() {
    var w = $(".timelineItem").eq(0).width();
    $(".timelineContainer").width(w * $(".timelineItem").length);
}

function autoBannerDropWater() {
    if (bannerTimer != null) {
        clearTimeout(bannerTimer);
        bannerTimer = null;
    }
    // Can drop water randomly
    //$('#bannerPar').ripples("drop", Math.random() * $('#bannerPar').width(), Math.random() * $('#bannerPar').height(), 20, 1);
    $('#bannerPar').ripples("drop", $('#bannerPar').width() / 2, $('#bannerPar').height() * 0.4, 20, 1);
    bannerTimer = setTimeout("autoBannerDropWater();", 2000);
}

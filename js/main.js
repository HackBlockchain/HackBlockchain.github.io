(function($) {
    "use strict";

    $(document).ready(function() {



        // Page Spinner

        window.onload = function() {
            document.getElementById('spinner').style.display = 'none';
        }
       
	   // Menu Hover and drop down effect  
	   	


	  $(".dropdown-start").on({
           mouseenter: function() {  
           $(this).find('.dropdown-menu-start').slideDown(800); //.fadeIn(250)
        },
           mouseleave: function() {
           $(this).find('.dropdown-menu-start').slideUp(800); //.fadeOut(205)
         }
       }); 
	   
	   $(".dropdown-submenu").on({
           mouseenter: function() {  
           $(this).find('.dropdown-sub-main').slideDown(800); //.fadeIn(250)
       },
           mouseleave: function() {
           $(this).find('.dropdown-sub-main').slideUp(800); //.fadeOut(205)
		   }
       }); 
	  
		
	// Particleground js
   
         $('#particles').particleground({
            dotColor: '#5cbdaa',
            lineColor: '#5cbdaa'
         });
        $('.intro').css({
           'margin-top': -($('.intro').height() / 2)
         });
		 
		 
		  // Slider screen Height fix

        setInterval(function() {
                var widnowHeight = $(window).height();
                var sliderHeight = $("#slider").height();
                var padTop = widnowHeight - sliderHeight;
                $("#slider").css({
                    'padding-top': Math.round(padTop / 2) + 'px',
                    'padding-bottom': Math.round(padTop / 2) + 'px'
                });
            }, 10);

      

        // Bootstrap menu fix

        $(".navbar-toggle").on("click", function() {   
            $(".header").css('background', '#fff');
            $(".navbar-default .navbar-brand").css('color', '#999'); 
	     	$(".navbar-default .navbar-nav > .active > a").css('color', '#F73C56');  

        });

      // jQuery sticky menu
        $(".header").sticky({
            topSpacing: 0  
        });

        // jQuery smooth scroll
        $('.navbar-default .navbar-nav > li > a, .d-btn-click').on('click', function(event) {
			$(".navbar-collapse").removeClass('in');
            var $anchor = $(this);
            var headerH = '70';
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"  
            }, 1200, 'easeInOutExpo');

            event.preventDefault();
        });


        // jQuery scroll psy
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 95
        });


        // feature project
        $('.latest_project').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: false,
            pagination: false,
            responsive: {
                0: {
                    items: 1
                },

                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        });

        $("area[data-gal^='prettyPhoto']").prettyPhoto();

        $(".latest_project:first a[data-gal^='prettyPhoto']").prettyPhoto({

            animation_speed: 'normal',

            slideshow: 3000,
            autoplay_slideshow: false

        });




        // jQuery counter
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });



        // Portfolio Filtering 

        $('#og-grid').mixItUp(); // Portfolio filter

        Grid.init(); //Portfolio Grid Expand




        // bootstrap testomonial slider
        $('#quote-carousel').carousel({

            interval: 0

        });

       // Team carousel

        $('.team-slider').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            autoplay: false,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            pagination: true,
            navigation: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1

                },
                600: {
                    items: 2

                },
                1000: {
                    items: 4

                }
            }
        });

        // jQuery Twitte master

        $('.tweet').twittie({
            username: 'ipe6969',
            list: 'bsl-staff',
            dateFormat: '%b. %d, %Y',
            template: '{{tweet}} <div class="date">{{date}}</div>',
            count: 1,
            loadingText: 'Loading!'
        });


        // Blog caption

    $(".note,.post-thumb").on({
            mouseenter: function() {
                $(this).find('.caption-1').slideDown(200); //.fadeIn(250)
				$(this).find('.caption-2').slideDown(200); //.fadeIn(250)
				$(this).find('.caption-3').slideDown(200); //.fadeIn(250)
            },
            mouseleave: function() {
                $(this).find('.caption-1').slideUp(200); //.fadeOut(205)
				$(this).find('.caption-2').slideUp(200); //.fadeOut(205)
				$(this).find('.caption-3').slideUp(200); //.fadeOut(205)
            }
        }); 

        // blog post slider
        $('#carousel-example-generic').carousel({

            interval: 4000

        });


        // Blog carousel

        $('.blog-slider').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            autoplay: false,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            pagination: true,
            navigation: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1

                },
                600: {
                    items: 2

                },
                1000: {
                    items: 3

                }
            }
        }); 
		
		
        // client carousel
        $('.client-list').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: false,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        }); 


        // marketplace carousel
        $('.memberLst').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            autoplay: true,
            autoplayTimeout: 2400,
            autoplayHoverPause: true,
            pagination: true,
            navigation: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2

                },
                600: {
                    items: 3

                },
                1000: {
                    items: 4

                }
            }
        });


        // Mail chimp


       $('#mc-form').ajaxChimp({
            url: "https://hashtheme.us12.list-manage.com/subscribe/post?u=37a62f2c85299c0756f6b492d&amp;id=edbe78d130"
        });




        //  Contact Form Validating


        $("#contact-submit").on("click", function(e) {

            //stop the form from being submitted
            e.preventDefault();

            /* declare the variables, var error is the variable that we use on the end
            to determine if there was an error or not */
            var error = false;
            var name = $('#name').val();
            var email = $('#email').val();
            var subject = $('#subject').val();
            var message = $('#message').val();

            /* in the next section we do the checking by using VARIABLE.length
            where VARIABLE is the variable we are checking (like name, email),
            length is a JavaScript function to get the number of characters.
            And as you can see if the num of characters is 0 we set the error
            variable to true and show the name_error div with the fadeIn effect. 
            if it's not 0 then we fadeOut the div( that's if the div is shown and
            the error is fixed it fadesOut. 
		
            The only difference from these checks is the email checking, we have
            email.indexOf('@') which checks if there is @ in the email input field.
            This JavaScript function will return -1 if no occurrence have been found.*/
            if (name.length == 0) {
                var error = true;
                $('#name').css("border-color", "#D8000C");
            } else {
                $('#name').css("border-color", "#666");
            }
            if (email.length == 0 || email.indexOf('@') == '-1') {
                var error = true;
                $('#email').css("border-color", "#D8000C");
            } else {
                $('#email').css("border-color", "#666");
            }
            if (subject.length == 0) {
                var error = true;
                $('#subject').css("border-color", "#D8000C");
            } else {
                $('#subject').css("border-color", "#666");
            }
            if (message.length == 0) {
                var error = true;
                $('#message').css("border-color", "#D8000C");
            } else {
                $('#message').css("border-color", "#666");
            }

            //now when the validation is done we check if the error variable is false (no errors)
            if (error == false) {
                //disable the submit button to avoid spamming
                //and change the button text to Sending...
                $('#contact-submit').attr({
                    'disabled': 'false',
                    'value': 'Sending...'
                });

                /* using the jquery's post(ajax) function and a lifesaver
                function serialize() which gets all the data from the form
                we submit it to mail.php */
                $.post("mail.php", $("#contact-form").serialize(), function(result) {
                    //and after the ajax request ends we check the text returned
                    if (result == 'sent') {
                        //if the mail is sent remove the submit paragraph
                        $('#cf-submit').remove();
                        //and show the mail success div with fadeIn
                        $('#mail-success').fadeIn(500);
                    } else {
                        //show the mail failed div
                        $('#mail-fail').fadeIn(500);
                        //re enable the submit button by removing attribute disabled and change the text back to Send The Message
                        $('#contact-submit').removeAttr('disabled').attr('value', 'Send The Message');
                    }
                });
            }
        });


        // GOOGLE MAP

        google.maps.event.addDomListener(window, 'load', init);

        function init() {
            var mapOptions = {
                scrollwheel: false,
                zoom: 16,

                center: new google.maps.LatLng(29.424122, -98.493629), // New York
                styles: [{
                    featureType: "landscape",
                    stylers: [{
                        saturation: -100
                    }, {
                        lightness: 65
                    }, {
                        visibility: "on"
                    }]
                }, {
                    featureType: "poi",
                    stylers: [{
                        saturation: -100
                    }, {
                        lightness: 51
                    }, {
                        visibility: "simplified"
                    }]
                }, {
                    featureType: "road.highway",
                    stylers: [{
                        saturation: -100
                    }, {
                        visibility: "simplified"
                    }]
                }, {
                    featureType: "road.arterial",
                    stylers: [{
                        saturation: -100
                    }, {
                        lightness: 30
                    }, {
                        visibility: "on"
                    }]
                }, {
                    featureType: "road.local",
                    stylers: [{
                        saturation: -100
                    }, {
                        lightness: 40
                    }, {
                        visibility: "on"
                    }]
                }, {
                    featureType: "transit",
                    stylers: [{
                        saturation: -100
                    }, {
                        visibility: "simplified"
                    }]
                }, {
                    featureType: "administrative.province",
                    stylers: [{
                        visibility: "off"
                    }] /**/
                }, {
                    featureType: "administrative.locality",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "administrative.neighborhood",
                    stylers: [{
                        visibility: "on"
                    }] /**/
                }, {
                    featureType: "water",
                    elementType: "labels",
                    stylers: [{
                        visibility: "on"
                    }, {
                        lightness: -25
                    }, {
                        saturation: -100
                    }]
                }, {
                    featureType: "water",
                    elementType: "geometry",
                    stylers: [{
                        hue: "#ffff00"
                    }, {
                        lightness: -25
                    }, {
                        saturation: -97
                    }]
                }]
            };
            var contentString = '<div id="mapcontent">' + '<p>yes! You are in right place</p></div>';
            var infowindow = new google.maps.InfoWindow({
                maxWidth: 320,
                content: contentString
            });
            var mapElement = document.getElementById('map');
            var map = new google.maps.Map(mapElement, mapOptions);
            var image = new google.maps.MarkerImage('img/bg/6.png', null, null, null, new google.maps.Size(60, 71))
            var myLatLng = new google.maps.LatLng(29.424122, -98.493629);


            var marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                icon: image,
                title: 'Theme Sourche'
            });
            google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map, marker);
            });
        }


        //portfolio slider

        $("#transition-timer-carousel").on("slide.bs.carousel", function(event) {
            //The animate class gets removed so that it jumps straight back to 0%
            $(".transition-timer-carousel-progress-bar", this)
                .removeClass("animate").css("width", "0%");
        }).on("slid.bs.carousel", function(event) {
            //The slide transition finished, so re-add the animate class so that
            //the timer bar takes time to fill up
            $(".transition-timer-carousel-progress-bar", this)
                .addClass("animate").css("width", "100%");
        });
		


        //Kick off the initial slide animation when the document is ready
        $(".transition-timer-carousel-progress-bar", "#transition-timer-carousel")
            .css("width", "100%");
			
			
			 
        //Parallax js

        parallaxInit();

        function parallaxInit() {

            $('.slider-parallax').parallax("50%", 0.0);
            $('.fact-parallax').parallax("30%", 0.0);
            $('.showcase-parallax').parallax("30%", 0.0);
            $('.testimonial-parallax').parallax("30%", 0.0);
            $('.twitter-parallax').parallax("30%", 0.0);


            /*add as necessary*/
        }



    });




    $(window).scroll(function() {

        if ($(window).scrollTop() > 400) {
            $("#scrollUp").fadeIn(200);
        } else {
            $("#scrollUp").fadeOut(200);
        }


        $("#scrollUp").on("click", function() {
            $('html, body').stop().animate({
                scrollTop: 0
            }, 1500, 'easeInOutExpo');

        });
		 


    });



})(jQuery);
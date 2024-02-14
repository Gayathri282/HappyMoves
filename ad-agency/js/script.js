jQuery(window).on("load", function () {
    "use strict";

    /*  ===================================
     Loading Timeout
     ====================================== */
    $("#loader-fade").fadeOut(800);
});

jQuery(function ($) {
    "use strict";

    var $window = $(window);
    var windowsize = $(window).width();

    /* ===================================
       Nav Scroll
       ====================================== */

    $(".scroll").on("click", function(event){
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top - 40}, 1100);
    });
    /* ====================================
       Nav Fixed On Scroll
       ======================================= */

    $(window).on('scroll', function () {
        if ($(this).scrollTop() >= 80) { // Set position from top to add class
            $('header').addClass('header-appear');
        }
        else {
            $('header').removeClass('header-appear');
        }
    });
    /*bottom menu fix*/
    if ($("nav.navbar").hasClass("bottom-nav")) {
        var navHeight = $(".bottom-nav").offset().top;
        $(window).on("scroll", function () {
            if ($window.scrollTop() > navHeight) {
                $('header').addClass('header-appear');
            } else {
                $('header').removeClass('header-appear');
            }
        });
    }

    /* ===================================
       Side Menu
       ====================================== */

    if ($(".sidemenu_toggle").length) {
        $(".sidemenu_toggle").on("click", function () {
            $(".pushwrap").toggleClass("active");
            $(".side-menu").addClass("side-menu-active"), $("#close_side_menu").fadeIn(700)
        }), $("#close_side_menu").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"), $(this).fadeOut(200), $(".pushwrap").removeClass("active")
        }), $(".side-nav .navbar-nav .nav-link").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active")
        }), $("#btn_sideNavClose").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active")
        })
    }
    /* =====================================
       Wow
       ======================================== */

    if ($(window).width() > 767) {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        new WOW().init();
    }

    /* ===================================
        Animated Cursor
       ====================================== */

    function animatedCursor() {

        if ($("#animated-cursor").length) {

            var e = {x: 0, y: 0}, t = {x: 0, y: 0}, n = .25, o = !1, a =    document.getElementById("cursor"),
                i = document.getElementById("cursor-loader");
            TweenLite.set(a, {xPercent: -50, yPercent: -50}), document.addEventListener("mousemove", function (t) {
                var n = window.pageYOffset || document.documentElement.scrollTop;
                e.x = t.pageX, e.y = t.pageY - n
            }), TweenLite.ticker.addEventListener("tick", function () {
                o || (t.x += (e.x - t.x) * n, t.y += (e.y - t.y) * n, TweenLite.set(a, {x: t.x, y: t.y}))
            }),
                $(".animated-wrap").mouseenter(function (e) {
                    TweenMax.to(this, .3, {scale: 2}), TweenMax.to(a, .3, {
                        scale: 2,
                        borderWidth: "1px",
                        opacity: .2
                    }), TweenMax.to(i, .3, {
                        scale: 2,
                        borderWidth: "1px",
                        top: 1,
                        left: 1
                    }), TweenMax.to($(this).children(), .3, {scale: .5}), o = !0
                }),
                $(".animated-wrap").mouseleave(function (e) {
                    TweenMax.to(this, .3, {scale: 1}), TweenMax.to(a, .3, {
                        scale: 1,
                        borderWidth: "2px",
                        opacity: 1
                    }), TweenMax.to(i, .3, {
                        scale: 1,
                        borderWidth: "2px",
                        top: 0,
                        left: 0
                    }), TweenMax.to($(this).children(), .3, {scale: 1, x: 0, y: 0}), o = !1
                }),

                $(".testimonial-images .animated-wrap").mouseenter(function (e) {
                    TweenMax.to(this, .3, {scale: 2}), TweenMax.to(a, .3, {
                        scale: 2,
                        borderWidth: "1px",
                        opacity: .2
                    }), TweenMax.to(i, .3, {
                        scale: 2,
                        borderWidth: "1px",
                        top: 1,
                        left: 1
                    }), TweenMax.to($(this).children(), .3, {scale: .5}), o = !0
                }),

                $(".animated-wrap").mousemove(function (e) {
                    var n, o, i, l, r, d, c, s, p, h, x, u, w, f, m;
                    n = e, o = 2, i = this.getBoundingClientRect(), l = n.pageX - i.left, r = n.pageY - i.top, d = window.pageYOffset || document.documentElement.scrollTop, t.x = i.left + i.width / 2 + (l - i.width / 2) / o, t.y = i.top + i.height / 2 + (r - i.height / 2 - d) / o, TweenMax.to(a, .3, {
                        x: t.x,
                        y: t.y
                    }), s = e, p = c = this, h = c.querySelector(".animated-element"), x = 20, u = p.getBoundingClientRect(), w = s.pageX - u.left, f = s.pageY - u.top, m = window.pageYOffset || document.documentElement.scrollTop, TweenMax.to(h, .3, {
                        x: (w - u.width / 2) / u.width * x,
                        y: (f - u.height / 2 - m) / u.height * x,
                        ease: Power2.easeOut
                    })
                }),
                $(".hide-cursor,.btn,.tp-bullets").mouseenter(function (e) {
                    TweenMax.to("#cursor", .2, {borderWidth: "1px", scale: 2, opacity: 0})
                }), $(".hide-cursor,.btn,.tp-bullets").mouseleave(function (e) {
                TweenMax.to("#cursor", .3, {borderWidth: "2px", scale: 1, opacity: 1})
            }),$(".link").mouseenter(function (e) {
                TweenMax.to("#cursor", .2, {
                    borderWidth: "0px",
                    scale: 3,
                    backgroundColor: "rgba(255,255,255,0.47)",
                    opacity: .15
                })
            }), $(".link").mouseleave(function (e) {
                TweenMax.to("#cursor", .3, {
                    borderWidth: "2px",
                    scale: 1,
                    backgroundColor: "rgba(255, 255, 255, 0)",
                    opacity: 1
                })
            })

        }

    }

    if ($(window).width() > 991) {
        setTimeout(function () {
            animatedCursor();
        }, 1000);
    }
    /* ===================================
       Features Section Number Scroller
       ====================================== */

    $(".stats").each(function () {
        $('.numscroller').appear(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 5000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    });


    /* ===================================
       Parallax
       ====================================== */

    if (windowsize > 992) {
        $(".parallaxie").parallaxie({
            speed: 0.4,
            offset: 0
        });
    }

    /* ===================================
       Cube Portfolio
       ====================================== */

    (function ($, window, document, undefined) {

        // init cubeportfolio
        $('#js-grid-mosaic-flat').cubeportfolio({
            filters: '#js-filters-mosaic-flat',
            layoutMode: 'mosaic',
            defaultFilter: '*',
            animationType: 'scaleSides',
            gapHorizontal: -1,
            gapVertical: -1,
            gridAdjustment: 'responsive',
            caption: 'zoom',
            displayType: 'fadeIn',
            displayTypeSpeed: 100,
            sortByDimension: true,
            mediaQueries: [{
                width: 1500,
                cols: 4
            },{
                width: 1100,
                cols: 4
            }, {
                width: 768,
                cols: 2
            }, {
                width: 480,
                cols: 1
            }, {
                width: 320,
                cols: 1
            }],
            // lightbox
            lightboxDelegate: '.cbp-lightbox',
            lightboxGallery: true,
            lightboxTitleSrc: 'data-title',
            lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

            plugins: {
                loadMore: {
                    element: '#js-loadMore-mosaic-flat',
                    action: 'click',
                    loadItems: 3,
                }
            },
        })

        /*Blog Masonry*/
        $("#blog-masonry").cubeportfolio({
            layoutMode: 'grid',
            defaultFilter: '*',
            animationType: "scaleSides",
            gapHorizontal: 30,
            gapVertical: 30,
            gridAdjustment: "responsive",
            mediaQueries: [{
                width: 1500,
                cols: 3
            }, {
                width: 1100,
                cols: 3
            }, {
                width: 992,
                cols: 2
            }, {
                width: 600,
                cols: 2
            }, {
                width: 480,
                cols: 1
            }, {
                width: 320,
                cols: 1
            }]
        });
        /*Portfolio Three*/
        $('#js-grid-mosaic').cubeportfolio({
            filters: '.filtering',
            layoutMode: 'grid',
            sortByDimension: true,
            mediaQueries: [{
                width: 1500,
                cols: 2
            },{
                width: 1100,
                cols: 2
            }, {
                width: 768,
                cols: 2
            }, {
                width: 600,
                cols: 2
            }, {
                width: 320,
                cols: 1
            }],
            defaultFilter: '*',
            animationType: 'fadeOut',
            gapHorizontal: 20,
            gapVertical: 60,
            gridAdjustment: 'responsive',
            caption: 'zoom',

            // lightbox
            lightboxDelegate: '.cbp-lightbox',
            lightboxGallery: true,
            lightboxTitleSrc: 'data-title',
            lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

            plugins: {
                loadMore: {
                    element: "#js-loadMore-lightbox-gallery",
                    action: "click",
                    loadItems: 5,
                }
            }

        })

    })(jQuery, window, document);


    /* ===================================
       Fancy Box
       ====================================== */
    $('[data-fancybox]').fancybox({
        protect: true,
        animationEffect: "fade",
        hash: null,
    });

    /* ===================================
       Rotating Text
       ====================================== */

    $("#js-rotating").Morphext({
        // The [in] animation type. Refer to Animate.css for a list of available animations.
        animation: "flipInX",
        // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
        separator: ",",
        // The delay between the changing of each phrase in milliseconds.
        speed: 3000,
        complete: function () {
            // Called after the entrance animation is executed.
        }
    });

    /* ===================================
       Owl Carousel
       ====================================== */

    /* Testimonial */
    $('.testimonial-two').owlCarousel({
        items:1,
        loop: true,
        smartSpeed: 500,
        responsiveClass: true,
        nav: false,
        dots: true,
        dotsContainer: ".owl-thumbs",
        autoplay: false,
        autoplayHoverPause: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1,
                margin: 30,
            },
            480: {
                items: 1,
                margin: 30,
            },
            992: {
                items: 1,
                margin: 30,
            }
        }
    });

    /* Blog */
    $(".owl-split").owlCarousel({
        items: 1,
        margin: 0,
        dots: false,
        nav: false,
        loop: true,
        autoplay: true,
        smartSpeed:500,
        navSpeed: true,
        autoplayHoverPause:true,
        responsiveClass:true
    });

    /* ===================================
       Revolution Slider
       ====================================== */

    /*Design Studio*/
    $("#rev_slider_8_1").show().revolution({
        sliderType:"standard",
        jsFileLocation:"//localhost/revslider/revslider/public/assets/js/",
        sliderLayout:"fullscreen",
        dottedOverlay:"none",
        delay:9000,
        navigation: {
            keyboardNavigation:"off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation:"off",
            mouseScrollReverse:"default",
            onHoverStop:"on",
            touch:{
                touchenabled:"on",
                touchOnDesktop:"off",
                swipe_threshold: 75,
                swipe_min_touches: 50,
                swipe_direction: "horizontal",
                drag_block_vertical: false
            }
            ,
            arrows: {
                style:"uranus",
                enable:false,
                hide_onmobile:true,
                hide_under:600,
                hide_onleave:true,
                hide_delay:200,
                hide_delay_mobile:1200,
                tmp:'<div class="hvr-pulse"></div>',
                left: {
                    h_align:"left",
                    v_align:"center",
                    h_offset:30,
                    v_offset:0
                },
                right: {
                    h_align:"right",
                    v_align:"center",
                    h_offset:30,
                    v_offset:0
                }
            }
            ,
            bullets: {
                enable:false,
                hide_onmobile:true,
                hide_under:600,
                style:"hephaistos",
                hide_onleave:true,
                hide_delay:200,
                hide_delay_mobile:1200,
                direction:"horizontal",
                h_align:"center",
                v_align:"bottom",
                h_offset:0,
                v_offset:30,
                space:5,
                tmp:''
            }
        },
        responsiveLevels:[1240,1024,778,480],
        visibilityLevels:[1240,1024,778,480],
        gridwidth:[1240,1024,778,480],
        gridheight:[868,600,500,400],
        lazyType:"smart",
        parallax: {
            type:"mouse",
            origo:"slidercenter",
            speed:2000,
            speedbg:0,
            speedls:0,
            levels:[2,3,4,5,6,7,12,16,10,50,10,11,12,13,14,55],
        },
        shadow:0,
        spinner:"off",
        stopLoop:"off",
        stopAfterLoops:-1,
        stopAtSlide:-1,
        shuffle:"off",
        autoHeight:"off",
        fullScreenAutoWidth:"off",
        fullScreenAlignForce:"off",
        fullScreenOffsetContainer: "",
        fullScreenOffset: "",
        hideThumbsOnMobile:"off",
        hideSliderAtLimit:0,
        hideCaptionAtLimit:0,
        hideAllCaptionAtLilmit:0,
        debugMode:false,
        fallbacks: {
            simplifyAll:"off",
            nextSlideOnWindowFocus:"off",
            disableFocusListener:false,
        }
    });
});

// // JavaScript to handle click events and update content
// document.addEventListener("DOMContentLoaded", function() {
//     var rareBox = document.querySelector('.rare-box'); // Get the rare-box element
//     var aboutImg = document.querySelector('.about-img-small'); // Get the image element

//     // Select the first list item by default
//     var defaultListItem = document.querySelector('.pb-5 li:first-child');
//     defaultListItem.classList.add('selected');
//     updateContent(defaultListItem);

//     // Add event listeners to list items
//     document.querySelectorAll('.pb-5 li').forEach(function(item) {
//         item.addEventListener('click', function(e) {
//             e.preventDefault()
//             // Remove "selected" class from all list items
//             document.querySelectorAll('.pb-5 li').forEach(function(li) {
//                 li.classList.remove('selected');
//             });

//             // Add "selected" class to clicked list item
//             item.classList.add('selected');
            
//             // Update content based on clicked item
//             updateContent(item);
//         });
//     });

//     // Function to update content based on clicked item
//     function updateContent(clickedItem) {
//         // Determine which list item was clicked
//         var featureId = clickedItem.id;

//         // Update rare-box content and image based on clicked item
//         if (featureId === 'feature1') {
//             rareBox.textContent = "Text for Feature 1";
//             aboutImg.src = "path/to/image1.jpg";
//         } else if (featureId === 'feature2') {
//             rareBox.textContent = "Text for Feature 2";
//             aboutImg.src = "path/to/image2.jpg";
//         } else if (featureId === 'feature3') {
//             rareBox.textContent = "Text for Feature 3";
//             aboutImg.src = "path/to/image3.jpg";
//         } else if (featureId === 'feature4') {
//             rareBox.textContent = "Text for Feature 4";
//             aboutImg.src = "path/to/image4.jpg";
//         }
//     }
// });
// document.addEventListener("DOMContentLoaded", function() {
//     // Descriptions for each feature
//     var descriptions = {
//         "feature1": "Description for Feature 1",
//         "feature2": "Description for Feature 2",
//         "feature3": "Description for Feature 3",
//         "feature4": "Description for Feature 4"
//     };

//     // Add event listeners to all feature boxes
//     document.querySelectorAll('.feature-box').forEach(function(item) {
//         item.addEventListener('click', function() {
//             var description = this.querySelector('.description');
//             var image = this.querySelector('.feature-image');

//              // Toggle visibility of description and image
//              if (description.style.display === 'none' || description.innerHTML === '') {
//                 description.style.display = 'block';
//                 image.style.display = 'block';
//             } else {
//                 description.style.display = 'none';
//                 image.style.display = 'none';
//             }
//         });
//     });
// });


// JavaScript for team section

document.addEventListener("DOMContentLoaded", function() {
    const teamMembers = document.querySelectorAll(".team-member");
    teamMembers.forEach(function(member) {
        const video = member.querySelector(".team-video");
        member.addEventListener("mouseenter", function() {
            video.play();
        });
        member.addEventListener("mouseleave", function() {
            video.pause();
            video.currentTime = 0;
        });
    });
});


//JAvascript for therapy focus
document.addEventListener("DOMContentLoaded", function() {
    // Add click event listener to each team member
    var teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach(function(member, index) {
        member.addEventListener('mouseenter', function(event) {
            // Hide all team descriptions
            var allDescriptions = document.querySelectorAll('.team-description');
            allDescriptions.forEach(function(description) {
                description.style.display = 'none';
            });
            // Show the selected team description
            var selectedDescription = document.querySelector('#selected-item-description');
            selectedDescription.style.display = 'block';
            // Change the text of the paragraph based on the clicked item
            var selectedItemText = document.querySelector('#selected-item-text');
            switch(index) {
                case 0:
                    selectedItemText.textContent = "Our VR technology offers engaging hand therapy sessions to promote dexterity, coordination, and fine motor skills. Patients can enjoy interactive games and exercises designed to facilitate recovery from hand injuries, arthritis, or neurological conditions.";
                    break;
                case 1:
                    selectedItemText.textContent = "Happy Moves goes beyond physical rehabilitation to address cognitive functions such as memory, attention, and problem-solving. Our VR platform offers stimulating cognitive exercises and activities to support brain health and overall well-being.";
                    break;
                case 2:
                    selectedItemText.textContent = "Our virtual reality platform offers targeted exercises and therapies designed to improve neck mobility, flexibility, and strength. With personalised programs and immersive experiences, patients can regain comfort and function in their daily activities.";
                    break;
                case 3:
                    selectedItemText.textContent = "Happy Moves provides comprehensive shoulder rehabilitation programs aimed at enhancing range of motion, stability, and strength. Through interactive VR exercises, users can effectively recover from injuries, surgeries, or chronic conditions affecting the shoulder.";
                    break;
                default:
                    selectedItemText.textContent = " ";
            }
            event.stopPropagation(); // Prevent the click event from bubbling up
        });
    });

    // Add click event listener to the document to hide text when anything apart from the li item is clicked
    document.addEventListener('click', function(event) {
        var clickedElement = event.target;
        // Check if the clicked element is not an li item or its parent is not an li item
        if (clickedElement.tagName !== 'LI' && clickedElement.parentElement.tagName !== 'LI') {
            var selectedDescription = document.querySelector('#selected-item-description');
            selectedDescription.style.display = 'none';
        }
    });
});

//for click 
document.addEventListener("DOMContentLoaded", function() {
    // Add click event listener to each team member
    var teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach(function(member, index) {
        member.addEventListener('click', function(event) {
            // Hide all team descriptions
            var allDescriptions = document.querySelectorAll('.team-description');
            allDescriptions.forEach(function(description) {
                description.style.display = 'none';
            });
            // Show the selected team description
            var selectedDescription = document.querySelector('#selected-item-description');
            selectedDescription.style.display = 'block';
            // Change the text of the paragraph based on the clicked item
            var selectedItemText = document.querySelector('#selected-item-text');
            switch(index) {
                case 0:
                    selectedItemText.textContent = "Our VR technology offers engaging hand therapy sessions to promote dexterity, coordination, and fine motor skills. Patients can enjoy interactive games and exercises designed to facilitate recovery from hand injuries, arthritis, or neurological conditions.";
                    break;
                case 1:
                    selectedItemText.textContent = "Happy Moves goes beyond physical rehabilitation to address cognitive functions such as memory, attention, and problem-solving. Our VR platform offers stimulating cognitive exercises and activities to support brain health and overall well-being.";
                    break;
                case 2:
                    selectedItemText.textContent = "Our virtual reality platform offers targeted exercises and therapies designed to improve neck mobility, flexibility, and strength. With personalised programs and immersive experiences, patients can regain comfort and function in their daily activities.";
                    break;
                case 3:
                    selectedItemText.textContent = "Happy Moves provides comprehensive shoulder rehabilitation programs aimed at enhancing range of motion, stability, and strength. Through interactive VR exercises, users can effectively recover from injuries, surgeries, or chronic conditions affecting the shoulder.";
                    break;
                default:
                    selectedItemText.textContent = " ";
            }
            event.stopPropagation(); // Prevent the click event from bubbling up
        });
    });

    // Add click event listener to the document to hide text when anything apart from the li item is clicked
    document.addEventListener('click', function(event) {
        var clickedElement = event.target;
        // Check if the clicked element is not an li item or its parent is not an li item
        if (clickedElement.tagName !== 'LI' && clickedElement.parentElement.tagName !== 'LI') {
            var selectedDescription = document.querySelector('#selected-item-description');
            selectedDescription.style.display = 'none';
        }
    });
});



  

 //Javascript for dialer
 function dialNumber() {
    var phoneNumber = document.getElementById('dialButton').innerText;
    window.location.href = 'tel:' + phoneNumber;
}
//JAvascript for reloading page while clicking the logo
// function reloadPage() {
//     location.reload();
// }

let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 5000)
function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})

// Add event listener for when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select the interactive element
    const interBubble = document.querySelector('.interactive');
    
    // Initialize variables for current and target positions
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    // Define the move function to animate the element
    function move() {
        // Update current position based on target position
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        // Apply the new position to the element's style
        interBubble.style.transform = 'translate(' + Math.round(curX) + 'px, ' + Math.round(curY) + 'px)';
        // Call move function recursively for smooth animation
        requestAnimationFrame(move);
    }

    // Add event listener for mouse movement
    window.addEventListener('mousemove', function(event) {
        // Update target position based on mouse coordinates
        tgX = event.clientX;
        tgY = event.clientY;
    });
    window.addEventListener('touchmove', function(event) {
        // Update target position based on mouse coordinates
        tgX = event.clientX;
        tgY = event.clientY;
    });

    // Call the move function to start the animation
    move();
});

//Js rotating
const rotatingText = document.querySelector('.js-rotating p');
const sentences = ['Make rehabilitation efficient', 'Make recovery entertaining'];
let index = 0;

// Hide the text initially
rotatingText.style.opacity = '0';

function rotateSentence() {
    rotatingText.textContent = sentences[index];
    index = (index + 1) % sentences.length;

    // Add a class to show the text with the transition
    rotatingText.classList.add('show');
    setTimeout(() => {
        rotatingText.classList.remove('show');
    }, 1000);
}

// Set initial delay before starting the rotation
setTimeout(() => {
    // Show the text after the initial delay
    rotatingText.style.opacity = '1';
    
    // Set interval for rotating the sentences every 3 seconds (adjust as needed)
    setInterval(() => {
        // Call rotateSentence to rotate the sentences
        rotateSentence();
    }, 4000);
}, 800); // Adjust the delay as needed



//EmaailJS
const serviceId='service_hdxg4xc'
const templateId='template_0qhoaej'
function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      contact:document.getElementById('contact').value,
      organization:document.getElementById('organization').value,
      subject:document.getElementById('subject').value,
      message: document.getElementById("message").value,
    };
  
   
  
      emailjs.send(serviceId, templateId, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          document.getElementById("subject").value = "";
          document.getElementById("contact").value = "";
          document.getElementById("organization").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }
  const contactForm=document.getElementById('contactForm')
  contactForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    sendMail();
  })
  

/* BEGIN: preload */
var preloadTimeout = 6000;
var preloadBodyClass = 'no-loader';
var preloadActiveBodyClass = 'preload-active';

var preloadHide = function() {
    $('body').addClass(preloadBodyClass);
    $('body').removeClass(preloadActiveBodyClass);
}

setTimeout(function() {
    preloadHide()
}, preloadTimeout);

$(document).ready(function() {
    preloadHide();
})
/* END: preload */

/* BEGIN: Toggle Button */
var themeSwitcherEl = '#theme-option-switcher input';
var darkThemeClass = 'dark-theme';

$(document).ready(function() {
    $().button('toggle');

    if(window.matchMedia("(prefers-color-scheme: dark)").matches){
        $('body').addClass(darkThemeClass);
        $('#darkToggle').parent().addClass('active').siblings().removeClass('active')
    }

    $(themeSwitcherEl).on('change', function() {
        var target = $('body');
        var themeMode = $(this).val();

        if (themeMode == 'dark') {
            target.addClass(darkThemeClass);
        } else if (themeMode == 'light') {
            target.removeClass(darkThemeClass);
        }
    })
})
/* END: Toggle Button */

/* BEGIN: Range Slider */
var rangeSliderRating = function(max) {
    var html = '<i class="fa fa-star text-warning"></i>';
    var rate = [];

    for (i = 1; i <= max; i++) {
        var buffer = '';
        for (v = 1; v <= i; v++) {
            buffer += html;
        }
        rate.push(buffer);
    }

    return rate;
}

var rangeSliderConfig = [{
        el: '.price-range',
        config: {
            skin: 'flat',
            type: "double",
            grid: false,
            step: 10,
            min: 100,
            max: 2000,
            from: 300,
            to: 1000,
            prefix: '$ ',
            prettify_enabled: true,
            prettify_separator: '.'
        }
    },
    {
        el: '.rating-slider',
        config: {
            grid: false,
            step: 1,
            min: 1,
            max: 5,
            values: rangeSliderRating(5),
            hide_min_max: true
        }
    },
]

$(document).ready(function() {
    rangeSliderConfig.forEach(function(arr) {
        $(arr.el).ionRangeSlider(arr.config);
    });
})
/* END: Range Slider */

/* BEGIN: Carousel */
var slickConfig = [{
        el: '.blog-carousel1',
        config: {
            rtl: false,
            adaptiveHeight: true,
            autoplay: true,
            arrows: false,
            dots: false,
            slidesToShow: 1,
            responsive: [{
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        }
    },
    {
        el: '.blog-carousel2',
        config: {
            rtl: false,
            adaptiveHeight: true,
            infinite: true,
            autoplay: true,
            arrows: false,
            dots: false,
            slidesToShow: 4,
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        }
    },
    {
        el: '.blog-carousel3',
        config: {
            rtl: false,
            adaptiveHeight: true,
            autoplay: true,
            arrows: true,
            dots: true
        }
    },
    {
        el: '.blog-carousel4',
        config: {
            rtl: false,
            adaptiveHeight: true,
            infinite: true,
            autoplay: true,
            arrows: false,
            dots: false,
            slidesToShow: 3,
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        }
    },
    {
        el: '.product-carousel1',
        config: {
            rtl: false,
            adaptiveHeight: true,
            autoplay: false,
            arrows: true,
            dots: false,
            prevArrow: '<button type="button" class="slick-prev-style-3 mr-3 mb-2"><i class="fa fa-angle-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next-style-3 mr-3 mb-2"><i class="fa fa-angle-right"></i></button>'
        }
    },
    {
        el: '.product-carousel2',
        config: {
            rtl: false,
            adaptiveHeight: true,
            autoplay: true,
            arrows: false,
            dots: false,
            slidesToShow: 1,
        }
    },
    {
        el: '.product-carousel3',
        config: {
            rtl: false,
            adaptiveHeight: true,
            autoplay: true,
            arrows: false,
            dots: false,
            slidesToShow: 4,
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2,
                    }
                }
            ]
        }
    },
    {
        el: '.product-carousel4',
        config: {
            rtl: false,
            adaptiveHeight: true,
            autoplay: true,
            arrows: false,
            dots: false,
            slidesToShow: 3,
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            }]
        }
    },
    {
        el: '.home-carousel1',
        config: {
            rtl: false,
            autoplay: true,
            arrows: true,
            dots: true,
            adaptiveHeight: true,
            slidesToShow: 1
        }
    },
    {
        el: '.home-carousel2',
        config: {
            rtl: false,
            adaptiveHeight: true,
            autoplay: true,
            arrows: false,
            dots: false,
            slidesToShow: 4,
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 425,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        }
    },
    {
        el: '.home-carousel3',
        config: {
            rtl: false,
            adaptiveHeight: true,
            infinite: false,
            autoplay: false,
            arrows: false,
            dots: false,
            slidesToShow: 3,
            responsive: [{
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 425,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ],
        }
    },
    {
        el: '.home-carousel4',
        config: {
            rtl: false,
            adaptiveHeight: true,
            autoplay: true,
            arrows: false,
            dots: false,
            slidesToShow: 1,
        }
    },
    {
        el: '.home-carousel6',
        config: {
            rtl: false,
            adaptiveHeight: true,
            autoplay: true,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev-style-2"><i class="fa fa-angle-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next-style-2"><i class="fa fa-angle-right"></i></button>',
            dots: false,
            slidesToShow: 5,
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2,
                    }
                }
            ]
        }
    },
    {
        el: '.home-carousel7',
        config: {
            rtl: false,
            adaptiveHeight: true,
            autoplay: true,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev-style-2"><i class="fa fa-angle-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next-style-2"><i class="fa fa-angle-right"></i></button>',
            dots: false,
            slidesToShow: 3,
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            }]
        }
    }
]
var carouselNextEl = '.carousel-next';
var carouselPrevEl = '.carousel-prev';

$(document).ready(function() {
    $(carouselNextEl).on('click', function() {
        var target = $(this).data('target');
        $(target).slick('slickNext');
    });

    $(carouselPrevEl).on('click', function() {
        var target = $(this).data('target');
        $(target).slick('slickPrev');
    });

    slickConfig.forEach(function(arr) {
        $(arr.el).slick(arr.config);
    })
})
/* END: Carousel */

/* BEGIN: Comparation */
var comparationEl = '.comparation';
var comparationCarousel = '.comparation-carousel';
var comparationCarouselConfig = {
    rtl: false,
    adaptiveHeight: true,
    infinite: true,
    slidesToShow: 2,
    autoplay: false,
    arrows: false,
    dots: false,
    responsive: [{
        breakpoint: 576,
        settings: {
            slidesToShow: 1,
        }
    }]
}

$(document).ready(function(){
    $(comparationCarousel).slick(comparationCarouselConfig);

    $(comparationCarousel).on('setPosition', function(slick) {
        $('#comparation').comparation();
    })
})
/* END: Comparation */


/* BEGIN: Custom Tab Trigger */
$(document).ready(function() {
    $('.tab-trigger').on('click', function() {
        var target = $(this).data('target');
        var targetActive = $(this).data('target-active');
        var targetSecondary = $(this).data('target-secondary');

        if (targetSecondary) {
            if (targetActive) {
                if (targetActive == 'primary') {
                    $(targetSecondary).tab('show');
                    $(this).data('target-active', 'secondary');
                } else if ($(this).data('target-active') == 'secondary') {
                    $(target).tab('show');
                    $(this).data('target-active', 'primary');
                }
            } else {
                $(target).tab('show');
                $(this).data('target-active', 'primary');
            }
        } else {
            $(target).tab('show');
        }
    })
})
/* END: Custom Tab Trigger */

/* BEGIN: product */
var productEl = '.product.product-hover-offset';
var tabLinkEl = 'a[data-toggle="tab"]';

$(document).ready(function() {
    $(productEl).product('hover');

    $(tabLinkEl).on('shown.bs.tab', function() {
        var href = $(this).attr('href');
        $(href).find(productEl).product('hover');
    })
})
/* END: product */

/* BEGIN: Sidemenu */
var sidemenuToggleEl = '.sidemenu-toggle';
var sidemenuDismissEl = '.sidemenu-dismiss';

$(document).ready(function() {
    $(sidemenuToggleEl).on('click', function() {
        var target = $(this).data('target');
        $(target).sidemenu('toggle');
    })

    $(sidemenuDismissEl).on('click', function() {
        $(this).parents().map(function() {
            if ($(this).hasClass('sidemenu')) {
                return this;
            }
        }).sidemenu('hide');
    })
})
/* END: Sidemenu */

/* BEGIN: Validation */
var validateSetting = {
    errorElement: 'span',
    errorPlacement: function(error, element) {
        error.addClass('invalid-feedback');
        element.closest('.form-group').append(error);
    },
    highlight: function(element, errorClass, validClass) {
        $(element).addClass('is-invalid');
        $(element).removeClass('is-valid');
    },
    unhighlight: function(element, errorClass, validClass) {
        $(element).removeClass('is-invalid');
        $(element).addClass('is-valid');
    }
}
var validateConfig = [{
        el: '#login-form',
        config: {
            rules: {
                loginEmail: {
                    required: true,
                    email: true
                },
                loginPassword: {
                    required: true,
                    minlength: 5
                },

            },
            messages: {
                loginEmail: {
                    required: 'please enter your email',
                    email: 'Your email is not valid'
                },
                loginPassword: {
                    required: 'Please enter your password',
                    minlength: 'Minimum 5 character'
                },
            },
            submitHandler: function(form) {
                form.submit();
            }
        }
    },
    {
        el: '#register-form',
        config: {
            rules: {
                registerFirstname: {
                    required: true,
                    minlength: 3
                },
                registerLastname: {
                    required: true,
                    minlength: 3
                },
                registerEmail: {
                    required: true,
                    email: true
                },
                registerPassword1: {
                    required: true,
                    minlength: 6
                },
                registerPassword2: {
                    required: true,
                    equalTo: '#register-password1'
                },
            },
            messages: {
                registerFirstname: {
                    required: 'Please enter your lastname',
                    minlength: 'Minimum 3 Character'
                },
                registerLastname: {
                    required: 'Please enter your lastname',
                    minlength: 'Minimum 3 Character'
                },
                registerEmail: {
                    required: 'Please enter your email',
                    email: 'Your email not valid'
                },
                registerPassword1: {
                    required: 'Please provide your password',
                    minlength: 'Minimum 6 character'
                },
                registerPassword2: {
                    required: 'Please confirm your password',
                    equalTo: 'Your password not match'
                },
            },
            submitHandler: function(form) {
                form.submit();
            }
        }
    },
    {
        el: '#message-form',
        config: {
            rules: {
                messageName: {
                    required: true,
                    minlength: 5
                },
                messageEmail: {
                    required: true,
                    email: true
                },
                messageMessage: {
                    required: true,
                    minlength: 10
                }
            },
            messages: {
                messageName: {
                    required: 'Please insert your name',
                    minlength: 'Minimum 5 characters'
                },
                messageEmail: {
                    required: 'Please insert yout email',
                    email: 'Email is not valid'
                },
                messageMessage: {
                    required: 'Please insert message',
                    minlength: 'Minimum 10 characters'
                }
            },
            submitHandler: function(form) {
                form.submit();
            }
        }
    },
]

$(document).ready(function() {
    $.validator.setDefaults(validateSetting);

    validateConfig.forEach(function(arr) {
        $(arr.el).validate(arr.config);
    })
})
/* END: Validation */

/* BEGIN: Grid Trigger */
var productGridEl = '#product-grid';
var productGridTargetEl = '.product';
var productGridSwictherEl = '#grid-option-swicther input';
var productGridBreakpoint = 992;

var productGridToggleClass = function(element) {
    $(element).parent().addClass('active').siblings().removeClass('active');
}
var productGridList = function() {
    if ($(window).width() >= productGridBreakpoint) {
        $(productGridEl).grid(2);
    } else {
        $(productGridEl).grid(1);
    }
    $(productGridEl).find(productGridTargetEl).each(function() {
        $(this).product('horizontal');
    })
}
var productGridCol = function(target, col) {
    $(target).grid(col);
    $(target).find(productGridTargetEl).each(function() {
        $(this).product('vertical');
    })
}

$(document).ready(function() {
    var $window = $(window);

    if ($window.width() >= productGridBreakpoint) {
        $('[value="col3"]').parent().addClass('active');
    } else {
        $('[value="col2"]').parent().addClass('active');
    }

    $window.resize(function() {
        var viewport = $(this).width();

        if (viewport >= productGridBreakpoint) {
            productGridCol(productGridEl, 3);
            productGridToggleClass('[value="col3"]')
        } else {
            productGridCol(productGridEl, 2);
            productGridToggleClass('[value="col2"]')
        }
    })

    $(productGridSwictherEl).on('change', function() {
        var val = $(this).val();

        if (val == 'list') {
            productGridList()
        } else if (val == 'col2') {
            productGridCol(productGridEl, 2)
        } else if (val == 'col3') {
            productGridCol(productGridEl, 3)
        }
    })
})

var productGridSwicther2El = '[name="productGridOption"]';
var productGrid2El = '#product-grid2';

var productGridToggleClass2 = function(element) {
    $('[name="productGridOption"]').attr('checked', false).filter(element).attr('checked', true);
}
var productGridList2 = function() {
    var viewport = $(window).width();

    if (viewport <= productGridBreakpoint2.md) {
        $(productGrid2El).grid(1);
    } else if (viewport <= productGridBreakpoint2.xl) {
        $(productGrid2El).grid(2);
    } else if (viewport >= productGridBreakpoint2.xl) {
        $(productGrid2El).grid(3);
    }

    $(productGrid2El).find(productGridTargetEl).each(function() {
        $(this).product('horizontal');
    })
}
var productGridBreakpoint2 = {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
}
var productGridPrepare2 = function() {
    var viewport = $(window).width();

    if (viewport <= productGridBreakpoint2.md) {
        productGridCol(productGrid2El, 2);
        productGridToggleClass2('#product-grid-option-col2');
    } else if (viewport <= productGridBreakpoint2.lg) {
        productGridCol(productGrid2El, 3);
        productGridToggleClass2('#product-grid-option-col3');
    } else if (viewport <= productGridBreakpoint2.xl) {
        productGridCol(productGrid2El, 4);
        productGridToggleClass2('#product-grid-option-col4');
    } else if (viewport >= productGridBreakpoint2.xl) {
        productGridCol(productGrid2El, 5);
        productGridToggleClass2('#product-grid-option-col5');
    }
}

$(document).ready(function() {
    productGridPrepare2();

    $(window).resize(function() {
        productGridPrepare2()
    })

    $(productGridSwicther2El).on('change', function() {
        var val = $(this).val();

        if (val != 'list') {
            val = parseInt(val.replace('col', ''));
            console.log(val);
            productGridCol(productGrid2El, val);
        } else if (val == 'list') {
            productGridList2();
        }
    })
})
/* END: Grid Trigger */

/* BEGIN: Sticky */
var stickyBreakpoint = 769;
var stickyMargin = 18;

var stickyHeader = '#sticky-header';
var stickyHeaderMobile = '#sticky-header-mobile';
var stickyMenu = ".sticky-menu-container .sticky-menu";

var stickyMenuHeight = $(stickyMenu).outerHeight();
var stickyMenuMargin = $(stickyHeader).outerHeight() + stickyMargin;
var stickyMenuActiveClass = 'is-sticky';

var stickyHeaderConfig = {
    topSpacing: 0
}
var stickyHeaderMobileConfig = {
    topSpacing: 0
}
var stickyMenuConfig = {
    offset_top: stickyMenuMargin,
    inner_scrolling: true,
    sticky_class: stickyMenuActiveClass,
}

var stickyActivation = function(el, active) {
    var config = null;

    if (el == stickyHeader) {
        config = stickyHeaderConfig;
    } else if (el == stickyHeaderMobile) {
        config = stickyHeaderConfig;
    } else if (el == stickyMenu) {
        config = stickyMenuConfig;
    }

    if (active) {
        if (el == stickyMenu) {
            $(el).stick_in_parent(config);
        } else {
            $(el).sticky(config);
        }
    } else {
        if (el == stickyMenu) {
            $(el).trigger("sticky_kit:detach");
        } else {
            $(el).unstick();
        }
    }
}

$(document).ready(function() {

    if ($(window).width() > stickyBreakpoint) {
        stickyActivation(stickyMenu, true);
        stickyActivation(stickyHeader, true);
    } else {
        stickyActivation(stickyHeaderMobile, true);
    }

    $(window).resize(function() {
        var vPortWidth = $(this).width();
        $(stickyMenu).trigger("sticky_kit:recalc");

        if (vPortWidth <= stickyBreakpoint) {
            stickyActivation(stickyMenu, false);
            stickyActivation(stickyHeader, false);
            stickyActivation(stickyHeaderMobile, true);
        } else {
            stickyActivation(stickyMenu, true);
            stickyActivation(stickyHeader, true);
            stickyActivation(stickyHeaderMobile, false);
        }
    }).scroll(function() {
        var menuHeightBuffer = $(stickyMenu).outerHeight();

        if (stickyMenuHeight != menuHeightBuffer) {
            $(stickyMenu).trigger("sticky_kit:recalc");
            stickyMenuHeight = menuHeightBuffer;
        }
    })
})
/* END: Sticky */

/* BEGIN: Counter */
var counterConfig = [{
        time: '%d',
        text: 'Days'
    },
    {
        time: '%H',
        text: 'Days'
    },
    {
        time: '%M',
        text: 'Mins'
    },
    {
        time: '%S',
        text: 'Secs'
    },
]

var counterExpireDate = '2020/10/10';
var counterEl = '.counter';

var counterElMaker = function() {
    var itemClass = 'counter-item';
    var textClass = 'counter-text';
    var timeClass = 'counter-time';
    var buffer = null;
    var result = "";

    counterConfig.forEach(function(arr) {
        buffer = '<div class="' + itemClass + '"><span class="' + timeClass + '">' + arr.time + '</span><span class="' + textClass + '">' + arr.text + '</span></div>';
        result += buffer;
        buffer = null;
    })

    return result
}

$(document).ready(function() {
    $(counterEl).countdown(counterExpireDate, function(e) {
        $(this).html(e.strftime(
            counterElMaker()
        ))
    })
})
/* END: Counter */

/* BEGIN: Widget 4 */
var widget4El = '.widget4';
var widget4TabEl = '.widget4-tab';
var widget4NavEl = '.widget4-nav';
var widget4CarouselConfig = {
    rtl: false,
    adaptiveHeight: true,
    autoplay: true,
    arrows: true,
    dots: false,
    slidesToShow: 3,
    responsive: [{
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 425,
            settings: {
                slidesToShow: 1,
            }
        }
    ],
    prevArrow: '<button type="button" class="slick-prev-style-2"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next-style-2"><i class="fa fa-angle-right"></i></button>',
};

$(document).ready(function() {
    $(widget4El).each(function() {
        var target = $(this).find(widget4TabEl).find('.tab-pane');

        target.each(function() {
            if ($(this).hasClass('active')) {
                var target = $(this).find('.carousel');

                $(target).slick(widget4CarouselConfig);
            }
        })
    })

    $(widget4NavEl).find('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
        var target = $($(this).attr('href')).find('.carousel');

        target.slick(widget4CarouselConfig);

        var relatedLink = $(this).parents().map(function() {
            if ($(this).hasClass(widget4El.substr(1))) {
                return this;
            }
        }).find(widget4TabEl).find('.tab-pane');

        relatedLink.each(function() {
            if (!$(this).hasClass('active')) {
                var relatedTarget = $($(this).find('.carousel'));

                if (relatedTarget.hasClass('slick-initialized')) {
                    relatedTarget.slick('unslick');
                }
            }
        })
    })
})
/* END: Widget 4 */

/* BEGIN: Widget 8 */
var widget7El = '.widget7';
var widget7ImageEl = '.widget7-image';
var widget7ViewEl = '.widget7-view';
var widget7ViewImageEl = widget7El + ' ' + widget7ViewEl + ' ' + widget7ImageEl;
var widget7Carousel = '.widget7-nav';
var widget7CarouselConfig = {
    rtl: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    centerMode: true,
    arrows: true,
    centerPadding: '0px',
    prevArrow: '<button type="button" class="slick-prev-style-2"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next-style-2"><i class="fa fa-angle-right"></i></button>',
    dots: false,
};

var widget7Init = function(target) {
    $(target).slick(widget7CarouselConfig);

    $(target).on('afterChange', function(event, slick, currentSlide) {
        var currentImage = null;
        var currentImageMagnify = null;

        slick.$slides.each(function(i, el) {
            el = $(el);

            if (el.hasClass('slick-current')) {
                var imageElement = el.find(widget7ImageEl);
                var imageMagnifySrc = imageElement.data('magnify-src');
                currentImage = imageElement.data('src');

                if (imageMagnifySrc) {
                    currentImageMagnify = imageMagnifySrc;
                } else {
                    currentImageMagnify = currentImage;
                }
            }
        })

        var imageView = $(this).parent(widget7El).find(widget7ViewEl + ' ' + widget7ImageEl);

        imageView.attr('data-magnify-src', currentImageMagnify);
        imageView.attr('src', currentImage);
        imageView.magnify();
    })
}
var widget7Destroy = function(target) {
    $(target).slick('unslick');
}

$(document).ready(function() {
    $(widget7ViewImageEl).magnify();
    widget7Init(widget7Carousel);
})
/* BEGIN: Widget 8 */

/* BEGIN: Modal */
var welcomeEl = '#welcome-modal';
var quickViewTriggerEl = '.quick-view-trigger';
var quickViewEl = '#quick-view';

var quickViewOnShow = function() {
    widget7Init(quickViewEl + ' ' + widget7Carousel);
}
var quickViewOnHide = function() {
    widget7Destroy(quickViewEl + ' ' + widget7Carousel);
}

$(document).ready(function() {
    $(welcomeEl).modal('show');

    $(quickViewTriggerEl).on('click', function() {
        $(quickViewEl).modal('show');
    })

    widget7Destroy(quickViewEl + ' ' + widget7Carousel);

    $(quickViewEl).on('shown.bs.modal', function() {
        quickViewOnShow();
    }).on('hidden.bs.modal', function() {
        quickViewOnHide();
    })
})
/* END: Modal */

/* BEGIN: Copyright */
var copyrightYear = new Date().getFullYear();
var copyrightEl = '#copyright-year';

$(document).ready(function() {
    $(copyrightEl).text(copyrightYear);
})
/* BEGIN: Copyright */

/* BEGIN: Other */
var tooltipEl = '[data-toggle="tooltip"]';
var accordianEl = '.accordian';
var headerDropdownEl = '.header-dropdown.header-dropdown-click';
var slinkyEl = '.slinky-menu';
var inputSpinnerEl = '.input-spinner';
var niceSelectEl = '.nice-select';

$(document).ready(function() {
    $().scrollToTop();
    $(tooltipEl).tooltip();
    $(accordianEl).accordian();
    $(headerDropdownEl).headerDropdown();
    $(slinkyEl).slinky({
        title: true
    })
    $(inputSpinnerEl).inputSpinner();
    $(niceSelectEl).niceSelect();
})
/* END: Other */

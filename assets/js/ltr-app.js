var preloadTimeout=6e3,preloadBodyClass="no-loader",preloadActiveBodyClass="preload-active",preloadHide=function(){$("body").addClass(preloadBodyClass),$("body").removeClass(preloadActiveBodyClass)};setTimeout(function(){preloadHide()},preloadTimeout),$(document).ready(function(){preloadHide()});var themeSwitcherEl="#theme-option-switcher input",darkThemeClass="dark-theme";$(document).ready(function(){$().button("toggle"),window.matchMedia("(prefers-color-scheme: dark)").matches&&($("body").addClass(darkThemeClass),$("#darkToggle").parent().addClass("active").siblings().removeClass("active")),$(themeSwitcherEl).on("change",function(){var e=$("body"),i=$(this).val();"dark"==i?e.addClass(darkThemeClass):"light"==i&&e.removeClass(darkThemeClass)})});var rangeSliderRating=function(e){var t=[];for(i=1;i<=e;i++){var o="";for(v=1;v<=i;v++)o+='<i class="fa fa-star text-warning"></i>';t.push(o)}return t},rangeSliderConfig=[{el:".price-range",config:{skin:"flat",type:"double",grid:!1,step:10,min:100,max:2e3,from:300,to:1e3,prefix:"$ ",prettify_enabled:!0,prettify_separator:"."}},{el:".rating-slider",config:{grid:!1,step:1,min:1,max:5,values:rangeSliderRating(5),hide_min_max:!0}}];$(document).ready(function(){rangeSliderConfig.forEach(function(e){$(e.el).ionRangeSlider(e.config)})});var slickConfig=[{el:".blog-carousel1",config:{rtl:!1,adaptiveHeight:!0,autoplay:!0,arrows:!1,dots:!1,slidesToShow:1,responsive:[{breakpoint:769,settings:{slidesToShow:2}},{breakpoint:576,settings:{slidesToShow:1}}]}},{el:".blog-carousel2",config:{rtl:!1,adaptiveHeight:!0,infinite:!0,autoplay:!0,arrows:!1,dots:!1,slidesToShow:4,responsive:[{breakpoint:992,settings:{slidesToShow:3}},{breakpoint:769,settings:{slidesToShow:2}},{breakpoint:576,settings:{slidesToShow:1}}]}},{el:".blog-carousel3",config:{rtl:!1,adaptiveHeight:!0,autoplay:!0,arrows:!0,dots:!0}},{el:".blog-carousel4",config:{rtl:!1,adaptiveHeight:!0,infinite:!0,autoplay:!0,arrows:!1,dots:!1,slidesToShow:3,responsive:[{breakpoint:992,settings:{slidesToShow:2}},{breakpoint:576,settings:{slidesToShow:1}}]}},{el:".product-carousel1",config:{rtl:!1,adaptiveHeight:!0,autoplay:!1,arrows:!0,dots:!1,prevArrow:'<button type="button" class="slick-prev-style-3 mr-3 mb-2"><i class="fa fa-angle-left"></i></button>',nextArrow:'<button type="button" class="slick-next-style-3 mr-3 mb-2"><i class="fa fa-angle-right"></i></button>'}},{el:".product-carousel2",config:{rtl:!1,adaptiveHeight:!0,autoplay:!0,arrows:!1,dots:!1,slidesToShow:1}},{el:".product-carousel3",config:{rtl:!1,adaptiveHeight:!0,autoplay:!0,arrows:!1,dots:!1,slidesToShow:4,responsive:[{breakpoint:992,settings:{slidesToShow:3}},{breakpoint:769,settings:{slidesToShow:2}}]}},{el:".product-carousel4",config:{rtl:!1,adaptiveHeight:!0,autoplay:!0,arrows:!1,dots:!1,slidesToShow:3,responsive:[{breakpoint:992,settings:{slidesToShow:2}}]}},{el:".home-carousel1",config:{rtl:!1,autoplay:!0,arrows:!0,dots:!0,adaptiveHeight:!0,slidesToShow:1}},{el:".home-carousel2",config:{rtl:!1,adaptiveHeight:!0,autoplay:!0,arrows:!1,dots:!1,slidesToShow:4,responsive:[{breakpoint:992,settings:{slidesToShow:3}},{breakpoint:769,settings:{slidesToShow:2}},{breakpoint:425,settings:{slidesToShow:1}}]}},{el:".home-carousel3",config:{rtl:!1,adaptiveHeight:!0,infinite:!1,autoplay:!1,arrows:!1,dots:!1,slidesToShow:3,responsive:[{breakpoint:769,settings:{slidesToShow:2}},{breakpoint:425,settings:{slidesToShow:1}}]}},{el:".home-carousel4",config:{rtl:!1,adaptiveHeight:!0,autoplay:!0,arrows:!1,dots:!1,slidesToShow:1}},{el:".home-carousel6",config:{rtl:!1,adaptiveHeight:!0,autoplay:!0,arrows:!0,prevArrow:'<button type="button" class="slick-prev-style-2"><i class="fa fa-angle-left"></i></button>',nextArrow:'<button type="button" class="slick-next-style-2"><i class="fa fa-angle-right"></i></button>',dots:!1,slidesToShow:5,responsive:[{breakpoint:1200,settings:{slidesToShow:4}},{breakpoint:769,settings:{slidesToShow:3}},{breakpoint:576,settings:{slidesToShow:2}}]}},{el:".home-carousel7",config:{rtl:!1,adaptiveHeight:!0,autoplay:!0,arrows:!0,prevArrow:'<button type="button" class="slick-prev-style-2"><i class="fa fa-angle-left"></i></button>',nextArrow:'<button type="button" class="slick-next-style-2"><i class="fa fa-angle-right"></i></button>',dots:!1,slidesToShow:3,responsive:[{breakpoint:992,settings:{slidesToShow:2}}]}}],carouselNextEl=".carousel-next",carouselPrevEl=".carousel-prev";$(document).ready(function(){$(carouselNextEl).on("click",function(){var e=$(this).data("target");$(e).slick("slickNext")}),$(carouselPrevEl).on("click",function(){var e=$(this).data("target");$(e).slick("slickPrev")}),slickConfig.forEach(function(e){$(e.el).slick(e.config)})});var comparationEl=".comparation",comparationCarousel=".comparation-carousel",comparationCarouselConfig={rtl:!1,adaptiveHeight:!0,infinite:!0,slidesToShow:2,autoplay:!1,arrows:!1,dots:!1,responsive:[{breakpoint:576,settings:{slidesToShow:1}}]};$(document).ready(function(){$(comparationCarousel).slick(comparationCarouselConfig),$(comparationCarousel).on("setPosition",function(e){$("#comparation").comparation()})}),$(document).ready(function(){$(".tab-trigger").on("click",function(){var e=$(this).data("target"),i=$(this).data("target-active"),t=$(this).data("target-secondary");t?i?"primary"==i?($(t).tab("show"),$(this).data("target-active","secondary")):"secondary"==$(this).data("target-active")&&($(e).tab("show"),$(this).data("target-active","primary")):($(e).tab("show"),$(this).data("target-active","primary")):$(e).tab("show")})});var productEl=".product.product-hover-offset",tabLinkEl='a[data-toggle="tab"]';$(document).ready(function(){$(productEl).product("hover"),$(tabLinkEl).on("shown.bs.tab",function(){var e=$(this).attr("href");$(e).find(productEl).product("hover")})});var sidemenuToggleEl=".sidemenu-toggle",sidemenuDismissEl=".sidemenu-dismiss";$(document).ready(function(){$(sidemenuToggleEl).on("click",function(){var e=$(this).data("target");$(e).sidemenu("toggle")}),$(sidemenuDismissEl).on("click",function(){$(this).parents().map(function(){if($(this).hasClass("sidemenu"))return this}).sidemenu("hide")})});var validateSetting={errorElement:"span",errorPlacement:function(e,i){e.addClass("invalid-feedback"),i.closest(".form-group").append(e)},highlight:function(e,i,t){$(e).addClass("is-invalid"),$(e).removeClass("is-valid")},unhighlight:function(e,i,t){$(e).removeClass("is-invalid"),$(e).addClass("is-valid")}},validateConfig=[{el:"#login-form",config:{rules:{loginEmail:{required:!0,email:!0},loginPassword:{required:!0,minlength:5}},messages:{loginEmail:{required:"please enter your email",email:"Your email is not valid"},loginPassword:{required:"Please enter your password",minlength:"Minimum 5 character"}},submitHandler:function(e){e.submit()}}},{el:"#register-form",config:{rules:{registerFirstname:{required:!0,minlength:3},registerLastname:{required:!0,minlength:3},registerEmail:{required:!0,email:!0},registerPassword1:{required:!0,minlength:6},registerPassword2:{required:!0,equalTo:"#register-password1"}},messages:{registerFirstname:{required:"Please enter your lastname",minlength:"Minimum 3 Character"},registerLastname:{required:"Please enter your lastname",minlength:"Minimum 3 Character"},registerEmail:{required:"Please enter your email",email:"Your email not valid"},registerPassword1:{required:"Please provide your password",minlength:"Minimum 6 character"},registerPassword2:{required:"Please confirm your password",equalTo:"Your password not match"}},submitHandler:function(e){e.submit()}}},{el:"#message-form",config:{rules:{messageName:{required:!0,minlength:5},messageEmail:{required:!0,email:!0},messageMessage:{required:!0,minlength:10}},messages:{messageName:{required:"Please insert your name",minlength:"Minimum 5 characters"},messageEmail:{required:"Please insert yout email",email:"Email is not valid"},messageMessage:{required:"Please insert message",minlength:"Minimum 10 characters"}},submitHandler:function(e){e.submit()}}}];$(document).ready(function(){$.validator.setDefaults(validateSetting),validateConfig.forEach(function(e){$(e.el).validate(e.config)})});var productGridEl="#product-grid",productGridTargetEl=".product",productGridSwictherEl="#grid-option-swicther input",productGridBreakpoint=992,productGridToggleClass=function(e){$(e).parent().addClass("active").siblings().removeClass("active")},productGridList=function(){$(window).width()>=productGridBreakpoint?$(productGridEl).grid(2):$(productGridEl).grid(1),$(productGridEl).find(productGridTargetEl).each(function(){$(this).product("horizontal")})},productGridCol=function(e,i){$(e).grid(i),$(e).find(productGridTargetEl).each(function(){$(this).product("vertical")})};$(document).ready(function(){var e=$(window);e.width()>=productGridBreakpoint?$('[value="col3"]').parent().addClass("active"):$('[value="col2"]').parent().addClass("active"),e.resize(function(){$(this).width()>=productGridBreakpoint?(productGridCol(productGridEl,3),productGridToggleClass('[value="col3"]')):(productGridCol(productGridEl,2),productGridToggleClass('[value="col2"]'))}),$(productGridSwictherEl).on("change",function(){var e=$(this).val();"list"==e?productGridList():"col2"==e?productGridCol(productGridEl,2):"col3"==e&&productGridCol(productGridEl,3)})});var productGridSwicther2El='[name="productGridOption"]',productGrid2El="#product-grid2",productGridToggleClass2=function(e){$('[name="productGridOption"]').attr("checked",!1).filter(e).attr("checked",!0)},productGridList2=function(){var e=$(window).width();e<=productGridBreakpoint2.md?$(productGrid2El).grid(1):e<=productGridBreakpoint2.xl?$(productGrid2El).grid(2):e>=productGridBreakpoint2.xl&&$(productGrid2El).grid(3),$(productGrid2El).find(productGridTargetEl).each(function(){$(this).product("horizontal")})},productGridBreakpoint2={sm:576,md:768,lg:992,xl:1200},productGridPrepare2=function(){var e=$(window).width();e<=productGridBreakpoint2.md?(productGridCol(productGrid2El,2),productGridToggleClass2("#product-grid-option-col2")):e<=productGridBreakpoint2.lg?(productGridCol(productGrid2El,3),productGridToggleClass2("#product-grid-option-col3")):e<=productGridBreakpoint2.xl?(productGridCol(productGrid2El,4),productGridToggleClass2("#product-grid-option-col4")):e>=productGridBreakpoint2.xl&&(productGridCol(productGrid2El,5),productGridToggleClass2("#product-grid-option-col5"))};$(document).ready(function(){productGridPrepare2(),$(window).resize(function(){productGridPrepare2()}),$(productGridSwicther2El).on("change",function(){var e=$(this).val();"list"!=e?(e=parseInt(e.replace("col","")),console.log(e),productGridCol(productGrid2El,e)):"list"==e&&productGridList2()})});var stickyBreakpoint=769,stickyMargin=18,stickyHeader="#sticky-header",stickyHeaderMobile="#sticky-header-mobile",stickyMenu=".sticky-menu-container .sticky-menu",stickyMenuHeight=$(stickyMenu).outerHeight(),stickyMenuMargin=$(stickyHeader).outerHeight()+stickyMargin,stickyMenuActiveClass="is-sticky",stickyHeaderConfig={topSpacing:0},stickyHeaderMobileConfig={topSpacing:0},stickyMenuConfig={offset_top:stickyMenuMargin,inner_scrolling:!0,sticky_class:stickyMenuActiveClass},stickyActivation=function(e,i){var t=null;e==stickyHeader?t=stickyHeaderConfig:e==stickyHeaderMobile?t=stickyHeaderConfig:e==stickyMenu&&(t=stickyMenuConfig),i?e==stickyMenu?$(e).stick_in_parent(t):$(e).sticky(t):e==stickyMenu?$(e).trigger("sticky_kit:detach"):$(e).unstick()};$(document).ready(function(){$(window).width()>stickyBreakpoint?(stickyActivation(stickyMenu,!0),stickyActivation(stickyHeader,!0)):stickyActivation(stickyHeaderMobile,!0),$(window).resize(function(){var e=$(this).width();$(stickyMenu).trigger("sticky_kit:recalc"),e<=stickyBreakpoint?(stickyActivation(stickyMenu,!1),stickyActivation(stickyHeader,!1),stickyActivation(stickyHeaderMobile,!0)):(stickyActivation(stickyMenu,!0),stickyActivation(stickyHeader,!0),stickyActivation(stickyHeaderMobile,!1))}).scroll(function(){var e=$(stickyMenu).outerHeight();stickyMenuHeight!=e&&($(stickyMenu).trigger("sticky_kit:recalc"),stickyMenuHeight=e)})});var counterConfig=[{time:"%d",text:"Days"},{time:"%H",text:"Days"},{time:"%M",text:"Mins"},{time:"%S",text:"Secs"}],counterExpireDate="2020/10/10",counterEl=".counter",counterElMaker=function(){var e=null,i="";return counterConfig.forEach(function(t){e='<div class="counter-item"><span class="counter-time">'+t.time+'</span><span class="counter-text">'+t.text+"</span></div>",i+=e,e=null}),i};$(document).ready(function(){$(counterEl).countdown(counterExpireDate,function(e){$(this).html(e.strftime(counterElMaker()))})});var widget4El=".widget4",widget4TabEl=".widget4-tab",widget4NavEl=".widget4-nav",widget4CarouselConfig={rtl:!1,adaptiveHeight:!0,autoplay:!0,arrows:!0,dots:!1,slidesToShow:3,responsive:[{breakpoint:769,settings:{slidesToShow:2}},{breakpoint:425,settings:{slidesToShow:1}}],prevArrow:'<button type="button" class="slick-prev-style-2"><i class="fa fa-angle-left"></i></button>',nextArrow:'<button type="button" class="slick-next-style-2"><i class="fa fa-angle-right"></i></button>'};$(document).ready(function(){$(widget4El).each(function(){$(this).find(widget4TabEl).find(".tab-pane").each(function(){if($(this).hasClass("active")){var e=$(this).find(".carousel");$(e).slick(widget4CarouselConfig)}})}),$(widget4NavEl).find('a[data-toggle="tab"]').on("shown.bs.tab",function(e){$($(this).attr("href")).find(".carousel").slick(widget4CarouselConfig),$(this).parents().map(function(){if($(this).hasClass(widget4El.substr(1)))return this}).find(widget4TabEl).find(".tab-pane").each(function(){if(!$(this).hasClass("active")){var e=$($(this).find(".carousel"));e.hasClass("slick-initialized")&&e.slick("unslick")}})})});var widget7El=".widget7",widget7ImageEl=".widget7-image",widget7ViewEl=".widget7-view",widget7ViewImageEl=widget7El+" "+widget7ViewEl+" "+widget7ImageEl,widget7Carousel=".widget7-nav",widget7CarouselConfig={rtl:!1,slidesToShow:3,slidesToScroll:1,focusOnSelect:!0,centerMode:!0,arrows:!0,centerPadding:"0px",prevArrow:'<button type="button" class="slick-prev-style-2"><i class="fa fa-angle-left"></i></button>',nextArrow:'<button type="button" class="slick-next-style-2"><i class="fa fa-angle-right"></i></button>',dots:!1},widget7Init=function(e){$(e).slick(widget7CarouselConfig),$(e).on("afterChange",function(e,i,t){var o=null,r=null;i.$slides.each(function(e,i){if((i=$(i)).hasClass("slick-current")){var t=i.find(widget7ImageEl),a=t.data("magnify-src");o=t.data("src"),r=a||o}});var a=$(this).parent(widget7El).find(widget7ViewEl+" "+widget7ImageEl);a.attr("data-magnify-src",r),a.attr("src",o),a.magnify()})},widget7Destroy=function(e){$(e).slick("unslick")};$(document).ready(function(){$(widget7ViewImageEl).magnify(),widget7Init(widget7Carousel)});var welcomeEl="#welcome-modal",quickViewTriggerEl=".quick-view-trigger",quickViewEl="#quick-view",quickViewOnShow=function(){widget7Init(quickViewEl+" "+widget7Carousel)},quickViewOnHide=function(){widget7Destroy(quickViewEl+" "+widget7Carousel)};$(document).ready(function(){$(welcomeEl).modal("show"),$(quickViewTriggerEl).on("click",function(){$(quickViewEl).modal("show")}),widget7Destroy(quickViewEl+" "+widget7Carousel),$(quickViewEl).on("shown.bs.modal",function(){quickViewOnShow()}).on("hidden.bs.modal",function(){quickViewOnHide()})});var copyrightYear=(new Date).getFullYear(),copyrightEl="#copyright-year";$(document).ready(function(){$(copyrightEl).text(copyrightYear)});var tooltipEl='[data-toggle="tooltip"]',accordianEl=".accordian",headerDropdownEl=".header-dropdown.header-dropdown-click",slinkyEl=".slinky-menu",inputSpinnerEl=".input-spinner",niceSelectEl=".nice-select";$(document).ready(function(){$().scrollToTop(),$(tooltipEl).tooltip(),$(accordianEl).accordian(),$(headerDropdownEl).headerDropdown(),$(slinkyEl).slinky({title:!0}),$(inputSpinnerEl).inputSpinner(),$(niceSelectEl).niceSelect()});
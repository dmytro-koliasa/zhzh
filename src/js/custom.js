window.onload = () => {

   if ($('select').length) {
      $('select').selectric({
         onInit: (elem) => {
            if ($(elem).closest('.js-select-multiple-item').length > 0) {

               const buttons = `<div class="selectric-btns">
                                    <button class="selectric-btn js-apply-filter" type="button">Применить</button>
                                    <button class="selectric-btn js-cancel-filter" type="button">Сбросить</button>
                                 </div>`;

               $(elem).closest('.js-select-multiple-item').find('.selectric-items').append(buttons);
            }

         },
      });

      $('.js-apply-filter').on('click', e => {
         console.log('e - ', e);
      });

      $('.js-cancel-filter').on('click', e => {
         console.log('e - ', e);
      });
   }





   (() => {
      const mainMenuHamburgerBtn = document.querySelectorAll('.js-humburger');

      const popupMain = document.querySelector('.js-popup-main');

      for (let i = 0; i < mainMenuHamburgerBtn.length; i++) {
         mainMenuHamburgerBtn[i].addEventListener('click', e => {
            popupMain.classList.toggle('active');
            e.currentTarget.classList.toggle('active');
            document.body.classList.toggle('modal-open');
            let indent = 0;

            if (window.matchMedia('(max-width:767px)').matches) {
               const headerTopHeight = document.querySelector('.js-header-top').offsetHeight;
               const headerBottomHeight = document.querySelector('.js-header-bottom').offsetHeight;
               const navBottomHeight = document.querySelector('.js-bottom-nav').offsetHeight;

               indent = headerTopHeight + headerBottomHeight - navBottomHeight + 16;
            } else {
               indent = document.querySelector('.js-header').offsetHeight;
            }

            popupMain.style.top = `${indent}px`

            window.scrollTo(0, 0);
         });
      }
   })();

   (() => {
      const accToggleBtn = document.querySelectorAll('.js-account-toggle-btn');

      for (let i = 0; i < accToggleBtn.length; i++) {
         accToggleBtn[i].addEventListener('click', e => {
            e.currentTarget.classList.toggle('js-active');

            e.currentTarget.closest('.js-account-toggle-wrap').querySelector('.js-account-toggle-nav').classList.toggle('js-active');

         });
      }
   })();

   (() => {
      const tabsContainer = document.querySelectorAll('.js-tabs');

      for (let j = 0; j < tabsContainer.length; j++) {
         const tabs = tabsContainer[j].querySelectorAll('.js-tab');
         const tabsContent = tabsContainer[j].querySelectorAll('.js-tabs-content');

         for (let i = 0; i < tabs.length; i++) {
            if (i == 0) {
               tabs[i].classList.add('active');
            } else {
               tabs[i].classList.remove('active');
            }

            tabs[i].addEventListener('click', e => {
               const currentIndex = i;

               for (let j = 0; j < tabs.length; j++) {
                  tabs[j].classList.remove('active');
               }
               tabs[currentIndex].classList.add('active')

               for (let k = 0; k < tabsContent.length; k++) {
                  tabsContent[k].classList.remove('active');
               }
               tabsContent[currentIndex].classList.add('active')
            });
         }

         for (let k = 0; k < tabsContent.length; k++) {
            if (k == 0) {
               tabsContent[k].classList.add('active');
            } else {
               tabsContent[k].classList.remove('active');
            }
         }
      }
   })();

   (() => {
      const popupMenuBtns = document.querySelectorAll('.js-popup-menu-btn');
      const popupMenus = document.querySelectorAll('.js-popup-menu-list');

      for (let i = 0; i < popupMenuBtns.length; i++) {
         popupMenuBtns[i].addEventListener('click', e => {
            const popupMenu = e.currentTarget.closest('.js-popup-menu');
            for (let j = 0; j < popupMenus.length; j++) {
               popupMenus[j].classList.remove('active');
            }
            popupMenu.querySelector('.js-popup-menu-list').classList.add('active');
         });
      }
   })();

   (() => {
      const popupMenuBtns = document.querySelectorAll('.js-signin');
      const popupMenuBtnClose = document.querySelector('.js-signin-close');
      const popupMenu = document.querySelector('.js-popup-signin');

      for (let i = 0; i < popupMenuBtns.length; i++) {
         popupMenuBtns[i].addEventListener('click', e => {
            popupMenu.classList.add('active');
            document.body.classList.add('modal-open');
         });
      }

      popupMenuBtnClose.addEventListener('click', e => {
         popupMenu.classList.remove('active');
         document.body.classList.remove('modal-open');
      })
   })();

   (() => {
      $('.js-top-news-slider').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         arrows: false,
         fade: true,
         asNavFor: '.js-top-news-slider-nav'
      });
      $('.js-top-news-slider-nav').slick({
         slidesToShow: 3,
         slidesToScroll: 1,
         vertical: true,
         asNavFor: '.js-top-news-slider',
         dots: false,
         focusOnSelect: true,
         verticalSwiping: true,
         responsive: [
            {
               breakpoint: 767,
               settings: {
                  vertical: false,
               }
            }
         ]
      });
   })();



   (() => {
      let $slickElements = $('.js-slider-primary');

      $slickElements.each((index, element) => {
         let prev = $(element).closest('.js-has-slider').find('.js-slider-arrow-prev');
         let next = $(element).closest('.js-has-slider').find('.js-slider-arrow-next');

         $(element).slick({
            autoplay: false,
            dots: false,
            adaptiveHeight: true,
            nextArrow: next,
            prevArrow: prev,
            slidesToShow: 4,
            responsive: [
               {
                  breakpoint: 1581,
                  settings: {
                     slidesToShow: 3,
                  }
               },
               {
                  breakpoint: 767,
                  settings: {
                     slidesToShow: 1,
                  }
               },
            ]
         }).on('setPosition', function (event, slick) {
            slick.$slides.css('height', slick.$slideTrack.height() + 'px');
         });
      });
   })();

   (() => {
      let $slickElements = $('.js-slider-secondary');

      $slickElements.each((index, element) => {
         let prev = $(element).closest('.js-has-slider').find('.js-slider-arrow-prev');
         let next = $(element).closest('.js-has-slider').find('.js-slider-arrow-next');

         $(element).slick({
            autoplay: false,
            dots: false,
            adaptiveHeight: true,
            nextArrow: next,
            prevArrow: prev,
            slidesToShow: 3,
            vertical: true,
            responsive: [
               {
                  breakpoint: 1581,
                  settings: {
                     slidesToShow: 3,
                     vertical: false,
                  }
               },
               {
                  breakpoint: 767,
                  settings: {
                     slidesToShow: 1,
                     vertical: false,
                  }
               },
            ]
         });
      });
   })();


   (() => {
      let $slickElements = $('.js-slider-blog-home');

      $slickElements.each((index, element) => {
         let prev = $(element).closest('.js-has-slider').find('.js-slider-arrow-prev');
         let next = $(element).closest('.js-has-slider').find('.js-slider-arrow-next');

         $(element).slick({
            autoplay: false,
            dots: false,
            adaptiveHeight: true,
            nextArrow: next,
            prevArrow: prev,
            slidesToShow: 4,
            responsive: [
               {
                  breakpoint: 1581,
                  settings: {
                     slidesToShow: 3,
                  }
               },
               {
                  breakpoint: 1185,
                  settings: {
                     slidesToShow: 2,
                  }
               },
               {
                  breakpoint: 767,
                  settings: {
                     slidesToShow: 1,
                  }
               },
            ]
         }).on('setPosition', function (event, slick) {
            slick.$slides.css('height', slick.$slideTrack.height() + 'px');
         });
      });
   })();


   (() => {

      /* Russian (UTF-8) initialisation for the jQuery UI date picker plugin. */
      /* Written by Andrew Stromnov (stromnov@gmail.com). */
      (function (factory) {
         "use strict";

         if (typeof define === "function" && define.amd) {

            // AMD. Register as an anonymous module.
            define(["../widgets/datepicker"], factory);
         } else {

            // Browser globals
            factory(jQuery.datepicker);
         }
      })(function (datepicker) {
         "use strict";

         datepicker.regional.ru = {
            closeText: "Закрыть",
            prevText: "‹",
            nextText: "›",
            currentText: "Сегодня",
            monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
               "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
            monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн",
               "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
            dayNames: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
            dayNamesShort: ["вск", "пнд", "втр", "срд", "чтв", "птн", "сбт"],
            dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
            weekHeader: "Нед",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ""
         };
         datepicker.setDefaults(datepicker.regional.ru);

         return datepicker.regional.ru;

      });
      // plugin ENDS

      $.datepicker.setDefaults($.datepicker.regional["ru"]);
      $(".js-datepicker").datepicker();

   })();



   // (() => {
   //    $('.js-image-gallery').each(function () {
   //       $(this).magnificPopup({
   //          delegate: 'a',
   //          type: 'image',
   //          removalDelay: 500,
   //          mainClass: 'mfp-fade popup_image',
   //          showCloseBtn: true,
   //          closeMarkup: '<div class="mfp-close">x</div>',
   //          closeBtnInside: true,
   //          closeOnContentClick: false,
   //          closeOnBgClick: true,
   //          alignTop: false,
   //          fixedContentPos: true,
   //          gallery: {
   //             enabled: true
   //          }
   //       });
   //    });
   // })();
}
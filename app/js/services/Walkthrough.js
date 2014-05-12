'use strict';

angular.module('givitApp')
  .service('Walkthrough', function ($rootScope) {
    var tour = new Tour({
      name: 'navigation-walkthrough',
      storage: false,
      backdrop: true,
      onEnd: function () {
        $rootScope.$broadcast('navDrawer.hide');
      },
      template: [
        '<div class="popover tour">',
        ' <div class="arrow"></div>',
        // ' <h3 class="popover-title"></h3>',
        ' <div class="popover-content"></div>',
        ' <div class="popover-navigation pull-right">',
        '   <button class="btn btn-default" data-role="prev">«</button>',
        '   <button class="btn btn-default" data-role="next">»</button>',
        // '   <button class="btn btn-default" data-role="end">End tour</button>',
        ' </div>',
        '</div>'
      ].join('\n'),
      steps: [{
        element: '.navbar .navbar-toggle',
        title: 'Menu',
        content: 'Access the app\'s navigation menu here.',
        placement: 'right',
        reflex: true,
        onNext: function () {
          $rootScope.$broadcast('navDrawer.show');
        }
      }, {
        element: $('#navigation-drawer a[href="#/givit-list"]').parent(),
        title: 'Givit List',
        content: 'See what items charities have requested for someone in need.',
        placement: 'bottom'
      }, {
        element: '#navigation-drawer a[href="#/donate-item"]',
        title: 'Donate Item',
        content: 'Tell us of items you have that you would like to give to someone in need.',
        placement: 'bottom'
      }, {
        element: '#navigation-drawer a[href="#/user-details"]',
        title: 'My Details',
        content: 'Before you can <strong>Donate Item</strong>s or <strong>Give</strong> on the <strong>Givit List</strong>, you must enter your details so we can contact you regarding the pickup of items.',
        placement: 'top',
        onNext: function () {
          tour.end();
        }
      }, {}]
    });

    this.start = function () {
      tour.init();
      tour.start();
    };
  });
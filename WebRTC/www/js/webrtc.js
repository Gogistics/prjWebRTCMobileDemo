/**/
/*
 * index_page.js
 * 1. handle base template
 * 2. handle whole front-end templates routing
 * 
 * */
(function($){
  'use strict';
  // app is inside index.js
  app.initialize();

  document.addEventListener("deviceready", onDeviceReady, false);
  function onDeviceReady() {
      // alert(device.serial);
      window.myDeviceInfo = {UUID: device.uuid, SERIAL: device.serial};
      document.addEventListener("pause", onPause, false);
      document.addEventListener("resume", onResume, false);
  }

  function onPause() {
    // Handle the pause event
  }

  function onResume() {
    // Handle the resume event
  }

  /* Angular.js */
  /* init angular */
  angular.element(document).ready(function(){
        angular.bootstrap(document.body, ['webRTCApp']);
  });

  // declare app level module which depends on filters, and services, and modify $interpolateProvider to avoid the conflict with jinja2' symbol
  window.webRTCApp = window.webRTCApp || angular.module('webRTCApp', [ 'ui.router', 'ngAnimate' ], function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
  });

  // global values
  window.webRTCApp.value('APP_VALUES',{
    EMAIL : 'gogistics@gogistics-tw.com',
    TITLE : 'WebRTC',
    CRYPTO_PWD: 'OWSI398feWR42g7FKJRUS37HSE52GE760rb907veBT'
  });

  // configure app
  window.webRTCApp.config(function($stateProvider, $urlRouterProvider){
    // nested templates and routing
  });

  // run app
  window.webRTCApp.run(function(APP_VALUES){
    window.socket = io('http://45.79.106.150:8000');
    window.socket.on('connect', function(){
      alert('Socket Connected');
    });
    window.socket.on('disconnect', function(){
      alert('Socket Disconnected');
    });
  });

  /* controllers */
})(jQuery);


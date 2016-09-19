/**/
/*
 * index_page.js
 * 1. handle base template
 * 2. handle whole front-end templates routing
 * 
 * */
$(function(){
  'use strict';
  document.addEventListener("deviceready", onDeviceReady, false);

  function onDeviceReady() {
    window.myDeviceInfo = {UUID: device.uuid, SERIAL: device.serial};
    document.addEventListener("pause", function(){
      // pause event
    }, false);
    document.addEventListener("resume", function(){
      // resume event
    }, false);
  };


  /* bootstrap angular */
  angular.element(document).ready(function(){
        angular.bootstrap(document.body, ['webRTCApp']);
  });

  /* Angular.js */
  // declare app level module which depends on filters, and services, and modify $interpolateProvider to avoid the conflict with jinja2' symbol
  window.webRTCApp = window.webRTCApp || angular.module('webRTCApp', ['ngRoute', 'ngAnimate'], function($interpolateProvider) {
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
  window.webRTCApp.config(function($routeProvider){
    // nested templates and routing
  });

  // run app
  window.webRTCApp.run(function(APP_VALUES, $http){
    // run
    window.socket = io.connect('http://45.79.106.150:8000');
    window.socket.on('connect', function(){
      alert('Socket Connected');
      window.socket.on('text', function(text) {
        alert(text);
      });
    });
    window.socket.on('disconnect', function(){
      alert('Socket Disconnected');
    });
  });

  /* controllers */
});


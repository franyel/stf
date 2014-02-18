require('./device-list.css')

module.exports = angular.module('device-list', [
  require('./../components/socket').name,
  require('./../components/device').name,

])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/devices', {
      template: require('./device-list.jade'),
      controller: 'DeviceListCtrl'
    })
  }])
  .controller('DeviceListCtrl', require('./device-list-controller'))

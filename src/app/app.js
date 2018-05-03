import angular from 'angular';
import '../style/app.css';

let app = () => {
    return {
      template: require('./app.html'),
      controller: 'AppCtrl',
      controllerAs: 'app'
    }
  };
  
  class AppCtrl {
    constructor() {
      this.url = 'https://github.com/preboot/angular-webpack';
    }
  }
  
  const MODULE_NAME = 'player';
  
  angular.module(MODULE_NAME, [])
    .directive('app', app)
    .controller('AppCtrl', AppCtrl);

    
require('./audio-player/audio-player.component');
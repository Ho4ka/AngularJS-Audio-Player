import angular from 'angular';
import './songs-list.css';
import { networkInterfaces } from 'os';

class SongsListController {
  
  constructor(){}

  $onInit(){
      
  }

 deleteSong(songName) {
  this.deleteSongCallback({songName: songName});
 } 

}

angular.module('player')
.component('songsList', {
  template: require('./songs-list.template.html'),
  controller: SongsListController,
  controllerAs: 'songsList',
  bindings: {
    'songs': '<',
    'deleteSongCallback':'&'
  }
});

require('./song-item/song-item.component');

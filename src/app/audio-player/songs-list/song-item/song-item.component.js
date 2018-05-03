import angular from 'angular';
import './song-item.css';

class SongItemController {
  
  constructor(){}

  $onInit(){
    
  }

  deleteSong(songName){
    this.deleteSongCallback({songName: songName});
  }

}

angular.module('player')
.component('songItem', {
  template: require('./song-item.template.html'),
  controller: SongItemController,
  controllerAs: 'songItem',
  bindings: {
    'song': '<',
    'deleteSongCallback': '&'
  }
});
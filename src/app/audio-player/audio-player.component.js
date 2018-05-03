import angular from "angular";
import "./audio-player.css";

class AudioPlayerController {
    constructor() {
    }

    //


    $onInit() {
        this.songs = [
            {
                name: "The resistance",
                author: "Skillet",
                duration: 3.25,
                url: '/music/song-1.mp3'
            },
            {
                name: "Whatever it takes",
                author: "Imagine Dragons",
                duration: 4.25,
                url: '/music/song-2.mp3'
            },
            {
                name: "Freestyler",
                author: "Bomfunc MC ",
                duration: 5.25,
                url: '/music/song-3.mp3'
            }
        ];
    }

    addSong(song) {
        // Validation
        if (!song) {
            alert("перший не катить");
            return;
        }

        console.log(song);
        if (!song.name || !song.author || !song.duration) {
            alert("другий не катить");
            return;
        }
        //  Получили данні, клонували та записали як обєкт
        const clone = Object.assign({}, song);
        this.songs.push(clone);

    }

    deleteSong(songName) {
        let newSongs = this.songs.filter(songItem => songItem.name != songName);
        this.songs = newSongs;
    }

    sortAuthor() {
        let keysSorted = this.songs.sort((a, b) => a.author > b.author);
        this.songs = keysSorted;
    }

}

angular.module("player").component("audioPlayer", {

    template: require("./audio-player.template.html"),
    controller: AudioPlayerController,
    controllerAs: "audioPlayer"
});

require("./player-controls/player-controls.component");
require("./songs-list/songs-list.component");

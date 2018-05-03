import angular from "angular";
import "./player-controls.css";

class PlayerControlsController {
    constructor($scope) {
        this.scope = $scope;
    }

    $postLink() {
        this.audio = document.getElementById("audio");
        this.audio.src = this.songs[this.currentSongIndex].url;
        this.audio.onended = () => {
            if (!this.repeatMode) {
                if (this.currentSongIndex === this.songs.length - 1) {
                    return;
                }
            }
            this.next();
        };

        this.audio.ontimeupdate = () => {
            if (!this.audio.duration) {
                this.songProgress = 0;

            } else if (this.audio.duration) {
                this.songProgress = this.progressToPercent(this.audio.currentTime, this.audio.duration);
                this.songProgress = Math.floor(this.songProgress);
            }
            this.playBackStyle.width = this.songProgress + '%';

            // $digest --> forcing the Angular to repaint HTML
            this.scope.$digest();

        }

    }

    $onInit() {
        this.currentSongIndex = 0;
        this.repeatMode = true;
        this.songProgress = 0;
        this.playBackStyle = {
            width: '0%'
        }

    }

    play() {
        this.audio.play();
    }

    stop() {
        this.audio.pause();
    }

    previous() {
        // if plays first song and we push Previous button, then first song  starts play again

        if (this.currentSongIndex === 0) {
            // this.audio.currentTime = 0;
            this.currentSongIndex = 0;
            this.audio.src = this.songs[this.currentSongIndex].url;
            this.audio.play();


        } else if (this.currentSongIndex != 0) {
            this.currentSongIndex--;
            this.audio.src = this.songs[this.currentSongIndex].url;
            this.audio.play();
        }

    }

    next() {
        // if plays last song and we click Next button, first song play again

        if (this.currentSongIndex === this.songs.length - 1) {
            this.currentSongIndex = 0;
            this.audio.src = this.songs[this.currentSongIndex].url;
            this.audio.play();
            return;
        }

        this.currentSongIndex++;
        this.audio.src = this.songs[this.currentSongIndex].url;
        this.audio.play();
    }

    // function what converts current time and duration to percentage

    progressToPercent(currentTime, duration) {

        return (currentTime / duration) * 100;
    }
}

angular.module("player").component("playerControls", {
    template: require("./player-controls.template.html"),
    controller: PlayerControlsController,
    controllerAs: "playerControls",
    bindings: {
        songs: "<"
    }
});

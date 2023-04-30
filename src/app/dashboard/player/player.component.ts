// import { Component, Input } from '@angular/core';
// import { Song } from 'playlist';

// import { CommonModule } from  '@angular/common';

// @Component({
//   selector: 'app-player',
//   templateUrl: './player.component.html',
//   styleUrls: ['./player.component.scss']
// })
// export class PlayerComponent {


//   audioList = [
//     {
//       url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
//       title: "Smaple 1",
//       cover: "https://i1.sndcdn.com/artworks-000249294066-uow7s0-t500x500.jpg"
//     },
//     {
//       url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
//       title: "Sample 2",
//       cover: "https://i1.sndcdn.com/artworks-000249294066-uow7s0-t500x500.jpg"
//     },
//     {
//       url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
//       title: "Sample 3",
//       cover: "https://i1.sndcdn.com/artworks-000249294066-uow7s0-t500x500.jpg"
//     }
//   ];




//   @Input() current : Song | undefined;


//   files: Array<any> = [
//     { name: "First Song", artist: "Inder" },
//     { name: "Second Song", artist: "You" }
//   ];
//   state: any ;
//   currentFile: any = {};


//   play() {
// throw new Error('Method not implemented.');
// }
// pause() {
// throw new Error('Method not implemented.');
// }
// next() {
// throw new Error('Method not implemented.');
// }
// previous() {
// throw new Error('Method not implemented.');
// }
// onSliderChangeEnd($event: Event) {
// throw new Error('Method not implemented.');
// }


//     isFirstPlaying() {
//       return false;
//     }
//     isLastPlaying() {
//       return true;
//   }
// }

import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Song, playlist } from 'playlist';
import { AudioPlyerOptions } from 'src/app/dashboard/audioPlayer';

import { TimeConversionPipe } from 'src/app/pipes/time-conversion.pipe';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  providers: [TimeConversionPipe]
})
export class PlayerComponent extends AudioPlyerOptions implements OnInit {
  @Input() width: any = '100%';
  @Input() height: any = '100px';
  @Input() backgroundColor: any = "rgb(55, 0, 150)";
  @Input() audioTimeColor: any;
  @Input() audioTitleColor = "rgb(255, 255, 255)";
  @Input() volumeSliderColor: any;
  @Input() timeSliderColor: any;
  @Input() audioList = playlist;
  @Input() next = true;
  @Input() previous = true;
  @Input() shuffle = true;
  @Input() repeat = true;
  @Input() scrollTitle = false;
  @Input() playButtonColor = "rgb(255, 255, 255)";
  @Input() pauseButtonColor = "rgb(255, 255, 255)";
  @Input() nextButtonColor = "rgb(255, 255, 255)";
  @Input() previousButtonColor = "rgb(255, 255, 255)";
  @Input() repeatButtonColor = "rgb(255, 255, 255)";
  @Input() activeRepeatButtonColor = "rgb(255, 255, 255)";
  @Input() volumeButtonColor = "rgb(255, 255, 255)";
  @Input() muteButtonColor = "rgb(255, 255, 255)";
  @Output() nextEvent = new EventEmitter();
  @Output() previousEvent = new EventEmitter();
  @Output() repeatEvent = new EventEmitter();
  @Output() shuffleEvent = new EventEmitter();
  @Output() seekEvent = new EventEmitter();


  @Input()  selectedAudio!: Song | undefined;
  @Output() selectedAudioChange = new EventEmitter<Song>();

  currentAudioIndex = 0;
  repeatActive = false;
  isError = false;
  isShuffle = false;
  volumeBeforeMute: any;

  constructor() {
    super();
  }

  ngOnInit() {
    this.options();
    this.initiateAudioPlayer();
    //check audio is ended for next song
    this.isAudioEnded.subscribe(data => {
      if (!this.isRepeat && this.audioList.length > 0) {
        this.nextAudio();
      }
    })
  }

  nextAudio() {
    if (this.audioList.length - 1 != this.currentAudioIndex) {
      this.currentAudioIndex += 1;
      this.selectedAudio = this.audioList[this.currentAudioIndex];
      this.getAudioLength();
      if (this.isAudioPlaying) {
        this.play();
      }
      this.nextEvent.emit();
    }else{
      this.pause();
    }
  }

  // playAudio( chi_number ){

  // }

  previousAudio() {
    if (this.currentAudioIndex != 0) {
      this.currentAudioIndex -= 1;
      this.selectedAudio = this.audioList[this.currentAudioIndex];
      this.getAudioLength();
      if (this.isAudioPlaying) {
        this.play();
      }
      this.previousEvent.emit();
    }
  }

  seekAudio(seekAudioValue: any) {
    if (this.audioVolume != 0) {
      this.isMute = false;
    }
    this.audioPlayer.nativeElement.currentTime = seekAudioValue.target.value;
    this.seekEvent.emit();
  }

  repeatAudio() {
    this.isRepeat = !this.isRepeat;
    this.repeatActive = !this.repeatActive;
    this.audioPlayer.nativeElement.loop = this.isRepeat;
    this.repeatEvent.emit();
  }

/*   shuffleAudio() {
    this.isShuffle = !this.isShuffle;
    if (this.isShuffle) {
    let randomItem = Math.floor(Math.random() * this.audioList.length);
    console.log(randomItem);

    }
    this.shuffleEvent.emit();
  } */

  volumeChange(volume: any) {
    this.audioPlayer.nativeElement.volume = volume.target.value / 100;
  }

  muteAudio() {
    if (this.isMute) {
      this.audioPlayer.nativeElement.volume = 0.5;
      this.isMute = false;
    } else {
      this.audioPlayer.nativeElement.volume = 0;
      this.isMute = true;
    }
  }

  initiateAudioPlayer() {
    if (this.audioList.length <= 0) {
      this.isError = true;
    } else {
      this.selectedAudio = this.audioList[this.currentAudioIndex];
    }
  }

  audioChange(current : Song) {
    this.currentAudioIndex = this.audioList.indexOf(current);
    console.log(this.currentAudioIndex);
    this.selectedAudioChange.emit(this.selectedAudio);
    console.log(this.selectedAudio);
  }
}

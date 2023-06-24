import { SongRepeatStateEnum, SongStateEnum } from 'enums';
import { ISong } from 'interfaces';
import { makeAutoObservable } from 'mobx';

class CurrentlyPlayingStore {
  currentlyPlayingSong: ISong | undefined = {
    id: 1,
    song: 'Castle of Glass',
    album: 'Living Things',
    src: '',
    artist: 'Linkin Park',
    coverArtUrl:
      'https://upload.wikimedia.org/wikipedia/en/c/c9/Linkin_Park_-_Living_Things.jpg',
    length: 246614,
    playedLength: 146000,
  };
  nextSongId: number | undefined;
  previousSongId: number | undefined;
  state: SongStateEnum = SongStateEnum.PAUSED;
  shuffle = false;
  repeatState: SongRepeatStateEnum = SongRepeatStateEnum.REPEAT;

  constructor() {
    makeAutoObservable(this);
  }
}

const currentlyPlayingStore = new CurrentlyPlayingStore();

export default currentlyPlayingStore;

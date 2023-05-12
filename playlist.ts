
export interface Song {
  url : string,
  title : string,
  cover : string,
  length: string
}


export var playlist : Song[] = [
  {
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    title: "sample 1",
    cover: "https://i1.sndcdn.com/artworks-000249294066-uow7s0-t500x500.jpg",
    length: "4:05",

  },
  {
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    title: "Sample 2",
    cover: "https://i1.sndcdn.com/artworks-000249294066-uow7s0-t500x500.jpg",
    length: "5:00"
  },
  {
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
    title: "Sample 3",
    cover: "https://i1.sndcdn.com/artworks-000249294066-uow7s0-t500x500.jpg",
    length: "2:45"
  }
];


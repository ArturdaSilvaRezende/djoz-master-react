import { LatestSound } from "../../../shared/types/typeLatest";
import { YoutubeFeed } from "../../../shared/types/typeLatest";

import Sound01 from "../assets/audios/sound-01.mp3";
import Sound02 from "../assets/audios/sound-02.mp3";
import Sound03 from "../assets/audios/sound-03.mp3";
import Sound04 from "../assets/audios/sound-04.mp3";
import Sound05 from "../assets/audios/sound-05.mp3";
import Sound06 from "../assets/audios/sound-06.mp3";
import Sound07 from "../assets/audios/sound-07.mp3";
import Sound08 from "../assets/audios/sound-08.mp3";
import Sound09 from "../assets/audios/sound-09.mp3";
//
import Youtube01 from "../assets/img/youtube-1.jpg";
import Youtube02 from "../assets/img/youtube-2.jpg";
import Youtube03 from "../assets/img/youtube-3.jpg";
//
import Festival01 from "../assets/videos/festival-01.mp4";
import Festival02 from "../assets/videos/festival-02.mp4";
import Festival03 from "../assets/videos/festival-03.mp4";

export const LatestList: LatestSound[] = [
  {
    id: 1,
    name: "A7S S1mba - On On",
    sound: `${Sound01}`,
  },
  {
    id: 2,
    name: "Acraze - Do It To It",
    sound: `${Sound02}`,
  },
  {
    id: 3,
    name: "Blasterjaxx - Dynamite",
    sound: `${Sound03}`,
  },
  {
    id: 4,
    name: "Felix Jaehn - Rain In Ibiza",
    sound: `${Sound04}`,
  },
  {
    id: 5,
    name: "Gabry Pont - Call Me",
    sound: `${Sound05}`,
  },
  {
    id: 6,
    name: "Kid Ink - Tungevaag",
    sound: `${Sound06}`,
  },
  {
    id: 7,
    name: "Kylie Cantrall - Sad Boy",
    sound: `${Sound07}`,
  },
  {
    id: 8,
    name: "Rain Radio - He Goes Down",
    sound: `${Sound08}`,
  },
  {
    id: 9,
    name: "Roman Messer - Get Down",
    sound: `${Sound09}`,
  },
];

export const YoutubeList: YoutubeFeed[] = [
  {
    id: 1,
    img: `${Youtube01}`,
    artist: "Bailey McKee - Home (Hartshook Remix)",
    festival: "Imagine Music Festival",
    modalVideo: `${Festival01}`,
  },
  {
    id: 2,
    img: `${Youtube02}`,
    artist: "Venue Annoucement",
    festival: "Imagine Music Festival",
    modalVideo: `${Festival02}`,
  },
  {
    id: 3,
    img: `${Youtube03}`,
    artist: "Seven Lions, Jason Ross",
    festival: "Imagine Music Festival",
    modalVideo: `${Festival03}`,
  },
];

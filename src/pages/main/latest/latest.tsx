import * as C from "./style";
import { GlobalTitle } from "../../../components/title/title";
import { LatestMusic } from "./latestMusics";
import { LatestYoutube } from "./latestYoutube";
import TrackRight from "../assets/img/track-right.jpg";
import "./animation.css";

export const Latest = () => {
  return (
    <>
      <C.LatestTracks>
        <div className="latest__title">
          <GlobalTitle title="Lastest Tracks" description="Music Podcast" />
          <button>View All Tracks</button>
        </div>

        <div className="latest__contents">
          <LatestMusic />
          <figure className="latest__contents--pic">
            <img src={TrackRight} alt="Track-Right" />
          </figure>
        </div>
      </C.LatestTracks>
      <LatestYoutube />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

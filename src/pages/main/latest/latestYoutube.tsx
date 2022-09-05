import * as C from "./style";
import { GlobalTitle } from "../../../components/title/title";
import { YoutubeItem } from "./youtubeItems";

export const LatestYoutube = () => {
  return (
    <C.LatestYoutube>
      <GlobalTitle title="Youtube Feed" description="Latest Videos" />
      <YoutubeItem />
    </C.LatestYoutube>
  );
};

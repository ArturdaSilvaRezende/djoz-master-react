import * as C from "./style";
import { GlobalTitle } from "../../../components/title";
import { LatestYoutubeItem } from "./latestYoutubeItems";

export const LatestYoutube = () => {
  return (
    <C.LatestYoutube>
      <GlobalTitle title="Youtube Feed" description="Latest Videos" />
      <LatestYoutubeItem />
    </C.LatestYoutube>
  );
};

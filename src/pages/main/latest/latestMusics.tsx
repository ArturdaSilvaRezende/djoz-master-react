import * as C from "./style";
import { LatestList } from "./latestList";

export const LatestMusic = () => {
  return (
    <C.LatestMusic>
      {LatestList.map((item) => (
        <div className="latest__musics" key={item.id}>
          <h3>{item.name}</h3>
          <audio controls muted>
            <source src={item.sound} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      ))}
    </C.LatestMusic>
  );
};

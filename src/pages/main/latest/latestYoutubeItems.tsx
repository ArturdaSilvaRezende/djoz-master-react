import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { YoutubeList } from "./latestList";
import * as C from "./style";
import "../../../shared/style/modalAnimation.css";

export const LatestYoutubeItem = () => {
  const [latestYoutube, setLatestYoutube] = useState(YoutubeList);
  const [activeCard, setActiveCard] = useState(0);

  const handleShowCard = (cardId: number) => {
    setLatestYoutube((showCard) => {
      return showCard.map((card) => {
        if (card.id === cardId) {
          setActiveCard(cardId);
        }
        return card;
      });
    });
  };

  const handleHideCard = () => {
    setActiveCard(0);
  };

  return (
    <C.YoutubeItem>
      {latestYoutube.map((item, i) => (
        <figure key={item.id}>
          <img src={item.img} alt={item.artist} />
          <figcaption>
            <p>{item.artist}</p>
            <p>{item.festival}</p>
          </figcaption>
          <div className="youtubeFeed__btn">
            <button onClick={() => handleShowCard(item.id)}>
              <FaPlay />
            </button>
          </div>
          {activeCard === item.id && (
            <div className="youtubeFeed__container fadeIn">
              <div className="youtubeFeed__video">
                <video controls>
                  <source src={item.modalVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <button onClick={handleHideCard}>
                  <AiOutlineCloseCircle />
                </button>
              </div>
            </div>
          )}
        </figure>
      ))}
    </C.YoutubeItem>
  );
};

import { useCallback, useRef, MutableRefObject } from "react";
import * as C from "./style";
import { FaPlay } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { YoutubeList } from "./latestList";

export const LatestYoutubeItem = () => {
  const modalTargetRef = useRef<(HTMLDivElement | null)[]>([]);
  const modalVideoRef = useRef<(HTMLVideoElement | null)[]>([]);
  const openModalRef = useRef<(HTMLButtonElement | null)[]>([]);
  const closeModalRef = useRef<(HTMLButtonElement | null)[]>([]);
  const modalTarget = (modalTargetRef as MutableRefObject<HTMLDivElement[]>)
    .current;
  const videoTarget = (modalVideoRef as MutableRefObject<HTMLVideoElement[]>)
    .current;

  const openModal = useCallback(
    (i: number) => {
      if (openModalRef.current[i]) {
        modalTarget[i].classList.remove("zoomOut");
        modalTarget[i].style.display = "block";
        modalTarget[i].classList.add("zoomIn");
      }
    },
    [modalTarget]
  );

  const closeModal = useCallback(
    (i: number) => {
      if (closeModalRef.current[i]) {
        modalTarget[i].classList.remove("zoomIn");
        modalTarget[i].classList.add("zoomOut");
        videoTarget[i].pause();

        setTimeout(() => {
          modalTarget[i].style.display = "none";
        }, 1100);
      }
    },
    [modalTarget, videoTarget]
  );

  return (
    <C.YoutubeItem>
      {YoutubeList.map((item, i) => (
        <figure key={item.id}>
          <img src={item.img} alt={item.artist} />
          <figcaption>
            <p>{item.artist}</p>
            <p>{item.festival}</p>
          </figcaption>
          <div className="youtubeFeed__btn">
            <button
              ref={(element) => (openModalRef.current[i] = element)}
              onClick={() => openModal(i)}
            >
              <FaPlay />
            </button>
          </div>
          <div
            className="youtubeFeed__video"
            ref={(element) => (modalTargetRef.current[i] = element)}
          >
            <video
              controls
              ref={(element) => (modalVideoRef.current[i] = element)}
            >
              <source src={item.modalVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button
              ref={(element) => (closeModalRef.current[i] = element)}
              onClick={() => closeModal(i)}
            >
              <AiOutlineCloseCircle />
            </button>
          </div>
        </figure>
      ))}
    </C.YoutubeItem>
  );
};

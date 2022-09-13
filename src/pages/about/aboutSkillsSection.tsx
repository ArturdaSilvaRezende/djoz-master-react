import { MutableRefObject, useCallback, useRef, useState } from "react";
import * as C from "./style";
import { GlobalTitle } from "../../components/title";
import { SkillVideo } from "./SkillVideo";
import { FaPlay } from "react-icons/fa";

export const SkillsSection = () => {
  const SkillRef = useRef<HTMLDivElement | null>(null);
  const SkillVideoRef = useRef<HTMLVideoElement | null>(null);
  const [isModal, setIsModal] = useState(false);

  const showModal = useCallback(() => {
    if (SkillRef !== null) {
      const ref = SkillRef as MutableRefObject<HTMLDivElement>;
      if (isModal === false) {
        ref.current.classList.remove("zoomOut");
        ref.current.style.display = "block";
        ref.current.classList.add("zoomIn");
        return setIsModal(true);
      }
    }
  }, [isModal]);

  return (
    <C.SkillsSection>
      <C.Skills>
        <GlobalTitle title="Dj Alexandra Rud" description="DJ’s skill" />
        <p className="skills__description">
          DJ Rainflow knows how to move your mind, body and soul by delivering
          tracks that stand out from the norm.
        </p>
        <div className="skills">
          <p>
            <span>Perform</span>
            <span>95%</span>
          </p>
          <div className="skills__perform">
            <span></span>
          </div>
        </div>
        <div className="skills">
          <p>
            <span>Use Midi</span>
            <span>85%</span>
          </p>
          <div className="skills__useMidi">
            <span></span>
          </div>
        </div>
        <div className="skills">
          <p>
            <span>Remix and mash up</span>
            <span>98%</span>
          </p>
          <div className="skills__remix">
            <span></span>
          </div>
        </div>
      </C.Skills>
      <C.SkillsVideo>
        <div>
          <button onClick={showModal}>
            <FaPlay />
          </button>
        </div>
        <SkillVideo
          modalRef={SkillRef}
          modalVideoRef={SkillVideoRef}
          isModal={isModal}
          setIsModal={setIsModal}
        />
      </C.SkillsVideo>
    </C.SkillsSection>
  );
};

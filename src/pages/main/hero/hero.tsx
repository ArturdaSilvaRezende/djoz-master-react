import * as C from "./style";
import { GrPlayFill } from "react-icons/gr";

export const Hero = () => {
  return (
    <C.HeroSection>
      <div className="heroSection__description">
        <p>New Single</p>
        <p>
          <span>Feel the heart</span>
          <span>beats</span>
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="heroSection__btn">
          <button type="button">
            <GrPlayFill />
          </button>
        </div>
      </div>
    </C.HeroSection>
  );
};

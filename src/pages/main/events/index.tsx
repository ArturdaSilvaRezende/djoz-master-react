import * as C from "./style";
import { BsChevronDoubleDown } from "react-icons/bs";
import { EventsCarousel } from "./EventsCarousel";
import About from "../assets/img/about.png";

export const Events = () => {
  return (
    <C.EventsSection>
      <div className="events__arrow">
        <BsChevronDoubleDown />
      </div>

      <EventsCarousel />

      <figure className="events__about">
        <img src={About} alt="Dj Alexandra Rud" />
        <figcaption>
          <h2>Dj Alexandra Rud</h2>
          <p>
            DJ Rainflow knows how to move your mind, body and soul by delivering
            tracks that stand out from the norm. As if this impressive
            succession of high impact, floor-filling bombs wasn’t enough to
            sustain.
          </p>
          <button type="button">Contact Me</button>
        </figcaption>
      </figure>
    </C.EventsSection>
  );
};

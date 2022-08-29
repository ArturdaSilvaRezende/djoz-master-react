import * as C from "./style";
import Services01 from "../assets/img/service-1.png";
import Services02 from "../assets/img/service-2.png";
import Services03 from "../assets/img/service-3.png";
import Services04 from "../assets/img/service-4.png";

export const ServicesItems = () => {
  return (
    <C.ServicesItems>
      <figure>
        <img src={Services01} alt="services-01" />
        <figcaption>
          <h2>Wedding</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </p>
        </figcaption>
      </figure>
      <figure>
        <img src={Services02} alt="services-02" />
        <figcaption>
          <h2>Clubs and bar</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </p>
        </figcaption>
      </figure>
      <figure>
        <img src={Services03} alt="services-03" />
        <figcaption>
          <h2>Corporate events</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </p>
        </figcaption>
      </figure>
      <figure>
        <img src={Services04} alt="services-04" />
        <figcaption>
          <h2>DJ lessons</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </p>
        </figcaption>
      </figure>
    </C.ServicesItems>
  );
};

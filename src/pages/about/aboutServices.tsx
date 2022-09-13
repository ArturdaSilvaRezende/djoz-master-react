import Services01 from "./img/as-1.jpg";
import Services02 from "./img/as-2.jpg";
import Services03 from "./img/as-3.jpg";
import ServicesIcon01 from "./img/as-icon-1.png";
import ServicesIcon02 from "./img/as-icon-2.png";
import ServicesIcon03 from "./img/as-icon-3.png";

export const AboutServices = () => {
  return (
    <div className="aboutServices">
      <figure>
        <img src={Services01} alt="services-01" />

        <div>
          <img src={ServicesIcon01} alt="services-icon-01" />
        </div>

        <figcaption>
          <h3>Wedding</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </p>
        </figcaption>
      </figure>

      <figure>
        <img src={Services02} alt="services-02" />

        <div>
          <img src={ServicesIcon02} alt="services-icon-02" />
        </div>

        <figcaption>
          <h3>Clubs and bar</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </p>
        </figcaption>
      </figure>

      <figure>
        <img src={Services03} alt="services-03" />

        <div>
          <img src={ServicesIcon03} alt="services-icon-03" />
        </div>

        <figcaption>
          <h3>Corporate events</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </p>
        </figcaption>
      </figure>
    </div>
  );
};

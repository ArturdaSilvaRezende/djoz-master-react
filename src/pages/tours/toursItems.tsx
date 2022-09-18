import * as C from "./style";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import Tour01 from "./img/tour-1.jpg";
import Tour02 from "./img/tour-2.jpg";
import Tour03 from "./img/tour-3.jpg";

export const ToursItems = () => {
  return (
    <C.ToursItem>
      <div className="toursItems__box">
        <div className="toursItems__description">
          <h1>Untold Festival 2022</h1>
          <div className="toursItems__date">
            <div>
              <p>
                <MdOutlineWatchLater /> 8:00pm | Dec 15, 2022
              </p>
              <p>
                <FaMapMarkerAlt /> Funkhaus Berlin, Berlin, Germany
              </p>
            </div>
            <button type="button">$ 35,00</button>
          </div>

          <p>
            Held in Europe’s electronic music capital on New Year’s Eve, the
            seminal Funkhaus Berlin hosts an impressive roster of techno artists
            worthy.
          </p>

          <p>
            Soundtracking the leap from 2019 into 2020 in what is one of the
            most anticipated nights of the year, in one of the city’s most hyped
            venues, HYTE Berlin NYE is the
          </p>

          <button type="button">Buy Tickets</button>
        </div>
        <figure>
          <img src={Tour01} alt="tour-first" />
        </figure>
      </div>

      <div className="toursItems__box">
        <figure>
          <img src={Tour02} alt="tour-second" />
        </figure>

        <div className="toursItems__description">
          <h1>Untold Festival 2022</h1>
          <div className="toursItems__date">
            <div>
              <p>
                <MdOutlineWatchLater /> 8:00pm | Dec 15, 2022
              </p>
              <p>
                <FaMapMarkerAlt /> Funkhaus Berlin, Berlin, Germany
              </p>
            </div>
            <button type="button">$ 35,00</button>
          </div>

          <p>
            Held in Europe’s electronic music capital on New Year’s Eve, the
            seminal Funkhaus Berlin hosts an impressive roster of techno artists
            worthy.
          </p>

          <p>
            Soundtracking the leap from 2019 into 2020 in what is one of the
            most anticipated nights of the year, in one of the city’s most hyped
            venues, HYTE Berlin NYE is the
          </p>

          <button type="button">Buy Tickets</button>
        </div>
      </div>

      <div className="toursItems__box">
        <div className="toursItems__description">
          <h1>Untold Festival 2022</h1>
          <div className="toursItems__date">
            <div>
              <p>
                <MdOutlineWatchLater /> 8:00pm | Dec 15, 2022
              </p>
              <p>
                <FaMapMarkerAlt /> Funkhaus Berlin, Berlin, Germany
              </p>
            </div>
            <button type="button">$ 35,00</button>
          </div>

          <p>
            Held in Europe’s electronic music capital on New Year’s Eve, the
            seminal Funkhaus Berlin hosts an impressive roster of techno artists
            worthy.
          </p>

          <p>
            Soundtracking the leap from 2019 into 2020 in what is one of the
            most anticipated nights of the year, in one of the city’s most hyped
            venues, HYTE Berlin NYE is the
          </p>

          <button type="button">Buy Tickets</button>
        </div>

        <figure>
          <img src={Tour03} alt="tour-third" />
        </figure>
      </div>
    </C.ToursItem>
  );
};

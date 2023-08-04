import * as C from "./style";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsDribbble } from "react-icons/bs";
import { TbBrandTelegram } from "react-icons/tb";

export const Footer = () => {
  const DateNow = new Date();

  return (
    <C.Footer>
      <C.Container>
        <div className="footer__contact">
          <div>
            <p>
              <FaPhone />
            </p>
            <p>
              <span>Phone</span>
              <span>1-677-124-44227</span>
            </p>
          </div>
          <div>
            <p>
              <FaEnvelope />
            </p>
            <p>
              <span>Email</span>
              <span>DJ.Music@gmail.com</span>
            </p>
          </div>
        </div>
        <div className="footer__social">
          <h2>
            <span>dj</span>
            <span>oz</span>
          </h2>
          <nav>
            <ul>
              <li>
                <FaFacebookF />
              </li>
              <li>
                <BsTwitter />
              </li>
              <li>
                <BsInstagram />
              </li>
              <li>
                <BsDribbble />
              </li>
            </ul>
          </nav>
        </div>
        <form className="footer__newsletter">
          <h2>Stay With Me</h2>
          <div>
            <input type="email" placeholder="Email" />
            <button type="button">
              <TbBrandTelegram />
            </button>
          </div>
        </form>
      </C.Container>

      <div className="footer__copyright">
        <p>
          Copyright © {DateNow.getFullYear()} All rights reserved | This
          template is made with by
          <a href="https://colorlib.com/" target="_blank" rel="noreferrer">
            {" "}
            Colorlib
          </a>
        </p>
      </div>
    </C.Footer>
  );
};

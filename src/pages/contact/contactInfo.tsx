import * as C from "./style";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export const ContactInfo = () => {
  return (
    <C.ContactInfo>
      <h2>Contact info</h2>
      <p className="info__message">
        If you have any questions, please contact us.
      </p>

      <div className="info__item">
        <div className="info__icon">
          <FaMapMarkerAlt />
        </div>
        <div className="info__description">
          <h3>Address</h3>
          <p className="info__description--width">
            Los Angeles Gournadi, 1230 Bariasl
          </p>
        </div>
      </div>

      <div className="info__item">
        <div className="info__icon">
          <FaPhoneAlt />
        </div>
        <div className="info__description">
          <h3>Hotline</h3>
          <p>
            <span>1-677-124-44227 / </span> <span>1-688-356-66889</span>
          </p>
        </div>
      </div>

      <div className="info__item">
        <div className="info__icon">
          <HiMail />
        </div>
        <div className="info__description">
          <h3>Email</h3>
          <p>Support@gamail.com</p>
        </div>
      </div>
    </C.ContactInfo>
  );
};

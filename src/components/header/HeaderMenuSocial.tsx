import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsDribbble } from "react-icons/bs";

const HeaderMenuSocial = () => {
  return (
    <nav className="menu__social">
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
  );
};

export default HeaderMenuSocial;

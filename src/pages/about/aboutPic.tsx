import * as C from "./style";
import pic01 from "./img/ap-1.jpg";
import pic02 from "./img/ap-2.jpg";
import pic03 from "./img/ap-3.jpg";
import pic04 from "./img/ap-4.jpg";
import pic05 from "./img/ap-5.jpg";
import pic06 from "./img/ap-6.jpg";
import pic07 from "./img/ap-7.jpg";

export const AboutPic = () => {
  return (
    <C.AboutPic>
      <figure className="aboutpic__left">
        <div>
          <img src={pic01} alt="About-Pic-01" />
          <img src={pic02} alt="About-Pic-02" />
        </div>

        <img
          src={pic03}
          alt="About-Pic-03"
          className="aboutpic__featured-image"
        />
      </figure>

      <figure className="aboutpic__right">
        <div className="aboutpic__top">
          <img src={pic04} alt="About-Pic-04" />
          <img src={pic05} alt="About-Pic-05" />
        </div>
        <div className="aboutpic__bottom">
          <img src={pic06} alt="About-Pic-06" />
          <img src={pic07} alt="About-Pic-07" />
        </div>
      </figure>
    </C.AboutPic>
  );
};

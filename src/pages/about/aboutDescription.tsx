import * as C from "./style";
import AboutImage from "./img/about.png";
import Signature from "./img/signature.png";

export const AboutDescription = () => {
  return (
    <C.AboutDescription>
      <img src={AboutImage} alt="About" />
      <figcaption>
        <h2>He Heard Something That He Knew To Be Music</h2>
        <p>
          At vero eos et accusamus et iusto odi odgnissimos ducimus qui
          blanditiis praesentium volup tatum deleniti atque corrupti quos
          dolores et quas molestias excepturi sint occaecati cupiditate non
          provident, similique sunt in culpa qui officia deserunt mollitia animi
          quod justo pro an.
        </p>
        <img src={Signature} alt="signature" />
      </figcaption>
    </C.AboutDescription>
  );
};

import * as C from "./style";
import { Header } from "../../components/header";
import { Breadcrumbs } from "../../components/breadcrumbs";
import { ContactInfo } from "./contactInfo";
import { ContactForm } from "./contactForm";
import { Footer } from "../../components/footer";

export const Contact = () => {
  return (
    <C.Contact>
      <Header background="#290849" />

      <C.Container>
        <Breadcrumbs title="Contact" />

        <C.ContactContents>
          <ContactInfo />
          <ContactForm />
        </C.ContactContents>
      </C.Container>

      <Footer />
    </C.Contact>
  );
};

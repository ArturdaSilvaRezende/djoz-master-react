import { useState } from "react";
import * as C from "./style";
import { useForm, SubmitHandler } from "react-hook-form";
import useMask from "react-mask-hook";

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  textArea: string;
}

export const ContactForm = () => {
  const [value, setValue] = useState("");
  const maskProps = useMask({
    value,
    onChange: setValue,
    mask: "(##)-####-#####",
    placeholder: "_",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <C.ContactForm onSubmit={handleSubmit(onSubmit)}>
      <h2>Get in Touch</h2>
      <p>What did you think of our event? Say what your experience was.</p>
      <div className="form__item form__item--margin">
        <div>
          <label>First Name *</label>
          {errors.firstName && errors.firstName.type === "required" && (
            <span className="required-field">Required field</span>
          )}
          <input
            type="text"
            placeholder="First Name"
            {...register("firstName", { required: true })}
            maxLength={20}
            minLength={4}
          />
        </div>
        <div>
          <label>Last Name *</label>
          {errors.lastName && errors.lastName.type === "required" && (
            <span className="required-field">Required field</span>
          )}
          <input
            type="text"
            placeholder="Last Name"
            {...register("lastName", { required: true, maxLength: 20 })}
          />
        </div>
      </div>
      <div className="form__item">
        <div>
          <label>Email *</label>
          {errors.email && errors.email.type === "required" && (
            <span className="required-field">Required field</span>
          )}
          <input
            type="email"
            placeholder="exemple@exemple.com"
            {...register("email", { required: true, pattern: /.+@.+/ })}
          />
          {errors?.email?.type === "pattern" && (
            <div className="email-validation">
              Email should be in exemple@exemple.com format.
            </div>
          )}
        </div>
      </div>
      <div className="form__item">
        <div>
          <label>Phone *</label>
          {errors.phone && errors.phone.type === "required" && (
            <span className="required-field">Required field</span>
          )}
          <input type="text" required {...maskProps} />
        </div>
      </div>
      <div className="form__item">
        <div>
          <label>Message *</label>
          {errors.email && errors.email.type === "required" && (
            <span className="required-field">Required field</span>
          )}
          <textarea
            cols={30}
            rows={10}
            placeholder="comment"
            {...register("textArea", { required: true })}
          ></textarea>
        </div>
      </div>

      <button type="submit">Send Message</button>
    </C.ContactForm>
  );
};

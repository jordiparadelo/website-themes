import React from "react";
import { useDataContext } from "../../DataContext";
// // Styles
// import "./Newsletter_v3.scss";

const Newsletter_v3 = () => {
  const { form, content } = useDataContext();

  // Form
  const Form = () => (
    <form className="contact-form">
      {form.inputs.map(({ label, type }, index) => (
        <label
          key={label + index}
          className="input-group"
          data-input="email"
        >
          {label}
          <input
            type={type}
            label={label}
            placeholder="jhondoe@gmail.com"
            required
          />
        </label>
      ))}
      <div className="form_conditions">
        {Object.values(form.formConditions).map(
          (condition) => condition.available && condition.render()
        )}
      </div>
      <div className="input-group" data-input="submit">
        <button type="submit">Get more info</button>
      </div>
    </form>
  );

  return (
    <>
      <header className="header">
        <div className="header_title">
          <span>{content.tag}</span>
          <h2>{content.title}</h2>
        </div>
        <Form />
      </header>
      <picture className="cover-image">
        <img
          src={content.image.src}
          alt={content.image.alt}
          width="300px"
          height="300px"
        />
      </picture>
    </>
  );
};

export default Newsletter_v3;

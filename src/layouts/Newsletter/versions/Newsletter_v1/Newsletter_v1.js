import React, { useRef } from "react";
import { useDataContext } from "../../DataContext";
// // Styles
// import "./Categories_v1.scss";

const Categories_v1 = () => {
  const { form, content } = useDataContext();
  const inputRef = useRef(null);

  // Methods
  function handleFocus({ type, currentTarget }) {
    const hasValue = currentTarget.value ? true : false;
    const FOCUS_TYPE = {
      focus: true,
      blur: false,
    };
    console.log({ hasValue, type: FOCUS_TYPE[type] });
    hasValue
      ? (inputRef.current.dataset.focused = "true")
      : (inputRef.current.dataset.focused = `${FOCUS_TYPE[type]}`);
  }

  // Form
  const Form = () => (
    <form className="contact-form">
      {form.inputs.map(({ label, type }) => (
        <label
          key={label}
          className="input-group"
          data-input="email"
          ref={inputRef}
          // data-focused={inputFocused}
        >
          {label}
          <input
            type={type}
            label={label}
            placeholder="jhondoe@gmail.com"
            onFocus={handleFocus}
            onBlur={handleFocus}
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
      <picture className="cover-image">
        <img
          src={content.image.src}
          alt={content.image.alt}
          width="300px"
          height="300px"
        />
      </picture>
      <header className="header">
        <div className="header_title">
          <span>{content.tag}</span>
          <h2>{content.title}</h2>
        </div>
        <Form />
      </header>
    </>
  );
};

export default Categories_v1;

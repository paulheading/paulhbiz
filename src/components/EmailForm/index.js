import React, { useState } from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { Button, Alert } from "react-bootstrap";

function EmailForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [formSuccess, setFormSuccess] = useState(false);

  function encode(data) {
    return Object.keys(data).map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&");
  }

  const onSubmit = form => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...form })
    })
    .then(() => setFormSuccess(true))
    .catch(error => alert(error));
  };

  return (
    <div className="component email-form">
      <div className="email-form__container">
        <div className="email-form__wrap">
          {formSuccess && <Alert variant="success" onClose={() => setFormSuccess(false)} dismissible>sent!</Alert>}
          <div className="email-form__topbar">
            <div className="topbar__btn close-btn"></div>
            <div className="topbar__btn minimise-btn"></div>
          </div>
          <form
            className="email-form__content"
            onSubmit={handleSubmit(onSubmit)}
            // duplicate below @ public/index.html
            data-netlify="true"
            name="contact"
            method="post"
          >
            <div className="email-form__row tag">
              <div className="field-title">To</div>
              <div className="field-value tag">hello@paulh.biz</div>
            </div>
            <div className="email-form__row input">
              <label className="field-title">Subject</label>
              <input
                className="field-value subject"
                placeholder="Hey there!"
                {...register("subject")}
                type="text"
              />
            </div>
            <div className="email-form__row input">
              <label className="field-title">From</label>
              <input
                {...register("from", { required: true })}
                placeholder="friendly@visitor.org"
                className="field-value email"
                type="text"
              />
            </div>
            {errors.from && <span>This field is required</span>}
            <div className="email-form__row text-field">
              <textarea
                {...register("message")}
                placeholder="Message"
                rows="4"
              />
            </div>
            <div className="email-form__row submit">
              <Button variant="link" type="submit">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(EmailForm);

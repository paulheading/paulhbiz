import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Alert } from "react-bootstrap";

export default function EmailForm() {
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
      <div className="container email-form">
        <div className="wrap email-form">
          {formSuccess && <Alert variant="success" onClose={() => setFormSuccess(false)} dismissible>sent!</Alert>}
          <div className="topbar email-form">
            <div className="btn close-btn"></div>
            <div className="btn minimise-btn"></div>
          </div>
          <form
            className="form email-form"
            onSubmit={handleSubmit(onSubmit)}
            // duplicate below @ public/index.html
            data-netlify="true"
            name="contact"
            method="post"
          >
            <div className="row email-form --tag">
              <div className="field-title">To</div>
              <div className="field-value tag">hello@paulh.biz</div>
            </div>
            <div className="row email-form --input">
              <label className="field-title">Subject</label>
              <input
                className="field-value subject"
                placeholder="Hey there!"
                {...register("subject")}
                type="text"
              />
            </div>
            <div className="row email-form --input">
              <label className="field-title">From</label>
              <input
                {...register("from", { required: true })}
                placeholder="friendly@visitor.org"
                className="field-value email"
                type="text"
              />
            </div>
            {errors.from && <span>This field is required</span>}
            <div className="row email-form --text-field">
              <textarea
                {...register("message")}
                placeholder="Message"
                rows="4"
              />
            </div>
            <div className="row email-form --submit">
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

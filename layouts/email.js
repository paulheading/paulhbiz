import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Alert } from "react-bootstrap";

export default function EmailLayout() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [formSuccess, setFormSuccess] = useState(false);
  const encode = data => Object.keys(data).map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&");

  const onSubmit = form => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...form })
    })
    .then(() => setFormSuccess(true))
    .catch(error => alert(error));
  };

  const print = {
    error: {
      from: () => {
        const type = errors.from.type;
        if (type === "pattern") {
          return "This email address isn't valid";
        }
        if (type === "required") {
          return "Please fill in your email address";
        }
      }
    }
  }

  return (
    <div className="component email-block">
      <div className="container email-block">
        <div className="wrap email-block">
          {formSuccess && <Alert variant="success" onClose={() => setFormSuccess(false)} dismissible>sent!</Alert>}
          <div className="topbar email-block">
            <div className="btn close-btn"></div>
            <div className="btn minimise-btn"></div>
          </div>
          <form
            className="form email-block"
            onSubmit={handleSubmit(onSubmit)}
            data-netlify="true"
            name="contact"
            method="post">
            <div className="row email-block --tag">
              <div className="field-title">To</div>
              <div className="field-value tag">hello@paulh.biz</div>
            </div>
            <div className="row email-block --input">
              <label className="field-title">Subject</label>
              <input
                className="field-value subject"
                placeholder="Hey there!"
                {...register("subject")}
                type="text"
              />
            </div>
            <div className="row email-block --input">
              <label className="field-title">From</label>
              <input
                {...register("from", { 
                  required: true, 
                  pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ 
                })}
                placeholder="friendly@visitor.org"
                className="field-value email"
                type="text"
              />
              {errors.from && <div className="alert email-block --from">{ print.error.from() }</div>}
            </div>
            
            <div className="row email-block --text-field">
              <textarea
                {...register("message")}
                placeholder="Message"
                rows="4"
              />
            </div>
            <div className="row email-block --submit">
              <Button className="submit-email" variant="link" type="submit">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

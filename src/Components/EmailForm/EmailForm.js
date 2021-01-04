import React from "react";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";

function EmailForm() {
  return (
    <div className="component-email-form">
      <div className="email-form__container">
        <div className="email-form__wrap">
          <div className="email-form__topbar">
            <div className="topbar__btn close-btn"></div>
            <div className="topbar__btn minimise-btn"></div>
          </div>
          <form className="email-form__content" method="post">
            <input type="hidden" name="form-name" value="contact" />
            <div className="email-form__row tag">
              <div className="field-title">To</div>
              <div className="field-value tag">hello@paulh.biz</div>
            </div>
            <div className="email-form__row input">
              <label className="field-title">Subject</label>
              <input
                placeholder="Hey there!"
                className="field-value"
                name="subject"
                type="text"
              />
            </div>
            <div className="email-form__row input">
              <label className="field-title">From</label>
              <input
                placeholder="friendly@visitor.org"
                className="field-value"
                name="from"
                type="text"
              />
            </div>
            <div className="email-form__row text-field">
              <textarea placeholder="Message" name="message" rows="4" />
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

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(EmailForm);

import React from "react";
import { connect } from "react-redux";
import { useForm } from 'react-hook-form';
// import Button from "react-bootstrap/Button";

function EmailForm() {
  const { register, handleSubmit, watch, errors } = useForm();

  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const onSubmit = event => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "hookTest", event })
    }).then(data => console.log('form data: ', data)).catch(error => alert(error))
  }

  console.log(watch('example'));

  return (
    <form data-netlify="true" name="contact" method="post" onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" name="form-name" value="contact" />
      <input name="example" defaultValue="test" ref={register} type="text" />
      <input name="exampleRequired" ref={register({ required: true })} type="text" />
      {errors.exampleRequired && <span>This field is required</span>}
      <input type="submit" />
    </form>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(EmailForm);
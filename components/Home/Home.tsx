import Alert from "@/stories/Alert";
import React from "react";
import Form from "../Form";
import InputField from "../InputField";

const Home = () => {
  const handleSubmit = (formData: any) => {
    console.log("Form submitted:", formData);
  };
  return (
    <div>
      <p className="text-lg text-red-600">Home page...</p>
      <Alert message="Hi alert test" value={8} />
      <h1>Register form</h1>
      <Form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message" rows={4} />
        </label>
      </Form>
    </div>
  );
};

export default Home;

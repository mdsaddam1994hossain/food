import Alert from "@/stories/Alert";
import React from "react";

import InputField from "../InputField";

const Home = () => {
  const handleSubmit = (formData: any) => {
    console.log("Form submitted:", formData);
  };
  return (
    <div>
      <p className="text-lg text-red-600">Home page...</p>
      <Alert message="Hi alert test" value={8} />
      
      
    </div>
  );
};

export default Home;

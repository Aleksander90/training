import React from "react";
import { Title } from "./components/Title";
import { Input } from "./components/Input";

function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <Title text="ceva"></Title>
      <Input label="Eu am label" />
      <Input label="Email address" type="email" />
      <Input
        label="Phone number"
        placeholder="112"
        error="Invalid phone number"
        type="number"
      />
      <Input placeholder="Type here" error="This field is required" />
      <Input
        label="I agree to the terms and conditions"
        type="checkbox"
        error="You must agree"
      />
    </div>
  );
}

export default App;

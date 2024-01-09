import React from "react"; // in fiecare componenta
import { Label } from "./Label";
import { Error } from "./Error";

export function Input({ label, error, type, placeholder, disabled }) {
  return (
    <div>
      {label && <Label text={label} />}
      <Label text="Input label" />
      <input type={type} placeholder={placeholder} disabled={disabled} />
      {error && <Error message={error} />}
    </div>
  );
}

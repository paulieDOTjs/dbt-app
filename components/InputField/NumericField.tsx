import React from "react";

type NumericFieldProps = {
  title: string;
};

export const NumericField: React.FC<NumericFieldProps> = (props) => {
  return (
    <>
      <label htmlFor="quantity">Quantity (between 1 and 5)</label>
      <input type="number" id="quantity" name="quantity" min="1" max="10" />
    </>
  );
};

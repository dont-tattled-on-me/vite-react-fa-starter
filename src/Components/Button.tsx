import React from "react";

interface props {
  class: string | undefined;
  set: React.Dispatch<React.SetStateAction<number>>;
  count: number;
}

export const Button = (prop: props) => {
  return (
    <>
      <button
        className={prop.class}
        onClick={() => {
          prop.set(prop.count + 1);
        }}
      >
        Button
      </button>
    </>
  );
};

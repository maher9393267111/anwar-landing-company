import React from "react";
import { cva } from "class-variance-authority";

const varientObj = {
  variants: {
    /* button colors */
    intent: {
      primary: "bg-primaryColor-900 hover:bg-primaryColor-800 text-white",
      secondary: "bg-secondaryColor-900 hover:bg-secondaryColor-800 text-white",
      light: "bg-lightColor-800 hover:bg-lightColor-900",
    },

    /* button sizes */
    size: {
      small: ["text-sm", "py-2", "px-2"],
      medium: ["text-base", "py-2", "px-4"],
      large: ["text-lg", "py-4", "px-8"],
      tag: ["text-sm", "py-2", "px-6"],
    },

    /* button roundness */
    roundness: {
      square: "rounded-none",
      round: "rounded-md",
      pill: "rounded-full",
      tag: "rounded-3xl",
    },
  },

  // defaults
  defaultVariants: {
    intent: "primary",
    size: "medium",
    roundness: "round",
  },
};

const Button = ({ intent, size, roundness, children, className, ...props }) => {
  // Define the default classes for the button
  const defaultClasses =
    "py-1 px-4 inline-flex flex-shrink-0 justify-center items-center border border-transparent" +
    " " +
    className;

  const ButtonVariants = cva(defaultClasses, varientObj);
  return (
    <button
      type="button"
      className={ButtonVariants({ intent, size, roundness })} // Combine default and custom classes
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

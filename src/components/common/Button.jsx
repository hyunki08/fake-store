import { memo } from "react";

const config = {
  filled:
    "rounded-full bg-[rgb(138,207,237)] transition-all hover:bg-[rgb(54,97,235)] hover:text-[rgb(240,240,240)]",
  outline:
    "rounded-full border-2 border-solid border-[rgb(180,180,180)] transition-all hover:border-none hover:bg-[rgb(54,97,235)] hover:text-[rgb(240,240,240)]",
};

const Button = memo(
  ({ children, className, type, disabled = false, filled = false }) => {
    return (
      <button
        className={`${className} ${filled ? config.filled : config.outline}`}
        type={type}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export default Button;

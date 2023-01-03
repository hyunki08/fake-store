import { memo } from "react";

const labelConfig = {
  defaultLine: "border-[rgb(180,180,180)]",
  errorLine: "border-[rgb(252,13,27)]",
  defaultText: "text-[rgb(180,180,180)] peer-focus:text-[rgb(100,100,100)]",
  errorText: "text-[rgb(252,13,27)] peer-focus:text-[rgb(252,13,27)]",
};

const Label = memo(({ name, error }) => {
  return (
    <>
      <label
        className={`absolute top-[-0.7rem] left-[1.05rem] select-none transition-all peer-focus:text-[rgb(100,100,100)] ${
          error ? labelConfig.errorText : labelConfig.defaultText
        }`}
      >
        {name}
      </label>
      <fieldset
        className={`pointer-events-none absolute top-0 right-0 bottom-0 left-0 rounded-lg border-2 border-solid ${
          error ? labelConfig.errorLine : labelConfig.defaultLine
        }`}
      >
        <legend className="invisible ml-2 h-1 px-2">{name}</legend>
      </fieldset>
    </>
  );
});
Label.displayName = "InputLabel";

const Input = memo(({ onChange, value, name, placeholder, type, error }) => {
  return (
    <>
      <input
        className="peer h-full w-full px-4 py-3 text-[rgb(34,34,34)] transition-all focus:outline-0"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={type === "password" ? "off" : "on"}
      />
      <Label name={name} error={error} />
    </>
  );
});
Input.displayName = "Input";

export default Input;

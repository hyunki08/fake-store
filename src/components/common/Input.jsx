import { memo } from "react";

const Label = memo(({ name }) => {
  return (
    <>
      <label className="absolute top-[-0.7rem] left-[1.05rem] select-none text-[rgb(180,180,180)] transition-all peer-focus:text-[rgb(100,100,100)]">
        {name}
      </label>
      <fieldset className="pointer-events-none absolute top-0 right-0 bottom-0 left-0 rounded-lg border-2 border-solid border-[rgb(180,180,180)]">
        <legend className="invisible ml-2 h-1 px-2">{name}</legend>
      </fieldset>
    </>
  );
});
Label.displayName = "InputLabel";

const Input = memo(({ onChange, value, name, placeholder, type }) => {
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
      <Label name={name} />
    </>
  );
});
Input.displayName = "Input";

export default Input;

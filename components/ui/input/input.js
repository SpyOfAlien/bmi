import cn from "classnames";

const Input = ({ placeHolder, required = false, onInputChange, cl = "" }) => {
  return (
    <input
      className={cn(
        "text-black-9 focus:outline-none border border-input border-solid rounded-xs p-3 w-full",
        cl
      )}
      placeholder={placeHolder}
      required={required}
      onChange={onInputChange}
    />
  );
};

export default Input;

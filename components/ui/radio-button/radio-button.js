import cn from "classnames";
import { useState, useEffect } from "react";
import s from "./radio-button.module.css";

const RadioButton = ({ children, onCheck }) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    onCheck(checked);
  }, [checked]);

  return (
    <div>
      <span
        className={cn(
          "relative inline-block w-4 h-4 rounded-full border border-solid border-input mr-2 cursor-pointer",
          checked && s.checked
        )}
        onClick={() => setChecked(!checked)}
      ></span>
      <span className="text-black-9">{children}</span>
    </div>
  );
};

export default RadioButton;

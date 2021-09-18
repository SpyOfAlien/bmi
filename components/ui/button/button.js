import ArrowRight from "../../icons/arrow-right";
import cn from "classnames";

const Button = ({ children, onClickBtn, cl = "" }) => {
  return (
    <button
      onClick={onClickBtn}
      className={cn(
        "flex justify-between items-center border px-8 py-3 rounded-xs hover:shadow-md",
        cl
      )}
    >
      <span className="mr-2">{children}</span>
      <span>
        <ArrowRight />
      </span>
    </button>
  );
};

export default Button;

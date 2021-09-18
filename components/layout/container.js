import cn from "classnames";

const Container = ({ children, cl = "" }) => {
  return (
    <div
      className={cn("px-8 md:px-16 lg:px-24 xl:px-48 2xl:px-54 3xl:px-60", cl)}
    >
      {children}
    </div>
  );
};

export default Container;

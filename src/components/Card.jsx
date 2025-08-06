const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`card bg-custom-gradient rounded-xl items-center justify-center md:p-1 3xl:p-4 m-2 ${className} drop-shadow-[2px_4px_6px_black]`}
    >
      {children}
    </div>
  );
};

export default Card;

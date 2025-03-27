const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`card bg-custom-gradient rounded-xl items-center justify-center p-4 m-2 border-2 border-[var(--color-fifth-border)] ${className} drop-shadow-[2px_4px_6px_black]`}
    >
      {children}
    </div>
  );
};

export default Card;

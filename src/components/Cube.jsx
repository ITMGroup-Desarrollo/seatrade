export default function Cube({
  delay,
  bottom = "auto",
  top = "auto",
  left = "auto",
  right = "auto",
  height,
  width,
  angulo = "0deg",
}) {
  // console.log(delay);

  return (
    <div
      className="absolute animated-cube"
      style={{
        animationDelay: `${delay}s`,
        top,
        bottom,
        left,
        right,
        height,
        width,
        rotate: `${angulo}`,
      }}
    ></div>
  );
}

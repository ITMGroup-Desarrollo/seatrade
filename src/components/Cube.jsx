export default function Cube({ delay, bottom, left, height, width }) {
  // console.log(delay);

  return (
    <div
      className="absolute animated-cube"
      style={{
        animationDelay: `${delay}s`,
        bottom,
        left,
        height,
        width,
      }}
    ></div>
  );
}

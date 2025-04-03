import Cube from "./Cube";

export default function CubeAnimation() {
  return (
    <>
      <Cube delay={0.2} bottom="10em" left="10em" height="35px" width="35px" />
      <Cube delay={1} bottom="15em" left="20em" height="55px" width="55px" />
      <Cube delay={0.5} bottom="10em" left="30em" height="35px" width="35px" />
      <Cube delay={0.5} bottom="25em" left="100em" height="35px" width="35px" />
      <Cube delay={0.5} bottom="10em" left="80em" height="55px" width="55px" />
    </>
  );
}

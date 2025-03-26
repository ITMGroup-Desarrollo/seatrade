import usePort from "../hooks/use-port";
export default function Pax() {
  const pax = usePort((state) => state.port.pax);
  return <div>{pax}</div>;
}

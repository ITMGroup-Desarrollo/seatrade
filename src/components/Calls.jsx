import usePort from "../hooks/use-port";

export default function Calls() {
  const calls = usePort((state) => state.port.calls);
  return (
    <div>
      <h2>{calls} </h2>
    </div>
  );
}

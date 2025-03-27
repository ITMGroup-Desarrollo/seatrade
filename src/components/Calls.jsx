import usePort from "../hooks/use-port";
import AnimatedNumber from "../components/AnimatedNumber";

export default function Calls() {
  const calls = usePort((state) => state.port.calls);

  return (
    <div>
      <h2><AnimatedNumber value={calls} duration={500} /></h2>
    </div>
  );
}

import usePort from "../hooks/use-port";
import AnimatedNumber from "../components/AnimatedNumber";

export default function Pax() {
  const pax = usePort((state) => state.port.pax);

  return (
    <div className="pb-3">
      <h2>
        <AnimatedNumber value={pax} duration={500} />
      </h2>
    </div>
  );
}

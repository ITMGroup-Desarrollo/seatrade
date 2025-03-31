import usePort from "../hooks/use-port";
import AnimatedNumber from "../components/AnimatedNumber";

export default function Calls() {
  const calls = usePort((state) => state.port.calls);

  return (
    <div className="relative flex flex-col items-center">
      <h2 className="pb-4">
        <AnimatedNumber value={calls} duration={500} />
      </h2>
      <div className="absolute bottom-0 left-1/2 w-1/2 h-[2px] animated-border transform -translate-x-1/2"></div>
    </div>
  );
}

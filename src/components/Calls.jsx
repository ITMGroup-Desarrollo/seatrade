import usePort from "../hooks/use-port";

export default function Calls() {
  const port = usePort((state) => state.port);
  const increasePopulation = usePort((state) => state.increasePopulation);

  return (
    <>
      <h2>{port} bears around here...</h2>
      <button className="cursor-pointer" onClick={increasePopulation}>
        one up
      </button>
    </>
  );
}

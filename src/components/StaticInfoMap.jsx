import Card from "./Card";
import Separador from "./Separador";
import AnimatedNumber from "../components/AnimatedNumber";
import happyIcon from "../assets/images/icon-happy.svg";
export default function StaticInfoMap() {
  return (
    <div className="pl-8 flex absolute bottom-0 w-full justify-around">
      <Card className=" flex w-2/4 mr-10">
        <div className="flex items-center">
          <div className="text-5xl mr-2 text-white font-bold">
            <AnimatedNumber value={1646} duration={1500} />
          </div>
          <div className="flex flex-col uppercase font-bold mt-1">
            <span className="text-sm text-[var(--color-blue-text)] leading-none">
              Total
            </span>
            <span className="text-sm text-[var(--color-blue-text)] leading-none">
              Calls
            </span>
          </div>
        </div>

        <Separador />

        <div className="flex items-center">
          <div className="text-5xl mr-2 text-white font-bold">
            <AnimatedNumber value={6358445} duration={2200} />
          </div>
          <div className="flex flex-col uppercase font-bold mt-1">
            <span className="text-sm text-[var(--color-blue-text)] leading-none">
              Total
            </span>
            <span className="text-sm text-[var(--color-blue-text)] leading-none">
              pax
            </span>
          </div>
        </div>
      </Card>
      <Card className=" flex w-1/4 mr-10">
        <div className="flex items-center">
          <div className="text-5xl mr-2 text-white font-bold">
            <AnimatedNumber value={7} duration={1000} />
          </div>
          <div className="flex flex-col uppercase font-bold mt-1">
            <span className="text-sm text-[var(--color-blue-text)] leading-none">
              cruise port
            </span>
            <span className="text-sm text-[var(--color-blue-text)] leading-none">
              destinations
            </span>
          </div>
        </div>

        <Separador />

        <div className="flex items-center">
          <div className="text-5xl mr-2 text-white font-bold">
            <AnimatedNumber value={3} duration={700} />
          </div>
          <div className="flex flex-col uppercase font-bold mt-1">
            <span className="text-sm text-[var(--color-blue-text)] leading-none">
              countries
            </span>
          </div>
        </div>
      </Card>
      <Card className=" flex w-1/4">
        <div className="flex items-center">
          <div className="text-5xl mr-6 text-white font-bold">
            <img
              src={happyIcon.src}
              width={45}
              alt="Happy Icon"
              className="drop-shadow-[0_0_5px_#54c0e8]"
            />
          </div>
          <div>
            <div>
              <p className="text-base text-[var(--color-blue-text)] leading-none font-bold uppercase">
                satisfaction rate
              </p>
            </div>
            <div className="flex uppercase font-bold">
              <div className="text-4xl mr-2 text-white font-bold leading-none">
                <p className="leading-none">
                  <AnimatedNumber value={96} duration={1500} />%
                </p>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-xs text-white leading-none">
                  satisfied
                </span>
                <span className="text-xs text-white leading-none">
                  & very satisfied
                </span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

import Card from "./Card";
import Separador from "./Separador";
import AnimatedNumber from "../components/AnimatedNumber";
import happyIcon from "../assets/images/icon-happy.svg";
export default function StaticInfoMap() {
  return (
    <div className="pl-8 flex absolute bottom-0 w-full justify-around">
      <Card className=" flex w-3/8 3xl:w-2/4 mr-5 3xl:mr-10">
        <div className="flex items-center">
          <div className="text-3xl 3xl:text-5xl  mr-2 text-white font-bold">
            <AnimatedNumber value={1646} duration={1500} />
          </div>
          <div className="flex flex-col uppercase font-bold mt-1">
            <span className="text-xs 3xl:text-xl text-[var(--color-blue-text)] leading-none">
              Total
            </span>
            <span className="text-xs 3xl:text-xl text-[var(--color-blue-text)] leading-none">
              Calls
            </span>
          </div>
        </div>

        <Separador className="mx-3"/>

        <div className="flex items-center">
          <div className="text-3xl 3xl:text-5xl mr-2 text-white font-bold">
            <AnimatedNumber value={6358445} duration={2200} />
          </div>
          <div className="flex flex-col uppercase font-bold mt-1">
            <span className="text-xs 3xl:text-xl text-[var(--color-blue-text)] leading-none">
              Total
            </span>
            <span className="text-xs 3xl:text-xl text-[var(--color-blue-text)] leading-none">
              pax
            </span>
          </div>
        </div>
      </Card>
      <Card className=" flex w-1/4 mr-5 3xl:mr-10">
        <div className="flex items-center">
          <div className="text-3xl 3xl:text-5xl mr-2 text-white font-bold">
            <AnimatedNumber value={7} duration={1000} />
          </div>
          <div className="flex flex-col uppercase font-bold mt-1">
            <span className="text-xs 3xl:text-xl text-[var(--color-blue-text)] leading-none">
              cruise port
            </span>
            <span className="text-xs 3xl:text-xl text-[var(--color-blue-text)] leading-none">
              destinations
            </span>
          </div>
        </div>

        <Separador className="mx-2" />

        <div className="flex items-center">
          <div className="text-3xl 3xl:text-5xl mr-2 text-white font-bold">
            <AnimatedNumber value={3} duration={700} />
          </div>
          <div className="flex flex-col uppercase font-bold mt-1">
            <span className="text-xs 3xl:text-xl text-[var(--color-blue-text)] leading-none">
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
              <p className="text-xs 3xl:text-base text-[var(--color-blue-text)] leading-none font-bold uppercase">
                satisfaction rate
              </p>
            </div>
            <div className="flex uppercase font-bold">
              <div className="text-2xl 3xl:text-4xl mr-2 text-white font-bold leading-none">
                <p className="leading-none">
                  <AnimatedNumber value={96} duration={1500} />%
                </p>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-tiny 3xl:text-xs text-white leading-none">
                  satisfied
                </span>
                <span className="text-tiny 3xl:text-xs text-white leading-none">
                  &&nbsp;very&nbsp;satisfied
                </span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

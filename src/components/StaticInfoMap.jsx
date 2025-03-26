import Card from "./Card";
import Separador from "./Separador";
import happyIcon from "../assets/images/icon-happy.svg";
export default function StaticInfoMap() {
  return (
    <div class="pl-8 flex absolute bottom-0 w-full justify-around">
      <Card className=" flex w-2/4 mr-10">
        <div class="flex items-center">
          <div class="text-5xl mr-2 text-white font-bold">1,646</div>
          <div class="flex flex-col uppercase font-bold mt-1">
            <span class="text-sm text-[var(--color-blue-text)] leading-none">
              Total
            </span>
            <span class="text-sm text-[var(--color-blue-text)] leading-none">
              Calls
            </span>
          </div>
        </div>

        <Separador />

        <div class="flex items-center">
          <div class="text-5xl mr-2 text-white font-bold">6,358,445</div>
          <div class="flex flex-col uppercase font-bold mt-1">
            <span class="text-sm text-[var(--color-blue-text)] leading-none">
              Total
            </span>
            <span class="text-sm text-[var(--color-blue-text)] leading-none">
              pax
            </span>
          </div>
        </div>
      </Card>
      <Card className=" flex w-1/4 mr-10">
        <div class="flex items-center">
          <div class="text-5xl mr-2 text-white font-bold">7</div>
          <div class="flex flex-col uppercase font-bold mt-1">
            <span class="text-sm text-[var(--color-blue-text)] leading-none">
              cruise port
            </span>
            <span class="text-sm text-[var(--color-blue-text)] leading-none">
              destinations
            </span>
          </div>
        </div>

        <Separador />

        <div class="flex items-center">
          <div class="text-5xl mr-2 text-white font-bold">3</div>
          <div class="flex flex-col uppercase font-bold mt-1">
            <span class="text-sm text-[var(--color-blue-text)] leading-none">
              countries
            </span>
          </div>
        </div>
      </Card>
      <Card className=" flex w-1/4">
        <div class="flex items-center">
          <div class="text-5xl mr-2 text-white font-bold">
            <img
              src={happyIcon.src}
              width={45}
              alt="Happy Icon"
              className="drop-shadow-[0_0_5px_#54c0e8]"
            />
          </div>
          <div>
            <div>
              <p class="text-base text-[var(--color-blue-text)] leading-none font-bold uppercase">
                satisfaction rate
              </p>
            </div>
            <div class="flex uppercase font-bold">
              <div class="text-4xl mr-2 text-white font-bold leading-none">
                <p className="leading-none">96%</p>
              </div>
              <div className="flex flex-col justify-center">
                <span class="text-xs text-white leading-none">satisfied</span>
                <span class="text-xs text-white leading-none">
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

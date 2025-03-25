import Card from "./Card";
import Separador from "./Separador";
export default function StaticInfoMap() {
  return (
    <div class="px-8 flex absolute bottom-0 w-full">
      <Card className=" flex">
        <div class="flex items-center">
          <div class="text-5xl mr-2 text-white font-bold">15,412</div>
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
          <div class="text-5xl mr-2 text-white font-bold">62,655,524</div>
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
      <Card className=" flex">
        <div class="flex items-center">
          <div class="text-5xl mr-2 text-white font-bold">7</div>
          <div class="flex flex-col uppercase font-bold mt-1">
            <span class="text-sm text-[var(--color-blue-text)] leading-none">
              cruise port
            </span>
            <span class="text-sm text-[var(--color-blue-text)] leading-none">
              destination
            </span>
          </div>
        </div>

        <Separador />

        <div class="flex items-center">
          <div class="text-5xl mr-2 text-white font-bold">3</div>
          <div class="flex flex-col uppercase font-bold mt-1">
            <span class="text-sm text-[var(--color-blue-text)] leading-none">
              countrys
            </span>
          </div>
        </div>
      </Card>
      <Card className=" flex">
        <div class="flex items-center">
          <div class="text-5xl mr-2 text-white font-bold">
            <img
              src="src\assets\images\icon-happy.svg"
              width={45}
              alt="Happy Icon"
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

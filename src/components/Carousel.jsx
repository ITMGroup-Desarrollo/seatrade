export default function Carousel() {
  return (
    <div className="grid grid-rows-1 grid-cols-4 h-full">
      <div className="col-span-1 grid grid-cols-1 grid-rows-3 bg-blue-200  h-full p-3 py-4 gap-2">
        <div className="row-span-1 bg-amber-50 grid grid-cols-2 grid-rows-1 rounded-xl">
          <div className="col-span-1 justify-center self-center text-center rounded-xl h-full w-auto">
            <img
              src="src/assets/dominican-flag.svg"
              alt="dominican-flag"
              className="h-full w-auto"
            />
          </div>
          <div className="col-span-1 justify-center self-center text-left text-lg font-semibold">
            DOMINICAN REPUBLIC
          </div>
        </div>
        <div className="row-span-1 bg-amber-100 grid grid-cols-2 grid-rows-1 rounded-xl">
          <div className="self-center text-center flex flex-row justify-center items-center">
            <img
              src="src/assets/instagram-white.svg"
              alt="instagram"
              className="w-16 ml-6 "
            />
            <p className="text-white text-5xl font-thin opacity-70 self-center mb-3 ml-6">
              |
            </p>
          </div>
          <div className="self-center text-center text-6xl justify-center flex mb-2 font-semibold">
            <p>9K</p>
          </div>
        </div>
        <div className="row-span-1 bg-amber-50 rounded-xl flex items-center justify-center">
          <a href="http://instagram.com/tainobayport/" className="">
            <p className=" text-3xl font-semibold">@TAINOBAYPORT</p>
          </a>
        </div>
      </div>
      <div className="bg-blue-800 col-span-3 h-full">ddd</div>
    </div>
  );
}

import EuropaImgPng from "../../assets/destination/image-europa.png";
import EuropaImgWebp from "../../assets/destination/image-europa.webp";
import MarsImgPng from "../../assets/destination/image-mars.png";
import MarsImgWebp from "../../assets/destination/image-mars.webp";
import moonImgPng from "../../assets/destination/image-moon.png";
import moonImgWebp from "../../assets/destination/image-moon.webp";
import TitanImgPng from "../../assets/destination/image-titan.png";
import TitanImgWebp from "../../assets/destination/image-titan.webp";

export const Planets = () => {
  const buttons = ["Moon", "Mars", "Europa", "Titan"];

  return (
    <section className="text-white flex flex-col items-center w-11/12">
      <figure className="size-64 flex justify-center items-center">
        <img
          src={moonImgWebp.src}
          className="size-44"
          alt="Imagen de la luna"
        />
      </figure>
      <div className="flex gap-6">
        {buttons.map((button) => {
          return (
            <button
              className="text-sm tracking-[2.3px] font-barlow text-[#D0D6F9] uppercase"
              key={button}
            >
              {button}
            </button>
          );
        })}
      </div>
      <article className="flex flex-col items-center py-8">
        <h2 className="font-bellefair text-[56px] uppercase">Moon</h2>
        <p className="text-center font-barlow text-[#D0D6F9]">
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
        </p>
      </article>
      <div className="w-11/12 h-[1px] bg-[#383B4B]"></div>
      <article className="flex flex-col item-center gap-8 py-8">
        <div className="flex flex-col gap-3">
          <p className="text-center font-barlow text-[#D0D6F9] text-sm tracking-[2.3px] uppercase">
            Avg. Distance
          </p>
          <p className="font-bellefair text-[28px] uppercase text-center">
            384, 400 km
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-center font-barlow text-[#D0D6F9] text-sm tracking-[2.3px] uppercase">
            Est. travel time
          </p>
          <p className="font-bellefair text-[28px] uppercase text-center">
            3 days
          </p>
        </div>
      </article>
    </section>
  );
};

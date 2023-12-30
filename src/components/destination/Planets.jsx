import { useState } from "react";
import "../../styles/global.css";
import EuropaImgWebp from "../../assets/destination/image-europa.webp";
import MarsImgWebp from "../../assets/destination/image-mars.webp";
import moonImgWebp from "../../assets/destination/image-moon.webp";
import TitanImgWebp from "../../assets/destination/image-titan.webp";

export const Planets = () => {
  const [currentPlanet, setCurrentPlanet] = useState("moon");
  const buttons = ["moon", "mars", "europa", "titan"];

  const planets = {
    moon: {
      imgWebp: moonImgWebp.src,
      name: "moon",
      description: `See our planet as you’ve never seen it before. A perfect relaxing trip
      away to help regain perspective and come back refreshed. While you’re
      there, take in some history by visiting the Luna 2 and Apollo 11
      landing sites.`,
      distance: "384, 400 km",
      time: "3 days",
    },
    mars: {
      imgWebp: MarsImgWebp.src,
      name: "mars",
      description:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 MIL. km",
      time: "9 months",
    },
    europa: {
      imgWebp: EuropaImgWebp.src,
      name: "europa",
      description:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 MIL. km",
      time: "3 years",
    },
    titan: {
      imgWebp: TitanImgWebp.src,
      name: "titan",
      description:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 BIL. km",
      time: "7 years",
    },
  };

  const changePlanet = (planet) => {
    setCurrentPlanet(planet);
  };

  return (
    <section className="text-white flex flex-col items-center w-11/12">
      <figure className={`size-64 flex justify-center items-center visible`}>
        <img
          src={planets[currentPlanet].imgWebp}
          className="size-44"
          alt={planets[currentPlanet].name}
        />
      </figure>
      <div className="flex gap-6">
        {buttons.map((button) => {
          return (
            <button
              className={`text-sm tracking-[2.3px] font-barlow text-[#D0D6F9] uppercase pb-2 border-b-2 border-transparent${
                button === currentPlanet ? "border-[#D0D6F9]" : ""
              }`}
              key={button}
              value={button}
              onClick={() => changePlanet(button)}
            >
              {button}
            </button>
          );
        })}
      </div>
      <article className="flex flex-col items-center py-8">
        <h2 className="font-bellefair text-[56px] uppercase">
          {planets[currentPlanet].name}
        </h2>
        <p className="text-center font-barlow text-[#D0D6F9]">
          {planets[currentPlanet].description}
        </p>
      </article>
      <div className="w-11/12 h-[1px] bg-[#383B4B]"></div>
      <article className="flex flex-col item-center gap-8 py-8">
        <div className="flex flex-col gap-3">
          <p className="text-center font-barlow text-[#D0D6F9] text-sm tracking-[2.3px] uppercase">
            Avg. Distance
          </p>
          <p className="font-bellefair text-[28px] uppercase text-center">
            {planets[currentPlanet].distance}
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-center font-barlow text-[#D0D6F9] text-sm tracking-[2.3px] uppercase">
            Est. travel time
          </p>
          <p className="font-bellefair text-[28px] uppercase text-center">
            {planets[currentPlanet].time}
          </p>
        </div>
      </article>
    </section>
  );
};

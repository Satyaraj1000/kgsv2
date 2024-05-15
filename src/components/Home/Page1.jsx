import React, { useRef } from "react";
import {
  ArrowDownAZIcon,
  BellElectricIcon,
  BusFrontIcon,
  Dna,
  FlaskConical,
  Globe,
  GraduationCapIcon,
  Laptop2,
  LocateFixed,
  MicroscopeIcon,
  Music2,
  PersonStandingIcon,
  Ruler,
  SearchX,
  TelescopeIcon,
} from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Page1 = () => {
  const container = useRef(null);
  const t1 = gsap.timeline();

  // useGSAP(
  //   () => {
  //     t1.from("#slidedown", {
  //       y: 10,
  //       opacity: 0,
  //       duration: 1,
  //     });
  //     t1.from("#slidefromleft", {
  //       x: -10,
  //       opacity: 0,
  //     });
  //     t1.from("#popup", {
  //       y: 100,
  //       stagger: 0.1,
  //       opacity: 0,
  //     });
  //   },
  //   { scope: container }
  // );

  return (
    <div ref={container} className="relative">
      <div className="absolute -z-10 bg-sky-200 w-full h-full xl:w-1/2 lg:h-full pt-10">
        <div className="absolute w-1/3 md:w-1/2 h-2/3 left-0 -top-[40%] rounded-full bg-white"></div>
        <div className="absolute w-16 md:w-32 h-3/4 bottom-0 right-10 rounded-full bg-white"></div>
      </div>
      {/* <div id="popup" className="p-5 z-50">
        <span className="space-x-5 font-bold text-sky-900 text-5xl flex items-center font-[Cardo-Bold]">
          KAPOL GLOBAL ACADEMY
          <p className="font-medium text-sm md:text-md lg:text-4xl">(IGCSE)</p>
        </span>
        <h1 className="text-3xl">(our sister concern school)</h1>
      </div> */}
      <div className="w-full h-full flex flex-col lg:flex-row  items-center md:space-y-0 md:space-x-2 lg:space-x-4 z-50">
        <div
          id="slidefromleft"
          className="w-full h-1/2 lg:h-full lg:w-1/2 text-3xl p-5 md:p-10 space-y-3 md:space-y-6"
        >
          <div className="font-bold text-bluekga md:text-6xl lg:text-7xl tracking-tighter">
            <h1>
              EMPOWERING <br /> MINDS <br /> TO EXCEL <br />
              IN LIFE
            </h1>
          </div>
        </div>
        <div className="w-full lg:h-screen lg:w-3/4">
          <div className="relative w-full h-full">
            <img
              id="popup"
              className="lg:absolute bottom-0 left-0 w-3/4 "
              src="/assets/images/boy.png"
              alt=""
            />
            <div className="hidden md:block">
              <div className="absolute top-0 right-0 flex w-full h-full">
                <div
                  id="popup"
                  className="absolute top-[10%] left-[50%] w-24 h-24 bg-[#ED7B21] mix-blend-multiply rounded-full flex items-center justify-center"
                >
                  <GraduationCapIcon className="text-white animate-pulse delay-1000 w-full h-[60%]" />
                </div>
                <div
                  id="popup"
                  className="absolute top-[15%] left-[58%] w-32 h-32 bg-[#F6AF1A] mix-blend-multiply rounded-full flex items-center justify-center"
                >
                  <FlaskConical className="text-white animate-pulse delay-1000 w-full h-[60%]" />
                </div>
                <div
                  id="popup"
                  className="absolute top-[28%] left-[58%] w-32 h-32 bg-[#35B3AA] mix-blend-multiply rounded-full flex items-center justify-center"
                >
                  <Globe className="text-white animate-pulse delay-1000 w-full h-[60%]" />
                </div>
                <div
                  id="popup"
                  className="absolute top-[20%] left-[49%] w-24 h-24 bg-[#DF4989] mix-blend-multiply rounded-full flex items-center justify-center"
                >
                  <BellElectricIcon className="text-white animate-pulse delay-1000 w-full h-[60%]" />
                </div>
                <div
                  id="popup"
                  className="absolute top-[35%] left-[51%] w-20 h-20 bg-[#1FB4EA] mix-blend-multiply rounded-full flex items-center justify-center"
                >
                  <Laptop2 className="text-white animate-pulse delay-1000 w-full h-[60%]" />
                </div>
                <div
                  id="popup"
                  className="absolute top-[20%] left-[69%] w-28 h-28 bg-[#2382C3] mix-blend-multiply rounded-full flex items-center justify-center"
                >
                  <MicroscopeIcon className="text-white animate-pulse delay-1000 w-full h-[60%]" />
                </div>
                <div
                  id="popup"
                  className="absolute top-[38%] left-[66%] w-24 h-24 bg-[#ADCC37] mix-blend-multiply rounded-full flex items-center justify-center"
                >
                  <PersonStandingIcon className="text-white animate-pulse delay-1000 w-full h-[60%]" />
                </div>
                <div
                  id="popup"
                  className="absolute top-[38%] left-[75%] w-16 h-16 bg-[#ADCC37] mix-blend-multiply rounded-full flex items-center justify-center"
                >
                  <LocateFixed className="text-white animate-pulse delay-1000 w-full h-[60%]" />
                </div>
                <div
                  id="popup"
                  className="absolute top-[33%] left-[80%] w-10 h-10 bg-[#EC7221] mix-blend-multiply rounded-full flex items-center justify-center"
                >
                  <SearchX className="text-white animate-pulse delay-1000 w-full h-[60%]" />
                </div>
                <div
                  id="popup"
                  className="absolute top-[18%] left-[79%] w-20 h-20 bg-[#37B0A4] mix-blend-multiply rounded-full flex items-center justify-center"
                >
                  <Dna className="text-white animate-pulse delay-1000 w-full h-[60%]" />
                </div>
                <div
                  id="popup"
                  className="absolute top-[18%] left-[45%] w-10 h-10 bg-[#DF4989] mix-blend-multiply rounded-full flex items-center justify-center"
                >
                  <Music2 className="text-white animate-pulse delay-1000 w-full h-[60%]" />
                </div>
                <div
                  id="popup"
                  className="absolute top-[15%] left-[42%] w-8 h-8 bg-[#C3D42E] mix-blend-multiply rounded-full flex items-center justify-center"
                >
                  <BusFrontIcon className="text-white animate-pulse delay-1000 w-full h-[60%]" />
                </div>
                <div
                  id="popup"
                  className="absolute top-[22%] left-[41%] w-12 h-12 bg-[#F8B719] mix-blend-multiply rounded-full flex items-center justify-center"
                >
                  <Ruler className="text-white animate-pulse delay-1000 w-full h-[60%]" />
                </div>
                <div
                  id="popup"
                  className="absolute top-[13%] left-[72%] w-12 h-12 bg-[#EF7121] mix-blend-multiply rounded-full flex items-center justify-center"
                >
                  <TelescopeIcon className="text-white animate-pulse delay-1000 w-full h-[60%]" />
                </div>
                <div
                  id="popup"
                  className="absolute top-[10%] left-[76%] w-8 h-8 bg-[#C3D42E] mix-blend-multiply rounded-full flex items-center justify-center"
                >
                  <ArrowDownAZIcon className="text-white animate-pulse delay-1000 w-full h-[60%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;

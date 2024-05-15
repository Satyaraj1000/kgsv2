import React from "react";

const Director = () => {
  return (
    <>
      <section className="relative mt-2 w-full h-auto">
        <div className="absolute -z-10 w-full h-full bg-red-400 overflow-hidden rounded-lg">
          <div className="absolute w-1/4 h-1/5 bg-white top-28 rounded-xl left-24"></div>
        </div>
        <div className=" rounded-xl">
          <div className="w-full h-full p-10 lg:p-28">
            <div className="flex w-full justify-between items-center">
              <h1 className="font-bold text-3xl xl:text-6xl text-pink">
                MADE
                <br />
                FOR GLOBAL
                <br />
                CITIZENS
              </h1>
              {/* <div>
                <img className="w-28 lg:w-52" src="src/assets/lamp.png" alt="" />
              </div> */}
            </div>
            <p className="mt-10 text-sm md:text-lg font-semibold">
              With an enduring focus on shaping the educational landscape of our
              institution, I am inspired by the vision that propels us forward -
              a vision rooted in excellence, innovation, and a dedication to
              preparing students for a world without boundaries.
              <br />
              <br />
              At Kapol Global Academy (IGCSE), we espouse the internationally
              acclaimed IGCSE curriculum renowned for its rigour, profound depth
              and steadfast emphasis on critical thinking prowess. Through our
              esteemed partnership with CIE (Cambridge International
              Examinations), we aim to nurture global citizens - individuals
              equipped with the requisite skills, knowledge, and mindset to
              thrive in an interconnected and ever-evolving global milieu. We
              ardently champion <br /> experiential learning and the practical
              application of knowledge within authentic contexts, empowering our
              students to traverse the horizon <br /> of tomorrow with
              unwavering poise and integrity.
              <br />
              <br />
              I cordially invite you to join us in sculpting the next epoch of
              world leaders and trailblazers.
              <br />
              <br />
              Warm regards,
              <br />
              <br />
              <b>Dr. Reshma Hegde</b>
              <br />
              Director of Academics
              <br />
              Kapol Global Academy (IGCSE)
            </p>
            <img
              className="absolute bottom-0 right-0 w-40 lg:w-96"
              src="/assets/Director_of_Academia.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Director;

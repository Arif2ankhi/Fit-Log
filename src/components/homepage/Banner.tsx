import Image from "next/image";
import React from "react";
import bannerImg from "@/assets/banner.png";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="px-4 py-8 md:px-8">
      <div className="container mx-auto overflow-hidden rounded-3xl bg-slate-600 via-blue-50 to-indigo-100 shadow-lg">
        <div className="grid min-h-[450px] items-center md:grid-cols-2">
          <div className="px-6 py-10 text-center md:px-12 md:text-left lg:px-16">
            <span className="text-[#c2f800]">WORKOUT LIBRARY</span>

            <h2 className="text-xl font-bold leading-tight text-white md:text-3xl lg:text-5xl">
              TRAIN WITH INTENT. LOG
              <br />
              EVERY SET.
            </h2>

            <p className="mt-5 max-w-lg text-base leading-7 text-white-600 md:text-lg">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it{" "}
              <br />
              into today's plan, and watch the week's work add up.
            </p>

            <Link href="/workouts">
           
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
                <button className="btn btn-primary rounded-xl  px-7 shadow-md text-black font-bold bg-[#C2F800]">
                  BROWSE WORKOUTS
                </button>
              </div>
            </Link>
          </div>

          <div className="relative flex rounded-2xl items-end justify-center px-6 md:min-h-[450px]">
            <div className="absolute h-64 w-64 rounded-2xl mb-8 bg-emerald-300/50 blur-3xl md:h-80 md:w-80" />

            <Image
              src={bannerImg}
              alt="Books in  a bookshelf"
              priority
              className="relative z-10 h-auto w-full max-w-md object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

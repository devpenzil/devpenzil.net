import Link from "next/link";
import React from "react";

function SpotLight() {
  return (
    <div className=" pb-20 ">
      <div className="flex justify-between">
        <div className="md:text-8xl text-4xl font-bold md:leading-[120px]">
          I&apos;m Ajo. <br /> I <span className="text-green-500">Plan</span>,
          <span className="text-purple-500">Build</span> and{" "}
          <span className="text-amber-500">Deploy</span> <br /> Apps
        </div>
      </div>

      <div className="mt-6 flex flex-row gap-8">
        <a href="https://cal.com/ajoalex/30min">
          <div className="bg-slate-800 py-3 px-8 rounded-full text-white font-semibold ring-4 ring-slate-800 hover:ring-offset-4 transition duration-150">
            Book a Meeting
          </div>
        </a>
        <Link href="/projects">
          <div className="bg-gray-100 py-3 px-8 rounded-full text-slate-800 font-semibold hover:ring-4 hover:ring-slate-800 hover:ring-offset-4 transition duration-150">
            View my works
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SpotLight;

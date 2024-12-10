"use client";
import { textVariant } from "@/app/utils/motion";
import { motion } from "framer-motion";
import React from "react";
import { BallCanvas } from "./canvas";
import { artists } from "@/app/constants";



const Home = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className="sectionHeadText text-center">Welcome User!</h2>
        <h2 className="sectionHeadText text-center">This month stats: </h2>

        {/* Cards Section */}
        <div className="flex justify-center gap-8 mt-8">
          {/* Card 1: Hours Listened */}
          <div className="bg-gray-200 shadow-lg rounded-lg p-6 flex flex-col items-center justify-center w-56">
            <div className="text-3xl font-bold text-blue-600">
              1782 min
            </div>
            <div className="text-lg text-gray-600 mt-2">
              ~29.7 days
            </div>
            <div className="text-yellow-500 text-4xl mt-2">
              ☀️
            </div>
            <p className="text-gray-500 text-sm mt-2">Monthly Listening Time</p>
          </div>

          {/* Card 2: Profile Views */}
          <div className="bg-gray-200 shadow-lg rounded-lg p-6 flex flex-col items-center justify-center w-56">
            <div className="text-3xl font-bold text-green-600">
              172
            </div>
            <div className="text-gray-500 text-4xl mt-2">
              👁️
            </div>
            <p className="text-gray-500 text-sm mt-2">Monthly Profile Views</p>
          </div>
        </div>

        <p className="styles.sectionSubText text-center mt-8">
          Followed Artists Releases:
        </p>

        <div className="flex flex-row flex-wrap justify-center gap-10">
			{artists.map((artist) => (
				<div className="w-28 h-28" key={artist.name}>
					<BallCanvas icon={artist.icon} />
				</div>
			))}
		</div>
      </motion.div>
    </>
  );
};

export default Home;

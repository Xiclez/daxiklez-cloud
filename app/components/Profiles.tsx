"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { profiles } from "../constants";
import { fadeIn, textVariant } from "@/app/utils/motion";

type ProfileCardProps = {
  index: number;
  name: string;
  genre: string;
  followers: number;
  tracks: number;
  avatar: string;
  link: string;
};

const ProfileCard = ({
  index,
  name,
  genre,
  followers,
  tracks,
  avatar,
  link,
}: ProfileCardProps) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-5 rounded-3xl xs:w-[320px] w-full"
  >
    <div className="flex items-center gap-4">
      <Image
        src={avatar}
        width={60}
        height={60}
        alt={`Avatar of ${name}`}
        className="w-16 h-16 rounded-full object-cover"
      />
      <div>
        <p className="text-white font-bold text-[20px]">{name}</p>
        <p className="text-secondary text-[14px]">{genre}</p>
      </div>
    </div>

    <div className="mt-4">
      <p className="text-secondary text-[14px]">
        Followers: <span className="text-white">{followers}</span>
      </p>
      <p className="text-secondary text-[14px]">
        Tracks: <span className="text-white">{tracks}</span>
      </p>
    </div>

    <div className="mt-4">
      <Link href={link} target="_blank">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
          Visit Profile
        </button>
      </Link>
    </div>
  </motion.div>
);

const Profiles = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className="padding bg-tertiary rounded-2xl min-h-[300px]">
        <motion.div variants={textVariant()}>
          <h2 className="sectionHeadText">Profiles you follow</h2>
          <p className="sectionSubText">and our suggestions for you in between</p>
        </motion.div>
      </div>
      <div className="paddingX -mt-20 pb-14 flex flex-wrap gap-7">
        {profiles.map((profile, index) => (
          <ProfileCard key={`profile-${index}`} index={index} {...profile} />
        ))}
      </div>
    </div>
  );
};

export default Profiles;

import Image from "next/image";
import React from "react";

const VideoFrame = ({ src }: { src: string }) => {
  return (
    <video
      src={src}
      autoPlay
      muted
      playsInline
      className="-mt-28 backdrop-blur-lg w-[900px] pb-24"
    >
      Your browser does not support the video tag.
    </video>
  );
};

const HeroSection = () => {
  return (
    <section className="flex h-screen bg-black">
      <div className="flex flex-col justify-center items-center h-full w-full gap-1">
        <h1 className="text-4xl font-bold text-white">MacBook Pro</h1>
        <Image
          alt="headline text"
          src={"/macheadline.png"}
          aria-label="supercharged by m4"
          width={850}
          height={480}
          className="-mt-34"
        />
        <VideoFrame src={"/slideopen.mp4"} />
      </div>
    </section>
  );
};

export default HeroSection;

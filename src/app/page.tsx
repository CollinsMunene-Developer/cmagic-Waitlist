"use client"
import {frame1} from "../../src/app/assets/images/frames/frames"
import Image from "next/image";
import {background1} from "./assets/images/Background/background";
import {featuredicon3} from "./assets/icons/featuredicons/featuredicons"
export default function Home() {
  return (
    <div className="">
         <h1>collins is great </h1>
         <Image src={featuredicon3} alt="featured icons" />
         <Image src={frame1} alt="" />
         <Image src={background1} alt="" />
         <h1>collins is great </h1>
         <p>collins is tring to develop in devcontainers</p>
         <h1>collins is great </h1>
         <p>collins is tring to develop in devcontainers</p>
         <h1>collins is great </h1>
         <p>collins is tring to develop in devcontainers</p>

</div>

  );
}

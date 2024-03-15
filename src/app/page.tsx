import FinalChart from "@/components/Charts/FinalChart/FinalChart";
import LocationChart from "@/components/Charts/LocationChart/LocationChart";
import GenderChart from "@/components/Charts/gendarChart/GenderChart";
import HeaderPage from "@/components/Home/Header";
import Testimonial from "@/components/Home/Testimonial";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {

  return (
    <main className="">
      <HeaderPage />
      <GenderChart />
      <LocationChart />
      <FinalChart />
      <Testimonial />
    </main >
  );
}

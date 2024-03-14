import ChartOne from "@/components/Charts/ChartOne";
import HeaderPage from "@/components/Home/Header";
import Testimonial from "@/components/Home/Testimonial";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {

  return (
    <main className="">
      <HeaderPage />
      <ChartOne />
      <Testimonial />
    </main >
  );
}

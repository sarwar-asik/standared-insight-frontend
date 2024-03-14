/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function Footer() {
    return (
        <div>
            {/* footer */}
            <div className="bg-neutral-700 rounded-tr-[158px] relative pt-[66px] mt-[92px] w-full">
                <div className="w-full flex md:gap-4 gap-8 sm:justify-between flex-col md:flex-row max-w-screen-2xl mx-auto pb-[76px] sm:pl-12 sm:pr-12 px-5 lg:pr-[152px]">
                    <div className="flex flex-col gap-4 justify-start">
                        <h1 className="text-4xl text-white font-playFairDisplay tracking-[0.01] w-fit cursor-pointer">
                            Dream Agency
                        </h1>
                        <p className="text-base max-w-[439px] w-full text-white font-hindVadodara leading-[159.3%] font-normal tracking-wide">
                            Lorem Ipsum has been the industry&apos;s standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of
                            type and scrambled it to make a type specimen book. It has
                            survived not only five centuries.
                        </p>
                        <p className="text-base text-white font-hindVadodara leading-[159.3%] font-semibold tracking-wide uppercase">
                            GET IN TOUCH
                        </p>
                        <div className="flex">
                            <input
                                type="email"
                                name="email"
                                className="bg-transparent p-3 border focus:outline-none border-white text-white"
                                placeholder="Enter Your Email"
                                id="email"
                                autoComplete="off"
                            />
                            <button
                                className="max-w-[143px] py-3.5 w-full flex justify-center items-center !bg-white text-base !text-black font-semibold font-hindVadodara leading-[159.3%] tracking-wide rounded-none"

                            >Send</button>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="max-w-[197px] w-full flex flex-col justify-start px-2.5 py-[7px] bg-white shadow-4xl absolute top-[26px] left-8">
                            <p className="font-bold text-[#414141] text-base leading-[134.8%]">
                                Texas
                            </p>
                            <p className="font-normal text-[#414141] text-base leading-[134.8%]">
                                United States
                            </p>
                            <p className="font-normal text-[#51A0DC] text-sm leading-[159.8%] cursor-pointer">
                                View Larger Map
                            </p>
                        </div>
                        <img src={"https://www.tailwindtap.com/assets/dreamagency/mapImage.svg"} alt="map" />
                    </div>
                </div>
            </div>
        </div>
    )
}

"use client";

import {SparklesCore} from "@/components/ui/sparkles";
import {BackgroundBeams} from "@/components/ui/background-beams";
import {StickyScroll} from "@/components/ui/sticky-scroll-reveal";
import {EvervaultCard, Icon} from "@/components/ui/evervault-card";
import {Spotlight} from "@/components/ui/spotlight";
import {TextRevealCard, TextRevealCardTitle, TextRevealCardDescription} from "@/components/ui/text-reveal-card";
import {Boxes} from "@/components/ui/background-boxes";
import {cn} from "@/utils/cn";
import {useState} from "react";

const scrollContent = [
    {
        title: "Unique Active Users",
        description:
            "We are the largest GPU producer in both retail and institutional markets. We have a large user base, and we are the only company that can provide affordable yet performant integrated GPUs.",
    },
    {
        title: "Our technology",
        description: "No more discrete GPUs, no more expensive GPUs, no more power-hungry GPUs. We've developed a revolutionary technology that allows us to integrate GPUs into CPUs, and we are proud to announce that we are the first GPU company in the NEAR ecosystem to do so.",
    },
    {
        title: "Our vision",
        description: "We are not just a GPU company. We are a technology company. We are building a new world, a world where everyone can afford to have a powerful GPU, a world where everyone can afford to have a powerful computer, a world where everyone can afford to have a powerful life.",
    },
    {
        title: "Our mission",
        description: "Our mission is to make the world a better place by providing good GPUs not only to gamers, but to everyone. We believe that everyone deserves to have a good GPU, and we are working hard to make that happen.",
    },
];

export default function Home() {
    const [isSwapped, setSwapped] = useState(false);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-neutral-950">
            <div className="h-screen w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20"
                    fill="white"
                />
                <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
                    INTEAR <span className="text-neutral-500">IS INSIDE</span>
                </h1>
                <div className="w-[80rem] h-40 relative">
                    {/* Gradients */}
                    <div
                        className="absolute inset-x-40 top-0 bg-gradient-to-r from-transparent via-neutral-500 to-transparent h-[2px] w-3/4 blur-sm"/>
                    <div
                        className="absolute inset-x-40 top-0 bg-gradient-to-r from-transparent via-neutral-500 to-transparent h-px w-3/4"/>
                    <div
                        className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[5px] w-1/4 blur-sm"/>
                    <div
                        className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-px w-1/4"/>

                    {/* Core component */}
                    <SparklesCore
                        background="transparent"
                        minSize={0.4}
                        maxSize={1}
                        particleDensity={1200}
                        className="w-full h-full"
                        particleColor="#FFFFFF"
                    />

                    {/* Radial Gradient to prevent sharp edges */}
                    <div
                        className="absolute inset-0 w-full h-full bg-neutral-950 [mask-image:radial-gradient(150px_100px_at_top,transparent_20%,white)] md:[mask-image:radial-gradient(350px_150px_at_top,transparent_20%,white)] lg:[mask-image:radial-gradient(550px_200px_at_top,transparent_20%,white)]"></div>
                </div>
            </div>

            <div className="flex flex-row justify-between w-[85%] overflow-x-scroll overflow-y-hidden min-w-[400px]">
                <div
                    className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
                    <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black"/>
                    <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black"/>
                    <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black"/>
                    <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black"/>

                    <EvervaultCard text="Shill"/>

                    <h2 className="dark:text-white text-black mt-4 text-sm font-light">
                        your favorite GPU vendor on <a className="text-blue-500"
                        href={"https://near.social/slimedragon.near/widget/ShillGPU"}>ShillGPU</a> and
                        increase your bag.
                    </h2>
                </div>

                <div
                    className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
                    <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black"/>
                    <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black"/>
                    <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black"/>
                    <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black"/>

                    <EvervaultCard text="Lock"/>

                    <h2 className="dark:text-white text-black mt-4 text-sm font-light">
                        LP of your memecoin, and <a className="text-blue-500" href={"https://near.social/slimedragon.near/widget/LockLP"}>check</a> if LP of a memecoin is locked. (not audited yet)
                    </h2>
                </div>

                <div
                    className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
                    <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black"/>
                    <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black"/>
                    <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black"/>
                    <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black"/>

                    <EvervaultCard text="Setup"/>

                    <h2 className="dark:text-white text-black mt-4 text-sm font-light">
                        a <a href="https://t.me/intearbot" className="text-blue-500">bot</a> on telegram that notifies about token buys, potlock donations, helps distribute tokens to the community, and it&apos;s completely free!
                    </h2>
                </div>
            </div>

            <p className="text-neutral-500 text-center mt-8">
                We&apos;re conducting groundbreaking research on efficiency of integrated GPUS <span
                className="text-neutral-900">but will probably rug before everything is done.</span>
            </p>

            <div className="w-screen h-[40rem] mt-28">
                <StickyScroll content={scrollContent}/>
            </div>

            <div className="flex items-center justify-center bg-[#0E0E10] h-[40rem] rounded-2xl w-full mt-28">
                <TextRevealCard
                    text="Invest in the future"
                    revealText="Buy the shitcoin"
                >
                    <TextRevealCardTitle>
                        You don&apos;t know the future
                    </TextRevealCardTitle>
                    <TextRevealCardDescription>
                        But we all know you have INTEL GPU
                    </TextRevealCardDescription>
                </TextRevealCard>
            </div>

            <div
                className="h-96 relative w-full overflow-hidden bg-neutral-950 flex flex-col items-center justify-center rounded-lg mt-28">
                <div
                    className="absolute inset-0 w-full h-full bg-neutral-950 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none"/>

                <Boxes/>
                <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
                    And that&apos;s not all
                </h1>
                <p className="text-center mt-2 text-neutral-300 relative z-20">
                    We will build other small useful products with $INTEAR used for fees
                </p>
            </div>

            <div
                className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased mt-28">
                <div className="max-w-2xl mx-auto">
                    <div className={isSwapped ? "hidden" : "block"}>
                        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-500  text-center font-sans font-bold">
                            Join the waitlist
                        </h1>
                        <p></p>
                        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                            We will notify you when our new GPUs launch, and when someone pays us to send you promotions.
                        </p>
                        <input
                            type="text"
                            placeholder="you@example.com"
                            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 p-3"
                            onMouseEnter={() => {
                                setSwapped(true);
                            }}
                        />
                    </div>
                    <div className={cn(isSwapped ? "flex" : "hidden", "flex-col items-center justify-center")}>
                        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-500  text-center font-sans font-bold">
                            Buy the GPU
                        </h1>
                        <p></p>
                        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                            In the token selection menu, type &quot;intel.tkn.near&quot; and click &quot;Add Token&quot;
                        </p>
                        <button
                            className="z-20 relative w-[6rem] inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-2"
                            onClick={() => window.open("https://app.ref.finance/#near|intel.tkn.near", "_blank")}>
                            <span
                                className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#EEEEEE_0%,#666666_50%,rgba(0,0,0,0)_75%,rgba(0,0,0,0)_90%,#EEEEEE_100%)]"/>
                            <span
                                className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-neutral-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                                BUY NOW
                        </span>
                        </button>
                    </div>
                </div>
                <BackgroundBeams/>
            </div>
            <div className="flex flex-row justify-around flex-wrap w-[90vw]">
                <a href={"https://t.me/intelnear"} className="m-5">
                    <img src={"tg.png"} className="w-[100px]" />
                </a>
                <a href={"https://twitter.com/intelnear"} className="m-5">
                    <img src={"x.png"} className="w-[100px]" />
                </a>
                <a href={"https://dexscreener.com/near/refv1-4663"} className="m-5">
                    <img src={"dexscreener.svg"} className="w-[100px]" />
                </a>
            </div>
        </main>
    );
}

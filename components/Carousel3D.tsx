"use client";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { GrPrevious, GrNext } from "react-icons/gr";
// eslint-disable-next-line import/no-named-as-default
import DotPattern from "./ui/dot-pattern";
import RadialGradient from "./ui/radial-gradient";
import NavBar from "./NavBar";
import Link from "next/link";

interface Carousel3DProps {
    works: {
        title: string;
    category: string;
    date: string;
    href: string;
    pictures: StaticImageData;
    }[]
  }

const Carousel3D = ({works}: Carousel3DProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const outerBoxRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const rotationStep = 360 / (works?.length || 1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleScroll = useCallback((direction: number) => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    const newIndex = (currentIndex + direction + works!.length) % works!.length;
    const newPosition = currentIndex + direction;

    gsap.to(outerBoxRef.current, {
      rotateY: newPosition * -rotationStep,
      duration: 1,
      ease: "power3.inOut",
      onComplete: () => {
        setIsTransitioning(false);
        setCurrentIndex(newIndex);
        gsap.set(outerBoxRef.current, { rotateY: newIndex * -rotationStep });
      },
    });
  }, [currentIndex, isTransitioning, rotationStep, works]);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      const direction = Math.sign(event.deltaY);
      handleScroll(direction);
    };

    const carousel = carouselRef.current;
    carousel?.addEventListener("wheel", handleWheel);

    return () => {
      carousel?.removeEventListener("wheel", handleWheel);
    };
  }, [currentIndex, handleScroll, works]);

  if (!works) {
    return null;
  }

  const handleNext = () => handleScroll(1);
  const handlePrev = () => handleScroll(-1);

  return (
    <div className={cn("h-screen flex relative flex-col justify-between px-6 font-montserrat overflow-hidden", "xl:px-10")}>
      <NavBar />
      <section className={cn("flex flex-col items-center justify-center flex-grow")}>
        <div className="relative h-[70vh] z-50 w-full flex items-center justify-center" ref={carouselRef}>
          <div className="w-[350px] h-[250px] relative" ref={outerBoxRef} style={{
            transform: "perspective(1000px)",
            transformStyle: "preserve-3d"
          }}>
            {works.map((work, index) => (
              <Link
                key={index}
                href={work.href}
                className={cn(
                  `cursor-pointer bg-center absolute w-full h-full rounded-3xl`,
                  "*:transition ease-out *:hover:duration-300 *:hover:text-white", 
                  "transition-all ease-in border-white/5 bg-neutral-900 hover:bg-neutral-800"
                )}
                style={{
                  backgroundImage: `url(${work.pictures})`,
                  transform: `rotateY(${index * rotationStep}deg) translateZ(450px)`,
                }}
                target="_blank" rel="noopener noreferrer"
              >
                <Image
                  alt="image of works"
                  src={work.pictures}
                  objectFit="cover"
                  layout="fill"
                  className={cn("p-[2px] rounded-3xl border border-neutral-600/50 flex items-center justify-center w-full h-full text-sm")}
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="flex gap-4 mt-8">
          <div className="cursor-pointer h-full text-center font-medium">
            <div className={cn(
              "w-28 h-10 mx-auto",
              "xl:*:text-lg xl:w-48 xl:h-14 p-[2px]", 
              "*:transition ease-out *:hover:duration-300 *:hover:text-white border rounded-full", 
              "transition-all ease-in border-white/5 bg-neutral-900 hover:bg-neutral-800"
            )}>
              <button onClick={handlePrev} className={cn(
                "text-neutral-400/50", 
                "bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent border border-neutral-600/50 backdrop-blur-xl flex items-center justify-center w-full h-full text-sm antialiased rounded-full"
              )}>
                <GrPrevious />
              </button>
            </div>
          </div>
          <div className="cursor-pointer h-full text-center font-medium">
            <div className={cn(
              "w-28 h-10 mx-auto",
              "xl:*:text-lg xl:w-48 xl:h-14 p-[2px]", 
              "*:transition ease-out *:hover:duration-300 *:hover:text-white border rounded-full", 
              "transition-all ease-in border-white/5 bg-neutral-900 hover:bg-neutral-800"
            )}>
              <button onClick={handleNext} className={cn(
                "text-neutral-400/50", 
                "bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent border border-neutral-600/50 backdrop-blur-xl flex items-center justify-center w-full h-full text-sm antialiased rounded-full"
              )}>
                <GrNext />
              </button>
            </div>
          </div>
        </div>
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)] -z-10 opacity-35",
          )}
        />
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] -z-10 opacity-35",
          )}
        />
        <RadialGradient />
      </section>
    </div>
  );
};

export default Carousel3D;
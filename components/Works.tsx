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
import { motion, AnimatePresence } from "framer-motion";
import LetterPullup from "./ui/letter-pullup";
import ModalMenu from "./ModalMenu";
import { usePathname } from 'next/navigation';
import { BorderBeam } from "./ui/border-beam";

interface WorksPageProps {
  works: {
    title: string;
    category: string;
    date: string;
    href: string;
    pictures: StaticImageData;
  }[];
}

const WorksPage = ({ works }: WorksPageProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const carouselRef = useRef<HTMLDivElement>(null);
  const outerBoxRef = useRef<HTMLDivElement>(null);
  const carouelRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [position, setPosition] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const elementWidth = 350; // Width of each element in px
  const gap = 130; // Gap between elements in px
  const totalWidth = elementWidth + gap;
  const radius = Math.round(totalWidth / (2 * Math.tan(Math.PI / works.length))); // Calculate radius for spacing
  const rotationStep = 360 / (works.length || 1);

  // Adjust the perspective based on the number of elements
  const perspective = Math.max(1000, works.length * 300);

  const handleScroll = useCallback(
    (direction: number) => {
      if (isTransitioning) return;

      setIsTransitioning(true);
      const newIndex = (currentIndex + direction + works.length) % works.length;
      const newPosition = currentIndex + direction;
      
      if (newPosition >= works.length) {
        setPosition(0); // Wrap around to the beginning
      } else if (newPosition < 0) {
        setPosition(works.length - 1); // Wrap around to the end
      } else {
        setPosition(newPosition);
      }

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
    },
    [currentIndex, isTransitioning, rotationStep, works]
  );

  useEffect(() => {
    document.addEventListener('DOMContentLoaded', function () {
      const setHeight = () => {
        if (carouelRef?.current) {
          carouelRef.current.style.height = `${window.innerHeight}px`;
        }
      };
    
      setHeight();
      
      window.addEventListener('resize', setHeight);
    });
  }, []);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      const direction = Math.sign(event.deltaY);
      handleScroll(direction);
    };

    const carousel = carouselRef.current;
    carousel?.addEventListener("wheel", handleWheel, { passive: true });

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
    <div ref={carouelRef} className={cn("min-h-[100dvh] flex relative flex-col justify-between font-montserrat overflow-hidden")}>
      <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <section className={cn("px-6 flex flex-col items-center justify-center flex-grow", "xl:px-10")}>
        <div className="relative h-[70vh] z-10 px-8 w-full flex items-center justify-center gap-20" ref={carouselRef}>
          <div className={cn("w-[450px] h-[350px] relative")} ref={outerBoxRef} style={{
            transform: `perspective(${perspective}px)`,
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
                  backgroundImage: `url(${work.pictures.src})`,
                  transform: `rotateY(${index * rotationStep}deg) translateZ(${radius}px)`,
                }}
                target="_blank" rel="noopener noreferrer"
              >
                <Image
                  alt="image of works"
                  src={work.pictures}
                  className={cn("p-[2px] rounded-3xl border border-neutral-600/50 bg-neutral-900 flex items-center justify-center w-full h-full text-sm")}
                />
                {currentIndex === index && (
                  <BorderBeam size={250} duration={5} delay={2} />
                )}
                <AnimatePresence>
                  {position === currentIndex && (
                    <motion.h5 className={cn("absolute text-xl h-auto w-full py-4 text-center antialiased font-medium  top-[40%]", "xs:text-3xl", "sm:text-4xl", "md:top-[37%] md:text-6xl", "lg:text-7xl", "xl:text-9xl xl:top-[30%]", index !== currentIndex && "hidden")} style={{
                      textShadow: "0 0 5px rgba(27, 27, 46, 0.5), 0 0 10px rgba(27, 27, 46, 0.4), 0 0 15px rgba(27, 27, 46, 0.3)"
                    }}>
                      <LetterPullup key={index} words={work.title} delay={0.05} duration={0.6} className={cn(
                        "text-center drop-shadow-sm md:leading-[5rem] font-bold",
                      )} />
                    </motion.h5>
                  )}
                </AnimatePresence>
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
        <RadialGradient className="-z-50" />
      </section>
      <ModalMenu pathname={pathname} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </div>
  );
};

export default WorksPage;

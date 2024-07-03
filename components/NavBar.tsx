import { linksData } from "@/data/works";
import { cn } from "@/lib/utils";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className={cn("w-full py-6")}>
      <div className={cn("lg:flex lg:justify-between")}>
        <div className="flex items-center lg:gap-6">
          <div className="space-y-1.5">
            <div className={cn("rounded-full w-7 h-3 ml-4 bg-white border-2 border-violet-500")} />
            <div className={cn("rounded-full w-7 h-3 bg-white border-2 border-violet-800")} />
          </div>
          <h3 className={cn("hidden", "lg:text-base lg:font-medium lg:block")}>
            Selimmersive
          </h3>
        </div>
        <div className={cn("hidden", "lg:flex lg:items-center gap-4")}>
          {linksData.map((data, index) => (
            <Link key={index} href={data.link} target="_blank" rel="noopener noreferrer" className={cn(
              "p-[2px]", 
              "*:transition ease-out *:hover:duration-300 *:hover:text-white border rounded-full", 
              "transition-all ease-in border-white/5 bg-neutral-900 hover:bg-neutral-800"
            )}>
              <data.icon className={cn(
                "text-neutral-400/50", 
                "xl:text-xl",
                "bg-gradient-to-r p-1 from-transparent via-black/80 via-50% to-transparent border border-neutral-600/50 backdrop-blur-xl flex items-center justify-center w-full h-full text-sm antialiased rounded-full"
              )} />
            </Link>
          ))}
          <div className="cursor-pointer z-10 h-full text-center font-medium">
            <div className={cn(
              "w-28 h-10 mx-auto",
              "xl:*:text-sm xl:w-28 xl:h-10 p-[2px]", 
              "*:transition ease-out *:hover:duration-300 *:hover:text-white border rounded-full", 
              "transition-all ease-in border-white/5 bg-neutral-900 hover:bg-neutral-800"
            )}>
              <Link href="mailto:slmrsv.bz@gmail.com" className={cn(
                "text-neutral-400/50", 
                "bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent border border-neutral-600/50 backdrop-blur-xl flex items-center justify-center w-full h-full text-sm antialiased rounded-full"
              )}>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
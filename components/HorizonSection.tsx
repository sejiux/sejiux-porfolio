import { cn } from "@/lib/utils";

export default function HorizonSection() {
  return (
    <section id="horizon-section" className="-z-10 w-full top-0 left-0 right-0 bottom-auto absolute flex flex-col justify-center mx-auto">
      <div className={cn("z-10 relative pb-[35%]", "lg:pb-[50%]")}>
        <div className="absolute w-full h-full rounded-[50%] bg-gradient-services" />
        <div className="absolute top-auto left-0 right-0 -bottom-[20%] h-[70%] bg-background mx-auto" />
      </div>
      <div className={cn("absolute -top-[10px] left-[50%] right-0 w-[85%] bottom-0 blur-[20px] translate-x-[-50%] h-full opacity-50 bg-gradient-to-t shadow-custom-primary from-secondary to-primary mx-auto rounded-[50%]", "lg:-top-[30px]")} />
      {/* <div className="left-[50%] top-[1%] translate-x-[-50%] translate-y-0 rotate-[0.395deg]">
        <div className="absolute top-0 left-0 right-0 w-[12%] h-[54px] z-5 mx-auto rounded-full blur-[20px] bg-gradient-to-r from-primary via-secondary to-[rgba(255,255,255,0.90)] mix-blend-plus-lighter"/>
        <div className="w-[30%] h-[136px] mx-auto rounded-full blur-[50px] bg-[radial-gradient(125.2%_49.89%_at_49.88%_50.39%,#95BF47_0%,#95BF47_29.16%,#5e8e3e_73.4%,#6448DD_100%)] mix-blend-plus-lighter" />
      </div> */}
    </section>
  );
}
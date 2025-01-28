"use client";
import { cn } from '@/lib/utils';
import { Button } from './ui/moving-border';
import AnimatedShinyText from './ui/animated-shiny-text';
import { PricesFixeData } from '@/data/works';
import CardPrice from './card/CardPrice';

const Price = () => {
  return (
    <section className={cn("relative flex flex-col justify-center max-w-7xl mx-auto items-center")}>
      <div className={cn("px-6 text-center space-y-6", "md:mx-auto md:max-w-lg", "lg:max-w-2xl lg:mx-auto", "xl:px-10 xl:max-w-full")}>
        <div className="flex items-center justify-center">
          <div
            className={cn(
              "group rounded-full text-base text-white transition-all ease-in hover:cursor-pointer bg-transparent hover:bg-neutral-800 h-12",
            )}
          >
            <Button
              borderRadius="1.75rem"
              className="bg-gradient-to-b from-background to-[#151518]"
            >
              <AnimatedShinyText
                className={cn(
                  "inline-flex items-center justify-center px-4 py-0 transition ease-out hover:duration-300 hover:text-neutral-400 text-white/70 font-normal",
                  "text-sm",
                  "md:text-sm",
                )}>
                <div className="px-2">
                  <p className={cn("text-sm", "lg:text-base")}>
                  Devis
                  </p>
                </div>
              </AnimatedShinyText>
            </Button>
          </div>
        </div>
        <h2 className={cn(
          "text-[28px] px-2 leading-tight font-semibold ",
          "lg:px-0 lg:text-[38px]",
          "xl:px-0 xl:text-5xl xl:leading-[1.4]",
          "pointer-events-none whitespace-pre-wrap",
          "text-white text-center",
        )}>Des Solutions Sur-Mesure<br className="hidden lg:block" /> pour un Impact Mesurable</h2>
        <p className={cn("text-subtitle/80 text-base font-light w-full px-4 pb-4", "lg:text-base lg:mx-auto lg:w-[500px]", "xl:px-0 xl:text-lg xl:leading-relaxed xl:w-[700px]")}>Choisissez l'offre qui convient le mieux à vos besoins.</p>
        <div className={cn("relative pt-14 w-full max-w-4xl flex flex-col gap-4", "xl:grid xl:grid-cols-2")}>
          {PricesFixeData.map((data, index) => (
            <CardPrice
              key={index}
              title={data.title}
              content={data.content}
              link={data.link}
              options={data.options}
            />
          ))}
          <div className="col-span-2 max-w-xl w-full mx-auto">
            <CardPrice
              title="Maintenance"
              content="Bénéficiez d'un support technique pour une expérience utilisateur optimale."
              link="https://cal.com/sejiux/appel-de-decouverte"
              options={[
                {
                  title: "Support client disponible 5j/7",
                },
                {
                  title: "Réponse sous 24 heures",
                },
                {
                  title: "Optimisation des performances",
                },
                {
                  title: "Correction des bugs",
                },
                {
                  title: "Mises à jour de sécurité",
                },
                {
                  title: "Transfert d'hébergement",
                },
                {
                  title: "Migration des données",
                },
                {
                  title: "Changement de nom de domaine",
                },
                {
                  title: "Gestion des DNS",
                },
                {
                  title: "Suivi et optimisation SEO",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
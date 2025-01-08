"use client";
import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { Button } from './ui/moving-border';
import AnimatedShinyText from './ui/animated-shiny-text';
import { articlesData } from '@/data/works';
import CardBlog from './card/CardBlog';

const Blog = () => {
  const [visibleArticles, setVisibleArticles] = useState(3);

  const loadMoreArticles = () => {
    setVisibleArticles((prevVisibleArticles) => prevVisibleArticles + 3); // Charge 3 articles supplémentaires
  };

  return (
    <section id="blog" className={cn("flex flex-col justify-center")}>
      <div className={cn("px-6 text-center space-y-6", "md:mx-auto md:max-w-lg", "lg:max-w-4xl lg:mx-auto", "xl:px-10 xl:max-w-full")}>
        <div className="z-10 flex items-center justify-center">
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
                  Blog
                  </p>
                </div>
              </AnimatedShinyText>
            </Button>
          </div>
        </div>
        <h2 className={cn(
          "text-[28px] px-2 leading-tight font-semibold ",
          "lg:px-0 lg:text-6xl",
          "xl:text-5xl xl:leading-[1.4]",
          "pointer-events-none whitespace-pre-wrap",
          "text-white text-center",
        )}>Nouvelles et Réflexions <br className="hidden lg:block" />sur Medium</h2>
        <p className={cn("text-base font-light w-full px-4", "lg:text-base lg:px-0 lg:mx-auto text-subtitle/80 lg:pb-2 lg:w-[700px]", "xl:text-lg xl:leading-relaxed")}>Plongez dans mon blog pour découvrir des analyses, conseils et tendances mêlant développement, psychologie et neurosciences.</p>
        <div className={cn("relative pt-10 w-full max-w-7xl flex flex-col gap-4", "lg:grid lg:grid-cols-3 lg:grid-rows-1")}>
          {articlesData.slice(0, visibleArticles).map((data, index) => (
            <CardBlog
              key={index}
              aria-label={data.title}
              title={data.title}
              readingTime={data.ReadingTime}
              category={data.category}
              date={data.date}
              link={data.link}
              image={data.image}
            />
          ))}
        </div>
        {visibleArticles < articlesData.length && (
          <div className={cn("pt-10 flex justify-center w-full")}>
            <div onClick={loadMoreArticles} className={cn(
              "text-white font-medium cursor-pointer", 
              "w-[80%] h-12 mx-auto",
              "md:w-[60%] md:h-14",
              "lg:w-60 lg:mx-auto",
              "xl:mx-0",
              "xl:w-60 xl:h-14 p-[1px]",
              "*:transition ease-out *:hover:duration-300 *:hover:text-white", 
              "transition-all ease-in ",
              "bg-secondary shadow-custom-secondary backdrop-blur-xl flex items-center justify-center text-base antialiased rounded-[10px]",
              "hover:bg-primary hover:shadow-custom-primary",
            )}>
                Voir plus
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
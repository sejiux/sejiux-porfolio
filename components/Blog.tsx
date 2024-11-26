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
    <section className={cn("flex flex-col justify-center")}>
      <div className={cn("px-6 text-center space-y-6", "lg:max-w-4xl lg:mx-auto", "xl:px-10 xl:max-w-full", "2xl:max-w-[1800px] 2xl:space-y-14 2xl:px-14")}>
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
                  "2xl:text-lg"
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
        <h1 className={cn(
          "text-[28px] px-2 leading-tight font-semibold ",
          "lg:px-0 lg:text-6xl",
          "xl:text-5xl xl:leading-[1.4]",
          "2xl:text-[100px]",
          "pointer-events-none whitespace-pre-wrap",
          "text-white text-center",
        )}>Nouvelles, Réflexions<br className="hidden lg:block" /> et Inspirations</h1>
        <p className={cn("text-base font-light w-full px-4", "lg:text-base lg:px-0 lg:mx-auto text-subtitle/80 lg:pb-2 lg:w-[700px]", "xl:text-lg xl:leading-relaxed", "2xl:text-xl")}>Plongez dans mon blog pour découvrir des analyses, conseils et tendances mêlant développement, psychologie et neurosciences.</p>
        <div className={cn("relative pt-10 w-full max-w-7xl flex flex-col gap-4", "lg:grid lg:grid-cols-3 lg:grid-rows-1")}>
          {articlesData.slice(0, visibleArticles).map((data, index) => (
            <CardBlog
              key={index}
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
          <div className={cn("pt-10")}>
            <div onClick={loadMoreArticles} className={cn(
              "text-white cursor-pointer", 
              "w-[80%] h-12 mx-auto",
              "md:w-40 md:h-10",
              "xl:w-60 xl:h-14 p-[1px]",
              "*:2xl:text-2xl 2xl:w-64 2xl:h-20",
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
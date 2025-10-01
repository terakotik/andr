
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Leaf, ShoppingCart, Truck, ChevronRight, Sprout, Wheat } from 'lucide-react';
import { useLanguage } from '@/context/language-context';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';

export default function AndrShopPage() {
  const { translations } = useLanguage();
  const shopTranslations = translations.shopPage || {};

  const products = [
    {
      icon: <Sprout className="h-10 w-10 text-primary" />,
      name: shopTranslations.products?.beans.name,
      description: shopTranslations.products?.beans.description,
    },
    {
      icon: <Wheat className="h-10 w-10 text-primary" />,
      name: shopTranslations.products?.legumes.name,
      description: shopTranslations.products?.legumes.description,
    },
  ];

  return (
    <div className="bg-background text-foreground">
       <section className="relative bg-background py-16 md:py-24 overflow-hidden text-white">
        <div className="absolute top-0 left-0 w-full h-full bg-black">
          <iframe 
            src="https://player.vimeo.com/video/281393776?background=1&autoplay=1&loop=1&byline=0&title=0"
            className="absolute top-1/2 left-1/2 w-[177.77vh] min-w-[100vw] h-[56.25vw] min-h-[100vh] -translate-x-1/2 -translate-y-1/2 z-0 opacity-30 object-cover"
            frameBorder="0" 
            allow="autoplay; fullscreen" 
            allowFullScreen
          ></iframe>
          <div className="pixel-overlay" style={{backgroundSize: '3px 3px'}}></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center min-h-[60vh]">
            <div className="space-y-6">
              <p className="text-4xl md:text-6xl font-headline font-bold text-white tracking-widest uppercase">{shopTranslations.preHeroTitle}</p>
              <h1 className="text-4xl md:text-5xl font-headline font-bold text-white">
                {shopTranslations.heroTitle}
              </h1>
              <p className="text-lg text-gray-200">
                {shopTranslations.heroSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" asChild className="rounded-full border-white text-white hover:bg-primary hover:text-primary-foreground hover:border-primary">
                      <Link href="#products-list">
                          <ChevronRight className="mr-2 h-4 w-4" />
                          {shopTranslations.heroButton}
                      </Link>
                  </Button>
              </div>
            </div>
            <div />
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 md:px-6 py-16 md:py-24 space-y-20">
        <section id="products-list">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-headline font-semibold text-primary mb-4">{shopTranslations.sectionTitle}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {shopTranslations.sectionSubtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {products.map((product, index) => (
                <Card key={index} className="bg-card border p-6 rounded-lg">
                    <CardHeader className="flex flex-row items-center gap-4 p-0 mb-4">
                      <div className="p-3 bg-primary/10 rounded-full w-fit flex-shrink-0">
                        {product.icon}
                      </div>
                      <CardTitle className="font-headline text-2xl">{product.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-muted-foreground">{product.description}</p>
                    </CardContent>
                </Card>
            ))}
          </div>
        </section>

        <section id="contact" className="text-center pt-8">
            <h2 className="text-3xl font-headline font-semibold text-primary mb-4">{shopTranslations.ctaTitle}</h2>
            <Button size="lg" variant="default" className="px-12 py-6 text-lg" asChild>
                <Link href="/#footer-projects">{shopTranslations.ctaButton}</Link>
            </Button>
        </section>
      </main>
    </div>
  );
}

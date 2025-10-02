
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Leaf, ShoppingCart, Truck, ChevronRight, Sprout, Wheat, Check, Award, ShieldCheck, ThumbsUp } from 'lucide-react';
import { useLanguage } from '@/context/language-context';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { OrderForm } from '@/components/order-form';

export default function AndrShopPage() {
  const { translations } = useLanguage();
  const shopTranslations = translations.shopPage || {};

  const products = [
    {
      icon: <Sprout className="h-10 w-10 text-primary" />,
      name: shopTranslations.products?.peanuts.name,
      description: shopTranslations.products?.peanuts.description,
    },
    {
      icon: <Wheat className="h-10 w-10 text-primary" />,
      name: shopTranslations.products?.grains.name,
      description: shopTranslations.products?.grains.description,
    },
    {
      icon: <Leaf className="h-10 w-10 text-primary" />,
      name: shopTranslations.products?.legumes.name,
      description: shopTranslations.products?.legumes.description,
    },
     {
      icon: <Sprout className="h-10 w-10 text-primary" />,
      name: shopTranslations.products?.oilseeds.name,
      description: shopTranslations.products?.oilseeds.description,
    },
  ];

  const advantages = [
      {
          icon: <Truck className="h-8 w-8 text-primary" />,
          title: shopTranslations.advantages?.stability.title,
          description: shopTranslations.advantages?.stability.description,
      },
      {
          icon: <Award className="h-8 w-8 text-primary" />,
          title: shopTranslations.advantages?.quality.title,
          description: shopTranslations.advantages?.quality.description,
      },
      {
          icon: <ShieldCheck className="h-8 w-8 text-primary" />,
          title: shopTranslations.advantages?.logistics.title,
          description: shopTranslations.advantages?.logistics.description,
      },
      {
          icon: <ThumbsUp className="h-8 w-8 text-primary" />,
          title: shopTranslations.advantages?.price.title,
          description: shopTranslations.advantages?.price.description,
      },
  ];

  const countries = [
    { name: shopTranslations.geography?.countries.afghanistan, icon: <Image src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg" alt="Afghanistan Flag" width={40} height={40} className="rounded-full object-cover h-10 w-10" /> },
    { name: shopTranslations.geography?.countries.pakistan, icon: <Image src="https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg" alt="Pakistan Flag" width={40} height={40} className="rounded-full object-cover h-10 w-10" /> },
    { name: shopTranslations.geography?.countries.india, icon: <Image src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" alt="India Flag" width={40} height={40} className="rounded-full object-cover h-10 w-10" /> },
    { name: shopTranslations.geography?.countries.china, icon: <Image src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg" alt="China Flag" width={40} height={40} className="rounded-full object-cover h-10 w-10" /> },
  ];

  return (
    <div className="bg-background text-foreground">
       <section className="relative bg-background py-16 md:py-24 overflow-hidden text-white">
        <div className="absolute top-0 left-0 w-full h-full bg-black">
          <iframe 
            src="https://www.youtube.com/embed/pQbflNRSi_Y?autoplay=1&mute=1&loop=1&playlist=pQbflNRSi_Y&controls=0&showinfo=0&modestbranding=1"
            className="absolute top-1/2 left-1/2 w-[177.77vh] min-w-[100vw] h-[56.25vw] min-h-[100vh] -translate-x-1/2 -translate-y-1/2 z-0 opacity-30 object-cover"
            frameBorder="0" 
            allow="autoplay; encrypted-media"
          ></iframe>
          <div className="pixel-overlay" style={{backgroundSize: '3px 3px'}}></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center min-h-[60vh]">
            <div className="space-y-6">
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
        
        <section id="about-us">
            <div className="text-center space-y-4 mb-12">
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    {shopTranslations.about}
                </p>
            </div>
            <div className="text-center space-y-4">
                <h3 className="text-2xl font-headline font-semibold text-primary">{shopTranslations.geography?.title}</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">{shopTranslations.geography?.subtitle}</p>
                <div className="flex justify-center items-center gap-8 pt-4">
                    {countries.map((country) => (
                        <div key={country.name} className="flex flex-col items-center gap-2">
                            {country.icon}
                            <span className="font-semibold">{country.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section id="advantages">
            <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl font-headline font-semibold text-primary mb-4">{shopTranslations.advantages?.title}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {advantages.map((advantage) => (
                <Card key={advantage.title} className="bg-card border rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-secondary rounded-full w-fit">
                        {advantage.icon}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="font-headline text-xl mb-2">{advantage.title}</CardTitle>
                        <CardDescription>{advantage.description}</CardDescription>
                      </div>
                    </div>
                </Card>
                ))}
            </div>
        </section>
        
        <section id="products-list">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-headline font-semibold text-primary mb-4">{shopTranslations.sectionTitle}</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {products.map((product, index) => (
                <Card key={index} className="bg-card border p-6 rounded-lg text-center flex flex-col items-center">
                    <CardHeader className="p-0 mb-4">
                      <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto">
                        {product.icon}
                      </div>
                    </CardHeader>
                    <CardContent className="p-0 flex-grow">
                      <CardTitle className="font-headline text-xl mb-2">{product.name}</CardTitle>
                      <p className="text-muted-foreground text-sm">{product.description}</p>
                    </CardContent>
                </Card>
            ))}
          </div>
        </section>

        <section id="order-form" className="bg-secondary/50 rounded-lg p-8 md:p-12 border">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">{shopTranslations.ctaTitle}</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {shopTranslations.ctaSubtitle}
              </p>
            </div>
            <Card className="max-w-2xl mx-auto rounded-lg bg-background border">
                <CardHeader>
                  <CardTitle>{shopTranslations.ctaButton}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 md:p-8">
                    <OrderForm productCategories={products.map(p => p.name)} />
                </CardContent>
            </Card>
        </section>
      </main>
    </div>
  );
}

    
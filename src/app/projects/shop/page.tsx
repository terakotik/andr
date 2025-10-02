
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Leaf, ShoppingCart, Truck, ChevronRight, Sprout, Wheat, Check, Award, ShieldCheck, ThumbsUp } from 'lucide-react';
import { useLanguage } from '@/context/language-context';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { OrderForm } from '@/components/order-form';
import { useToast } from "@/hooks/use-toast";

export default function AndrShopPage() {
  const { translations } = useLanguage();
  const { toast } = useToast();
  const shopTranslations = translations.shopPage || {};

  const handlePayment = () => {
    toast({
      title: shopTranslations.paymentToast?.title,
      description: shopTranslations.paymentToast?.description,
    });
  };

  const products = [
    {
      icon: <Sprout className="h-8 w-8 md:h-10 md:w-10 text-primary" />,
      name: shopTranslations.products?.peanuts.name,
      description: shopTranslations.products?.peanuts.description,
    },
    {
      icon: <Wheat className="h-8 w-8 md:h-10 md:w-10 text-primary" />,
      name: shopTranslations.products?.grains.name,
      description: shopTranslations.products?.grains.description,
    },
    {
      icon: <Leaf className="h-8 w-8 md:h-10 md:w-10 text-primary" />,
      name: shopTranslations.products?.legumes.name,
      description: shopTranslations.products?.legumes.description,
    },
     {
      icon: <Sprout className="h-8 w-8 md:h-10 md:w-10 text-primary" />,
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
    { name: shopTranslations.geography?.countries.afghanistan, icon: <Image src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg" alt="Afghanistan Flag" width={24} height={24} className="rounded-full object-cover h-6 w-6" /> },
    { name: shopTranslations.geography?.countries.pakistan, icon: <Image src="https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg" alt="Pakistan Flag" width={24} height={24} className="rounded-full object-cover h-6 w-6" /> },
    { name: shopTranslations.geography?.countries.india, icon: <Image src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" alt="India Flag" width={24} height={24} className="rounded-full object-cover h-6 w-6" /> },
    { name: shopTranslations.geography?.countries.china, icon: <Image src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg" alt="China Flag" width={24} height={24} className="rounded-full object-cover h-6 w-6" /> },
  ];

  return (
    <div className="bg-background text-foreground">
       <section className="relative bg-background py-16 md:py-24 text-white">
        <div className="absolute top-0 left-0 w-full h-full bg-black overflow-hidden">
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

              <div className="pt-4 space-y-4">
                 <p className="text-gray-300">{shopTranslations.geography?.heroSubtitle}</p>
                 <div className="flex items-center gap-4 flex-wrap">
                    {countries.map((country) => (
                        <div key={country.name} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                            {country.icon}
                            <span className="font-medium text-sm text-white">{country.name}</span>
                        </div>
                    ))}
                </div>
              </div>

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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto">
            {products.map((product, index) => (
                <Card key={index} className="bg-card border p-4 rounded-lg flex flex-row items-center gap-4 md:flex-col md:p-6 md:text-center">
                    <div className="p-3 bg-primary/10 rounded-full w-fit flex-shrink-0 md:p-4 md:mx-auto">
                      {product.icon}
                    </div>
                    <div className="flex-grow">
                      <CardTitle className="font-headline text-lg md:text-xl md:mb-2">{product.name}</CardTitle>
                      <p className="text-muted-foreground text-sm hidden md:block">{product.description}</p>
                    </div>
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
                    <div className="relative flex py-5 items-center">
                        <div className="flex-grow border-t border-muted-foreground"></div>
                        <span className="flex-shrink mx-4 text-muted-foreground text-sm">OR</span>
                        <div className="flex-grow border-t border-muted-foreground"></div>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <Button onClick={handlePayment} variant="outline" className="w-full">
                            {shopTranslations.payButton}
                        </Button>
                        <Image 
                            src="https://guide.insta-pay.ch/~gitbook/image?url=https%3A%2F%2F4098734040-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Forganizations%252FDkbKS1c9cgUjHhFMOrxs%252Fsites%252Fsite_KBu8A%252Flogo%252Fq1BpL7xXpmcRHer7CTwd%252FLogo%2520Colour%2520With%2520Black%2520Wordmark.png%3Falt%3Dmedia%26token%3D3e5a6178-41ca-433c-b175-75c7c4be7049&width=160&dpr=3&quality=100&sign=c82a8db&sv=2" 
                            alt={shopTranslations.instapayLogoAlt || "Instapay Logo"}
                            width={120} 
                            height={30}
                            className="object-contain" 
                        />
                    </div>
                </CardContent>
            </Card>
        </section>
      </main>
    </div>
  );
}

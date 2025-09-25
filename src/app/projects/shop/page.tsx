
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Leaf, ShoppingCart, Truck } from 'lucide-react';
import { useLanguage } from '@/context/language-context';
import Link from 'next/link';

export default function AndrShopPage() {
  const { translations } = useLanguage();
  const heroImage = PlaceHolderImages.find(p => p.id === 'andrshop-hero');
  const shopTranslations = translations.shopPage || {};

  const features = [
    {
      icon: <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />,
      title: shopTranslations.features?.sourcing.title,
      description: shopTranslations.features?.sourcing.description
    },
    {
      icon: <ShoppingCart className="h-12 w-12 text-green-600 mx-auto mb-4" />,
      title: shopTranslations.features?.orders.title,
      description: shopTranslations.features?.orders.description
    },
    {
      icon: <Truck className="h-12 w-12 text-green-600 mx-auto mb-4" />,
      title: shopTranslations.features?.logistics.title,
      description: shopTranslations.features?.logistics.description
    }
  ];
  
  return (
    <div className="bg-green-50 text-gray-800">
      <section className="relative h-[60vh] flex items-center justify-center text-center">
         <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-1/2 left-1/2 w-auto min-w-full min-h-full max-w-none -translate-x-1/2 -translate-y-1/2 brightness-75 z-0 object-cover"
          >
            <source src="https://player.vimeo.com/video/281393776?background=1&autoplay=1&loop=1&byline=0&title=0" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-primary/20"></div>

          <div className="relative z-10 space-y-4 px-4 text-white">
            <p className="font-headline text-lg tracking-widest text-green-200">ANDRSHOP</p>
            <h1 className="text-4xl md:text-6xl font-headline font-bold">
              {shopTranslations.heroTitle}
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              {shopTranslations.heroSubtitle}
            </p>
          </div>
        </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 space-y-16">
          <div className="text-center">
            <h2 className="text-3xl font-headline font-semibold text-green-800 mb-4">{shopTranslations.sectionTitle}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {shopTranslations.sectionSubtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                    {feature.icon}
                    <h3 className="text-xl font-bold mb-2 text-green-800">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                </div>
            ))}
          </div>

          <div className="text-center pt-8">
            <Button size="lg" variant="outline" className="px-12 py-6 text-lg" asChild>
                <Link href="/#contact">{shopTranslations.ctaButton}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

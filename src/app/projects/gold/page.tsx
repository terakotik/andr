"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Gem, ShieldCheck, Scale, Globe, ArrowRight, ArrowLeft, Check, X, Award, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Link from 'next/link';
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartConfig } from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, LabelList, Line, LineChart, Tooltip } from "recharts"
import { useLanguage } from '@/context/language-context';

const priceData = [
    { year: "1970", price: 36 },
    { year: "1980", price: 615 },
    { year: "1990", price: 383 },
    { year: "2000", price: 279 },
    { year: "2010", price: 1224 },
    { year: "2020", price: 1770 },
    { year: "2024", price: 2300 },
];

const lbmaChartConfig = {
  price: {
    label: "Price ($)",
    color: "#eab308",
  },
} satisfies ChartConfig


const purityDataRaw = [
    { name: 'Pure Gold', value: 95, fill: '#eab308' },
    { name: 'Other Metals', value: 5, fill: '#6b7280' },
]
const purityDataRefined = [
    { name: 'Pure Gold', value: 99.99, fill: '#eab3a8' },
    { name: 'Other Metals', value: 0.01, fill: '#6b7280' },
]

const purityChartConfig = {
    gold: {
        label: "Gold",
    },
    other: {
        label: "Impurities"
    }
} satisfies ChartConfig

export default function AndrgoldPage() {
  const { translations } = useLanguage();
  const heroImage = PlaceHolderImages.find(p => p.id === 'andrgold-hero');
  
  const goldTranslations = translations.goldPage || {};

  return (
    <div className="bg-stone-50 text-gray-800">
      
        <section className="relative h-[50vh] flex items-center justify-center text-center overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-1/2 left-1/2 w-auto min-w-full min-h-full max-w-none -translate-x-1/2 -translate-y-1/2 brightness-50 z-0 object-cover"
            >
                <source src="https://ruah.uz/images/RGR.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
          <div className="absolute inset-0 bg-primary/20"></div>
          <div className="relative z-10 space-y-4 px-4">
            <p className="font-headline text-lg text-amber-300 tracking-widest">ANDRGOLD</p>
            <h1 className="text-4xl md:text-5xl font-headline font-bold text-white">
              {goldTranslations.heroTitle}
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              {goldTranslations.heroSubtitle}
            </p>
          </div>
        </section>
      

      <main className="container mx-auto px-4 md:px-6 py-16 md:py-24 space-y-20">
        
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-headline font-semibold text-amber-900 mb-4">{goldTranslations.investmentTitle}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {goldTranslations.investmentSubtitle}
            </p>
          </div>
          <div id="key-advantages" className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-md border border-amber-100">
                <ShieldCheck className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-amber-900">{goldTranslations.advantages.quality.title}</h3>
                <p className="text-gray-600">{goldTranslations.advantages.quality.description}</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border border-amber-100">
                <Globe className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-amber-900">{goldTranslations.advantages.reliability.title}</h3>
                <p className="text-gray-600">{goldTranslations.advantages.reliability.description}</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border border-amber-100">
                <Gem className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-amber-900">{goldTranslations.advantages.approach.title}</h3>
                <p className="text-gray-600">{goldTranslations.advantages.approach.description}</p>
            </div>
          </div>
        </section>

        <section id="product">
            <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-amber-900">{goldTranslations.products.title}</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    {goldTranslations.products.subtitle}
                </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
                <Card className="flex flex-col">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-amber-900">
                            <Gem className="w-7 h-7 text-amber-700"/>
                            {goldTranslations.products.raw.title}
                        </CardTitle>
                        <CardDescription>{goldTranslations.products.raw.origin}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow space-y-4">
                        <p><span className="font-semibold">{goldTranslations.products.purityLabel}:</span> {goldTranslations.products.raw.purity}</p>
                        <p><span className="font-semibold">{goldTranslations.products.formLabel}:</span> {goldTranslations.products.raw.form}</p>
                        <p>{goldTranslations.products.raw.idealFor}</p>
                    </CardContent>
                </Card>
                <Card className="flex flex-col">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-amber-900">
                            <Award className="w-7 h-7 text-amber-700"/>
                            {goldTranslations.products.refined.title}
                        </CardTitle>
                        <CardDescription>{goldTranslations.products.refined.afterRefining}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow space-y-4">
                        <p><span className="font-semibold">{goldTranslations.products.purityLabel}:</span> {goldTranslations.products.refined.purity}</p>
                        <p><span className="font-semibold">{goldTranslations.products.formLabel}:</span> {goldTranslations.products.refined.form}</p>
                        <div className="flex items-start gap-2 pt-2">
                           <ShieldCheck className="w-5 h-5 text-amber-600 mt-1 shrink-0"/>
                           <p><span className="font-semibold">{goldTranslations.products.certificationLabel}:</span> {goldTranslations.products.refined.certification}</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>

        <section>
          <Card className="grid md:grid-cols-2 overflow-hidden shadow-lg border-amber-200">
              <div className="relative min-h-[300px] md:min-h-full">
                  <Image
                      src="https://s1.hostingkartinok.com/uploads/images/2025/09/af6b257df6c8cb1866f9df662df9502b.png"
                      alt={goldTranslations.refinedCard.alt}
                      fill
                      className="object-contain"
                  />
              </div>
              <div className="p-8">
                  <h3 className="font-headline text-2xl font-bold text-amber-900 mb-4">{goldTranslations.refinedCard.title}</h3>
                  
                  <div className="space-y-6">
                      <div>
                          <h4 className="font-bold text-lg text-amber-800 mb-2">{goldTranslations.refinedCard.characteristics.title}</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-700">
                              <li><span className="font-semibold">{goldTranslations.refinedCard.characteristics.category.label}:</span> {goldTranslations.refinedCard.characteristics.category.value}</li>
                              <li><span className="font-semibold">{goldTranslations.refinedCard.characteristics.purity.label}:</span> {goldTranslations.refinedCard.characteristics.purity.value}</li>
                              <li><span className="font-semibold">{goldTranslations.refinedCard.characteristics.manufacturer.label}:</span> {goldTranslations.refinedCard.characteristics.manufacturer.value}</li>
                              <li><span className="font-semibold">{goldTranslations.refinedCard.characteristics.guarantees.label}:</span> {goldTranslations.refinedCard.characteristics.guarantees.value}</li>
                          </ul>
                      </div>

                      <div>
                          <h4 className="font-bold text-lg text-amber-800 mb-2">{goldTranslations.refinedCard.investmentCase.title}</h4>
                          <p className="text-gray-700">
                              {goldTranslations.refinedCard.investmentCase.description}
                          </p>
                      </div>

                      <div>
                          <h4 className="font-bold text-lg text-amber-800 mb-2">{goldTranslations.refinedCard.idealFor.title}</h4>
                           <ul className="list-disc list-inside space-y-1 text-gray-700">
                              <li><span className="font-semibold">{goldTranslations.refinedCard.idealFor.investors.label}:</span> {goldTranslations.refinedCard.idealFor.investors.value}</li>
                              <li><span className="font-semibold">{goldTranslations.refinedCard.idealFor.banks.label}:</span> {goldTranslations.refinedCard.idealFor.banks.value}</li>
                              <li><span className="font-semibold">{goldTranslations.refinedCard.idealFor.buyers.label}:</span> {goldTranslations.refinedCard.idealFor.buyers.value}</li>
                          </ul>
                      </div>
                  </div>
              </div>
          </Card>
        </section>

        <section id="delivery-terms">
            <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-amber-900">{goldTranslations.delivery.title}</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
                <Card className="border-amber-600 border-2 flex flex-col">
                    <CardHeader>
                        <CardTitle className="text-amber-800">{goldTranslations.delivery.seller.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 flex-grow">
                       {goldTranslations.delivery.seller.duties.map((duty: string) => (
                           <p key={duty} className="flex items-start"><Check className="w-5 h-5 mr-2 mt-1 text-amber-600 flex-shrink-0"/>{duty}</p>
                       ))}
                    </CardContent>
                </Card>
                <Card className="border-stone-500 border-2 flex flex-col">
                    <CardHeader>
                        <CardTitle className="text-stone-800">{goldTranslations.delivery.buyer.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 flex-grow">
                       {goldTranslations.delivery.buyer.duties.map((duty: string) => (
                           <p key={duty} className="flex items-start"><Check className="w-5 h-5 mr-2 mt-1 text-stone-600 flex-shrink-0"/>{duty}</p>
                       ))}
                    </CardContent>
                </Card>
            </div>
            <div className="overflow-x-auto py-4">
                <div className="flex items-center justify-center my-4 min-w-[500px]">
                    <div className="px-2 py-4 bg-amber-100 rounded-lg whitespace-nowrap shadow-md border border-amber-200">
                        <p className="font-bold text-amber-800">{goldTranslations.delivery.seller.title}</p>
                    </div>
                    <ArrowRight className="w-8 h-8 mx-2 text-gray-400 shrink-0"/>
                     <div className="px-2 py-4 bg-gray-200 rounded-lg whitespace-nowrap shadow-md border-gray-300">
                        <p className="font-bold text-center text-gray-700">{goldTranslations.delivery.carrier}</p>
                    </div>
                    <ArrowRight className="w-8 h-8 mx-2 text-gray-400 shrink-0"/>
                    <div className="px-2 py-4 bg-amber-100 rounded-lg whitespace-nowrap shadow-md border border-amber-200">
                        <p className="font-bold text-amber-800">{goldTranslations.delivery.buyer.title}</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="pricing">
            <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-amber-900">{goldTranslations.pricing.title}</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    {goldTranslations.pricing.subtitle}
                </p>
                 <div className="pt-2">
                    <Button asChild variant="outline">
                        <Link href="http://ru.investing.com/currencies/xau-usd" target="_blank">
                            {goldTranslations.pricing.checkPrice}
                            <ExternalLink className="w-4 h-4 ml-2" />
                        </Link>
                    </Button>
                </div>
            </div>
             <Card>
                <CardHeader>
                    <CardTitle>{goldTranslations.chart.title}</CardTitle>
                    <CardDescription>
                        {goldTranslations.chart.description}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ChartContainer config={{...lbmaChartConfig, price: { ...lbmaChartConfig.price, label: goldTranslations.chart.priceLabel}}} className="w-full h-[400px]">
                        <LineChart data={priceData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                            <CartesianGrid vertical={false} />
                            <XAxis dataKey="year" tickLine={false} axisLine={false} tickMargin={8} />
                            <YAxis 
                                domain={[36, 'auto']}
                                tickFormatter={(value) => `$${value}`}
                            />
                            <Tooltip 
                                cursor={true} 
                                content={<ChartTooltipContent indicator="line" labelKey="year" formatter={(value) => `$${(value as number).toFixed(2)}`} />} 
                            />
                            <Line 
                                type="monotone" 
                                dataKey="price" 
                                stroke="var(--color-price)" 
                                strokeWidth={2} 
                                dot={{
                                    r: 4,
                                    fill: "var(--color-price)",
                                }}
                                activeDot={{
                                    r: 6,
                                }}
                            />
                        </LineChart>
                    </ChartContainer>
                </CardContent>
            </Card>
        </section>
        
        <section id="cta" className="bg-white rounded-lg shadow-xl p-8 md:p-12 border-2 border-amber-400">
            <div className="text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-amber-900">{goldTranslations.cta.title}</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    {goldTranslations.cta.subtitle}
                </p>
                <div className="pt-4">
                    <Button size="lg" asChild variant="outline" className="px-10 py-6 text-lg rounded-full">
                        <Link href="/#contact">{goldTranslations.cta.button}</Link>
                    </Button>
                </div>
            </div>
        </section>

      </main>
    </div>
  );
}

    
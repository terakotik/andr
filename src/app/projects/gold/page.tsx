
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Gem, ShieldCheck, Scale, Globe, ArrowRight, ArrowLeft, Check, X, Award, ExternalLink, ChevronRight, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Link from 'next/link';
import { GoldInvestmentCalculator } from '@/components/gold-investment-calculator';
import { useLanguage } from '@/context/language-context';
import { ContactForm } from '@/components/contact-form';
import { useToast } from "@/hooks/use-toast";

export default function AndrgoldPage() {
  const { translations } = useLanguage();
  const { toast } = useToast();
  const heroImage = PlaceHolderImages.find(p => p.id === 'andrgold-hero');
  
  const goldTranslations = translations.goldPage || {};
  const shopTranslations = translations.shopPage || {};

  const handlePayment = () => {
    toast({
      title: shopTranslations.paymentToast?.title,
      description: shopTranslations.paymentToast?.description,
    });
  };

  return (
    <div className="bg-background text-foreground">
      
      <section className="relative overflow-hidden py-16 md:py-24">
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
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center min-h-[60vh]">
            <div className="space-y-6">
              <p className="text-4xl md:text-6xl font-headline font-bold text-white tracking-widest uppercase">{goldTranslations.preHeroTitle}</p>
              <h1 className="text-4xl md:text-5xl font-headline font-bold text-white">
                {goldTranslations.heroTitle}
              </h1>
              <p className="text-lg text-gray-200">
                {goldTranslations.heroSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" asChild className="rounded-full border-white text-white hover:bg-primary hover:text-primary-foreground hover:border-primary">
                      <Link href="#cta">
                          <ChevronRight className="mr-2 h-4 w-4" />
                          {goldTranslations.heroButton}
                      </Link>
                  </Button>
              </div>
            </div>
            <div />
          </div>
        </div>
      </section>
      

      <main className="container mx-auto px-4 md:px-6 py-16 md:py-24 space-y-20">
        
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-headline font-semibold text-primary mb-4">{goldTranslations.investmentTitle}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {goldTranslations.investmentSubtitle}
            </p>
          </div>
          <div id="key-advantages" className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-card p-8 rounded-lg border">
                <ShieldCheck className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-foreground">{goldTranslations.advantages?.quality?.title}</h3>
                <p className="text-muted-foreground">{goldTranslations.advantages?.quality?.description}</p>
            </div>
            <div className="bg-card p-8 rounded-lg border">
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-foreground">{goldTranslations.advantages?.reliability?.title}</h3>
                <p className="text-muted-foreground">{goldTranslations.advantages?.reliability?.description}</p>
            </div>
            <div className="bg-card p-8 rounded-lg border">
                <Gem className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-foreground">{goldTranslations.advantages?.approach?.title}</h3>
                <p className="text-muted-foreground">{goldTranslations.advantages?.approach?.description}</p>
            </div>
          </div>
        </section>

        <section id="product">
            <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">{goldTranslations.products?.title}</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    {goldTranslations.products?.subtitle}
                </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
                <Card className="flex flex-col border">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-foreground">
                            <Gem className="w-7 h-7 text-primary"/>
                            {goldTranslations.products?.raw?.title}
                        </CardTitle>
                        <CardDescription>{goldTranslations.products?.raw?.origin}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow space-y-4 text-muted-foreground">
                        <p><span className="font-semibold text-foreground">{goldTranslations.products?.purityLabel}:</span> {goldTranslations.products?.raw?.purity}</p>
                        <p><span className="font-semibold text-foreground">{goldTranslations.products?.formLabel}:</span> {goldTranslations.products?.raw?.form}</p>
                        <p>{goldTranslations.products?.raw?.idealFor}</p>
                    </CardContent>
                </Card>
                <Card className="flex flex-col border">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-foreground">
                            <Award className="w-7 h-7 text-primary"/>
                            {goldTranslations.products?.refined?.title}
                        </CardTitle>
                        <CardDescription>{goldTranslations.products?.refined?.afterRefining}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow space-y-4 text-muted-foreground">
                        <p><span className="font-semibold text-foreground">{goldTranslations.products?.purityLabel}:</span> {goldTranslations.products?.refined?.purity}</p>
                        <p><span className="font-semibold text-foreground">{goldTranslations.products?.formLabel}:</span> {goldTranslations.products?.refined?.form}</p>
                        <div className="flex items-start gap-2 pt-2">
                           <ShieldCheck className="w-5 h-5 text-primary mt-1 shrink-0"/>
                           <p><span className="font-semibold text-foreground">{goldTranslations.products?.certificationLabel}:</span> {goldTranslations.products?.refined?.certification}</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>

        <section id="special-offer">
            <Card className="grid md:grid-cols-2 overflow-hidden border-0 bg-black">
                <div className="p-8 order-2 md:order-1 flex flex-col justify-center">
                    <h3 className="font-headline text-2xl font-bold text-white mb-4 flex items-center gap-2">
                        <Star className="w-6 h-6 text-white"/>
                        {goldTranslations.specialOffer?.title}
                    </h3>
                    
                    <div className="space-y-4">
                        <p className="text-lg text-gray-300">
                            {goldTranslations.specialOffer?.description}
                        </p>
                        <div className="bg-gray-800 p-4 rounded-lg">
                           <p className="font-bold text-white">{goldTranslations.specialOffer?.condition}</p>
                        </div>
                         <Button asChild size="lg" className="mt-4 bg-white text-black hover:bg-gray-200">
                            <Link href="#cta">{goldTranslations.specialOffer?.buttonText}</Link>
                        </Button>
                    </div>
                </div>
                 <div className="relative min-h-[300px] md:min-h-full order-1 md:order-2">
                    <Image
                        src="https://i.ibb.co/TBdxk3ZT/photo-2025-05-07-13-10-07.jpg"
                        alt={goldTranslations.specialOffer?.alt || "Special offer gold"}
                        fill
                        className="object-cover"
                    />
                </div>
            </Card>
        </section>

        <section>
          <Card className="grid md:grid-cols-2 overflow-hidden border">
              <div className="relative min-h-[300px] md:min-h-full bg-background">
                  <Image
                      src="https://s1.hostingkartinok.com/uploads/images/2025/09/af6b257df6c8cb1866f9df662df9502b.png"
                      alt={goldTranslations.refinedCard?.alt || "Refined Gold 999.9"}
                      fill
                      className="object-contain p-4"
                  />
              </div>
              <div className="p-8">
                  <h3 className="font-headline text-2xl font-bold text-primary mb-4">{goldTranslations.refinedCard?.title}</h3>
                  
                  <div className="space-y-6">
                      <div>
                          <h4 className="font-bold text-lg text-foreground mb-2">{goldTranslations.refinedCard?.characteristics?.title}</h4>
                          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                              <li><span className="font-semibold text-foreground">{goldTranslations.refinedCard?.characteristics?.category?.label}:</span> {goldTranslations.refinedCard?.characteristics?.category?.value}</li>
                              <li><span className="font-semibold text-foreground">{goldTranslations.refinedCard?.characteristics?.purity?.label}:</span> {goldTranslations.refinedCard?.characteristics?.purity?.value}</li>
                              <li><span className="font-semibold text-foreground">{goldTranslations.refinedCard?.characteristics?.manufacturer?.label}:</span> {goldTranslations.refinedCard?.characteristics?.manufacturer?.value}</li>
                              <li><span className="font-semibold text-foreground">{goldTranslations.refinedCard?.characteristics?.guarantees?.label}:</span> {goldTranslations.refinedCard?.characteristics?.guarantees?.value}</li>
                          </ul>
                      </div>

                      <div>
                          <h4 className="font-bold text-lg text-foreground mb-2">{goldTranslations.refinedCard?.investmentCase?.title}</h4>
                          <p className="text-muted-foreground">
                              {goldTranslations.refinedCard?.investmentCase?.description}
                          </p>
                      </div>

                      <div>
                          <h4 className="font-bold text-lg text-foreground mb-2">{goldTranslations.refinedCard?.idealFor?.title}</h4>
                           <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                              <li><span className="font-semibold text-foreground">{goldTranslations.refinedCard?.idealFor?.investors?.label}:</span> {goldTranslations.refinedCard?.idealFor?.investors?.value}</li>
                              <li><span className="font-semibold text-foreground">{goldTranslations.refinedCard?.idealFor?.banks?.label}:</span> {goldTranslations.refinedCard?.idealFor?.banks?.value}</li>
                              <li><span className="font-semibold text-foreground">{goldTranslations.refinedCard?.idealFor?.buyers?.label}:</span> {goldTranslations.refinedCard?.idealFor?.buyers?.value}</li>
                          </ul>
                      </div>
                  </div>
              </div>
          </Card>
        </section>

        <section id="delivery-terms">
            <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">{goldTranslations.delivery?.title}</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
                <Card className="border-border hover:border-primary border-2 flex flex-col transition-all duration-300">
                    <CardHeader>
                        <CardTitle className="text-primary">{goldTranslations.delivery?.seller?.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 flex-grow text-card-foreground">
                       {goldTranslations.delivery?.seller?.duties.map((duty: string) => (
                           <p key={duty} className="flex items-start"><Check className="w-5 h-5 mr-2 mt-1 text-primary flex-shrink-0"/>{duty}</p>
                       ))}
                    </CardContent>
                </Card>
                <Card className="border-border hover:border-primary border-2 flex flex-col transition-all duration-300">
                    <CardHeader>
                        <CardTitle className="text-foreground">{goldTranslations.delivery?.buyer?.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 flex-grow text-card-foreground">
                       {goldTranslations.delivery?.buyer?.duties.map((duty: string) => (
                           <p key={duty} className="flex items-start"><Check className="w-5 h-5 mr-2 mt-1 text-muted-foreground flex-shrink-0"/>{duty}</p>
                       ))}
                    </CardContent>
                </Card>
            </div>
            <div className="overflow-x-auto py-8">
                <div className="flex flex-col md:flex-row items-center justify-center my-4 gap-2 md:gap-4">
                    <div className="px-4 py-2 bg-primary rounded-lg whitespace-nowrap text-primary-foreground">
                        <p className="font-bold text-center text-sm">{goldTranslations.delivery?.seller?.title}</p>
                    </div>
                    <ArrowRight className="w-6 h-6 text-muted-foreground shrink-0 rotate-90 md:rotate-0"/>
                     <div className="px-4 py-2 bg-background rounded-lg whitespace-nowrap border-2 border-dashed">
                        <p className="font-bold text-center text-sm text-foreground">{goldTranslations.delivery?.carrier}</p>
                    </div>
                    <ArrowRight className="w-6 h-6 text-muted-foreground shrink-0 rotate-90 md:rotate-0"/>
                    <div className="px-4 py-2 bg-primary rounded-lg whitespace-nowrap text-primary-foreground">
                        <p className="font-bold text-center text-sm">{goldTranslations.delivery?.buyer?.title}</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="pricing">
          <GoldInvestmentCalculator />
        </section>
        
        <section id="cta">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">{goldTranslations.cta?.title}</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {goldTranslations.cta?.subtitle}
              </p>
            </div>
            <Card className="w-full mx-auto rounded-lg bg-background border-0 shadow-none">
                <CardHeader className="px-0">
                  <CardTitle>{goldTranslations.cta?.formTitle}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <ContactForm />
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

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, ArrowRight, Briefcase, BarChart, Settings } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ContactForm } from '@/components/contact-form';

const services = [
  {
    icon: <Briefcase className="h-8 w-8 text-accent" />,
    title: 'Strategic Planning',
    description: 'Developing robust strategies to navigate market complexities and drive long-term growth.',
  },
  {
    icon: <BarChart className="h-8 w-8 text-accent" />,
    title: 'Market Analysis',
    description: 'In-depth market research and analysis to identify opportunities and mitigate risks.',
  },
  {
    icon: <Settings className="h-8 w-8 text-accent" />,
    title: 'Operational Improvement',
    description: 'Optimizing your business processes for enhanced efficiency and performance.',
  },
];

const whyChooseUsPoints = [
  'Expert-led teams with deep industry knowledge',
  'Data-driven insights for informed decision-making',
  'Tailored solutions for your unique business challenges',
  'Proven track record of delivering measurable results',
];

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'consulting-hero');
  const strategyImage = PlaceHolderImages.find(p => p.id === 'strategic-planning');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center px-4 md:px-6 py-20 md:py-28">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold tracking-tighter">
              Professional Business Consulting
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto md:mx-0">
              AndrGlobal provides expert guidance to elevate your business strategy, optimize operations, and unlock sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" variant="secondary">
                <Link href="/consulting">Explore Services</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/50 hover:bg-primary-foreground/10 text-primary-foreground">
                <Link href="/#contact">Book a Consultation</Link>
              </Button>
            </div>
          </div>
          {heroImage && (
            <div className="relative h-80 md:h-auto md:aspect-[4/3] rounded-lg overflow-hidden shadow-2xl group">
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                data-ai-hint={heroImage.imageHint}
                priority
              />
            </div>
          )}
        </div>
      </section>

      {/* Services Highlight Section */}
      <section className="py-16 md:py-24" id="services">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Core Consulting Areas</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We focus on the critical areas that drive business success and create lasting value for our clients.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="text-center hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <div className="mx-auto bg-secondary rounded-full p-4 w-fit mb-4">{service.icon}</div>
                  <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/consulting">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="bg-secondary/50 py-16 md:py-24" id="about">
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
          {strategyImage && (
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg group">
                <Image
                    src={strategyImage.imageUrl}
                    alt={strategyImage.description}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    data-ai-hint={strategyImage.imageHint}
                />
            </div>
          )}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Your Partner in Growth</h2>
            <p className="text-lg text-muted-foreground">
              At AndrGlobal, we are more than just consultants; we are your dedicated partners in achieving excellence. Our approach is collaborative, transparent, and relentlessly focused on delivering results that matter.
            </p>
            <ul className="space-y-3">
              {whyChooseUsPoints.map((point) => (
                <li key={point} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24" id="contact">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Let's Discuss Your Project</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Fill out the form below to schedule a free consultation with one of our experts.
            </p>
          </div>
          <Card className="max-w-2xl mx-auto">
              <CardContent className="p-6 md:p-8">
                  <ContactForm />
              </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CheckCircle2, ArrowRight, Briefcase, BarChart, Rocket, Phone, MessageSquare, Send } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ContactForm } from '@/components/contact-form';
import { Input } from '@/components/ui/input';

const featuredServices = [
  {
    icon: <BarChart className="h-10 w-10 text-primary" />,
    title: 'Стратегический консалтинг',
    description: 'Разработка долгосрочных стратегий для определения ключевых направлений роста.',
    href: '/consulting'
  },
  {
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    title: 'Управленческий консалтинг',
    description: 'Оптимизация организационной структуры и повышение производительности.',
     href: '/consulting'
  },
  {
    icon: <Rocket className="h-10 w-10 text-primary" />,
    title: 'Маркетинговый консалтинг',
    description: 'Создание и оптимизация маркетинговых стратегий для продвижения вашего бренда.',
     href: '/consulting'
  },
];

const whyChooseUsPoints = [
  'Глобальная экспертиза и знание локальных рынков',
  'Надежность и полная прозрачность сделок',
  'Индивидуальный подход к каждому клиенту',
  'Активное использование технологических инноваций',
];

const testimonials = [
    {
        name: "Алексей Петров",
        title: "Генеральный директор, 'ТехноСтрой'",
        avatar: "https://picsum.photos/seed/avatar1/100/100",
        text: "Благодаря AndrGlobal мы вышли на новый уровень стратегического планирования. Их команда продемонстрировала глубокое понимание нашего бизнеса и предложила действительно инновационные решения."
    },
    {
        name: "Елена Иванова",
        title: "Финансовый директор, 'ИнвестГрупп'",
        avatar: "https://picsum.photos/seed/avatar2/100/100",
        text: "Профессионализм и индивидуальный подход — вот что отличает AndrGlobal. Они помогли нам оптимизировать финансовые потоки и значительно снизить издержки."
    }
];

function ViberIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14.55 16.55c-1.18 1.18-2.58 2.3-4.13 2.3-1.88 0-3.32-1.3-3.32-3.41V8.29h1.9v7.35c0 1.25.68 2.03 1.42 2.03.79 0 1.48-.92 2.41-1.85l.21-.21c.93-.93 1.83-1.85 2.62-1.85.79 0 1.42.78 1.42 2.03v.21c0 1.24-.63 2.03-1.42 2.03-.78.01-1.68-.9-2.61-1.83zM10.87 5.7c0-.8.64-1.45 1.44-1.45s1.44.65 1.44 1.45c0 .8-.65 1.45-1.44 1.45s-1.44-.65-1.44-1.45zm8.8-2.09c.39-.39.39-1.02 0-1.41a.996.996 0 00-1.41 0l-1.32 1.32c-1.4-.91-3.05-1.43-4.79-1.43-3.93 0-7.33 2.76-8.23 6.5h1.9c.7-2.61 3.19-4.59 5.92-4.59 1.54 0 2.95.55 4.09 1.47l-1.4 1.4c-.39.39-.39 1.02 0 1.41.2.2.45.29.71.29s.51-.1.71-.29l3.41-3.42zm-16.06.48c.84.05 1.6.1 2.29.1 1.76 0 3.84-.66 5.61-2.02.39-.3.99-.2 1.22.25l.25.49c.24.47.01 1.05-.44 1.28-2.22 1.15-4.53 1.69-6.38 1.69-.64 0-1.32-.05-2.02-.13C1.04 10.09.5 8.78.5 7.35c0-.8.29-1.57.81-2.26z"/>
    </svg>
  );
}

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'consulting-main');
  const strategyImage = PlaceHolderImages.find(p => p.id === 'consulting-hero');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-4rem)] w-full flex items-center justify-center text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover brightness-50"
            data-ai-hint={heroImage.imageHint}
            priority
          />
        )}
        <div className="relative z-10 flex flex-col items-center text-center space-y-8 p-4">
          <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-wider uppercase">
            AndrGlobal
          </h1>
          <p className="text-lg md:text-xl max-w-2xl text-white/90">
            Профессиональный бизнес-консалтинг для повышения вашей стратегии и операций
          </p>

          <Card className="bg-black/50 backdrop-blur-sm border-white/20 p-6 rounded-lg w-full max-w-md mt-8">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-2xl font-headline text-white">Свяжитесь с нами</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                  <Input 
                    type="tel" 
                    placeholder="Ваш номер телефона" 
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:ring-white"
                  />
                  <Button size="icon" className="bg-primary hover:bg-primary/90 flex-shrink-0">
                    <Send className="h-5 w-5" />
                  </Button>
                </div>
                <div className="flex items-center justify-center gap-4 mt-2">
                  <Link href="#" aria-label="Telegram">
                     <MessageSquare className="h-7 w-7 text-white/80 hover:text-white transition-colors" />
                  </Link>
                  <Link href="#" aria-label="WhatsApp">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-white/80 hover:text-white transition-colors">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.586-1.457l-6.354 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                  </Link>
                  <Link href="#" aria-label="Viber">
                    <ViberIcon className="text-white/80 hover:text-white transition-colors" />
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="absolute bottom-10">
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-black" asChild>
                <Link href="#services">Узнать больше</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-16 md:py-24 bg-secondary/50" id="services">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Ключевые направления консалтинга</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Мы предлагаем комплексные решения для стратегического развития вашего бизнеса.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <Card key={service.title} className="flex flex-col text-center items-center hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                <CardHeader className="items-center">
                  <div className="bg-primary/10 rounded-full p-4 w-fit mb-4">{service.icon}</div>
                  <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
                <div className="p-6 pt-0">
                    <Button asChild variant="link">
                        <Link href={service.href}>Узнать больше <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="bg-background py-16 md:py-24" id="about">
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
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Наши конкурентные преимущества</h2>
            <p className="text-lg text-muted-foreground">
            Успех нашей компании основан на уникальном сочетании глобальной экспертизы и глубокого понимания локальных особенностей различных рынков.
            </p>
            <ul className="space-y-4">
              {whyChooseUsPoints.map((point) => (
                <li key={point} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
                  <span className="text-lg text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
             <div className="pt-4">
                 <Button asChild size="lg">
                    <Link href="/consulting">Подробнее о нас</Link>
                </Button>
             </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-secondary/50 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
              <div className="text-center space-y-4 mb-12">
                  <h2 className="text-3xl md:text-4xl font-headline font-bold">Что говорят наши клиенты</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {testimonials.map((testimonial) => (
                      <Card key={testimonial.name} className="bg-background">
                          <CardContent className="p-6">
                              <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                              <div className="flex items-center gap-4">
                                  <Avatar>
                                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                  </Avatar>
                                  <div>
                                      <p className="font-semibold">{testimonial.name}</p>
                                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                                  </div>
                              </div>
                          </CardContent>
                      </Card>
                  ))}
              </div>
          </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24" id="contact">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Начните сотрудничество с нами сегодня</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
             Наша команда экспертов готова ответить на все ваши вопросы и предоставить детальную информацию о наших услугах.
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

    
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, ArrowRight, Gem, Briefcase, ShoppingCart } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ContactForm } from '@/components/contact-form';

const services = [
  {
    icon: <Gem className="h-8 w-8 text-accent" />,
    title: 'Торговля золотом',
    description: 'Высококачественное золото в слитках (93-97%), сертифицированное по международным стандартам.',
  },
  {
    icon: <Briefcase className="h-8 w-8 text-accent" />,
    title: 'Консалтинговые услуги',
    description: 'Комплексные услуги по развитию бизнеса, включая стратегическое и операционное планирование.',
  },
  {
    icon: <ShoppingCart className="h-8 w-8 text-accent" />,
    title: 'Торговля продовольствием',
    description: 'Поставки высококачественных продовольственных товаров по всему миру.',
  },
];

const whyChooseUsPoints = [
  'Глобальная экспертиза и знание локальных рынков',
  'Надежность и полная прозрачность сделок',
  'Индивидуальный подход к каждому клиенту',
  'Активное использование технологических инноваций',
];

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'consulting-hero');
  const strategyImage = PlaceHolderImages.find(p => p.id === 'business-people');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center px-4 md:px-6 py-20 md:py-28">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold tracking-tighter">
              Добро пожаловать в мир надежных инвестиций и международной торговли
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto md:mx-0">
              Ваш стратегический партнер в глобальном бизнесе. Мы — ведущая международная компания, специализирующаяся на трех ключевых направлениях: торговле драгоценными металлами, профессиональном консалтинге и поставках высококачественного продовольствия на мировые рынки.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" variant="secondary">
                <Link href="/consulting">Наши Услуги</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/50 hover:bg-primary-foreground/10 text-primary-foreground">
                <Link href="/#contact">Связаться с нами</Link>
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
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Наши направления деятельности</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Мы создаем устойчивые деловые отношения, основанные на доверии, профессионализме и взаимной выгоде.
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
                Посмотреть все услуги <ArrowRight className="ml-2 h-5 w-5" />
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
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Наши конкурентные преимущества</h2>
            <p className="text-lg text-muted-foreground">
            Успех нашей компании основан на уникальном сочетании глобальной экспертизы и глубокого понимания локальных особенностей различных рынков.
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

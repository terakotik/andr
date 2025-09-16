import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CheckCircle2, ArrowRight, BarChart, Briefcase, Rocket } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ContactForm } from '@/components/contact-form';

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

const projectLinks = [
  { name: 'ANDROGOLD', description: 'Продажа и поставка золота на мировые рынки.', href: '/projects/gold' },
  { name: 'ANDRESHOP', description: 'Оптовые поставки продуктов питания.', href: '/projects/shop' },
];


export default function Home() {
  const heroInvestImage = PlaceHolderImages.find(p => p.id === 'hero-invest');


  return (
    <div className="flex flex-col">

      <section className="relative bg-background py-16 md:py-24">
        <Image
            src="https://img.freepik.com/free-photo/businessman-caucasian-male-professional-concept_53876-22890.jpg?semt=ais_incoming&w=740&q=80"
            alt="Businessman"
            fill
            className="object-cover brightness-50"
            data-ai-hint="businessman professional"
        />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-headline font-bold text-white">
                Добро пожаловать в мир надежных инвестиций и международной торговли
              </h1>
              <p className="text-lg text-gray-200">
                Ваш стратегический партнер в глобальном бизнесе. Мы — ведущая международная компания, специализирующаяся на трех ключевых направлениях: торговле драгоценными металлами, профессиональном консалтинге и поставках высококачественного продовольствия на мировые рынки.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" asChild>
                  <Link href="/consulting">Наши Услуги</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white bg-transparent hover:bg-white hover:text-primary" asChild>
                  <Link href="#contact">Связаться с нами</Link>
                </Button>
              </div>
            </div>
            <Card className="shadow-lg bg-background/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Свяжитесь с нами</CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Projects Section */}
      <section className="bg-background py-16 md:py-24" id="projects">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Наши проекты</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {projectLinks.map((project) => (
              <Card key={project.name} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-primary">{project.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <Button asChild variant="outline">
                    <Link href={project.href}>Узнать больше</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="bg-secondary/50 py-16 md:py-24" id="about">
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
          
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg group">
                <Image
                    src="https://img.freepik.com/premium-photo/urban-business-man-casual-businessman-wearing-suit-jacket-portrait-mature-businessman-ambitions_265223-140824.jpg?semt=ais_hybrid&w=740&q=80"
                    alt="Наши конкурентные преимущества"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    data-ai-hint="businessman portrait"
                />
            </div>
          
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
      <section className="bg-background py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
              <div className="text-center space-y-4 mb-12">
                  <h2 className="text-3xl md:text-4xl font-headline font-bold">Что говорят наши клиенты</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {testimonials.map((testimonial) => (
                      <Card key={testimonial.name} className="bg-secondary/50">
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
      <section className="py-16 md:py-24 bg-secondary/50" id="contact">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Начните сотрудничество с нами сегодня</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
             Наша команда экспертов готова ответить на все ваши вопросы и предоставить детальную информацию о наших услугах.
            </p>
          </div>
          <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>Отправьте нам сообщение</CardTitle>
              </CardHeader>
              <CardContent className="p-6 md:p-8">
                  <ContactForm />
              </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

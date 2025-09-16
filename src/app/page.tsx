import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CheckCircle2, ArrowRight, BarChart, Briefcase, Rocket, Settings, Users, ShieldCheck } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ContactForm } from '@/components/contact-form';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const featuredServices = [
  {
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    title: 'Управленческий консалтинг',
    description: 'Оптимизация систем управления и организационных структур для повышения производительности.',
    details: 'Мы предлагаем глубокий анализ ваших бизнес-процессов и внедрение передовых методик управления для достижения максимальной эффективности.',
  },
  {
    icon: <BarChart className="h-10 w-10 text-primary" />,
    title: 'Стратегический консалтинг',
    description: 'Разработка долгосрочных стратегий роста и дорожных карт для достижения ваших целей.',
    details: 'Наша команда поможет вам определить ключевые векторы развития, проанализировать рыночные тенденции и создать устойчивую стратегию роста.',
  },
  {
    icon: <Rocket className="h-10 w-10 text-primary" />,
    title: 'Маркетинговый консалтинг',
    description: 'Создание и оптимизация маркетинговых стратегий для усиления бренда и привлечения клиентов.',
    details: 'Мы разработаем для вас комплексную маркетинговую стратегию, которая увеличит узнаваемость вашего бренда и привлечет целевую аудиторию.',
  },
    {
    icon: <Settings className="h-10 w-10 text-primary" />,
    title: 'IT-консалтинг',
    description: 'Оптимизация IT-инфраструктуры, внедрение технологий и обеспечение кибербезопасности.',
    details: 'Наши IT-специалисты помогут вам модернизировать вашу IT-инфраструктуру, внедрить инновационные решения и обеспечить надежную защиту данных.',
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: 'Кадровый (HR) консалтинг',
    description: 'Построение эффективной команды через управление персоналом, подбор и развитие культуры.',
    details: 'Мы поможем вам сформировать сильную команду, разработать систему мотивации и создать корпоративную культуру, способствующую успеху.',
  },
    {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: 'Юридический консалтинг',
    description: 'Экспертная юридическая поддержка для защиты вашего бизнеса и минимизации правовых рисков.',
    details: 'Наши юристы обеспечат полную правовую защиту вашего бизнеса, помогут в решении сложных юридических вопросов и минимизируют риски.',
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
            src="https://newdaynews.ru/pict/arts1/76/27/762751_b.jpg"
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
                <Button size="lg" variant="outline" className="text-white border-white bg-transparent hover:text-primary-foreground hover:border-amber-500 hover:bg-gradient-to-r hover:from-amber-400 hover:to-amber-600 transition-all" asChild>
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
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredServices.map((service) => (
              <Card key={service.title} className="flex flex-col overflow-hidden">
                 <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left p-6">
                    <div className="p-4 bg-primary/10 rounded-full w-fit flex-shrink-0">
                        {service.icon}
                    </div>
                    <div className="md:ml-6 mt-4 md:mt-0 w-full">
                        <CardTitle className="font-headline text-xl mb-2">{service.title}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                    </div>
                 </div>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-t">
                    <AccordionTrigger className="px-6 justify-end text-sm text-primary hover:underline">
                      Узнать больше 
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 text-muted-foreground">
                      <p className="mb-4">{service.details}</p>
                      <Button asChild>
                        <Link href="https://wa.me/6289530825574" target="_blank">Заказать</Link>
                      </Button>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
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

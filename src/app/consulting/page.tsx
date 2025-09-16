import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import { Briefcase, BarChart, Settings, Rocket, Users, ShieldCheck, FileText, Landmark, TrendingUp, Scale, Send, Phone } from "lucide-react";
import Image from "next/image";
import {PlaceHolderImages} from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { TelegramIcon, WhatsAppIcon } from "@/components/icons";

const consultingServices = [
  {
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    title: "Управленческий консалтинг",
    description: "Помощь в разработке и внедрении эффективных систем управления, оптимизации организационных структур, повышении производительности и развитии корпоративной культуры. Мы анализируем текущие бизнес-процессы, выявляем узкие места и предлагаем решения, которые приводят к значительному росту производительности.",
  },
  {
    icon: <BarChart className="h-10 w-10 text-primary" />,
    title: "Стратегический консалтинг",
    description: "Разработка долгосрочных стратегий роста, анализ рынка, оценка резервов и внутренних ресурсов. Мы помогаем определить ключевые направления развития, сформулировать миссию и видение компании, а также создать дорожную карту для достижения стратегических целей.",
  },
  {
    icon: <Rocket className="h-10 w-10 text-primary" />,
    title: "Маркетинговый консалтинг",
    description: "Разработка и оптимизация маркетинговых стратегий, онлайн-анализ и разработка эффективных методов продвижения для повышения узнаваемости бренда. Мы поможем вам построить сильный бренд и привлечь новых клиентов.",
  },
  {
    icon: <Settings className="h-10 w-10 text-primary" />,
    title: "IT-консалтинг",
    description: "Оптимизация ИТ-инфраструктуры, внедрение новых технологий, автоматизация бизнес-процессов и обеспечение кибербезопасности. Мы поможем вам использовать технологии как инструмент для роста бизнеса.",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Кадровый (HR) консалтинг",
    description: "Разработка эффективных систем управления персоналом, подбор и адаптация новых сотрудников, развитие корпоративной культуры и повышение мотивации. Мы поможем вам создать команду мечты для развития вашего бизнеса.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: "Юридический консалтинг",
    description: "Экспертная юридическая поддержка по широкому спектру вопросов, включая корпоративное право, договорное право, трудовое право и разрешение споров. Мы защищаем ваш бизнес и минимизируем правовые риски.",
  },
  {
    icon: <FileText className="h-10 w-10 text-primary" />,
    title: "Бухгалтерский консалтинг",
    description: "Оптимизация бухгалтерских процессов, налоговое планирование, подготовка финансовой отчетности и консультации по вопросам соблюдения законодательства. Мы поможем вам поддерживать финансовый порядок и избегать штрафных санкций.",
  },
];

const financialServices = [
    {
        icon: <Landmark className="h-10 w-10 text-primary" />,
        title: "Финансовое планирование и бюджетирование",
        description: "Разработка комплексных финансовых планов и бюджетов для компаний и частных лиц, контроль за их исполнением.",
    },
    {
        icon: <TrendingUp className="h-10 w-10 text-primary" />,
        title: "Инвестиционное консультирование",
        description: "Анализ инвестиционных возможностей, разработка стратегий, управление портфелем активов и минимизация рисков.",
    },
    {
        icon: <Scale className="h-10 w-10 text-primary" />,
        title: "Привлечение финансирования",
        description: "Помощь в поиске и привлечении банковских кредитов, инвестиций, грантов и субсидий для развития вашего бизнеса.",
    }
];


export default function ConsultingPage() {
    const targetAudienceImage = PlaceHolderImages.find(p => p.id === 'business-people');
    const teamImage = PlaceHolderImages.find(p => p.id === 'consulting-hero');

  return (
    <div>
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-headline font-bold">
                Комплексные решения для вашего бизнеса
              </h1>
              <p className="text-lg text-muted-foreground">
                Откройте новые горизонты для своей компании с нашей экспертной поддержкой. Мы поможем вам разработать и реализовать стратегию, которая приведет к успеху.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" asChild>
                  <Link href="#services">Наши Услуги</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#contact-consulting">Связаться с нами</Link>
                </Button>
              </div>
            </div>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Получить консультацию</CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" id="services">
        <div className="container mx-auto px-4 md:px-6 space-y-16">
            <div>
                <div className="text-center space-y-4 mb-12">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold">Консалтинговые услуги</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Превращаем вызовы в возможности через стратегическое партнерство, направленное на повышение эффективности вашего бизнеса.
                    </p>
                </div>
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
                    {consultingServices.map((service) => (
                    <Card key={service.title} className="flex flex-col md:flex-row items-center md:items-start overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary/50 transform hover:-translate-y-1 text-center md:text-left">
                        <div className="p-6 flex-shrink-0 bg-secondary/50 rounded-full m-6 mt-6 md:m-6">
                          {service.icon}
                        </div>
                        <div className="p-6 pt-0 md:pt-6 md:border-l border-border/70 w-full">
                          <CardTitle className="font-headline text-xl mb-2">{service.title}</CardTitle>
                          <CardDescription>{service.description}</CardDescription>
                        </div>
                    </Card>
                    ))}
                </div>
            </div>

            {targetAudienceImage && (
                <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg group mt-12">
                    <Image
                        src={targetAudienceImage.imageUrl}
                        alt={targetAudienceImage.description}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        data-ai-hint={targetAudienceImage.imageHint}
                    />
                </div>
            )}
            
            <div>
                <div className="text-center space-y-4 mb-12">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold">Финансовый консалтинг</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Управление вашими активами для максимальной прибыли и устойчивого роста вашего капитала.
                    </p>
                </div>
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
                    {financialServices.map((service) => (
                    <Card key={service.title} className="flex flex-col md:flex-row items-center md:items-start overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary/50 transform hover:-translate-y-1 text-center md:text-left">
                        <div className="p-6 flex-shrink-0 bg-secondary/50 rounded-full m-6 mt-6 md:m-6">
                          {service.icon}
                        </div>
                        <div className="p-6 pt-0 md:pt-6 md:border-l border-border/70 w-full">
                          <CardTitle className="font-headline text-xl mb-2">{service.title}</CardTitle>
                          <CardDescription>{service.description}</CardDescription>
                        </div>
                    </Card>
                    ))}
                </div>
            </div>

            {teamImage && (
                <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg group mt-12">
                    <Image
                        src={teamImage.imageUrl}
                        alt={teamImage.description}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        data-ai-hint={teamImage.imageHint}
                    />
                </div>
            )}
        </div>
      </section>

      <section className="bg-secondary/50 py-16 md:py-24" id="contact-consulting">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Начните Вашу трансформацию</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Готовы сделать следующий шаг? Свяжитесь с нами для индивидуальной консультации.
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

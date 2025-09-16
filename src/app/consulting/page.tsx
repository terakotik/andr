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
    description: "Помощь в разработке и внедрении эффективной системы управления, оптимизации организационной структуры и повышения производительности.",
  },
  {
    icon: <BarChart className="h-10 w-10 text-primary" />,
    title: "Стратегический консалтинг",
    description: "Разработка долгосрочных стратегий развития, анализ рынков, конкурентов и внутренних ресурсов для определения ключевых направлений роста.",
  },
  {
    icon: <Rocket className="h-10 w-10 text-primary" />,
    title: "Маркетинговый консалтинг",
    description: "Создание и оптимизация маркетинговых стратегий, анализ целевой аудитории и разработка эффективных каналов продвижения.",
  },
  {
    icon: <Settings className="h-10 w-10 text-primary" />,
    title: "IT-консалтинг",
    description: "Оптимизация IT-инфраструктуры, внедрение новых технологий, автоматизация бизнес-процессов и обеспечение кибербезопасности.",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Кадровый (HR) консалтинг",
    description: "Разработка эффективной системы управления персоналом, подбор, адаптация и мотивация сотрудников для создания команды мечты.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: "Юридический консалтинг",
    description: "Экспертная юридическая поддержка по вопросам корпоративного, договорного, трудового права и разрешения споров.",
  },
  {
    icon: <FileText className="h-10 w-10 text-primary" />,
    title: "Бухгалтерский консалтинг",
    description: "Оптимизация бухгалтерского учета, налоговое планирование и подготовка финансовой отчетности в соответствии с законодательством.",
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
    const heroImage = PlaceHolderImages.find(p => p.id === 'consulting-main');

  return (
    <div>
      {heroImage && (
        <section className="relative bg-black text-white py-20 md:py-32">
            <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover opacity-30"
                data-ai-hint={heroImage.imageHint}
                priority
            />
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-3xl text-center mx-auto">
                    <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4">Комплексные решения для вашего бизнеса</h1>
                    <p className="text-lg md:text-xl text-gray-300 mb-8">
                        Откройте новые горизонты для своей компании с нашей экспертной поддержкой. Мы поможем вам разработать и реализовать стратегию, которая приведет к успеху.
                    </p>
                    <div className="bg-white p-4 rounded-lg shadow-lg max-w-xl mx-auto">
                        <div className="flex flex-col sm:flex-row gap-2">
                            <div className="relative flex-grow">
                                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <Input type="tel" placeholder="+7 (999) 999-99-99" className="pl-10 w-full text-gray-900" />
                            </div>
                            <Button size="lg" className="w-full sm:w-auto">
                                Получить консультацию
                                <Send className="ml-2 h-5 w-5" />
                            </Button>
                        </div>
                        <div className="flex items-center justify-center gap-4 mt-4">
                            <p className="text-sm text-gray-500">Или напишите нам в мессенджеры:</p>
                            <div className="flex gap-3">
                                <Link href="#" aria-label="Telegram">
                                    <TelegramIcon className="w-8 h-8 hover:opacity-80 transition-opacity" />
                                </Link>
                                <Link href="#" aria-label="WhatsApp">
                                    <WhatsAppIcon className="w-8 h-8 hover:opacity-80 transition-opacity" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      )}
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
                    <Card key={service.title} className="flex flex-col md:flex-row items-start overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary/50 transform hover:-translate-y-1">
                        <div className="p-6 flex-shrink-0 bg-secondary/50 rounded-full m-6 md:m-0 md:p-6">
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
                    <Card key={service.title} className="flex flex-col md:flex-row items-start overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary/50 transform hover:-translate-y-1">
                        <div className="p-6 flex-shrink-0 bg-secondary/50 rounded-full m-6 md:m-0 md:p-6">
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
            <CardContent className="p-6 md:p-8">
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

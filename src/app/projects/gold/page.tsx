
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Gem, ShieldCheck, Scale, Globe, ArrowRight, ArrowLeft, Check, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Link from 'next/link';
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartConfig } from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Line, LineChart, Pie, PieChart, Cell } from "recharts"

const lbmaData = [
  { date: '01/07', price: 2335.55 },
  { date: '02/07', price: 2320.80 },
  { date: '03/07', price: 2355.70 },
  { date
: '04/07', price: 2365.60 },
  { date: '05/07', price: 2350.15 },
  { date: '08/07', price: 2338.90 },
  { date: '09/07', price: 2345.00 },
];

const lbmaChartConfig = {
  price: {
    label: "Цена (USD)",
    color: "#eab308",
  },
} satisfies ChartConfig

const purityData = [
    { name: 'Pure Gold', value: 95, fill: '#eab308' },
    { name: 'Other Metals', value: 5, fill: '#6b7280' },
]

const purityChartConfig = {
    gold: {
        label: "Золото",
    },
    other: {
        label: "Примеси"
    }
} satisfies ChartConfig

export default function AndrgoldPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'andrgold-hero');
  
  return (
    <div className="bg-stone-50 text-gray-800">
      {heroImage && (
        <section className="relative h-[50vh] flex items-center justify-center text-center">
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover brightness-50"
            data-ai-hint={heroImage.imageHint}
            priority
          />
          <div className="absolute inset-0 bg-primary/20"></div>
          <div className="relative z-10 space-y-4 px-4">
            <p className="font-headline text-lg text-amber-300 tracking-widest">ANDRGOLD</p>
            <h1 className="text-4xl md:text-5xl font-headline font-bold text-white">
              Продажа золота в слитках на условиях FCA Ташкент
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Высококачественное золото из Афганистана, соответствующее международным стандартам.
            </p>
          </div>
        </section>
      )}

      <main className="container mx-auto px-4 md:px-6 py-16 md:py-24 space-y-20">
        
        <section id="product">
            <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-amber-900">О продукте</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card>
                    <CardHeader><CardTitle>Наименование</CardTitle></CardHeader>
                    <CardContent><p>Золото в слитках</p></CardContent>
                </Card>
                <Card>
                    <CardHeader><CardTitle>Происхождение</CardTitle></CardHeader>
                    <CardContent><p>Афганистан</p></CardContent>
                </Card>
                 <Card className="lg:col-span-2">
                    <CardHeader><CardTitle>Чистота: 93-97%</CardTitle></CardHeader>
                    <CardContent>
                       <ChartContainer config={purityChartConfig} className="mx-auto aspect-square h-[100px]">
                            <PieChart>
                                <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                                <Pie data={purityData} dataKey="value" nameKey="name" innerRadius={20} outerRadius={40} strokeWidth={5}>
                                     {purityData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.fill} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ChartContainer>
                        <p className="text-center text-sm text-muted-foreground mt-2">Визуализация среднего показателя чистоты</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader><CardTitle>Форма</CardTitle></CardHeader>
                    <CardContent><p>Стандартные слитки или по согласованию</p></CardContent>
                </Card>
                <Card className="lg-col-span-3">
                    <CardHeader><CardTitle>Сертификация</CardTitle></CardHeader>
                    <CardContent><p>Предоставляется полный пакет сертификатов качества и происхождения.</p></CardContent>
                </Card>
            </div>
        </section>

        <section id="delivery-terms">
            <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-amber-900">Условия поставки: FCA Ташкент (Инкотермс 2020)</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
                <Card className="border-green-600 border-2">
                    <CardHeader>
                        <CardTitle className="text-green-800">Обязанности Продавца (наши)</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                       <p className="flex items-start"><Check className="w-5 h-5 mr-2 mt-1 text-green-600 flex-shrink-0"/>Подготовить товар к экспорту в Ташкенте.</p>
                       <p className="flex items-start"><Check className="w-5 h-5 mr-2 mt-1 text-green-600 flex-shrink-0"/>Осуществить экспортное таможенное оформление.</p>
                       <p className="flex items-start"><Check className="w-5 h-5 mr-2 mt-1 text-green-600 flex-shrink-0"/>Нести риски до передачи товара перевозчику.</p>
                       <p className="flex items-start"><Check className="w-5 h-5 mr-2 mt-1 text-green-600 flex-shrink-0"/>Предоставить все необходимые документы.</p>
                    </CardContent>
                </Card>
                <Card className="border-blue-600 border-2">
                    <CardHeader>
                        <CardTitle className="text-blue-800">Обязанности Покупателя</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                       <p className="flex items-start"><Check className="w-5 h-5 mr-2 mt-1 text-blue-600 flex-shrink-0"/>Назначить перевозчика и заключить договор перевозки.</p>
                       <p className="flex items-start"><Check className="w-5 h-5 mr-2 mt-1 text-blue-600 flex-shrink-0"/>Нести риски с момента получения товара от нас.</p>
                       <p className="flex items-start"><Check className="w-5 h-5 mr-2 mt-1 text-blue-600 flex-shrink-0"/>Осуществить импортное таможенное оформление.</p>
                       <p className="flex items-start"><Check className="w-5 h-5 mr-2 mt-1 text-blue-600 flex-shrink-0"/>Организовать дальнейшую транспортировку.</p>
                    </CardContent>
                </Card>
            </div>
            <div className="flex justify-center my-8">
                <div className="flex items-center text-center text-muted-foreground">
                    <div className="p-4 bg-green-100 rounded-lg">
                        <p className="font-bold text-green-800">Продавец</p>
                    </div>
                    <ArrowRight className="w-12 h-12 mx-4 text-gray-400"/>
                     <div className="p-4 bg-gray-200 rounded-lg">
                        <p className="font-bold">Перевозчик <br/>(г. Ташкент)</p>
                    </div>
                    <ArrowRight className="w-12 h-12 mx-4 text-gray-400"/>
                    <div className="p-4 bg-blue-100 rounded-lg">
                        <p className="font-bold text-blue-800">Покупатель</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="pricing">
            <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-amber-900">Ценообразование и оплата</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Цена формируется на основе котировок LBMA Gold Price с согласованным дисконтом. Оплата — 100% предоплата.
                </p>
            </div>
             <Card>
                <CardHeader>
                    <CardTitle>Динамика котировок LBMA Gold Price (Пример)</CardTitle>
                    <CardDescription>Цена на золото привязана к мировым котировкам для обеспечения прозрачности.</CardDescription>
                </CardHeader>
                <CardContent>
                    <ChartContainer config={lbmaChartConfig} className="w-full h-[250px]">
                        <LineChart data={lbmaData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                            <CartesianGrid vertical={false} />
                            <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} />
                            <YAxis domain={['dataMin - 50', 'dataMax + 50']} hide />
                            <ChartTooltip content={<ChartTooltipContent indicator="line" />} />
                            <Line dataKey="price" type="monotone" stroke="var(--color-price)" strokeWidth={3} dot={false} />
                        </LineChart>
                    </ChartContainer>
                </CardContent>
            </Card>
        </section>
        
        <section id="advantages">
            <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-amber-900">Преимущества работы с нами</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="flex flex-col items-center text-center">
                    <div className="p-4 bg-amber-100 rounded-full mb-4"><ShieldCheck className="w-8 h-8 text-amber-600" /></div>
                    <h3 className="text-xl font-semibold mb-2 font-headline">Гарантия качества</h3>
                    <p className="text-muted-foreground">Чистота и происхождение золота подтверждены сертификатами.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <div className="p-4 bg-amber-100 rounded-full mb-4"><Globe className="w-8 h-8 text-amber-600" /></div>
                    <h3 className="text-xl font-semibold mb-2 font-headline">Надежность</h3>
                    <p className="text-muted-foreground">Строгое соблюдение сроков поставки и условий договора.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <div className="p-4 bg-amber-100 rounded-full mb-4"><Scale className="w-8 h-8 text-amber-600" /></div>
                    <h3 className="text-xl font-semibold mb-2 font-headline">Прозрачность цены</h3>
                    <p className="text-muted-foreground">Привязка к мировым котировкам LBMA для справедливости сделки.</p>
                </div>
                 <div className="flex flex-col items-center text-center">
                    <div className="p-4 bg-amber-100 rounded-full mb-4"><Gem className="w-8 h-8 text-amber-600" /></div>
                    <h3 className="text-xl font-semibold mb-2 font-headline">Индивидуальный подход</h3>
                    <p className="text-muted-foreground">Готовность адаптировать условия сотрудничества под ваши нужды.</p>
                </div>
            </div>
        </section>

        <section id="cta" className="bg-white rounded-lg shadow-xl p-8 md:p-12 border-2 border-amber-400">
            <div className="text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-amber-900">Начните сотрудничество с нами</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Свяжитесь с нами, чтобы обсудить детали и получить индивидуальное предложение. Наша команда готова ответить на все ваши вопросы.
                </p>
                <div className="pt-4">
                    <Button size="lg" asChild className="bg-gradient-to-r from-amber-400 to-amber-600 text-white shadow-lg hover:shadow-xl transition-shadow px-10 py-6 text-lg">
                        <Link href="/#contact">Связаться с нами</Link>
                    </Button>
                </div>
            </div>
        </section>

      </main>
    </div>
  );
}

    
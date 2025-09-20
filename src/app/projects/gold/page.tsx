
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Gem, ShieldCheck, Scale, Globe, ArrowRight, ArrowLeft, Check, X, Award, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Link from 'next/link';
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartConfig } from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, LabelList } from "recharts"

const priceData = [
    { date: "2020", price: 1586.20 },
    { date: "2021", price: 1798.61 },
    { date: "2022", price: 1800.09 },
    { date: "2023", price: 1900.00 },
    { date: "2024", price: 1950.00 },
    { date: "2025", price: 1975.00 },
];

const growthData = priceData.map((item, index) => {
    if (index === 0) {
        return { date: item.date, growth: 0 };
    }
    const previousPrice = priceData[index - 1].price;
    const growth = ((item.price - previousPrice) / previousPrice) * 100;
    return { date: item.date, growth: parseFloat(growth.toFixed(2)) };
});


const lbmaChartConfig = {
  growth: {
    label: "Рост (%)",
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
      
        <section className="relative h-[50vh] flex items-center justify-center text-center">
          <Image
            src="https://s0.rbk.ru/v6_top_pics/ampresize/media/img/3/61/756468432337613.jpg"
            alt="Gold bars"
            fill
            className="object-cover brightness-50"
            data-ai-hint="gold bars"
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
      

      <main className="container mx-auto px-4 md:px-6 py-16 md:py-24 space-y-20">
        
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-headline font-semibold text-amber-900 mb-4">Надежные и выгодные инвестиции в золото</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Мы ваш надежный партнер по приобретению и поставке высококачественного золота в слитках, соответствующего международным стандартам.
            </p>
          </div>
          <div id="key-advantages" className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-md border border-amber-100">
                <ShieldCheck className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-amber-900">Гарантия качества</h3>
                <p className="text-gray-600">Чистота и происхождение золота подтверждены сертификатами.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border border-amber-100">
                <Globe className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-amber-900">Надежность поставок</h3>
                <p className="text-gray-600">Строгое соблюдение сроков и условий договора FCA Ташкент.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border border-amber-100">
                <Gem className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-amber-900">Индивидуальный подход</h3>
                <p className="text-gray-600">Готовность адаптировать условия сотрудничества под ваши нужды.</p>
            </div>
          </div>
        </section>

        <section id="product">
            <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-amber-900">Наши продукты</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Мы предлагаем как золото-сырец из Афганистана, так и аффинированное золото высшей пробы.
                </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
                <Card className="flex flex-col">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-amber-900">
                            <Gem className="w-7 h-7 text-amber-700"/>
                            Золото-сырец
                        </CardTitle>
                        <CardDescription>Происхождение: Афганистан</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow space-y-4">
                        <p><span className="font-semibold">Чистота:</span> 93-97% (22-23 карата)</p>
                        <p><span className="font-semibold">Форма:</span> Мерные слитки (1, 2, 3 кг).</p>
                        <p>Идеально подходит для последующей переработки и аффинажа.</p>
                    </CardContent>
                </Card>
                <Card className="flex flex-col">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-amber-900">
                            <Award className="w-7 h-7 text-amber-700"/>
                            Аффинированное золото
                        </CardTitle>
                        <CardDescription>После полной очистки</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow space-y-4">
                        <p><span className="font-semibold">Чистота:</span> 999.9 (четыре девятки)</p>
                        <p><span className="font-semibold">Форма:</span> Мерные слитки (1, 2, 3 кг).</p>
                        <div className="flex items-start gap-2 pt-2">
                           <ShieldCheck className="w-5 h-5 text-amber-600 mt-1 shrink-0"/>
                           <p><span className="font-semibold">Сертификация:</span> Поставляется с сертификатом Узбекской государственной пробирной палаты.</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>

        <section id="delivery-terms">
            <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-amber-900">Условия поставки: FCA Ташкент (Инкотермс 2020)</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
                <Card className="border-green-600 border-2 flex flex-col">
                    <CardHeader>
                        <CardTitle className="text-green-800">Обязанности Продавца (наши)</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 flex-grow">
                       <p className="flex items-start"><Check className="w-5 h-5 mr-2 mt-1 text-green-600 flex-shrink-0"/>Подготовить товар к экспорту в Ташкенте.</p>
                       <p className="flex items-start"><Check className="w-5 h-5 mr-2 mt-1 text-green-600 flex-shrink-0"/>Осуществить экспортное таможенное оформление.</p>
                       <p className="flex items-start"><Check className="w-5 h-5 mr-2 mt-1 text-green-600 flex-shrink-0"/>Нести риски до передачи товара перевозчику.</p>
                       <p className="flex items-start"><Check className="w-5 h-5 mr-2 mt-1 text-green-600 flex-shrink-0"/>Предоставить все необходимые документы.</p>
                    </CardContent>
                </Card>
                <Card className="border-blue-600 border-2 flex flex-col">
                    <CardHeader>
                        <CardTitle className="text-blue-800">Обязанности Покупателя</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 flex-grow">
                       <p className="flex items-start"><Check className="w-5 h-5 mr-2 mt-1 text-blue-600 flex-shrink-0"/>Назначить перевозчика и заключить договор перевозки.</p>
                       <p className="flex items-start"><Check className="w-5 h-5 mr-2 mt-1 text-blue-600 flex-shrink-0"/>Нести риски с момента получения товара от нас.</p>
                       <p className="flex items-start"><Check className="w-5 h-5 mr-2 mt-1 text-blue-600 flex-shrink-0"/>Осуществить импортное таможенное оформление.</p>
                       <p className="flex items-start"><Check className="w-5 h-5 mr-2 mt-1 text-blue-600 flex-shrink-0"/>Организовать дальнейшую транспортировку.</p>
                    </CardContent>
                </Card>
            </div>
            <div className="overflow-x-auto py-4">
                <div className="flex items-center justify-center my-4 min-w-[500px]">
                    <div className="px-2 py-4 bg-amber-100 rounded-lg whitespace-nowrap shadow-md border border-amber-200">
                        <p className="font-bold text-amber-800">Продавец</p>
                    </div>
                    <ArrowRight className="w-8 h-8 mx-2 text-gray-400 shrink-0"/>
                     <div className="px-2 py-4 bg-gray-200 rounded-lg whitespace-nowrap shadow-md border-gray-300">
                        <p className="font-bold text-center text-gray-700">Перевозчик</p>
                    </div>
                    <ArrowRight className="w-8 h-8 mx-2 text-gray-400 shrink-0"/>
                    <div className="px-2 py-4 bg-amber-100 rounded-lg whitespace-nowrap shadow-md border border-amber-200">
                        <p className="font-bold text-amber-800">Покупатель</p>
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
                 <div className="pt-2">
                    <Button asChild variant="outline">
                        <Link href="http://ru.investing.com/currencies/xau-usd" target="_blank">
                            Проверить актуальную цену
                            <ExternalLink className="w-4 h-4 ml-2" />
                        </Link>
                    </Button>
                </div>
            </div>
             <Card>
                <CardHeader>
                    <CardTitle>Динамика годового роста цены на золото (%)</CardTitle>
                    <CardDescription>
                        Процентное изменение средней цены на золото по сравнению с предыдущим годом. Данные за 2023-2025 годы являются ориентировочными.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ChartContainer config={lbmaChartConfig} className="w-full h-[350px]">
                        <BarChart data={growthData} margin={{ top: 30, right: 20, bottom: 20, left: 20 }}>
                            <CartesianGrid vertical={false} />
                            <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} />
                            <YAxis 
                                unit="%" 
                                domain={['dataMin - 2', 'auto']}
                            />
                            <ChartTooltip 
                                cursor={false} 
                                content={<ChartTooltipContent indicator="line" labelKey="date" formatter={(value) => `${value}%`} />} 
                            />
                             <Bar dataKey="growth" fill="var(--color-growth)" radius={8}>
                                <LabelList 
                                    dataKey="growth" 
                                    position="top" 
                                    offset={10}
                                    formatter={(value: number) => `${value}%`}
                                    className="fill-foreground text-sm font-medium"
                                />
                            </Bar>
                        </BarChart>
                    </ChartContainer>
                </CardContent>
            </Card>
        </section>
        
        <section id="cta" className="bg-white rounded-lg shadow-xl p-8 md:p-12 border-2 border-amber-400">
            <div className="text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-amber-900">Начните сотрудничество с нами</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Свяжитесь с нами, чтобы обсудить детали и получить индивидуальное предложение. Наша команда готова ответить на все ваши вопросы.
                </p>
                <div className="pt-4">
                    <Button size="lg" asChild variant="outline" className="px-10 py-6 text-lg rounded-full">
                        <Link href="/#contact">Связаться с нами</Link>
                    </Button>
                </div>
            </div>
        </section>

      </main>
    </div>
  );
}

    
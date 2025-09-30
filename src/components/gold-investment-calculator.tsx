
"use client";

import React, { useState, useMemo } from 'react';
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ChartConfig, ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import { useLanguage } from '@/context/language-context';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ExternalLink, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const rawPriceData = [
    { year: "2015", price: 1160 },
    { year: "2016", price: 1250 },
    { year: "2017", price: 1257 },
    { year: "2018", price: 1268 },
    { year: "2019", price: 1392 },
    { year: "2020", price: 1770 },
    { year: "2021", price: 1798 },
    { year: "2022", price: 1800 },
    { year: "2023", price: 1943 },
    { year: "2024", price: 2300 },
    { year: "2025", price: 3750 },
];

const chartConfig = {
    price: {
        label: "Gold Price",
        color: "hsl(var(--primary))",
    },
    investment: {
        label: "Your Investment",
        color: "hsl(var(--accent-foreground))",
    },
} satisfies ChartConfig;

export function GoldInvestmentCalculator() {
    const { translations } = useLanguage();
    const goldTranslations = translations.goldPage || {};

    const [investmentAmount, setInvestmentAmount] = useState(10000);
    const [startYear, setStartYear] = useState("2015");
    const [calculationResult, setCalculationResult] = useState<{ finalValue: number; profit: number; } | null>(null);
    const [chartData, setChartData] = useState(rawPriceData);
    
    const availableYears = useMemo(() => rawPriceData.filter(d => parseInt(d.year) < 2025).map(d => d.year), []);

    const handleCalculate = () => {
        const startPriceData = rawPriceData.find(d => d.year === startYear);
        const endPriceData = rawPriceData.find(d => d.year === '2025');

        if (!startPriceData || !endPriceData || !investmentAmount) {
            setCalculationResult(null);
            setChartData(rawPriceData);
            return;
        }

        const startPrice = startPriceData.price;
        const endPrice = endPriceData.price;

        const finalValue = (investmentAmount / startPrice) * endPrice;
        const profit = finalValue - investmentAmount;
        
        setCalculationResult({ finalValue, profit });

        const investmentGrowthData = rawPriceData.map(d => {
            if (parseInt(d.year) < parseInt(startYear)) {
                return { ...d, investment: null };
            }
            const currentPrice = d.price;
            const value = (investmentAmount / startPrice) * currentPrice;
            return { ...d, investment: value };
        });

        setChartData(investmentGrowthData);
    };

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(value);
    };

    return (
        <div className="space-y-8">
            <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">{goldTranslations.pricing?.title}</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    {goldTranslations.pricing?.subtitle}
                </p>
                 <div className="pt-2">
                    <Button asChild variant="outline">
                        <Link href="http://ru.investing.com/currencies/xau-usd" target="_blank">
                            {goldTranslations.pricing?.checkPrice}
                            <ExternalLink className="w-4 h-4 ml-2" />
                        </Link>
                    </Button>
                </div>
            </div>

            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="text-primary">{goldTranslations.chart?.title}</CardTitle>
                     <CardDescription
                        dangerouslySetInnerHTML={{
                            __html: goldTranslations.chart?.description || "",
                        }}
                    />
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-3 gap-4 items-end bg-secondary/50 p-4 rounded-lg border">
                        <div className="space-y-2">
                            <Label htmlFor="investment-amount">{goldTranslations.chart?.investmentAmountLabel}</Label>
                            <Input 
                                id="investment-amount" 
                                type="number"
                                value={investmentAmount}
                                onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                                placeholder="e.g., 10000"
                            />
                        </div>
                        <div className="space-y-2">
                             <Label htmlFor="investment-year">{goldTranslations.chart?.investmentYearLabel}</Label>
                             <Select value={startYear} onValueChange={setStartYear}>
                                <SelectTrigger id="investment-year">
                                    <SelectValue placeholder="Select year" />
                                </SelectTrigger>
                                <SelectContent>
                                    {availableYears.map(year => (
                                        <SelectItem key={year} value={year}>{year}</SelectItem>
                                    ))}
                                </SelectContent>
                             </Select>
                        </div>
                         <Button onClick={handleCalculate} className="w-full">
                            <TrendingUp className="mr-2 h-4 w-4" />
                            {goldTranslations.chart?.calculateButton}
                         </Button>
                    </div>

                    {calculationResult && (
                        <div className="grid md:grid-cols-2 gap-4 text-center p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                             <div>
                                <p className="text-sm text-green-700 dark:text-green-400 font-medium">{goldTranslations.chart?.finalValueLabel}</p>
                                <p className="text-2xl font-bold text-green-600 dark:text-green-300">{formatCurrency(calculationResult.finalValue)}</p>
                            </div>
                            <div>
                                <p className="text-sm text-green-700 dark:text-green-400 font-medium">{goldTranslations.chart?.profitLabel}</p>
                                <p className="text-2xl font-bold text-green-600 dark:text-green-300">{formatCurrency(calculationResult.profit)}</p>
                            </div>
                        </div>
                    )}
                   
                    <div className="w-full h-[450px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                                <defs>
                                    <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                                        <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.1}/>
                                    </linearGradient>
                                     <linearGradient id="colorInvestment" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="hsl(var(--primary) / 0.8)" stopOpacity={0.8}/>
                                        <stop offset="95%" stopColor="hsl(var(--primary) / 0.1)" stopOpacity={0.1}/>
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="year" tickLine={false} axisLine={false} tickMargin={8} />
                                <YAxis 
                                    tickFormatter={(value) => `$${Number(value).toLocaleString()}`} 
                                    domain={['dataMin - 100', 'auto']}
                                    axisLine={false}
                                    tickLine={false}
                                    width={80}
                                />
                                <Tooltip 
                                    content={({ active, payload, label }) => {
                                        if (active && payload && payload.length) {
                                            const dataPoint = payload[0];
                                            const currentYear = parseInt(label, 10);
                                            const currentPrice = dataPoint.payload.price;
                                            
                                            let totalGrowth = null;
                                            const startPriceData = rawPriceData.find(d => d.year === startYear);

                                            if (calculationResult && startPriceData && currentYear > parseInt(startYear)) {
                                                const startPrice = startPriceData.price;
                                                totalGrowth = ((currentPrice - startPrice) / startPrice * 100).toFixed(2);
                                            }

                                            return (
                                                <div className="bg-background/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border">
                                                    <p className="font-bold text-lg mb-2">{label}</p>
                                                    <p className="text-primary">{`${goldTranslations.chart?.priceLabel || 'Gold Price'}: ${formatCurrency(dataPoint.value as number)}`}</p>
                                                    {totalGrowth !== null && (
                                                        <p className={`font-semibold ${Number(totalGrowth) >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                                                            {goldTranslations.chart?.totalGrowth || 'Total Growth'}: {totalGrowth}%
                                                        </p>
                                                    )}
                                                    {payload[1] && payload[1].value && (
                                                        <p className="text-green-600 font-semibold mt-2 pt-2 border-t border-border">{`${goldTranslations.chart?.yourInvestment || 'Your Investment'}: ${formatCurrency(payload[1].value as number)}`}</p>
                                                    )}
                                                </div>
                                            );
                                        }
                                        return null;
                                    }}
                                />
                                <Legend verticalAlign="top" align="right" height={36} />
                                <Area 
                                    type="monotone" 
                                    dataKey="price" 
                                    stroke="hsl(var(--primary))" 
                                    fill="url(#colorPrice)" 
                                    strokeWidth={2}
                                    name={goldTranslations.chart?.priceLabel || 'Gold Price'}
                                    dot={{ r: 4, fill: "hsl(var(--primary))" }}
                                    activeDot={{ r: 6 }}
                                />
                                {calculationResult && (
                                    <Area 
                                        type="monotone" 
                                        dataKey="investment" 
                                        stroke="hsl(var(--primary-foreground))"
                                        fill="url(#colorInvestment)" 
                                        strokeWidth={2}
                                        name={goldTranslations.chart?.yourInvestment || 'Your Investment'}
                                        dot={{ r: 4, fill: "hsl(var(--primary-foreground))" }}
                                        activeDot={{ r: 6 }}
                                    />
                                )}
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

    

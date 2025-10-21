
"use client";

import React, { useState, useEffect, Suspense, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useLanguage } from '@/context/language-context';
import { AlertCircle, Copy, Check, ExternalLink } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Link from 'next/link';

function InvoiceContent() {
    const { language, translations } = useLanguage();
    const searchParams = useSearchParams();

    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);
    const [paymentLink, setPaymentLink] = useState('');
    const [hasCopied, setHasCopied] = useState(false);

    const productId = searchParams.get('productId');
    const productName = searchParams.get('productName');
    const pricePerKg = parseFloat(searchParams.get('price') || '0');

    const conversionRate = 16000;

    const invoiceId = useMemo(() => {
        if (!productId) return '';
        return `${productId.toUpperCase()}-${Date.now()}`;
    }, [productId]);

    const invoiceTranslations = translations.invoicePage || {};

    useEffect(() => {
        const pricePerTon = pricePerKg * 1000;
        const newTotal = quantity * pricePerTon;
        setTotalPrice(newTotal);

        if (invoiceId && newTotal > 0) {
            const newLink = `${window.location.origin}/pay?invoiceId=${invoiceId}&amount=${newTotal}`;
            setPaymentLink(newLink);
        }

    }, [quantity, pricePerKg, invoiceId]);

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value, 10);
        if (value >= 1) {
            setQuantity(value);
        } else if (isNaN(value) || value < 1) {
            setQuantity(1);
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(paymentLink);
        setHasCopied(true);
        setTimeout(() => setHasCopied(false), 2000);
    };

    const formatCurrency = (amount: number) => {
        if (language === 'id') {
            return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(amount * conversionRate);
        }
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
    };

    if (!productId || !productName || pricePerKg === 0) {
        return (
            <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 text-center">
                <Alert variant="destructive" className="max-w-lg mx-auto">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{invoiceTranslations.productError}</AlertDescription>
                </Alert>
                <Button asChild className="mt-8">
                    <Link href="/projects/shop">{invoiceTranslations.backToShop}</Link>
                </Button>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <Card className="max-w-2xl mx-auto shadow-lg">
                <CardHeader>
                    <CardTitle className="text-3xl font-headline">{invoiceTranslations.title} #{invoiceId}</CardTitle>
                    <CardDescription>{invoiceTranslations.subtitle}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                    <div className="p-6 border rounded-lg space-y-4 bg-secondary/50">
                        <h3 className="font-semibold text-lg">{invoiceTranslations.productDetails}</h3>
                        <div className="flex justify-between items-center">
                            <span className="text-muted-foreground">{invoiceTranslations.productName}:</span>
                            <span className="font-bold">{productName}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-muted-foreground">{invoiceTranslations.productId}:</span>
                            <span className="font-mono text-sm">{productId}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-muted-foreground">{invoiceTranslations.pricePerKg}:</span>
                            <span className="font-bold">{formatCurrency(pricePerKg)}</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <Label htmlFor="quantity" className="text-base">{invoiceTranslations.quantityLabel}</Label>
                        <Input
                            id="quantity"
                            type="number"
                            value={quantity}
                            onChange={handleQuantityChange}
                            min="1"
                            className="text-lg"
                        />
                        <p className="text-sm text-muted-foreground">{invoiceTranslations.minQuantity}</p>
                    </div>

                    <div className="p-6 border rounded-lg space-y-4 bg-background">
                         <h3 className="font-semibold text-lg">{invoiceTranslations.total}</h3>
                        <div className="flex justify-between items-center text-2xl font-bold text-primary">
                            <span>{invoiceTranslations.totalAmount}:</span>
                            <span>{formatCurrency(totalPrice)}</span>
                        </div>
                    </div>
                    
                    <div className="space-y-4">
                        <h3 className="font-semibold text-lg">{invoiceTranslations.paymentLinkTitle}</h3>
                        <p className="text-sm text-muted-foreground">{invoiceTranslations.paymentLinkDescription}</p>
                        <div className="flex gap-2">
                             <Input 
                                type="text" 
                                readOnly 
                                value={paymentLink}
                                className="font-mono text-sm"
                            />
                            <Button variant="outline" size="icon" onClick={copyToClipboard}>
                                {hasCopied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                            </Button>
                        </div>
                        <Button asChild className="w-full">
                            <Link href={paymentLink} target="_blank">
                                {invoiceTranslations.payButton}
                                <ExternalLink className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}


export default function InvoicePage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <InvoiceContent />
        </Suspense>
    )
}

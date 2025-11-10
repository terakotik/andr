
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/context/language-context";

export function ContactForm() {
    const { translations } = useLanguage();
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const formSchema = z.object({
        name: z.string().min(2, {
            message: translations.contactForm.validation.name,
        }),
        email: z.string().email({
            message: translations.contactForm.validation.email,
        }),
        message: z.string().min(10, {
            message: translations.contactForm.validation.message,
        }),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            const result = await response.json();

            if (response.ok) {
                toast({
                    title: translations.contactForm.toast.title,
                    description: translations.contactForm.toast.description,
                });
                form.reset();
            } else {
                toast({
                    variant: "destructive",
                    title: "Ошибка отправки",
                    description: result.message || "Не удалось отправить сообщение.",
                });
            }
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Сетевая ошибка",
                description: "Произошла ошибка при отправке формы. Пожалуйста, попробуйте снова.",
            });
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{translations.contactForm.nameLabel}</FormLabel>
                            <FormControl>
                                <Input placeholder={translations.contactForm.namePlaceholder} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{translations.contactForm.emailLabel}</FormLabel>
                            <FormControl>
                                <Input placeholder={translations.contactForm.emailPlaceholder} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{translations.contactForm.messageLabel}</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder={translations.contactForm.messagePlaceholder}
                                    className="min-h-[120px]"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Отправка..." : translations.contactForm.submitButton}
                </Button>
            </form>
        </Form>
    );
}

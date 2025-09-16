"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

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

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        toast({
            title: translations.contactForm.toast.title,
            description: translations.contactForm.toast.description,
        });
        form.reset();
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
                <Button type="submit" className="w-full">{translations.contactForm.submitButton}</Button>
            </form>        </Form>
    );
}

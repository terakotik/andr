
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/context/language-context";

interface OrderFormProps {
  productCategories: string[];
}

export function OrderForm({ productCategories }: OrderFormProps) {
    const { translations } = useLanguage();
    const { toast } = useToast();
    const orderFormTranslations = translations.orderForm || {};

    const phoneRegex = new RegExp(
      /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
    );

    const formSchema = z.object({
        name: z.string().min(2, {
            message: orderFormTranslations.validation?.name,
        }),
        email: z.string().email({
            message: orderFormTranslations.validation?.email,
        }),
        phone: z.string().regex(phoneRegex, orderFormTranslations.validation?.phone),
        productCategory: z.string({
            required_error: orderFormTranslations.validation?.product,
        }),
        message: z.string().min(10, {
            message: orderFormTranslations.validation?.message,
        }),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        toast({
            title: orderFormTranslations.toast?.title,
            description: orderFormTranslations.toast?.description,
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
                            <FormLabel>{orderFormTranslations.nameLabel}</FormLabel>
                            <FormControl>
                                <Input placeholder={orderFormTranslations.namePlaceholder} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{orderFormTranslations.emailLabel}</FormLabel>
                                <FormControl>
                                    <Input placeholder={orderFormTranslations.emailPlaceholder} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{orderFormTranslations.phoneLabel}</FormLabel>
                                <FormControl>
                                    <Input placeholder={orderFormTranslations.phonePlaceholder} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="productCategory"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{orderFormTranslations.productLabel}</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder={orderFormTranslations.productPlaceholder} />
                                </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                {productCategories.map((category) => (
                                    <SelectItem key={category} value={category}>
                                    {category}
                                    </SelectItem>
                                ))}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{orderFormTranslations.messageLabel}</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder={orderFormTranslations.messagePlaceholder}
                                    className="min-h-[120px]"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full">{orderFormTranslations.submitButton}</Button>
            </form>
        </Form>
    );
}

    

"use client";

import { PayPalScriptProvider, PayPalButtons, OnApproveData, OnApproveActions } from "@paypal/react-paypal-js";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/context/language-context";

const PayPalButton = () => {
    const { toast } = useToast();
    const { translations } = useLanguage();
    const shopTranslations = translations.shopPage || {};

    const initialOptions = {
        "clientId": "ARNBB8BmvCXf-d57tAIHOPiqu-g2_-9R-gKlWCwTzhk2n9_D5_qvWQ-l_ANS-ApKvFNam48GHpQ2KLpQ",
        "currency": "USD",
        "intent": "capture",
    };

    const createOrder = (data: any, actions: any) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: "0.01", // Example amount
                    },
                },
            ],
        });
    };

    const onApprove = (data: OnApproveData, actions: OnApproveActions) => {
        return actions.order!.capture().then((details: any) => {
            toast({
                title: "Payment Successful",
                description: `Transaction completed by ${details.payer.name.given_name}`,
            });
        });
    };

    const onError = (err: any) => {
        toast({
            variant: "destructive",
            title: "An error occurred",
            description: "Something went wrong with the PayPal transaction.",
        });
    };

    return (
        <PayPalScriptProvider options={initialOptions}>
            <div className="w-full">
                <PayPalButtons 
                    style={{ layout: "horizontal", label: "pay" }}
                    createOrder={createOrder}
                    onApprove={onApprove}
                    onError={onError}
                    />
            </div>
        </PayPalScriptProvider>
    );
};

export { PayPalButton };

"use client";

import React from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useLanguage } from "@/context/language-context";


interface ContactModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export function ContactModal({ isOpen, onOpenChange }: ContactModalProps) {
  const { translations } = useLanguage();
  const whatsappLink = "https://wa.me/6289530825574";
  const phoneLink = "tel:+6289530825574";
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(whatsappLink)}`;
  
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-3xl p-8">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            {translations.contactModal.title}
          </DialogTitle>
        </DialogHeader>
        <div className="mt-6 bg-secondary/50 p-6 rounded-lg flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          <div className="flex-1 flex flex-col justify-center space-y-4 w-full text-center">
             <Button asChild variant="ghost" className="w-full text-lg py-6">
                <Link href={phoneLink} className="flex items-center justify-center">
                    <span>+62 895 308 25574</span>
                </Link>
            </Button>
            <Button asChild className="w-full bg-green-500 hover:bg-green-600 text-white text-lg py-6">
                <Link href={whatsappLink} target="_blank" className="flex items-center justify-center">
                    {translations.contactModal.whatsappButton}
                </Link>
            </Button>
          </div>
          <div className="flex-1 flex flex-col items-center text-center">
            <p className="text-sm text-muted-foreground mb-2" dangerouslySetInnerHTML={{ __html: translations.contactModal.scanQR }}></p>
            <div className="p-2 bg-white rounded-lg shadow-md">
                 <Image
                    src={qrCodeUrl}
                    alt="WhatsApp QR Code"
                    width={250}
                    height={250}
                />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

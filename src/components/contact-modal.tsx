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
import { WhatsAppIcon } from "@/components/icons";
import Link from "next/link";
import { Phone } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export function ContactModal({ isOpen, onOpenChange }: ContactModalProps) {
  const whatsappLink = "https://wa.me/6289530825574";
  const phoneLink = "tel:+6289530825574";
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${whatsappLink}`;
  
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl p-8">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Мы на связи в мессенджерах
          </DialogTitle>
        </DialogHeader>
        <div className="mt-6 bg-secondary/50 p-6 rounded-lg flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          <div className="flex-1 flex flex-col justify-center space-y-4 w-full text-center">
             <Button asChild className="w-full bg-green-500 hover:bg-green-600 text-white text-lg py-6">
                <Link href={whatsappLink} target="_blank" className="flex items-center justify-center">
                    <WhatsAppIcon className="h-6 w-6 mr-2"/>
                    WhatsApp
                </Link>
            </Button>
            <Button asChild variant="ghost" className="w-full text-lg py-6">
                <Link href={phoneLink} className="flex items-center justify-center">
                    <Phone className="h-5 w-5 mr-2"/>
                    <span>+62 895 308 25574</span>
                </Link>
            </Button>
          </div>
          <div className="flex-1 flex flex-col items-center text-center">
            <p className="text-sm text-muted-foreground mb-2">Удобнее с телефона? <br/> Сканируйте QR</p>
            <div className="p-2 bg-white rounded-lg shadow-md">
                 <Image
                    src={qrCodeUrl}
                    alt="WhatsApp QR Code"
                    width={200}
                    height={200}
                />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

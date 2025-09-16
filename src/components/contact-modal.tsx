"use client";

import React from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons";
import Link from "next/link";
import { X } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export function ContactModal({ isOpen, onOpenChange }: ContactModalProps) {
  const whatsappLink = "https://wa.me/6289530825574";
  
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md p-8">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Мы на связи в мессенджерах
          </DialogTitle>
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogHeader>
        <div className="mt-6 bg-secondary/50 p-6 rounded-lg flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1 space-y-4">
             <Button asChild className="w-full bg-green-500 hover:bg-green-600 text-white text-lg py-6">
                <Link href={whatsappLink} target="_blank">
                    <WhatsAppIcon className="h-6 w-6 mr-2"/>
                    WhatsApp
                </Link>
            </Button>
          </div>
          <div className="flex-1 flex flex-col items-center text-center">
            <p className="text-sm text-muted-foreground mb-2">Удобнее с телефона? <br/> Сканируйте QR</p>
            <div className="p-2 bg-white rounded-lg">
                 <Image
                    src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=https://wa.me/6289530825574"
                    alt="WhatsApp QR Code"
                    width={160}
                    height={160}
                />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

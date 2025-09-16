import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Gem, Lock, Scale, Globe } from 'lucide-react';

export default function AndrGoldPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'andrgold-hero');
  
  return (
    <div className="bg-gray-900 text-white">
      {heroImage && (
        <section className="relative h-[60vh] flex items-center justify-center text-center">
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover brightness-50"
            data-ai-hint={heroImage.imageHint}
            priority
          />
          <div className="relative z-10 space-y-4 px-4">
            <p className="font-headline text-lg text-amber-400 tracking-widest">ANDROGOLD</p>
            <h1 className="text-4xl md:text-6xl font-headline font-bold text-white">
              Продажа и поставка золота на мировые рынки
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Безопасные, прозрачные и профессиональные услуги по покупке и продаже инвестиционного золота.
            </p>
          </div>
        </section>
      )}

      <section className="py-16 md:py-24 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6 space-y-16">
          <div className="text-center">
            <h2 className="text-3xl font-headline font-semibold text-amber-400 mb-4">Наши Услуги</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Мы содействуем всему процессу приобретения и продажи золота, гарантируя вам лучшую рыночную стоимость и полное спокойствие.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="border border-gray-700 p-8 rounded-lg bg-gray-800/50">
                <Gem className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-amber-300">Покупка золота</h3>
                <p className="text-gray-400">Доступ к широкому ассортименту сертифицированных золотых слитков и монет от авторитетных производителей.</p>
            </div>
            <div className="border border-gray-700 p-8 rounded-lg bg-gray-800/50">
                <Lock className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-amber-300">Безопасное хранение</h3>
                <p className="text-gray-400">Партнерство с ведущими хранилищами для полностью застрахованных и аудированных решений по хранению.</p>
            </div>
            <div className="border border-gray-700 p-8 rounded-lg bg-gray-800/50">
                <Globe className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-amber-300">Продажа и поставка</h3>
                <p className="text-gray-400">Экспертные брокерские услуги по продаже вашего золота по конкурентоспособным рыночным ставкам.</p>
            </div>
          </div>

          <div className="text-center pt-8">
            <Button size="lg" className="bg-amber-400 text-gray-900 hover:bg-amber-500 px-12 py-6 text-lg">
              Сделать запрос
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

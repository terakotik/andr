import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Leaf, ShoppingCart, Truck } from 'lucide-react';

export default function AndrShopPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'andrshop-hero');
  
  return (
    <div className="bg-green-50 text-gray-800">
      {heroImage && (
        <section className="relative h-[60vh] flex items-center justify-center text-center">
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover brightness-75"
            data-ai-hint={heroImage.imageHint}
            priority
          />
          <div className="absolute inset-0 bg-primary/10"></div>
          <div className="relative z-10 space-y-4 px-4 text-white">
            <p className="font-headline text-lg tracking-widest text-green-200">ANDRESHOP</p>
            <h1 className="text-4xl md:text-6xl font-headline font-bold">
              Оптовые поставки продуктов питания
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Поставляем свежие, высококачественные продукты питания напрямую от производителей вашему бизнесу.
            </p>
          </div>
        </section>
      )}

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 space-y-16">
          <div className="text-center">
            <h2 className="text-3xl font-headline font-semibold text-green-800 mb-4">Надежные и свежие поставки</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Мы ваш надежный партнер по поиску и доставке оптовых партий продуктов питания премиум-класса, включая бобы, зерновые и другие культуры.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-green-800">Качественный поиск</h3>
                <p className="text-gray-600">Мы сотрудничаем с лучшими производителями, чтобы обеспечить высочайшее качество и свежесть.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
                <ShoppingCart className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-green-800">Оптовые заказы</h3>
                <p className="text-gray-600">Эффективная обработка крупных заказов для удовлетворения потребностей вашего бизнеса.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
                <Truck className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-green-800">Глобальная логистика</h3>
                <p className="text-gray-600">Надежная и своевременная доставка до вашего местоположения, где бы вы ни находились.</p>
            </div>
          </div>

          <div className="text-center pt-8">
            <Button size="lg" className="bg-green-700 text-white hover:bg-green-800 px-12 py-6 text-lg">
              Запросить стоимость
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

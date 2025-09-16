import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Gem, ShieldCheck, Scale, Globe, Briefcase, TrendingUp, Leaf, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const SectionCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <Card className="bg-background/80 backdrop-blur-sm border-amber-200 shadow-lg hover:shadow-amber-200/20 transition-shadow duration-300">
        <CardHeader className="flex flex-row items-center gap-4">
            <div className="flex-shrink-0">{icon}</div>
            <CardTitle className="text-xl md:text-2xl font-headline text-amber-800">{title}</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground space-y-4">
            {children}
        </CardContent>
    </Card>
);

export default function AndrGoldPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'andrgold-hero');
  
  return (
    <div className="bg-stone-50 text-gray-800">
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
            <p className="font-headline text-lg text-amber-300 tracking-widest">ANDROGOLD</p>
            <h1 className="text-4xl md:text-6xl font-headline font-bold text-white">
              Продажа и поставка золота на мировые рынки
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Безопасные, прозрачные и профессиональные услуги по покупке и продаже инвестиционного золота.
            </p>
          </div>
        </section>
      )}

      <main className="container mx-auto px-4 md:px-6 py-16 md:py-24 space-y-20">
        
        <section id="intro">
            <div className="max-w-4xl mx-auto text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-amber-900">Добро пожаловать в мир надежных инвестиций и международной торговли</h2>
                <p className="text-lg text-muted-foreground">
                    Ваш стратегический партнер в глобальном бизнесе. Мы — ведущая международная компания, специализирующаяся на трех ключевых направлениях: торговле драгоценными металлами, профессиональном консалтинге и поставках высококачественного продовольствия на мировые рынки. Наша миссия заключается в создании устойчивых деловых отношений, основанных на доверии, профессионализме и взаимной выгоде.
                </p>
            </div>
        </section>

        <section id="activities">
            <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-amber-900">Наши направления деятельности</h2>
            </div>
            <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-12">
                <SectionCard icon={<Gem className="w-12 h-12 text-amber-500" />} title="Торговля золотом и драгоценными металлами">
                    <p>В эпоху экономической нестабильности золото остается одним из самых надежных активов для сохранения и приумножения капитала. Мы предлагаем нашим клиентам высококачественное золото в слитках с содержанием от 93% до 97%, соответствующее международным стандартам качества. Наша продукция сертифицирована и поставляется с полным пакетом документов, подтверждающих происхождение и чистоту металла.</p>
                    <p>Преимущества работы с нами: прозрачное ценообразование (LBMA), полная юридическая поддержка сделок и поставки на условиях FCA из Ташкента.</p>
                </SectionCard>
                
                <SectionCard icon={<Briefcase className="w-12 h-12 text-amber-500" />} title="Профессиональные консалтинговые услуги">
                    <p>Наша команда опытных консультантов предоставляет комплексные услуги по развитию бизнеса. Мы специализируемся на стратегическом планировании, финансовом и операционном консалтинге, а также помогаем компаниям успешно выходить на новые международные рынки, минимизируя риски и максимизируя потенциал роста.</p>
                </SectionCard>

                <SectionCard icon={<Leaf className="w-12 h-12 text-amber-500" />} title="Международная торговля продовольствием">
                     <p>Мы специализируемся на поставках высококачественных продовольственных товаров, соответствующих самым строгим международным стандартам. Наш ассортимент включает зерновые, бобовые, орехи и сухофрукты. Мы обеспечиваем своевременные поставки по всему миру, многоступенчатый контроль качества и полное документальное сопровождение.</p>
                </SectionCard>
            </div>
        </section>
        
        <section id="advantages">
            <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-amber-900">Наши конкурентные преимущества</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-8 h-8 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="text-xl font-semibold mb-2 font-headline">Глобальная экспертиза и локальные знания</h3>
                        <p className="text-muted-foreground">Сочетание глобальной экспертизы и глубокого понимания локальных рынков для адаптации услуг к потребностям клиентов.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-8 h-8 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="text-xl font-semibold mb-2 font-headline">Надежность и прозрачность</h3>
                        <p className="text-muted-foreground">Полная прозрачность ценообразования, четкое соблюдение обязательств и детальная отчетность по всем сделкам.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-8 h-8 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="text-xl font-semibold mb-2 font-headline">Индивидуальный подход</h3>
                        <p className="text-muted-foreground">Разработка персонализированных решений, максимально соответствующих целям и специфике бизнеса каждого партнера.</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-8 h-8 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="text-xl font-semibold mb-2 font-headline">Технологические инновации</h3>
                        <p className="text-muted-foreground">Активное использование передовых технологий для безопасного и эффективного управления всеми аспектами деятельности.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="cta" className="bg-white rounded-lg shadow-xl p-8 md:p-12 border-2 border-amber-400">
            <div className="text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-amber-900">Начните сотрудничество с нами сегодня</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Ваш путь к успеху начинается здесь. Независимо от ваших бизнес-целей, мы готовы предложить вам комплексные решения, адаптированные под ваши конкретные потребности.
                </p>
                <div className="pt-4">
                    <Button size="lg" asChild className="bg-gradient-to-r from-amber-400 to-amber-600 text-white shadow-lg hover:shadow-xl transition-shadow px-10 py-6 text-lg">
                        <Link href="/#contact">Связаться с нами</Link>
                    </Button>
                </div>
            </div>
        </section>

      </main>
    </div>
  );
}

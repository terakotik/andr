
"use client";

import { useLanguage } from "@/context/language-context";

export default function TermsPage() {
    const { language, translations } = useLanguage();
    const policy = translations.termsPage || { terms: {}, contact: {} };
    const today = new Date().toLocaleDateString(language, { year: 'numeric', month: 'long', day: 'numeric' });

    const renderSections = (sections: any[]) => {
        if (!sections) return null;
        return sections.map((section, index) => (
            <div key={index} className="space-y-2">
                <h3 className="text-xl font-semibold text-primary">{section.title}</h3>
                {Array.isArray(section.content) && section.content.map((item: any, i: number) => {
                     if (typeof item === 'string') {
                        if (item.startsWith('•')) {
                             const listItems = section.content.filter((subItem:any) => typeof subItem === 'string' && subItem.startsWith('•')).map((subItem: string, j: number) => (
                                <li key={j} className="ml-4">{subItem.substring(1).trim()}</li>
                            ));
                            if (i > 0 && typeof section.content[i-1] === 'string' && section.content[i-1].startsWith('•')) return null;
                            return <ul key={i} className="list-disc list-inside space-y-1">{listItems}</ul>
                        }
                        return <p key={i}>{item}</p>
                     }
                     if(typeof item === 'object' && item.subpoints) {
                        return (
                             <ul key={i} className="list-disc list-inside space-y-1 ml-4">
                                {item.subpoints.map((subpoint: string, j: number) => <li key={j}>{subpoint}</li>)}
                            </ul>
                        )
                     }
                     return null;
                })}
            </div>
        ));
    };

    return (
        <div className="container mx-auto px-4 md:px-6 py-12">
            <div className="max-w-4xl mx-auto space-y-12">
                <article id="terms" className="space-y-6 pt-8">
                    <header>
                        <h1 className="text-3xl font-bold font-headline text-center">{policy.terms.title}</h1>
                        <p className="text-center text-muted-foreground">{policy.terms.date?.replace('{date}', today)}</p>
                    </header>
                    <div className="prose prose-lg max-w-none space-y-6">
                        {renderSections(policy.terms.sections)}
                        <div className="space-y-2">
                             <h3 className="text-xl font-semibold text-primary">{policy.contact.title}</h3>
                             <p>{policy.contact.name}</p>
                             <p>{policy.contact.address}</p>
                             <p>Email: <a href={`mailto:${policy.contact.email}`}>{policy.contact.email}</a></p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
}

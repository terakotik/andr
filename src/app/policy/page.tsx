
"use client";

import { useLanguage } from "@/context/language-context";

export default function PolicyPage() {
    const { language, translations } = useLanguage();
    const policy = translations.policyPage || { terms: {}, privacy: {}, contact: {} };
    const today = new Date().toLocaleDateString(language, { year: 'numeric', month: 'long', day: 'numeric' });

    const renderSections = (sections: any[]) => {
        if (!sections) return null;
        return sections.map((section, index) => (
            <div key={index} className="space-y-2">
                <h3 className="text-xl font-semibold text-primary">{section.title}</h3>
                {Array.isArray(section.content) && section.content.map((item: any, i: number) => {
                     if (typeof item === 'string') {
                        if (item.startsWith('•')) {
                            const subItems = section.content.slice(i).join(' ').split('•').filter(s => s.trim()).map(s => s.trim());
                            const listItems = subItems.map((subItem, j) => (
                                <li key={j} className="ml-4">{subItem.endsWith(';') ? subItem.slice(0,-1) : subItem}</li>
                            ));
                            section.content.splice(i, section.content.length);
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
    
    const renderRights = (section: any) => {
        if (!section || !Array.isArray(section.content)) return null;
        return (
             <div className="space-y-2">
                <h3 className="text-xl font-semibold text-primary">{section.title}</h3>
                <p>{section.content[0]}</p>
                 <ul className="list-disc list-inside space-y-1 ml-4">
                    {section.content[1].subpoints.map((item: string, i:number) => <li key={i}>{item}</li>)}
                </ul>
                <p>{section.content[2]}</p>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 md:px-6 py-12">
            <div className="max-w-4xl mx-auto space-y-12">
                
                <article className="space-y-6">
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

                <article className="space-y-6 pt-12">
                    <header>
                        <h1 className="text-3xl font-bold font-headline text-center">{policy.privacy.title}</h1>
                        <p className="text-center text-muted-foreground">{policy.privacy.date?.replace('{date}', today)}</p>
                    </header>
                     <div className="prose prose-lg max-w-none space-y-6">
                        {renderSections(policy.privacy.sections?.slice(0, 5))}
                        {renderRights(policy.privacy.sections?.[5])}
                        <div className="space-y-2">
                             <h3 className="text-xl font-semibold text-primary">{policy.contact.title}</h3>
                             <p>{policy.privacy.contact.dpo}</p>
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

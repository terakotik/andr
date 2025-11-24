
"use client";

import { useLanguage } from "@/context/language-context";

export default function PolicyPage() {
    const { translations } = useLanguage();
    const policy = translations.policyPage || { terms: {}, privacy: {}, contact: {} };
    const today = new Date().toLocaleDateString(translations.language, { year: 'numeric', month: 'long', day: 'numeric' });

    const renderSections = (sections: any[]) => {
        if (!sections) return null;
        return sections.map((section, index) => (
            <div key={index} className="space-y-2">
                <h3 className="text-xl font-semibold text-primary">{section.title}</h3>
                {section.content.map((item: string, i: number) => {
                    if (item.startsWith('•')) {
                        const subItems = section.content.slice(i).join(' ').split('•').filter(s => s.trim()).map(s => s.trim());
                        const listItems = subItems.map((subItem, j) => (
                            <li key={j} className="ml-4">{subItem.endsWith(';') ? subItem.slice(0,-1) : subItem}</li>
                        ));
                         // This is a hack to avoid rendering list items multiple times
                        section.content.splice(i, section.content.length);
                        return <ul key={i} className="list-disc list-inside space-y-1">{listItems}</ul>
                    }
                    return <p key={i}>{item}</p>
                })}
            </div>
        ));
    };

     const renderRights = (sections: any[]) => {
        if (!sections) return null;
        return sections.map((section, index) => (
            <div key={index} className="space-y-2">
                <h3 className="text-xl font-semibold text-primary">{section.title}</h3>
                {section.content.map((item: string, i: number) => {
                    if (item.startsWith('•')) {
                        const subItems = section.content.slice(i + 1, section.content.findIndex((el, idx) => idx > i && !el.startsWith('•')));
                        const mainItem = item.replace('•', '').trim();
                        const list = [mainItem, ...subItems];
                        
                        section.content.splice(i, subItems.length + 1);
                        
                        return (
                             <ul key={i} className="list-disc list-inside space-y-1">
                                {list.map((li, j) => <li key={j}>{li}</li>)}
                            </ul>
                        )
                    }
                    if(item === "Пользователь вправе:" || item === "The user has the right to:" || item === "Pengguna berhak untuk:" || item === "用户有权："){
                         return <p key={i}>{item}</p>
                    }
                    return null;
                })}
                 <p>{section.content[section.content.length - 1]}</p>
            </div>
        ));
    }

    return (
        <div className="container mx-auto px-4 md:px-6 py-12">
            <div className="max-w-4xl mx-auto space-y-12">
                
                {/* Terms and Conditions */}
                <article className="space-y-6">
                    <header>
                        <h1 className="text-3xl font-bold font-headline text-center">{policy.terms.title}</h1>
                        <p className="text-center text-muted-foreground">{policy.terms.date?.replace('[указать дату]', today).replace('[Insert Date]', today)}</p>
                    </header>
                    <div className="prose prose-lg max-w-none space-y-6">
                        {renderSections(policy.terms.sections)}
                        <div className="space-y-2">
                             <h3 className="text-xl font-semibold text-primary">{policy.contact.title}</h3>
                             <p>{policy.contact.name}</p>
                             <p>{policy.contact.address}</p>
                             <p>{policy.contact.email}</p>
                        </div>
                    </div>
                </article>

                {/* Privacy Policy */}
                <article className="space-y-6 pt-12">
                    <header>
                        <h1 className="text-3xl font-bold font-headline text-center">{policy.privacy.title}</h1>
                        <p className="text-center text-muted-foreground">{policy.privacy.date?.replace('[указать дату]', today).replace('[Insert Date]', today)}</p>
                    </header>
                     <div className="prose prose-lg max-w-none space-y-6">
                        {renderSections(policy.privacy.sections?.slice(0, 5))}
                        {renderRights(policy.privacy.sections?.slice(5))}
                        <div className="space-y-2">
                             <h3 className="text-xl font-semibold text-primary">{policy.contact.title}</h3>
                             <p>{policy.contact.dpo}</p>
                             <p>{policy.contact.name}</p>
                             <p>{policy.contact.address}</p>
                             <p>{policy.contact.email}</p>
                        </div>
                    </div>
                </article>

            </div>
        </div>
    );
}


    
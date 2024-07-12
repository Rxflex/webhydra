"use client";
import Navigation from '@/components/navigation';
import {isLocale, useTranslations} from '@/lib/languages';
import {FAQAccordion} from "@/components/faq";
import {Footer} from "@/components/footer";
let language = 'en';

export default function FAQPage() {
    if (typeof window !== "undefined") {
        language = localStorage.getItem("lang") || "en"
    }
    const locale = isLocale(language) ? language : 'en';
    const t = useTranslations(locale);

    const faqData = t.faq.items.map(faq => {
        return {
            id: Math.random().toString(36).slice(2),
            question: faq.title,
            answer: faq.description
        }
    })

    return (
        <main>
            <Navigation />
            <section className="py-32 overflow-hidden">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap -m-8">
                        <div className="w-full md:w-1/2 p-8">
                            <div className="md:max-w-md">
                                <h2 className="mb-7 text-6xl md:text-7xl font-bold font-heading tracking-px-n leading-tight">{t.faq.title}</h2>
                                <p className="mb-11 text-gray-600 font-medium leading-relaxed">{t.faq.description}</p>
                                <div className="md:inline-block">
                                    <a href="//discord.gg/hydralaunchercommunity" className="py-4 px-6 w-full text-white font-semibold border border-indigo-700 rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200" type="button">{t.faq.discord}</a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 p-8">
                            <div className="md:max-w-2xl ml-auto">
                                <div className="flex flex-wrap">
                                    <FAQAccordion items={faqData} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}

"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Navigation from '@/components/navigation';
import { useTranslations } from '@/lib/languages';
import {FAQAccordion} from "@/components/faq";
let language = 'en';

export default function FAQPage() {
    if (typeof window !== "undefined") {
        language = localStorage.getItem("lang") || "en"
    }
    const t = useTranslations(language);

    const faqData = t.faq.items.map(

    )

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
                                    <button className="py-4 px-6 w-full text-white font-semibold border border-indigo-700 rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200" type="button">{t.faq.discord}</button>
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
        </main>
    );
}

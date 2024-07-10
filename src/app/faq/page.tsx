"use client";
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Navigation from '../../../components/navigation';

export default function FAQPage() {
    const [activeAccordion, setActiveAccordion] = useState('');

    const toggleAccordion = (id: string) => {
        setActiveAccordion(activeAccordion === id ? '' : id);
    };

    return (
        <main>
            <Navigation />
            <section className="py-32 overflow-hidden">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap -m-8">
                        <div className="w-full md:w-1/2 p-8">
                            <div className="md:max-w-md">
                                <h2 className="mb-7 text-6xl md:text-7xl font-bold font-heading tracking-px-n leading-tight">Frequently Asked Questions</h2>
                                <p className="mb-11 text-gray-600 font-medium leading-relaxed">A list of issues that our users often encounter</p>
                                <div className="md:inline-block">
                                    <button className="py-4 px-6 w-full text-white font-semibold border border-indigo-700 rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200" type="button">Discord Community</button>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 p-8">
                            <div className="md:max-w-2xl ml-auto">
                                <div className="flex flex-wrap">
                                    {faqData.map((faq, index) => (
                                        <div className="w-full mb-8" key={index}>
                                            <a className="block border-b border-gray-300 cursor-pointer" onClick={() => toggleAccordion(faq.id)}>
                                                <div className="flex flex-wrap justify-between py-7 -m-1.5">
                                                    <div className="flex-1 p-1.5">
                                                        <div className="flex flex-wrap -m-1.5">
                                                            <div className="w-auto p-1.5">
                                                                <FontAwesomeIcon icon={activeAccordion === faq.id ? faChevronUp : faChevronDown} className="text-indigo-600" />
                                                            </div>
                                                            <div className="flex-1 p-1.5">
                                                                <h3 className="font-semibold leading-normal">{faq.question}</h3>
                                                                <div style={{ maxHeight: activeAccordion === faq.id ? '1000px' : '0', overflow: 'hidden', transition: 'max-height 0.2s ease-out' }} className="transition-all duration-500">
                                                                    <p className="mt-4 mb-5 text-gray-600 font-medium leading-relaxed">{faq.answer}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

const faqData = [
    {
        id: 'faq1',
        question: 'How does App help people in problems?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat, tempor condimentum commodo tincidunt sit amet, semper dictum est. Eu placerat lectus a arcu tempor semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat tempor libero, sed tempor ante condimentum vitae. Fusce vel purus non ipsum dictum luctus.'
    },
    {
        id: 'faq2',
        question: 'What are the benefits of using App?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat, tempor condimentum commodo tincidunt sit amet, semper dictum est. Eu placerat lectus a arcu tempor semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat tempor libero, sed tempor ante condimentum vitae. Fusce vel purus non ipsum dictum luctus.'
    },
    // Добавьте другие элементы FAQ аналогичным образом
];

"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { isLocale, useTranslations } from '@/lib/languages';

export default function Navigation() {
    const [language, setLanguage] = useState('en');
    const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
    const locale = isLocale(language) ? language : 'en';
    const t = useTranslations(locale);
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const navRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const storedLanguage = localStorage.getItem("lang") || "en";
        setLanguage(storedLanguage);
    }, []);

    const handleLanguageChange = (selectedLanguage: string) => {
        setLanguage(selectedLanguage);
        localStorage.setItem("lang", selectedLanguage);
        setLanguageMenuOpen(false);
        window.location.reload(); // Используем window.location.reload() для перезагрузки страницы
    };

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (navRef.current && !(navRef.current instanceof HTMLElement)) return;

            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setMobileNavOpen(false);
                setLanguageMenuOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={navRef} className="relative z-20 flex items-center justify-between px-4 py-5 bg-transparent">
            <div className="w-auto">
                <Link href="/">
                    <img src="/images/icon.png" width="50" alt="" />
                </Link>
            </div>
            <div className="w-auto hidden lg:flex items-center">
                <ul className="flex items-center">
                    <li className="mr-9 font-medium hover:text-gray-700 dark:hover:text-gray-300"><Link href="//discord.gg/hydralaunchercommunity">{t.global.support_menu}</Link></li>
                    <li className="mr-9 font-medium hover:text-gray-700 dark:hover:text-gray-300"><Link href="//github.com/hydralauncher/hydra">GitHub</Link></li>
                    <li className="mr-9 font-medium hover:text-gray-700 dark:hover:text-gray-300"><Link href="/faq">{t.global.faq_menu}</Link></li>
                    <li className="font-medium hover:text-gray-700 dark:hover:text-gray-300"><Link href="//hydralinks.cloud">{t.global.links_menu}</Link></li>
                </ul>
                <Link href="/download" className="ml-4 py-2.5 px-4 bg-transparent text-base font-medium border border-gray-400 hover:border-gray-500 rounded-xl focus:ring focus:ring-gray-50 bg-black hover:bg-gray-800 hover:text-white transition ease-in-out duration-200">
                    {t.global.download}
                </Link>
                <div className="relative inline-block ml-4">
                    <button onClick={() => setLanguageMenuOpen(!languageMenuOpen)} className="py-2 px-4 border rounded-xl text-black dark:text-white bg-transparent border-0 hover:text-white hover:bg-gray-800 transition ease-in-out duration-200">
                      {language.toUpperCase()}
                    </button>
                    {languageMenuOpen && (
                        <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded shadow-lg">
                            <ul className="overflow-hidden">
                                <li><button onClick={() => handleLanguageChange('en')} className="block px-4 py-2 size-full text-left text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">English</button></li>
                                <li><button onClick={() => handleLanguageChange('es')} className="block px-4 py-2 size-full text-left text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Español</button></li>
                                <li><button onClick={() => handleLanguageChange('pt')} className="block px-4 py-2 size-full text-left text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Português</button></li>
                                <li><button onClick={() => handleLanguageChange('ru')} className="block px-4 py-2 size-full text-left text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Русский</button></li>
                                {/* Добавьте больше языков по мере необходимости */}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            <div className="w-auto">
                <button onClick={() => setMobileNavOpen(!mobileNavOpen)} className="lg:hidden">
                    <svg className="text-indigo-600" width="30" height="30" viewBox="0 0 56 56" fill="none">
                        <rect width="56" height="56" rx="28" fill="currentColor"></rect>
                        <path d="M37 32H19M37 24H19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </button>
            </div>
            {mobileNavOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2 }}
                    className="lg:hidden fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-80 flex justify-center items-center"
                >
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-4/5 max-w-md">
                        <ul className="space-y-4">
                            <li className="font-medium text-xl text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400">
                                <Link href="//discord.gg/">{t.global.support_menu}</Link>
                            </li>
                            <li className="font-medium text-xl text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400">
                                <Link href="//github.com/hydralauncher/hydra">GitHub</Link>
                            </li>
                            <li className="font-medium text-xl text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400">
                                <Link href="/faq">{t.global.faq_menu}</Link>
                            </li>
                            <li className="font-medium text-xl text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400">
                                <Link href="//hydralinks.cloud">{t.global.links_menu}</Link>
                            </li>
                            <li className="font-medium text-xl text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400">
                                <Link href="/download">{t.global.download}</Link>
                            </li>
                        </ul>
                        <div className="mt-6 text-center">
                            <button onClick={() => setMobileNavOpen(false)} className="py-2 px-4 text-base font-medium border border-gray-400 dark:border-gray-600 hover:border-gray-500 dark:hover:border-gray-400 rounded-xl focus:ring focus:ring-gray-50 dark:focus:ring-gray-700 bg-black dark:bg-gray-800 hover:bg-gray-800 dark:hover:bg-gray-600 text-white transition ease-in-out duration-200">
                                Close
                            </button>
                        </div>
                        <div className="mt-6 text-center">
                            <div className="relative inline-block">
                                <button onClick={() => setLanguageMenuOpen(!languageMenuOpen)} className="py-2 px-4 border rounded text-black dark:text-white bg-white dark:bg-gray-800 border-gray-400 dark:border-gray-600">
                                    {language.toUpperCase()}
                                </button>
                                {languageMenuOpen && (
                                    <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded shadow-lg">
                                        <ul>
                                            <li><button onClick={() => handleLanguageChange('en')} className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">English</button></li>
                                            <li><button onClick={() => handleLanguageChange('es')} className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Español</button></li>
                                            <li><button onClick={() => handleLanguageChange('pt')} className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Português</button></li>
                                            <li><button onClick={() => handleLanguageChange('ru')} className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Русский</button></li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    );
}

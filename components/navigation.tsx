"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navigation() {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const navRef = useRef<HTMLDivElement | null>(null); // Specify the type as HTMLDivElement | null

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (navRef.current && !(navRef.current instanceof HTMLElement)) return; // Check if current is not null and is an HTMLElement

            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setMobileNavOpen(false);
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
            <div className="w-auto hidden lg:flex">
                <ul className="flex items-center">
                    <li className="mr-9 font-medium hover:text-gray-700"><Link href="//discord.gg/">Support</Link></li>
                    <li className="mr-9 font-medium hover:text-gray-700"><Link href="//github.com/hydralauncher/hydra">GitHub</Link></li>
                    <li className="mr-9 font-medium hover:text-gray-700"><Link href="/faq">FAQ</Link></li>
                    <li className="font-medium hover:text-gray-700"><Link href="//hydralinks.cloud">Community Links</Link></li>
                </ul>
                <div className="inline-block ml-4">
                    <Link href="/download" className="py-2.5 px-4 text-base font-medium border border-gray-400 hover:border-gray-500 rounded-xl focus:ring focus:ring-gray-50 bg-black hover:bg-gray-800 transition ease-in-out duration-200">
                        Download
                    </Link>
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
                    <div className="bg-white rounded-lg shadow-lg p-6 w-4/5 max-w-md">
                        <ul className="space-y-4">
                            <li className="font-medium text-xl text-gray-800 hover:text-indigo-600">
                                <Link href="//discord.gg/">Support</Link>
                            </li>
                            <li className="font-medium text-xl text-gray-800 hover:text-indigo-600">
                                <Link href="//github.com/hydralauncher/hydra">GitHub</Link>
                            </li>
                            <li className="font-medium text-xl text-gray-800 hover:text-indigo-600">
                                <Link href="/faq">FAQ</Link>
                            </li>
                            <li className="font-medium text-xl text-gray-800 hover:text-indigo-600">
                                <Link href="//hydralinks.cloud">Community Links</Link>
                            </li>
                            <li className="font-medium text-xl text-gray-800 hover:text-indigo-600">
                                <Link href="/download">Download</Link>
                            </li>
                        </ul>
                        <div className="mt-6 text-center">
                            <button onClick={() => setMobileNavOpen(false)} className="py-2 px-4 text-base font-medium border border-gray-400 hover:border-gray-500 rounded-xl focus:ring focus:ring-gray-50 bg-black hover:bg-gray-800 text-white transition ease-in-out duration-200">
                                Close
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    );
}

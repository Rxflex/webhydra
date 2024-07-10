// pages/index.jsx
import React from 'react';
import Navigation from '../../components/navigation';
import Link from 'next/link';

export default function HomePage() {
    return (
        <main>
            <section className="relative">
                <img className="absolute left-0 top-0" src="/flaro-assets/images/headers/gradient.svg" alt="" />
                <img className="absolute right-0 bottom-0" src="/flaro-assets/images/headers/gradient2.svg" alt="" />
                <div className="container mx-auto overflow-hidden">
                    <Navigation />
                </div>
                <div className="relative z-10 overflow-hidden pt-16">
                    <div className="container px-4 mx-auto">
                        <div className="text-center">
                            <p className="mb-5 text-sm text-indigo-600 font-semibold uppercase tracking-px">👋 Meet HydraLauncher</p>
                            <h1 className="mb-9 text-6xl md:text-8xl xl:text-10xl font-bold font-heading tracking-px-n leading-none">Hydra Launcher</h1>
                            <div className="mb-7 md:inline-block">
                                <Link href="/download" passHref className="py-4 px-6 w-full text-white font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200">Download</Link>
                            </div>
                            <div className="relative max-w-max mx-auto">
                                <img className="mx-auto transform hover:scale-105 transition ease-in-out duration-1000" src="/images/screenshot.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

import Navigation from "../../../components/navigation";

export default function DownloadPage() {
    return (
        <main>
            <Navigation />
            <section className="pt-32 pb-36 overflow-hidden">
                <div className="container px-4 mx-auto">
                    <div className="max-w-5xl mx-auto">
                        <div className="inline-block mb-7 px-2 py-1 text-sm font-semibold bg-green-100 rounded-full">
                            <div className="flex flex-wrap items-center -m-1">
                                <div className="w-auto p-1">
                                    <p className="text-black">👋 The project is always updated</p>
                                </div>
                                <div className="w-auto p-1">
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.66667 3.41675L12.75 7.50008M12.75 7.50008L8.66667 11.5834M12.75 7.50008L2.25 7.50008" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <h2 className="mb-6 text-6xl md:text-8xl xl:text-10xl font-bold font-heading tracking-px-n leading-none">Possible downloads</h2>
                        <p className="mb-16 text-lg text-gray-600 font-medium">Select your operating system to download</p>
                        <div className="flex flex-wrap -m-4">
                            <div className="w-full md:w-1/3 p-4">
                                <div className="max-w-max mx-auto overflow-hidden rounded-3xl">
                                    <a href="https://github.com/hydralauncher/hydra/releases"><img className="transform hover:scale-105 transition ease-in-out duration-1000" src="/images/windows.png" alt="Windows"/></a>
                                </div>
                            </div>
                            <div className="w-full md:w-1/3 p-4">
                                <div className="max-w-max mx-auto overflow-hidden rounded-3xl">
                                    <a href="https://github.com/hydralauncher/hydra/releases"><img className="transform hover:scale-105 transition ease-in-out duration-1000" src="/images/macos.png" alt="MacOS"/></a>
                                </div>
                            </div>
                            <div className="w-full md:w-1/3 p-4">
                                <div className="max-w-max mx-auto overflow-hidden rounded-3xl">
                                    <a href="https://github.com/hydralauncher/hydra/releases"><img className="transform hover:scale-105 transition ease-in-out duration-1000" src="/images/linux.png" alt="Linux"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
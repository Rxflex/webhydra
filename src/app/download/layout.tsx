import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import {getDownloadUrl} from "@/lib/download";
import DownloadPage from "@/app/download/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Downloads - Hydra Launcher",
    description: "Unofficial web for hydra launcher",
};

export default async function RootLayout({children,params}: Readonly<{
    children: React.ReactNode;
    params: {
        windows: string;
        linux: string;
        macos: string;
        version: string;
    }
}>) {
    const windows = await getDownloadUrl({os: "windows"});
    const linux = await getDownloadUrl({os: "linux"});
    const macos = await getDownloadUrl({os: "macos"});

    params.windows = windows.url;
    params.linux = linux.url;
    params.macos = macos.url;
    params.version = windows.version;
    return (
        <html lang='en'>
            <body className={inter.className}>
                <DownloadPage params={params} />
            </body>
        </html>
    );
}

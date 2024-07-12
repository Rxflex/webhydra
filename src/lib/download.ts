type DownloadArgs = {
    os: string
}
type response = {
    version: string
    url: string
}
const url = 'https://api.github.com/repos/hydralauncher/hydra/releases/latest';

export async function getDownloadUrl ({os} : DownloadArgs): Promise<response> {
    const response = await fetch(url);
    const json = await response.json();


    if(os === 'windows') {
        return {
            version: json.tag_name,
            url: json.assets
                .filter((asset: any) => asset.name.endsWith('setup.exe'))
                .map((asset: any) => asset.browser_download_url)
        }
    }

    if(os === 'linux') {
        return {
            version: json.tag_name,
            url: json.assets
                .filter((asset: any) => asset.name.includes('amd64.deb'))
                .map((asset: any) => asset.browser_download_url)
        }
    }

    if(os === 'macos') {
        return {
            version: json.tag_name,
            url: "" // TODO: need to determine macos build
        }
    }

    throw new Error(`Unsupported OS: ${os}`);
}
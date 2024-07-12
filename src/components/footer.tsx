import {isLocale, useTranslations} from "@/lib/languages";
let language = 'en';
export function Footer () {
  if (typeof window !== "undefined") {
    language = localStorage.getItem("lang") || "en"
  }
  const locale = isLocale(language) ? language : 'en';
  const t = useTranslations(locale);
  return (
      <footer className="bg-white rounded-lg shadow m-4 dark:bg-black">
          <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
              <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="/" className="hover:underline">hydra.chuk.cz</a>. All Rights Reserved. Developed with ❤️ by <a href='//chuk.cz'>chuk</a></span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                  <a href="/" className="hover:underline me-4 md:me-6">/</a>
              </li>
              <li>
                  <a href="/faq" className="hover:underline me-4 md:me-6">{t.global.faq_menu}</a>
              </li>
              <li>
                  <a href="//hydralinks.cloud" className="hover:underline me-4 md:me-6">{t.global.links_menu}</a>
              </li>
              <li>
                  <a href="//discord.gg/hydralaunchercommunity" className="hover:underline">{t.global.support_menu}</a>
              </li>
          </ul>
          </div>
      </footer>
  );
}

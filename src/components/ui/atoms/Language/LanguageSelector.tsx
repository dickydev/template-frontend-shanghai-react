import { useTranslation } from 'react-i18next';

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('lang', lang);
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => changeLang('en')}
        className="px-3 py-1 border bg-gray-100 dark:bg-gray-700 dark:text-white"
      >
        En
      </button>
      <button
        onClick={() => changeLang('id')}
        className="px-3 py-1 border bg-gray-100 dark:bg-gray-700 dark:text-white"
      >
        Id
      </button>
    </div>
  );
}

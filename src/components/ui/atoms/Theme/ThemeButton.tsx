import { useTranslation } from 'react-i18next';

export default function ThemeButton() {
  const { t } = useTranslation();
  const enableDarkMode = () => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  };

  const enableLightMode = () => {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  };

  return (
    <div className="flex gap-3">
      <button
        onClick={enableLightMode}
        className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-800 dark:text-white"
      >
        {t('light')}
      </button>
      <button
        onClick={enableDarkMode}
        className="px-4 py-2 rounded bg-gray-800 text-white dark:bg-gray-200 dark:text-black"
      >
        {t('dark')}
      </button>
    </div>
  );
}

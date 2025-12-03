import React from 'react';
import { NavItem } from '../../molecules/NavItem';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../../atoms/Language/LanguageSelector';
import ThemeButton from '../../atoms/Theme/ThemeButton';

export const Navbar: React.FC = () => {
  const { t } = useTranslation();
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-900 shadow ">
      <h1>{t('dashboard')}</h1>
      <nav className="flex gap-4 items-center">
        <NavItem to={'/'} label={t('dashboard')} />
        <NavItem to={'/post'} label={t('post')} />
        <NavItem to={'/content'} label={t('content')} />
      </nav>
      <div className="flex justify-center items-center gap-5">
        <LanguageSelector />
        <ThemeButton />
      </div>
    </header>
  );
};

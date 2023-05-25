import { useState } from 'react';

interface LanguageSwitchProps {
  onChange: (language: string) => void;
  language: string;
}

export default function LanguageSwitch({ onChange, language }: LanguageSwitchProps) {
  function handleLanguageChange() {
    const newLanguage = language === 'pt' ? 'en' : 'pt';
    onChange(newLanguage);
  }

  return (
    <label className="switch" onClick={handleLanguageChange}>
      <input type="checkbox" />
      <span className="slider"></span>
      <span className={`text ${language === 'pt' ? 'on' : 'off'}`}>BR</span>
      <span className={`text ${language === 'pt' ? 'off' : 'on'}`}>US</span>
    </label>
  );
}
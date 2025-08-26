import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaChevronDown } from "react-icons/fa";

const LanguageSelector = () => {
    const { i18n } = useTranslation("global");
    const [isOpen, setIsOpen] = useState(false);

    const changeLanguage = (lng) => {
        document.documentElement.lang = lng;
        i18n.changeLanguage(lng);
        localStorage.setItem("lng", lng);
        setIsOpen(false);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // Список доступных языков
    const languages = ["az", "en", "ru"];

    // Исключаем текущий язык из списка
    const availableLanguages = languages.filter(
        (lang) => lang !== i18n.language
    );

    return (
        <div className="language-selector">
            <div className="language-toggle" onClick={toggleDropdown}>
                {i18n.language.toLocaleUpperCase()} <FaChevronDown />
            </div>
            {isOpen && (
                <ul className="language-menu">
                    {availableLanguages.map((lang) => (
                        <li key={lang} onClick={() => changeLanguage(lang)}>
                            {lang.toLocaleUpperCase()}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default LanguageSelector;

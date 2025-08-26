import { useState } from "react";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";

const Form = () => {
    const { t } = useTranslation("global");

    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        message: "",
    });

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            toast.success(t("form.success"));
        } catch (error) {
            console.error(error);
            toast.success(t("form.error"));
        }
    };

    return (
        <form action={""} className="form" onSubmit={onSubmit}>
            <div className="form__row">
                <div className="form__block">
                    <label htmlFor="fullName">
                        {t("form.fullName")}{" "}
                        <span style={{ color: "#FF1A1A" }}>*</span>
                    </label>
                    <input
                        type="text"
                        name="fullName"
                        id="fullName"
                        placeholder="Jhon Doe"
                        required
                    />
                </div>
                <div className="form__block">
                    <label htmlFor="phone">
                        {t("form.phone")}{" "}
                        <span style={{ color: "#FF1A1A" }}>*</span>
                    </label>
                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="+994 ## ### ## ##"
                        required
                    />
                </div>
            </div>
            <div className="form__row">
                <div className="form__block">
                    <label htmlFor="email">
                        {t("form.email")}{" "}
                        <span style={{ color: "#FF1A1A" }}>*</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="example@gmail.com"
                        required
                    />
                </div>
            </div>
            <div className="form__row">
                <div className="form__block">
                    <label htmlFor="message">
                        {t("form.message")}{" "}
                        <span style={{ color: "#FF1A1A" }}>*</span>
                    </label>
                    <textarea name="message" id="message" required></textarea>
                </div>
            </div>

            <button type="submit">{t("form.btn")}</button>
        </form>
    );
};

export default Form;

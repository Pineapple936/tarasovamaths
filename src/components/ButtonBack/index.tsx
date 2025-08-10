"use client"

import style from "./index.module.scss";

export default function ButtonBack() {
    const handleGoBack = () => {
        if (typeof window !== 'undefined') {
            window.history.back();
        }
    };

    return (
        <div className={`button-link ${style.wrapper}`}>
            <button onClick={handleGoBack}>
                <span><i className='bx bx-arrow-back' />Назад</span>
            </button>
        </div>
    );
}

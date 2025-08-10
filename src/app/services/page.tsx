import style from "./page.module.scss";

export default function Services() {
    return (
        <>
            <section>
                <header>Форматы обучения</header>
                <article className={style.services}>
                    <article className={`${style.service} cell`}>
                        <div>
                            <h1>Подготовка к ЕГЭ</h1>
                            <p style={{"marginTop": "15px"}}>Подготовка с нуля до уверенных баллов — по плану, с поддержкой и результатом</p>
                        </div>
                        <div className="button-link">
                            <a href="services/ege">Подробнее</a>
                        </div>
                    </article>
                    <article className={`${style.service} cell`}>
                        <div>
                            <h1>Подготовка к ОГЭ</h1>
                            <p style={{"marginTop": "15px"}}>Помогаю структурировать материал, закрыть слабые места и тренироваться по формату экзамена</p>
                        </div>
                        <div className="button-link">
                            <a href="/services/oge">Подробнее</a>
                        </div>
                    </article>
                    <article className={`${style.service} cell`}>
                        <div>
                            <h1>Математика для 5–8 классов</h1>
                            <p style={{"marginTop": "15px"}}>Закладываем прочную базу и уверенность в математике</p>
                        </div>
                        <div className="button-link">
                            <a href="services/math-5-8">Подробнее</a>
                        </div>
                    </article>
                    <article className={`${style.service} cell`}>
                        <div>
                            <h1>Для репетиторов</h1>
                            <p style={{"marginTop": "15px"}}>О методике, улучшении качества занятий и эффективной подготовке к экзаменам</p>
                        </div>
                        <div className="button-link">
                            <a href="services/for-tutors">Подробнее</a>
                        </div>
                    </article>
                </article>
            </section>
        </>
    );
}

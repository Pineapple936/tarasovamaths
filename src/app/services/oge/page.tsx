import Link from "next/link";
import CourseLayout from "@/components/CourseLayout";
import ScrollWrapper from "@/components/ScrollWrapper";
import style from "../examStyles.module.scss";

export default function Oge() {
    return (
        <CourseLayout>
            <section className={style.links}>
                <div className="button-link">
                    <Link href="oge/beginner">Гайды по заданиям 1 - 5 ОГЭ</Link>
                </div>
                <div className="button-link">
                    <Link href="oge/halfyear-part-one">Полугодовой курс по первой части</Link>
                </div>
                <div className="button-link">
                    <Link href="oge/hard-algebra">Спецкурс по второй части (Алгебра)</Link>
                </div>
                <div className="button-link">
                    <Link href="oge/hard-geometry">Спецкурс по второй части (Геометрия)</Link>
                </div>
            </section>
            <section style={{"display": "flex", "flexDirection": "column", "alignItems": "center"}}>
                <header>Форматы занятий</header>
                <ScrollWrapper countItems={4}>
                    <article className={`${style.course} cell`}>
                        <header>Сопровождение в мессенджерах</header>
                        <p className={style.description}>Если вы планируете готовиться к экзамену самостоятельно, но вам необходима консультация и проверка по решению заданий</p>
                        <ul className={style.lessonFormat}>
                            <b>Как проходит?</b>
                            <li>Связь со мной 24/7 в любом удобном мессенджере</li>
                            <li>Подбор полезных сборников и материалов, проверка решенных заданий</li>
                            <li>Раз в месяц высылаю комплекс задач для решения в течение месяца</li>
                        </ul>
                        <div className={style.info}>
                            <p>месяц</p>
                            <b>7.000₽</b>
                        </div>
                        <div className={style.wrapperForButton}>
                            <div className="button-link">
                                <Link href="/services/course-description">Подробнее</Link>
                            </div>
                        </div>
                    </article>
                    <article className={`${style.course} cell`}>
                        <header>Мини-группа</header>
                        <p className={style.description}>Для подготовки к ОГЭ</p>
                        <ul className={style.lessonFormat}>
                            <b>Как проходит?</b>
                            <li>Занятия в группе из 3-4 учеников</li>
                            <li>В случае пропуска занятия высылается запись</li>
                            <li>Если что-то остается непонятным - индивидуально отвечу на все возникшие вопросы, а также дам дополнительное задание</li>
                            <li>Для всех учеников создается общий чат для общения друг с другом и поддержки</li>
                        </ul>
                        <div className={style.info}>
                            <p>55 минут</p>
                            <b>2.000₽</b>
                        </div>
                        <div className={style.wrapperForButton}>
                            <div className="button-link">
                                <Link href="/services/course-description">Подробнее</Link>
                            </div>
                        </div>
                    </article>
                    <article className={`${style.course} cell`}>
                        <header>Занятия в паре</header>
                        <p className={style.description}>Для всех учеников 9 классов с общей целью на обучение</p>
                        <ul className={style.lessonFormat}>
                            <b>Как проходит?</b>
                            <li>Занятия в паре с другом, либо же подбираю пару по исходному уровню</li>
                            <li>В случае пропуска занятия высылается запись</li>
                            <li>Если что-то остается непонятным - индивидуально отвечу на все возникшие вопросы, а также дам дополнительное задание</li>
                            <li>Общий чат для обсуждения всех вопросов</li>
                        </ul>
                        <div className={style.info}>
                            <p>55 минут</p>
                            <b>3.000₽</b>
                        </div>
                        <div className={style.wrapperForButton}>
                            <div className="button-link">
                                <Link href="/services/course-description">Подробнее</Link>
                            </div>
                        </div>
                    </article>
                    <article className={`${style.course} cell`}>
                        <header>Индивидуальные занятия</header>
                        <p className={style.description}>Для всех учеников 9 классов вне зависимости от цели обучения</p>
                        <span>Индивидуальная программа обучения исходя из вашего запроса</span>
                        <div className={style.info}>
                            <p>55 минут</p>
                            <b>5.000₽</b>
                        </div>
                        <div className={style.wrapperForButton}>
                            <div className="button-link">
                                <Link href="/services/course-description">Подробнее</Link>
                            </div>
                        </div>
                    </article>
                </ScrollWrapper>
            </section>
        </CourseLayout>
    );
}

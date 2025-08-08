import Link from "next/link";
import CourseLayout from "@/components/CourseLayout";
import ScrollWrapper from "@/components/ScrollWrapper";
import style from "../examStyles.module.scss";

export default function Ege() {
    return (
        <CourseLayout>
            <section className={style.links}>
                <div className="button-link">
                    <Link href="ege/checklist-ege">Чек-лист по теории ЕГЭ</Link>
                </div>
                <div className="button-link">
                    <Link href="ege/year-basic-math">Годовой курс по базовой математике</Link>
                </div>
                <div className="button-link">
                    <Link href="ege/halfyear-profile">Полугодовой курс по профильной математике (1 часть)</Link>
                </div>
                <div className="button-link">
                    <Link href="ege/math-hard">Вторая часть ЕГЭ</Link>
                </div>
            </section>
            <section>
                <header>Форматы занятий</header>
                <ScrollWrapper countItems={4}>
                    <article className={`cell ${style.course}`}>
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
                        <p className={style.description}>Для подготовки к ЕГЭ база/профиль</p>
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
                        <p className={style.description}>Для всех учеников 10−11 классов с общей целью на обучение</p>
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
                        <p className={style.description}>Для всех учеников 10−11 классов вне зависимости от цели обучения</p>
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

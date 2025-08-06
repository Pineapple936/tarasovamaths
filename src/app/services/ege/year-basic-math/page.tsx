import CourseLayout from "@/components/CourseLayout";
import Link from "next/link";
import Image from "next/image";
import style from "@/app/services/learningTools.module.scss";

export default function YearBasicMath() {
    return (
        <CourseLayout>
            <header>Интенсив по подготовке к ЕГЭ (Базовый уровень)</header>
            <section>
                <div className={style.informationAboutCourse}>
                    <div className={style.blockInformation}>
                        <h2 className={style.title}>Как проходят занятия?</h2>
                        <ul>
                            <li>Разберем все задания экзамена в комфортном темпе</li>
                            <li>Каждый урок в записи не более 40 мин </li>
                            <li>Домашняя работа сдается раз в неделю</li>
                            <li>В каждом уроке на неделю: видеоурок, домашняя работа и теоретический материал</li>
                        </ul>
                    </div>
                    <div className={style.blockInformation}>
                        <h2 className={style.title}>Преимущества обучения</h2>
                        <ul>
                            <li>Уроки можно смотреть в любое время</li>
                            <li>Без лишней воды — только задания, которые могут встретиться на экзамене</li>
                            <li>Уроки можно пересматривать — записи останутся у тебя до дня экзамена</li>
                            <li>Все уроки составлены на основе банка ФИПИ (составителей экзамена)</li>
                            <li>Вся теория собрана в удобных чек-листах</li>
                            <li>Строгие дедлайны сдачи работ для эффективного прохождения курса</li>
                            <li>Пробники для отслеживания прогресса</li>
                        </ul>
                    </div>
                </div>
                <div className="button-link">
                    <Link href="year-basic-math/timetable">Расписание курса</Link>
                </div>
            </section>

            <section>
                <header>Тарифы</header>
                <article className={style.tariffs}>
                    <div className="cell">
                        <h1>Все сам</h1>
                        <ul>
                            <li>30 уроков в записи</li>
                            <li>Домашние задания <b>с подробным текстовым решением</b></li>
                            <li>Чек-листы с теорией</li>
                            <li>8 пробников</li>
                            <li>Бонусный урок</li>
                        </ul>
                        <div>
                            <p className={style.pricePeriod}>За весь курс</p>
                            <b>25.000₽</b>
                        </div>
                        <div className="button-link">
                            <Link href="https://wa.me/79308815930">Приобрести курс</Link>
                        </div>
                    </div>
                    <div className="cell">
                        <h1>С проверкой</h1>
                        <ul>
                            <li>30 уроков в записи</li>
                            <li>Домашние задания <b>с проверкой от преподавателя</b></li>
                            <li>Чек-листы с теорией</li>
                            <li>8 пробников</li>
                            <li>Бонусный урок</li>
                        </ul>
                        <div>
                            <p className={style.pricePeriod}>За весь курс</p>
                            <b>40.000₽</b>
                        </div>
                        <div className="button-link">
                            <Link href="https://wa.me/79308815930">Приобрести курс</Link>
                        </div>
                    </div>
                </article>
            </section>

            <section className={style.examples}>
                <article>
                    <h2>Пример урока на курсе</h2>
                    <iframe
                        width="100%"
                        src="https://rutube.ru/play/embed/9c32313ae2bd1f8f7874b349dbaa89a2"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                    />
                </article>
                <article>
                    <h2>Пример домашнего задания</h2>
                    <div className={style.image} style={{"aspectRatio" : "913 / 1280"}}>
                        <Image
                            src="/courses/ege/years-basic-math/homework.jpg"
                            alt="Пример домашнего задания"
                            fill
                            loading="lazy"
                        />
                    </div>
                </article>
                <article>
                    <h2>Пример домашнего задания с разбором (для тарифа «Все сам»)</h2>
                    <div className={style.image} style={{"aspectRatio" : "901 / 1280"}}>
                        <Image
                            src="/courses/ege/years-basic-math/solution.jpg"
                            alt="Пример домашнего задания с разбором (для тарифа «Все сам»)"
                            fill
                            loading="lazy"
                        />
                    </div>
                </article>
                <article>
                    <h2>Пример чек-листа с теорией</h2>
                    <div className={style.image} style={{"aspectRatio" : "924 / 1280"}}>
                        <Image
                            src="/courses/ege/years-basic-math/checklist.jpg"
                            alt="Пример чек-листа с теорией"
                            fill
                            loading="lazy"
                        />
                    </div>
                </article>
            </section>
            <div className={style.wrapperButton}>
                <div className="button-link">
                    <Link href="https://wa.me/79308815930">Приобрести курс</Link>
                </div>
            </div>
        </CourseLayout>
    );
}

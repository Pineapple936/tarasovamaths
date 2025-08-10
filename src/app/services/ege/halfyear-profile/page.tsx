import CourseLayout from "@/components/CourseLayout";
import Link from "next/link";``
import style from "@/app/services/learningTools.module.scss";

export default function HalfyearProfile() {
    return (
        <CourseLayout>
            <header>Полугодовой курс по подготовке к ЕГЭ профильного уровня (1 часть)</header>
            <section className={style.informationAboutCourse}>
                <article className="spawnItem">
                    <input type="checkbox" id="lesson" />
                    <label htmlFor="lesson"><i className='bx bx-chevron-down'/></label> Как проходят занятия?
                    <ul className="content">
                        <li>Разберем все задания экзамена в комфортном темпе</li>
                        <li>Каждый урок в записи не более 40 мин </li>
                        <li>Домашняя работа сдается раз в неделю</li>
                        <li>В каждом уроке на неделю: видеоурок, домашняя работа и теоретический материал</li>
                    </ul>
                </article>
                <article className="spawnItem">
                    <input type="checkbox" id="benefits" />
                    <label htmlFor="benefits"><i className='bx bx-chevron-down'/></label> Преимущества обучения
                    <ul className="content">
                        <li>Уроки можно смотреть в любое время</li>
                        <li>Без лишней воды — только задания, которые могут встретиться на экзамене</li>
                        <li>Уроки можно пересматривать — записи останутся у тебя до дня экзамена</li>
                        <li>Все уроки составлены на основе банка ФИПИ (составителей экзамена)</li>
                        <li>Вся теория собрана в удобных чек-листах</li>
                        <li>Строгие дедлайны сдачи работ для эффективного прохождения курса</li>
                        <li>Пробники для отслеживания прогресса</li>
                    </ul>
                </article>
                <div className="button-link">
                    <Link href="halfyear-profile/timetable">Расписание курса</Link>
                </div>
            </section>

            <section>
                <header>Тарифы</header>
                <article className={style.tariffs}>
                    <div className="cell">
                        <h1>Все сам</h1>
                        <ul>
                            <li>Уроки в записи</li>
                            <li>Домашние задания <b>с подробным текстовым решением</b></li>
                            <li>Чек-листы с теорией</li>
                            <li>пробников</li>
                            <li>Бонусный урок</li>
                        </ul>
                        <div>
                            <p className={style.pricePeriod}>за весь курс</p>
                            <b>25.000₽</b>
                        </div>
                        <div className="button-link">
                            <Link href="https://wa.me/79308815930">Приобрести курс</Link>
                        </div>
                    </div>
                    <div className="cell">
                        <h1>С проверкой</h1>
                        <ul>
                            <li>Уроки в записи</li>
                            <li>Домашние задания <b>с проверкой от преподавателя</b></li>
                            <li>Чек-листы с теорией</li>
                            <li>пробников</li>
                        </ul>
                        <div>
                            <p className={style.pricePeriod}>за весь курс</p>
                            <b>40.000₽</b>
                        </div>
                        <div className="button-link">
                            <Link href="https://wa.me/79308815930">Приобрести курс</Link>
                        </div>
                    </div>
                </article>
            </section>
            <div className={style.wrapperButton}>
                <div className="button-link animZoom">
                    <Link href="https://lk.cloudtext.ru/tasks/oyaw7">Пример урока на курсе</Link>
                </div>
            </div>
            <div className={style.wrapperButton}>
                <div className="button-link">
                    <Link href="https://wa.me/79308815930">Приобрести курс</Link>
                </div>
            </div>
        </CourseLayout>
    );
}

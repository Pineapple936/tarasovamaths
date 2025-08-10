import CourseLayout from "@/components/CourseLayout";
import Link from "next/link";
import Image from "next/image";
import style from "@/app/services/learningTools.module.scss";

export default function HardGeometry() {
    return (
        <CourseLayout>
            <header>Спецкурс по заданиям 2 части ОГЭ (алгебра)</header>
            <section className={style.informationAboutCourse}>
                <article className="spawnItem">
                    <input type="checkbox" id="lesson" />
                    <label htmlFor="lesson"><i className='bx bx-chevron-down'/></label> Как проходят занятия?
                    <ul className="content">
                        <li>Если вы уже изучили все задания первой части и готовы идти дальше</li>
                        <li>Идете на оценку 4 и хотите подстраховаться дополнительными баллами из задач второй части</li>
                        <li>Идете на оценку 5 или в профильный класс/колледж</li>
                        <li>Вам лучше дается алгебра, чем геометрия</li>
                    </ul>
                </article>
                <article className="spawnItem">
                    <input type="checkbox" id="benefits" />
                    <label htmlFor="benefits"><i className='bx bx-chevron-down'/></label> Преимущества обучения
                    <ul className="content">
                        <li>Всего за один месяц вы освоите задания № 20−22</li>
                        <li>Сможете смотреть уроки в любое удобное время</li>
                        <li>Не зависеть от времени, места и часового пояса</li>
                        <li>Только самое главное — небольшие уроки без повторений и воды</li>
                        <li>Никаких пособий покупать не нужно — все есть на курсе</li>
                        <li>Все уроки можно пересматривать — записи останутся у тебя до дня экзамена</li>
                        <li>Экономия денег, стоимость одного урока от 250 руб</li>
                        <li>Получите много практики по каждому заданию, а также удобные чек-листы с теорией — не надо ничего искать в учебнике</li>
                    </ul>
                </article>
                <div className="button-link">
                    <Link href="hard-algebra/details">Подробнее о курсе</Link>
                </div>
            </section>

             <section>
                <header>Тарифы</header>
                <article className={style.tariffs}>
                    <div className="cell">
                        <h1>Все сам</h1>
                        <ul>
                            <li>Все занятия в записи</li>
                            <li>Домашние задания <b>с подробным текстовым решением</b></li>
                            <li>Чек-листы с теорией</li>
                            <li>Бонусный урок</li>
                        </ul>
                        <div>
                            <p className={style.pricePeriod}>За весь курс</p>
                            <b>6.000₽</b>
                        </div>
                        <div className="button-link">
                            <Link href="https://wa.me/79308815930">Приобрести курс</Link>
                        </div>
                    </div>
                    <div className="cell">
                        <h1>С проверкой</h1>
                        <ul>
                            <li>Все занятия в записи</li>
                            <li>Домашние задания <b>с проверкой от преподавателя</b></li>
                            <li>Чек-листы с теорией</li>
                            <li>Бонусный урок</li>
                            <li>Чат с обратной связью 24/7</li>
                        </ul>
                        <div>
                            <p className={style.pricePeriod}>За весь курс</p>
                            <b>15.000₽</b>
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
                        src="https://rutube.ru/play/embed/d4d3a58d4e5fc4f224f4c69e3bf3870a"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                    />
                </article>
                <article>
                    <h2>Пример домашнего задания</h2>
                    <div className={style.image} style={{"aspectRatio" : "909 / 1280"}}>
                        <Image
                            src="/courses/oge/algebra/homework.jpg"
                            alt="Пример домашнего задания"
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

"use client"
import CourseLayout from "@/components/CourseLayout";
import ScrollWrapper from "@/components/ScrollWrapper";
import Link from "next/link";
import style from "@/app/services/learningTools.module.scss";

export default function MathHard() {
    return (
        <CourseLayout>
            <header>Спецкурсы по заданиям второй части ЕГЭ профиль</header>
            <section>
                <ScrollWrapper countItems={3}>
                    <article className={`cell ${style.blockInformation}`}>
                        <h1>Задания №13 "Уравнения"</h1>
                        <ul>
                            <li>6 недель обучения решению всех видов уравнений</li>
                            <li>Уроки в записи</li>
                            <li>Чек-листы с теорией</li>
                            <li>Необходимая теория</li>
                            <li>Много практики по заданиям с подробной проверкой</li>
                            <li>Оформление заданий в соответствии с рекомендациями экспертов</li>
                            <li>Разбор критериев оценивания и основных ошибок</li>
                        </ul>
                        <div>
                            <p className={style.pricePeriod}>за весь курс</p>
                            <b>10.000₽</b>
                        </div>
                        <div className="button-link">
                            <Link href="https://wa.me/79308815930">Приобрести курс</Link>
                        </div>
                    </article>
                    <article className={`cell ${style.blockInformation}`}>
                        <h1>Задания №15 "Неравенства"</h1>
                        <ul>
                            <li>7 недель обучения решению всех видов уравнений</li>
                            <li>Уроки в записи</li>
                            <li>Чек-листы с теорией</li>
                            <li>Необходимая теория</li>
                            <li>Много практики по заданиям с подробной проверкой</li>
                            <li>Оформление заданий в соответствии с рекомендациями экспертов</li>
                            <li>Разбор критериев оценивания и основных ошибок</li>
                        </ul>
                        <div>
                            <p className={style.pricePeriod}>за весь курс</p>
                            <b>10.000₽</b>
                        </div>
                        <div className="button-link">
                            <Link href="https://wa.me/79308815930">Приобрести курс</Link>
                        </div>
                    </article>
                    <article className={`cell ${style.blockInformation}`}>
                        <h1>Задания №16 "Экономические задачи"</h1>
                        <ul>
                            <li>6 недель обучения решению всех видов уравнений</li>
                            <li>Уроки в записи</li>
                            <li>Чек-листы с теорией</li>
                            <li>Необходимая теория</li>
                            <li>Много практики по заданиям с подробной проверкой</li>
                            <li>Оформление заданий в соответствии с рекомендациями экспертов</li>
                            <li>Разбор критериев оценивания и основных ошибок</li>
                        </ul>
                        <div>
                            <p className={style.pricePeriod}>за весь курс</p>
                            <b>10.000₽</b>
                        </div>
                        <div className="button-link">
                            <Link href="https://wa.me/79308815930">Приобрести курс</Link>
                        </div>
                    </article>
                </ScrollWrapper>
            </section>

            <section style={{"display": "flex", "flexDirection": "column", "gap": "40px"}}>
                <div className="spawnItem">
                    <input type="checkbox" id="plan13" />
                    <label htmlFor="plan13"><i className='bx bx-chevron-down'/></label> План обучения №13
                    <div className="content">
                        <p><b>1 неделя: </b>Простейшие тригонометрические уравнения</p>
                        <p><b>‌2 неделя: </b>Виды тригонометрических уравнений</p>
                        <p><b>‌3 неделя: </b>Отбор корней</p>
                        <p><b>‌4 неделя: </b>Тригонометрические уравнения из ЕГЭ</p>
                        <p><b>‌5 неделя: </b>Смешанные уравнения. Уравнения с ОДЗ</p>
                        <p><b>6 неделя: </b>Показательные и логарифмические уравнения</p>
                        <p>‌Критерии оценивания и основные ошибки</p>
                    </div>
                </div>
                <div className="spawnItem">
                    <input type="checkbox" id="plan15" />
                    <label htmlFor="plan15"><i className='bx bx-chevron-down'/></label> План обучения №15
                    <div className="content">
                        <p><b>1 неделя: </b>Рациональные неравенства</p>
                        <p><b>‌2 неделя: </b>Иррациональные уравнения</p>
                        <p><b>‌3 неделя: </b>Иррациональные неравенства</p>
                        <p><b>‌4 неделя: </b>Уравнения с модулем</p>
                        <p><b>‌5 неделя: </b>Неравенства с модулем</p>
                        <p><b>6 неделя: </b>Показательные неравенства</p>
                        <p><b>7 неделя: </b>Логарифмические неравенства</p>
                        <p>‌Критерии оценивания и основные ошибки</p>
                    </div>
                </div>
                <div className="spawnItem">
                    <input type="checkbox" id="plan16" />
                    <label htmlFor="plan16"><i className='bx bx-chevron-down'/></label> План обучения №16
                    <div className="content">
                        <p><b>1 неделя: </b>Вклады</p>
                        <p><b>‌2 неделя: </b>Кредиты. Аннуитетные платежи</p>
                        <p><b>‌3 неделя: </b>Кредиты. Дифференцированные платежи</p>
                        <p><b>‌4 неделя: </b>Смешанные задачи на кредиты</p>
                        <p><b>‌5 неделя: </b>Задачи на оптимальный выбор без введения функции и с введением функции</p>
                        <p><b>6 неделя: </b>Задачи на оптимальный выбор без использования и с использованием производной</p>
                        <p>‌Критерии оценивания и основные ошибки</p>
                    </div>
                </div>
            </section>

            <div className={style.wrapperButton}>
                <div className="button-link animZoom">
                    <Link href="https://lk.cloudtext.ru/tasks/ew1sn">Пример урока</Link>
                </div>
            </div>
        </CourseLayout>
    );
}

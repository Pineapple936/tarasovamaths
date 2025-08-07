import CourseLayout from "@/components/CourseLayout";
import ScrollWrapper from "@/components/ScrollWrapper";
import Image from "next/image";
import Link from "next/link";
import style from "@/app/services/learningTools.module.scss"

export default function MessengerSupport() {
    return (
        <CourseLayout>
            <section>
                <ol>
                    <li><b>Онлайн доска</b> для занятий, а также удобная <b>платформа для домашних работ</b></li>
                    <li><b>Личный кабинет</b> для каждого ученика с целью хранения необходимых материалов и отслеживания прогресса</li>
                    <li><b>Занятия</b> проходят <b>онлайн</b> на платформе Voov</li>
                    <li>Авторские <b>чек-листы с теорией и формулами</b></li>
                    <li>Использую <b>интерактивные платформы</b> для закрепления пройденных тем</li>
                    <li>Высылаю материалы и пособия — ничего <b>дополнительно покупать не нужно</b></li>
                    <li><b>Обратная связь</b> со мной <b>в любое время</b></li>
                    <li>Каждую неделю дается <b>домашнее задание</b>, которое присылается на проверку в определенные сроки, после проверки подробно разбираем решенные задания <b>вне основного времени занятий</b></li>
                    <li>Подробно <b>разбираем оформление</b> заданий экзамена</li>
                </ol>
            </section>
            <section>
                <h2 style={{"marginBottom": "20px"}}>Материалы, используемые на занятиях</h2>
                <ScrollWrapper countItems={7}>
                    <article className="cell" style={{"gap": "15px", "padding": "0", "paddingBottom": "10px"}}>
                        <div className="imageScroll">
                            <Image
                                src="/courses/ege/message-support/cabinet.jpg"
                                alt="Личный кабинет ученика"
                                fill
                                loading="lazy"
                            />
                        </div>
                        <p>Личный кабинет ученика</p>
                    </article>
                    <article className="cell" style={{"gap": "15px", "padding": "0", "paddingBottom": "10px"}}>
                        <div className="imageScroll">
                            <Image
                                src="/courses/ege/message-support/class.jpg"
                                alt="Дружелюбная атмосфера на занятиях"
                                fill
                                loading="lazy"
                            />
                        </div>
                        <p>Дружелюбная атмосфера на занятиях</p>
                    </article>
                    <article className="cell" style={{"gap": "15px", "padding": "0", "paddingBottom": "10px"}}>
                        <div className="imageScroll">
                            <Image
                                src="/courses/ege/message-support/homework1.jpg"
                                alt="Платформа для домашних работ"
                                fill
                                loading="lazy"
                            />
                        </div>
                        <p>Платформа для домашних работ</p>
                    </article>
                    <article className="cell" style={{"gap": "15px", "padding": "0", "paddingBottom": "10px"}}>
                        <div className="imageScroll">
                            <Image
                                src="/courses/ege/message-support/homework2.jpg"
                                alt="Платформа для домашних работ"
                                fill
                                loading="lazy"
                            />
                        </div>
                        <p>Платформа для домашних работ</p>
                    </article>
                    <article className="cell" style={{"gap": "15px", "padding": "0", "paddingBottom": "10px"}}>
                        <div className="imageScroll">
                            <Image
                                src="/courses/ege/message-support/teoria1.jpg"
                                alt="Теоретический материал"
                                fill
                                loading="lazy"
                            />
                        </div>
                        <p>Теоретический материал</p>
                    </article>
                    <article className="cell" style={{"gap": "15px", "padding": "0", "paddingBottom": "10px"}}>
                        <div className="imageScroll">
                            <Image
                                src="/courses/ege/message-support/teoria2.jpg"
                                alt="Теоретический материал"
                                fill
                                loading="lazy"
                            />
                        </div>
                        <p>Теоретический материал</p>
                    </article>
                    <article className="cell" style={{"gap": "15px", "padding": "0", "paddingBottom": "10px"}}>
                        <div className="imageScroll">
                            <Image
                                src="/courses/ege/message-support/interactive1.jpg"
                                alt="Интерактивы"
                                fill
                                loading="lazy"
                            />
                        </div>
                        <p>Интерактивы</p>
                    </article>
                </ScrollWrapper>
            </section>
            <div className={style.wrapperButton}>
                <div className="button-link">
                    <Link href="https://wa.me/79308815930">Записаться на занятия</Link>
                </div>
            </div>
        </CourseLayout>
    );
}

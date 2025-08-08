import ScrollWrapper from "@/components/ScrollWrapper";
import SocialIcons from "@/components/SocialIcons";
import Image from "next/image";
import Link from "next/link";
import style from "./page.module.scss";

export default function About() {
    return (
        <>
            <section className={style.block} style={{"padding": "10px 0"}}>
                <div className={style.content}>
                    <article className={style.image}>
                        <div style={{"aspectRatio": "2758 / 3861"}}>
                            <Image
                                src="/about/photo/greet.JPG"
                                alt="Фотография репетитора"
                                fill
                                priority
                                />
                        </div>
                    </article>
                    <article className={style.info}>
                        <header>Привет! Меня зовут Тарасова Екатерина.<br/>Я — репетитор по математике.</header>
                        <ul>
                            <li><i className='bx bx-time-five' /> 7 лет опыта работы репетитором</li>
                            <li><i className='bx bx-user-check'/> Обучила более 100 учеников, провела более 5.000 занятий</li>
                            <li><i className='bx bx-buildings' /> Ученики поступают в МГУ, МГИМО, ВШЭ, РУДН и другие ведущие вузы</li>
                            <li><i className='bx bx-edit-alt' /> Сдавала ОГЭ и ЕГЭ (база и профиль)</li>
                            <li><i className='bx bx-book-reader' /> Регулярно учусь у экспертов ОГЭ и ЕГЭ</li>
                        </ul>
                        <SocialIcons />
                    </article>
                </div>
            </section>

            <section className={style.block} style={{"padding": "0"}}>
                <header>Как проходит обучение?</header>
                <div className={style.content} style={{"justifyContent": "space-between"}}>
                    <ul className={style.info}>
                        <li><i className="bx bx-user-pin" /> У каждого ученика — личный кабинет на платформе Younote с материалами для подготовки</li>
                        <li><i className="bx bx-chalkboard" /> Использую онлайн-доску и интерактивные сервисы</li>
                        <li><i className="bx bx-edit-alt" /> Домашки и разбор ошибок — отдельно от занятий, без спешки</li>
                        <li><i className="bx bx-book-open" /> Даю всё необходимое: теорию, схемы и понятные объяснения</li>
                        <li><i className="bx bx-message-dots" /> Всегда на связи: отвечаю на вопросы в мессенджерах</li>
                        <div className="button-link">
                            <Link href="https://t.me/tarasovareview">Отзывы</Link>
                        </div>
                    </ul>
                    <article className={style.image}>
                        <div style={{"aspectRatio": "2701 / 3022"}}>
                            <Image
                                src="/about/photo/education.JPG"
                                alt="Фотография репетитора"
                                fill
                                priority
                            />
                        </div>
                    </article>
                </div>
            </section>

            <section>
                <hr />
                <article className={style.consultation}>
                    <b>Провожу бесплатную 30 — минутную консультацию с предварительным тест-мониторингом перед началом работы с целью знакомства, обсуждения дальнейшего плана работы и подбора удобного формата обучения</b>
                    <div className="button-link">
                        <Link href="https://wa.me/79308815930">Записаться на консультацию</Link>
                    </div>
                </article>
                <hr />
            </section>

            <section style={{"display": "flex", "justifyContent": "center", "padding": "0"}}>
                <iframe
                    width="100%"
                    src="https://rutube.ru/play/embed/6c9644266b243e3a3b4db1c105ad5330"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                />
            </section>

            <section>
                <ScrollWrapper countItems={7}>
                    <article>
                        <div className="imageScroll" style={{"transform": "rotate(-90deg)"}}>
                            `<Image
                                src="/about/diplomas/1.jpg"
                                alt="Удостоверение о повышении квалификации"
                                fill
                                loading="lazy"
                                draggable={false}
                                style={{ objectFit: "unset", objectPosition: "unset" }}
                            />`
                        </div>
                    </article>
                    <article>
                        <div className="imageScroll" style={{"transform": "rotate(-90deg)"}}>
                            <Image
                                src="/about/diplomas/2.jpg"
                                alt="Удостоверение о повышении квалификации от Фоксфорд"
                                fill
                                loading="lazy"
                                draggable={false}
                                style={{ objectFit: "unset", objectPosition: "unset" }}
                            />
                        </div>
                    </article>
                    <article>
                        <div className="imageScroll" style={{"transform": "rotate(90deg)"}}>
                            <Image
                                src="/about/diplomas/3.jpg"
                                alt="Диплом о профессиональной переподготовке"
                                fill
                                loading="lazy"
                                draggable={false}
                                style={{ objectFit: "unset", objectPosition: "unset" }}
                            />
                        </div>
                    </article>
                    <article>
                        <div className="imageScroll" style={{"transform": "rotate(-90deg)"}}>
                            <Image
                                src="/about/diplomas/4.jpg"
                                alt="Диплом специалиста"
                                fill
                                loading="lazy"
                                draggable={false}
                                style={{ objectFit: "unset", objectPosition: "unset" }}
                            />
                        </div>
                    </article>
                    <article>
                        <div className="imageScroll">
                            <Image
                                src="/about/diplomas/5a.JPG"
                                alt="Участник летней школы для учителей математики от МГУ"
                                fill
                                loading="lazy"
                                draggable={false}
                                style={{ objectFit: "unset", objectPosition: "unset" }}
                            />
                        </div>
                    </article>
                    <article>
                        <div className="imageScroll">
                            <Image
                                src="/about/diplomas/5b.JPG"
                                alt="Участник летней школы для учителей математики от МГУ"
                                fill
                                loading="lazy"
                                draggable={false}
                                style={{ objectFit: "unset", objectPosition: "unset" }}
                            />
                        </div>
                    </article>
                    <article>
                        <div className="imageScroll">
                            <Image
                                src="/about/diplomas/6.jpg"
                                alt="Сертификкат об окончании с отличием курса по повышению квалификации репетитора"
                                fill
                                loading="lazy"
                                draggable={false}
                                style={{ objectFit: "unset", objectPosition: "unset" }}
                            />
                        </div>
                    </article>
                </ScrollWrapper>
            </section>
        </>
    );
}

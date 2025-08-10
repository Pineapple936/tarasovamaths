import CourseLayout from "@/components/CourseLayout";
import Link from "next/link";
import Image from "next/image";
import style from "@/app/services/learningTools.module.scss";

export default function Beginner() {
    return (
        <CourseLayout>
            <header>Гайды по заданиям 1 - 5 ОГЭ</header>
            <section>
                <h2 style={{"fontSize": "1.5rem"}}>Подробный разбор всех прототипов заданий 1 - 5</h2>
                <div className={style.wrapperButton}>
                    <ol>
                        <li>Квартира</li>
                        <li>Участок</li>
                        <li>Листы бумаги</li>
                        <li>План местности</li>
                        <li>Тарифы</li>
                        <li>Печь для бани</li>
                        <li>Шины</li>
                    </ol>
                    <h2 style={{"marginTop": "30px"}}>Стоимость</h2>
                    <ul>
                        <li>Один гайд - <b>990₽</b></li>
                        <li style={{"lineHeight": "1"}}>Все гайды (7 шт.) - <b>5.000₽</b></li>
                    </ul>
                </div>
            </section>

            <section className={style.examples}>
                <h2>Примеры гайда</h2>
                <article>
                    <div className={style.image} style={{"aspectRatio": "1290 / 1757"}}>
                        <Image
                            src="/courses/oge/guide-1-5/1.PNG"
                            alt="Фотография гайда"
                            fill
                            loading="lazy"
                        />
                    </div>
                </article>
                <article>
                    <div className={style.image} style={{"aspectRatio": "1290 / 1757"}}>
                        <Image
                            src="/courses/oge/guide-1-5/2.PNG"
                            alt="Фотография гайда"
                            fill
                            loading="lazy"
                        />
                    </div>
                </article>
            </section>

            <div className={style.wrapperButton}>
                <div className="button-link">
                    <Link href="https://wa.me/79308815930">Купить гайды</Link>
                </div>
            </div>
        </CourseLayout>
    );
}

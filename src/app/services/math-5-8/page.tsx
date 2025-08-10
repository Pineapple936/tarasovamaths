import ScrollWrapper from "@/components/ScrollWrapper";
import CourseLayout from "@/components/CourseLayout";
import Link from "next/link";
import style from "@/app/services/examStyles.module.scss";

export default function Math58() {
    return (
        <CourseLayout>
            <header>Форматы занятий</header>
            <section style={{"marginBottom": "10px"}}>
                <ScrollWrapper countItems={2}>
                    <article className="cell">
                        <header>Занятия в паре</header>
                        <p style={{"fontWeight": "bold"}}>Для всех учеников 5−8 классов с общей целью на обучение</p>
                        <ul style={{"textAlign": "start"}}>
                            <p style={{"margin": "15px 0 0", "textAlign": "center", "fontWeight": "900"}}>Как проходит?</p>
                            <li style={{"lineHeight": "1.5"}}>Занятия в паре с другом, либо же подбираю пару по исходному уровню</li>
                            <li style={{"lineHeight": "1.5"}}>В случае пропуска занятия высылается запись урока</li>
                            <li style={{"lineHeight": "1.5"}}>Если что-то остается непонятным - индивидуально отвечу на все возникшие вопросы, а также дам дополнительное задание</li>
                            <li style={{"lineHeight": "1.5"}}>Общий чат для обсуждения всех вопросов</li>
                        </ul>
                        <div>
                            <p>55 минут</p>
                            <b>3.000₽</b>
                        </div>
                        <div className="button-link">
                            <Link href="/services/course-description">Подробнее</Link>
                        </div>
                    </article>
                    <article className="cell">
                        <header>Индивидуальные занятия</header>
                        <p style={{"fontWeight": "bold"}}>Для всех учеников 5−8 классов вне зависимости от цели обучения</p>
                        <span>Индивидуальная программа обучения исходя из вашего запроса</span>
                        <div>
                            <p>55 минут</p>
                            <b>5.000₽</b>
                        </div>
                        <div className="button-link">
                            <Link href="/services/course-description">Подробнее</Link>
                        </div>
                    </article>
                </ScrollWrapper>
            </section>
        </CourseLayout>
    );
}

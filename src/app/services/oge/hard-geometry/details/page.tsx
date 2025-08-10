import CourseLayout from "@/components/CourseLayout";
import Link from "next/link";
import style from "@/app/services/learningTools.module.scss"

export default function Details() {
    return (
        <CourseLayout>
            <header>Спецкурс по заданиям 2 части ОГЭ (Геометрия)</header>
            <section>
                <h2>На курсе вы научитесь:</h2>
                <ul>
                    <li>Решать задачи на вычисления, доказательства и дополнительные построения по геометрии</li>
                    <li>Идеально оформлять задания №23−25</li>
                </ul>
            </section>

            <section>
                <h2>Программа курса</h2>
                <div style={{"fontSize": "1.3rem"}}>
                    <p><b>1 неделя - </b>Геометрические задачи на вычисления</p>
                    <p><b>2 неделя - </b>Геометрические задачи на доказательство</p>
                    <p><b>3 неделя - </b>Геометрические задачи повышенной сложности</p>
                    <p><b>4 неделя - </b>Повторение</p>
                </div>
            </section>

            <section>
                <h2>Как проходит?</h2>
                <ul>
                    <li>Каждую неделю открывается 1 объемный урок с домашним заданием и необходимой теорией</li>
                    <li>Смотрите видеоуроки, учите теорию, выполняете домашние задания. Далее либо проверяете себя сами по развернутым решениям, либо отправляете мне на проверку (в зависимости от тарифа)</li>
                    <li>В конце обучения вы получите объемную работу по заданиям №23−25 с моей проверкой вне зависимости от тарифа</li>
                </ul>
            </section>
            <div className={style.wrapperButton}>
                <div className="button-link">
                    <Link href="">Приобрести курс</Link>
                </div>
            </div>
        </CourseLayout>
    );
}

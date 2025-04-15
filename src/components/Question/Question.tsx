
import cls from './Question.module.scss'
import placeholder_question_image from '../../assets/placeholder_question_image.png'
function Question() {
    return (
        <div className={cls.wrapper}>

            <img className={cls.question_image} src={placeholder_question_image} alt=""/>

            <div className={cls.question_text}>
                Разгадайте ребус
            </div>

        </div>
    );
}

export default Question;
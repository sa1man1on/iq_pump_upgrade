import cls from "./TaskCreation.module.scss"
import GameLayout from "../../layouts/GameLayout/GameLayout.tsx";
import clsx from "clsx";
import ButtonAction from "../../components/buttons/ButtonAction/ButtonAction.tsx";
import {useNavigate} from "react-router-dom";
import plus_icon from '../../assets/circle_plus.svg'
import AnswerArea from "../../components/AnswerArea/AnswerArea.tsx";


//TODO -> Варианты ответов как и все поля с ограничением по символам (30) если больше поле красным подсвечиваем и не даем сохранить
function TaskCreation() {
    const navigate = useNavigate();

    return (
        <div className={cls.PageWrapper}>
            <div className={cls.GameContainer}>
                <GameLayout
                    isAvatar={true}
                    isTotalAnswersSum={true}
                />
                <div className={cls.TaskCreationContainer}>

                    <div className={cls.header}>Создания задания</div>

                    <div className={cls.task_adder}>
                        <div className={cls.task_adder_header}>
                            <div className={clsx(cls.item)}>Фото</div>
                            <div className={clsx(cls.item)}>Видео</div>
                            <div className={clsx(cls.item, cls.item_active)}>URL</div>
                        </div>
                        <div className={cls.task_adder_footer}>

                            <img className={cls.plus_icon} src={plus_icon} alt=""/>

                            <p className={clsx(cls.text, cls.text_top)}>
                                Добавьте ссылку на вашу социальную сеть или пост в ней
                            </p>

                            <p className={clsx(cls.text, cls.text_bottom)}>
                                (Instagram, Telegram, VK, X, TikTok)
                            </p>

                        </div>
                    </div>

                    <div className={cls.lang_container}>
                        <div className={cls.lang_header}>Язык</div>
                        <div className={clsx(cls.gray_thin, cls.lang_picker)}>Русский</div>
                    </div>

                    <div className={cls.answers_container}>
                        <div className={cls.answers_header}>Ответы <br/> (первый верный)</div>
                        <div className={clsx(cls.answers_wrapper)}>
                            {/* <textarea*/}
                            {/*     className={clsx(cls.input, cls.answer_area, cls.correct)}*/}
                            {/*     placeholder='Верный ответ'*/}
                            {/*     value={value}*/}
                            {/*     onChange={handleChange}*/}
                            {/*     maxLength={30}*/}
                            {/* />*/}
                            {/*<textarea*/}
                            {/*    className={clsx(cls.input, cls.answer_area)}*/}
                            {/*    placeholder='Вариант 2'*/}
                            {/*></textarea>*/}
                            {/*<textarea*/}
                            {/*    className={clsx(cls.input, cls.answer_area)}*/}
                            {/*    placeholder='Вариант 3'*/}
                            {/*></textarea>*/}
                            {/*<textarea*/}
                            {/*    className={clsx(cls.input, cls.answer_area)}*/}
                            {/*    placeholder='Вариант 4'*/}
                            {/*></textarea>*/}
                            <AnswerArea isCorrect={true} placeholder='Верный ответ'/>
                            <AnswerArea isCorrect={false} placeholder='Вариант 2'/>
                            <AnswerArea placeholder='Вариант 3'/>
                            <AnswerArea placeholder='Вариант 4'/>
                        </div>

                    </div>

                    <div className={cls.executions_container}>
                        <div className={cls.executions_header}>Количество исполнений</div>
                        <input className={clsx(cls.gray_thin, cls.executions_input)} type="number"/>
                    </div>

                    <div className={cls.cost_container}>
                        <div className={cls.cost_header}>cтоимость</div>
                        <input className={cls.cost_amount} placeholder='0'></input>
                    </div>

                    <div className={cls.end_btn_container}>
                        <div className={cls.warning}>Не все обязательные поля заполнены</div>
                        <div className={cls.btn_wrapper}>
                            <ButtonAction>Оплатить с <br/> баланса</ButtonAction>
                        </div>
                    </div>

                    <button
                        onClick={() => navigate('/profile')}
                        className={cls.button_cancel}>отменить
                    </button>

                </div>
            </div>
        </div>
    );
}

export default TaskCreation;
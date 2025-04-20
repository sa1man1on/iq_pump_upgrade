import cls from "./TaskCreation.module.scss"
import GameLayout from "../../layouts/GameLayout/GameLayout.tsx";
import clsx from "clsx";
import ButtonAction from "../../components/buttons/ButtonAction/ButtonAction.tsx";
import {useNavigate} from "react-router-dom";

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
                    <div className={cls.wrapper_1}>
                        <div className={cls.top_btns}>
                            <button className={clsx(cls.gray_thin, cls.btn, cls.photo_video)}>Фото/видео</button>
                            <button className={clsx(cls.gray_thin, cls.btn, cls.link)}>URL</button>
                        </div>

                        <input className={clsx(cls.gray_thin, cls.input)} type="text"
                               placeholder='Ссылка на ваш сайт или пост'/>

                        <input className={clsx(cls.gray_thin, cls.input, cls.input_big)} type="text"
                               placeholder='Вопрос (до 100 символов)'/>
                    </div>

                    <div className={cls.lang_container}>
                        <div className={cls.lang_header}>Язык</div>
                        <div className={clsx(cls.gray_thin, cls.lang_picker)}>Русский</div>
                    </div>

                    <div className={cls.answers_container}>
                        <div className={cls.answers_header}>Ответы <br/> (первый верный)</div>
                        <div className={clsx(cls.answers_wrapper)}>
                            <button className={clsx(cls.input, cls.answer_correct)}>Верный ответ</button>
                            <button className={clsx(cls.input, cls.answer_not_correct)}>Вариант 2</button>
                            <button className={clsx(cls.input, cls.answer_not_correct)}>Вариант 3</button>
                            <button className={clsx(cls.input, cls.answer_not_correct)}>Вариант 4</button>
                        </div>
                    </div>

                    <div className={cls.executions_container}>
                        <div className={cls.executions_header}>Количество исполнений</div>
                        <input className={clsx(cls.gray_thin, cls.executions_input)} type="text"/>
                    </div>

                    <div className={cls.cost_container}>
                        <div className={cls.cost_header}>cтоимость</div>
                        <div className={cls.cost_amount}>5 234.98</div>
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
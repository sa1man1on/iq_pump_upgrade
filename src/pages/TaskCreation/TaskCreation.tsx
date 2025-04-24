import cls from "./TaskCreation.module.scss"
import GameLayout from "../../layouts/GameLayout/GameLayout.tsx";
import clsx from "clsx";
import {useNavigate} from "react-router-dom";
import AnswerArea from "../../components/AnswerArea/AnswerArea.tsx";
import {useState} from 'react';
import MediaAdder from "../../components/MediaAdder/MediaAdder.tsx";
import Button from "../../components/buttons/Button/Button.tsx";

//TODO -> Варианты ответов как и все поля с ограничением по символам (30) если больше поле красным подсвечиваем и не даем сохранить
function TaskCreation() {
    const navigate = useNavigate();
    const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('Русский');

    const languages = ['Русский', 'English'];

    const toggleLanguageDropdown = () => {
        setShowLanguageDropdown(!showLanguageDropdown);
    };

    const selectLanguage = (language: string) => {
        setSelectedLanguage(language);
        setShowLanguageDropdown(false);
    };

    return (
        <div className={cls.PageWrapper}>
            <div className={cls.GameContainer}>
                <GameLayout
                    isAvatar={true}
                    isTotalAnswersSum={true}
                />
                <div className={cls.TaskCreationContainer}>

                    <div className={cls.header}>Создания задания</div>

                    <MediaAdder></MediaAdder>

                    <div className={cls.lang_container}>
                        <div className={cls.lang_header}>Язык</div>
                        <div className={cls.lang_dropdown_container}>
                            <div
                                className={clsx(cls.gray_thin, cls.lang_picker)}
                                onClick={toggleLanguageDropdown}
                            >
                                {selectedLanguage} ▼
                            </div>
                            {showLanguageDropdown && (
                                <div className={cls.lang_dropdown}>
                                    {languages.map((language, index) => (
                                        <div
                                            key={index}
                                            className={cls.lang_option}
                                            onClick={() => selectLanguage(language)}
                                        >
                                            {language}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className={cls.answers_container}>
                        <div className={cls.answers_header}>Ответы <br/> (первый верный)</div>
                        <div className={clsx(cls.answers_wrapper)}>
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
                        <div className={cls.cost_amount}>500</div>
                        {/*    Сделать тут логику умножения количества показов на 500*/}
                    </div>

                    <div className={cls.end_btn_container}>
                        <div className={cls.warning}>Не все обязательные поля заполнены</div>
                        <div className={cls.btn_wrapper}>
                            <Button>Оплатить с <br/> баланса</Button>
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
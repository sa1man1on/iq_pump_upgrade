import cls from "./CreateTask.module.scss"
import GameLayout from "../../layouts/GameLayout/GameLayout.tsx";
import {useNavigate} from "react-router-dom";


function CreateTask() {

    const navigate = useNavigate();

    return (
        <div className={cls.PageWrapper}>
            <div className={cls.GameContainer}>
                <GameLayout isTournament={true}/>
                <div className={cls.create_task_text}>
                    Создайте собственное задание со ссылкой на ваш сайт или страничку в соцсети и его увидят и выполнят
                </div>

                <div className={cls.numbers}>
                    156 734
                </div>

                <div className={cls.active_users}>
                    активных пользователей
                    <br/>
                    IQ PUMP
                </div>

                <button
                    className={cls.btn}
                    onClick={() => {
                        navigate("/create_task")
                    }}
                >Создать</button>

                <div className={cls.get_consulting_text}>
                    Получить подробную
                    консультацию по рекламным
                    интеграциям
                </div>

                <div className={cls.my_task_container}>

                    <div className={cls.task_header}>
                        Мои задания
                    </div>
                    <div className={cls.wrapper_task}>

                        <div className={cls.my_task}>
                            <div className={cls.my_task_text}>
                                Какая картинка на виде...
                            </div>
                            <div className={cls.progress}>
                                1/18
                            </div>
                        </div>

                        <div className={cls.my_task}>
                            <div className={cls.my_task_text}>
                                Какая картинка на виде...
                            </div>
                            <div className={cls.progress}>
                                1/18
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    );
}

export default CreateTask;
import cls from "./TaskAdderGroup.module.scss";
import {useNavigate} from "react-router-dom";

interface TaskAdderGroupProps {
    onOpenModal: () => void;   // <‑‑ новый проп
}

function TaskAdderGroup({onOpenModal}: TaskAdderGroupProps) {
    const navigate = useNavigate();

    return (
        <div className={cls.task_adder_group_wrapper}>
            {/* кликабельная зона «сбербанка» открывает модалку */}
            <div className={cls.sberbank_wrapper} onClick={onOpenModal}>
                <div className={cls.sberbank}></div>
            </div>

            {/* старая кнопка "add task" — без изменений */}
            <div onClick={() => navigate("/add_task")} className={cls.task_add}>
                add
                <br/>
                task
            </div>
        </div>
    );
}

export default TaskAdderGroup;

import { useState } from "react";

const ToDoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editValue, setEditValue] = useState("");
  const [checkedTasks, setCheckedTasks] = useState<boolean[]>([]);
  const [filter, setFilter] = useState<"all" | "notDone" | "done">("all");
  const [isAll, setIsAll] = useState(true);
  const [isNotDone, setIsNotDone] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const getCurrentTime = () => {
    const now = new Date();
    const day = (now.getMonth() + 1).toString().padStart(2, "0");
    const date = now.getDate().toString().padStart(2, "0");
    return `${day}월 ${date}일`;
  };

  function addTask(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setInputValue(value);
  }

  function totalTask() {
    if (inputValue.trim()) {
      setTasks([...tasks, inputValue]);
      setCheckedTasks([...checkedTasks, false]);
      setInputValue("");
    }
  }

  function inputKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      totalTask();
    }
  }

  function removeArr(index: number) {
    const resultList = tasks.filter((_, i) => i !== index);
    const updatedCheckedTasks = checkedTasks.filter((_, i) => i !== index);
    setTasks(resultList);
    setCheckedTasks(updatedCheckedTasks);
  }

  function selectedEditIndex(i: number) {
    setEditIndex(i);
    setEditValue(tasks[i]);
  }

  function editIndexValue() {
    if (editValue.trim() && editIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = editValue;
      setTasks(updatedTasks);
      setEditIndex(null);
      setEditValue("");
    }
  }

  function toggleCheckedTask(i: number) {
    const updatedCheckedTasks = [...checkedTasks];
    updatedCheckedTasks[i] = !updatedCheckedTasks[i];
    setCheckedTasks(updatedCheckedTasks);
  }

  const filteredTasks = tasks
    .map((task, index) => ({ task, index }))
    .filter(({ index }) => {
      if (filter === "notDone") return !checkedTasks[index];
      if (filter === "done") return checkedTasks[index];
      return true;
    });

  return (
    <div className="toDoList">
      <div className="toDoList__container">
        <div className="toDoList__container__header">
          <div className="toDoList__container__header__titles">
            <div
              className="toDoList__container__header__titles_title"
              onClick={() => {
                setFilter("all");
                setIsAll(true);
                setIsNotDone(false);
                setIsDone(false);
              }}
              style={{ color: isAll === true ? "#83d4ff" : "#d191fb" }}
            >
              All
            </div>
            <div
              className="toDoList__container__header__titles_title"
              onClick={() => {
                setFilter("notDone");
                setIsNotDone(true);
                setIsAll(false);
                setIsDone(false);
              }}
              style={{ color: isNotDone === true ? "#83d4ff" : "#d191fb" }}
            >
              Not Done
            </div>
            <div
              className="toDoList__container__header__titles_title"
              onClick={() => {
                setFilter("done");
                setIsDone(true);
                setIsAll(false);
                setIsNotDone(false);
              }}
              style={{ color: isDone === true ? "#83d4ff" : "#d191fb" }}
            >
              Done
            </div>
          </div>
          <div className="toDoList__container__header__time">
            {getCurrentTime()}
          </div>
        </div>
        <div className="toDoList__container__main">
          <div className="toDoList__container__main__inputArea">
            <input
              value={inputValue}
              onChange={addTask}
              onKeyDown={inputKeyDown}
              className="toDoList__container__main__inputArea_input"
              type="text"
              placeholder="Please add your tasks here.."
            />
            <button
              onClick={totalTask}
              className="toDoList__container__main__inputArea_btn"
            >
              Add
            </button>
          </div>
          <div className="toDoList__container__main__taskArea">
            {filteredTasks.map(({ task, index }) => (
              <div
                key={index}
                className="toDoList__container__main__taskArea__taskList"
              >
                {editIndex === index ? (
                  <div className="toDoList__container__main__taskArea__taskList__editTask">
                    <input
                      className="toDoList__container__main__taskArea__taskList__editTask_input"
                      onChange={(e) => setEditValue(e.target.value)}
                      value={editValue}
                      type="text"
                    />
                    <button
                      className="toDoList__container__main__taskArea__taskList__editTask_btn"
                      onClick={editIndexValue}
                    >
                      저장
                    </button>
                  </div>
                ) : (
                  <div
                    style={{
                      textDecoration:
                        checkedTasks[index] === true ? "line-through" : "none",
                      color:
                        checkedTasks[index] === true ? "#83d4ff" : "#d191fb",
                    }}
                    className="toDoList__container__main__taskArea__taskList_tasks"
                  >
                    {task}
                  </div>
                )}
                <div className="toDoList__container__main__taskArea__taskList__options">
                  <div
                    onClick={() => toggleCheckedTask(index)}
                    className="toDoList__container__main__taskArea__taskList__options_check"
                  >
                    Check
                  </div>
                  <div
                    onClick={() => {
                      selectedEditIndex(index);
                    }}
                    className="toDoList__container__main__taskArea__taskList__options_edit"
                  >
                    Edit
                  </div>
                  <div
                    onClick={() => {
                      removeArr(index);
                    }}
                    className="toDoList__container__main__taskArea__taskList__options_remove"
                  >
                    Delete
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;

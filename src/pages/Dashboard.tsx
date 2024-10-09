import ToDoList from "../components/Dashboard/ToDoList";
import Weather from "../components/Weather/Weather";
import Calendar from "../components/Calendar/Calendar";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__container">
        <div className="dashboard__container__toDoList">
          <ToDoList />
        </div>
        <div className="dashboard__container__weather">
          <Weather />
        </div>
      </div>
      <div className="dashboard__calendar">
        <Calendar />
      </div>
    </div>
  );
};

export default Dashboard;

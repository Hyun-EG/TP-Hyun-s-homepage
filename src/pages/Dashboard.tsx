import ToDoList from "../components/Dashboard/ToDoList";
import Weather from "../components/Weather/Weather";

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
    </div>
  );
};

export default Dashboard;

import { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addForm, deleteForm } from "./redux/actions/Form";

function App() {
  const [formInfo, setFormInfo] = useState({
    name: "",
    surname: "",
    work: "",
  });
  const [saveInfo, setSaveInfo] = useState([]);

  function handleChange(event) {
    setFormInfo({ ...formInfo, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    const { name, surname, work } = formInfo;
    event.preventDefault();
    const newInfo = { ...formInfo, name, surname, work };
    setSaveInfo([...saveInfo, newInfo]);
    console.log(saveInfo);
  }

  return (
    <div className="wrapper">
      <h2>Work register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Name</p>
          <input
            type="text"
            name="name"
            value={formInfo.name}
            onChange={handleChange}
          />
        </label>
        <label>
          <p>Surname</p>
          <input
            type="text"
            name="surname"
            value={formInfo.surname}
            onChange={handleChange}
          />
        </label>
        <label>
          <p>Work</p>
          <input
            type="address"
            name="address"
            value={formInfo.address}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      {saveInfo.map((info) => {
        return (
          <div>
            <table></table>
            <h2>{info.name}</h2>
            <h2>{info.surname}</h2>
            <h2>{info.work}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default App;

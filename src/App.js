import { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addForm, deleteForm, editForm } from "./redux/actions/Form";

function App() {
  const FormList = useSelector((state) => state.Form.FormList.FormList);
  console.log("Formlist", FormList);
  const dispatch = useDispatch();
  const [Form, setForm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addForm(Form));
    setForm("");
  };

  const handleDelete = (key) => {
    return FormList.filter((list) => list.key !== key);
  };

  const handleEdit = (key) => {
    return FormList.filter((list) => list.key !== key);
  };

  return (
    <div className="App">
      <h1>Work register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          {" "}
          Name:
          <input
            type="Formapp"
            onChange={(e) => setForm(e.target.value)}
            placeholder=""
            value={Form}
          />
          Surname:
          <input
            type="Formapp"
            onChange={(e) => setForm(e.target.value)}
            placeholder=""
            value={Form}
          />
          Work:
          <input
            type="Formapp"
            onChange={(e) => setForm(e.target.value)}
            placeholder=""
            value={Form}
          />
          <input type="button" value="Submit" onClick={handleSubmit} />
        </div>
      </form>
      {FormList &&
        FormList.map((Form) => {
          return (
            <div key={Form.key}>
              <h2>
                <button
                  onClick={() => dispatch(deleteForm(handleDelete(Form.key)))}
                >
                  delete
                </button>

                <button
                  onClick={() => dispatch(editForm(handleEdit(Form.key)))}
                >
                  edit
                </button>
              </h2>
              <h1>{Form.name}</h1>
              <h1>{Form.surname}</h1>
              <h1>{Form.work}</h1>
            </div>
          );
        })}
    </div>
  );
}

export default App;

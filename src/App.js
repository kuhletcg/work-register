import React, { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addForm } from "./redux/actions/Form";

function App() {
  const FormList = useSelector((state) => state.Form.FormList);
  console.log("formlist", FormList);
  const dispatch = useDispatch();
  const [form, setForm] = useState({ name: "", surname: "", work: "" });
  console.log(form);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addForm(form));
    setForm({ name: "", surname: "", work: "" });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="Form">
      <h2>Work register</h2>
      <form className="Form" onSubmit={(e) => handleSubmit(e)}>
        <label>
          <p>Name</p>
          <input
            type="name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </label>
        <label>
          <p>Surname</p>
          <input
            type="surname"
            name="surname"
            value={form.surname}
            onChange={handleChange}
          />
        </label>
        <label>
          <p>Work</p>
          <input
            type="work"
            name="work"
            value={form.work}
            onChange={handleChange}
          />
        </label>
        <button onClick="submit">Submit</button>
      </form>

      {FormList &&
        FormList.map((form) => {
          return (
            <div key={form.key}>
              <table>
                <tr>
                  <th>{form.name}</th>
                  <th>{form.surname}</th>
                  <th>{form.work}</th>
                </tr>
              </table>
            </div>
          );
        })}
    </div>
  );
}
export default App;

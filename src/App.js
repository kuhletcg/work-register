import React, { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addForm,
  deleteForm,
  editForm,
  completeForm,
} from "./redux/actions/Form";

function App() {
  const FormList = useSelector((state) => state.Form.FormList);
  console.log("FormList", FormList);
  const dispatch = useDispatch();
  const [Form, setForm] = useState({ name: "", surname: "", work: "" });
  console.log(Form);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addForm(Form));
    setForm({ name: "", surname: "", work: "" });
  };

  const handleChange = (e) => {
    setForm({ ...Form, [e.target.name]: e.target.value });
  };

  const handleDelete = (key) => {
    return FormList.filter((list) => list.key !== key);
  };

  const handleEdit = (key) => {
    return FormList.filter((list) => list.key !== key);
    //   var { selectedEdit } = this.state
    //   this.setState({ selectedEdit: { index: selectedEdit.index, work: e.target.value}})
  };

  const handleComplete = (key) => {
    return FormList.filter((list) => list.key !== key);
  };

  return (
    <div className="form">
      <h2>Work register</h2>
      <form onSubmit={handleSubmit}>
        <p>Name</p>
        <input
          type="name"
          name="name"
          value={Form.name}
          onChange={handleChange}
          required
        />

        <p>Surname</p>
        <input
          type="surname"
          name="surname"
          value={Form.surname}
          onChange={handleChange}
          required
        />

        <p>Work</p>
        <input
          type="work"
          name="work"
          value={Form.work}
          onChange={handleChange}
          required
        />
        <div>
          {/* <input value={Form.work} onChange={handleChange} /> */}
          <button onClick={() => dispatch(editForm(handleEdit(Form.key)))}>
            Edit
          </button>

          <input type="submit" value="Submit" />
        </div>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>surname</th>
            <th>work</th>
          </tr>
          <tbody>
            {FormList &&
              FormList.map((form) => {
                return (
                  <tr key={form.key}>
                    <td>{form.name.name}</td>
                    <td>{form.name.surname}</td>
                    <td>{form.name.work}</td>
                    <button
                      onClick={() =>
                        dispatch(completeForm(handleComplete(form.key)))
                      }
                    >
                      Complete{" "}
                    </button>
                    <button
                      onClick={() =>
                        dispatch(deleteForm(handleDelete(form.key)))
                      }
                    >
                      delete{" "}
                    </button>
                  </tr>
                );
              })}
          </tbody>
        </thead>
      </table>
    </div>
  );
}
export default App;

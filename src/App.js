import { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addForm, deleteForm } from "./redux/actions/Form";

function App() {
  const [formInfo, setFormInfo] = useState({
    name: "",
    surname: "",
    address: "",
    email: "",
    car: "",
  });
  const [saveInfo, setSaveInfo] = useState([]);

  function handleChange(event) {
    setFormInfo({ ...formInfo, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    const { name, surname, address, email, car } = formInfo;
    event.preventDefault();
    const newInfo = { ...formInfo, name, surname, address, email, car };
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
            <h2>{info.name}</h2>
            <h2>{info.surname}</h2>
            <h2>{info.address}</h2>
            <h2>{info.email}</h2>
            <h2>{info.car}</h2>
          </div>
        );
      })}
    </div>
  );
}
// function App() {
//   const FormList = useSelector((state) => state.Form.FormList);
//   console.log("Formlist", FormList);
//   const dispatch = useDispatch();
//   const [Form, setForm] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(addForm(Form));
//     setForm("");
//   };

//   const handleDelete = (key) => {
//     return FormList.filter((list) => list.key !== key);
//   };

//   return (
//     <div className="App">
//       <h1>Work register</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           Name:
//           <input
//             type="FormRegisterapp"
//             onChange={(e) => setForm(e.target.value)}
//             placeholder=""
//             value={Form}
//           />
//           Surname:
//           <input
//             type="FormRegisterapp"
//             onChange={(e) => setForm(e.target.value)}
//             placeholder=""
//             value={Form}
//           />
//           Work:
//           <input
//             type="FormRegisterapp"
//             onChange={(e) => setForm(e.target.value)}
//             placeholder=""
//             value={Form}
//           />
//           <input type="button" value="Submit" onClick={handleSubmit} />
//         </div>
//       </form>
//       {FormList &&
//         FormList.map((Form) => {
//           return (
//             <div key={Form.key}>
//               <h2>
//                 <button
//                   onClick={() => dispatch(deleteForm(handleDelete(Form.key)))}
//                 >
//                   delete
//                 </button>
//               </h2>
//               <h1>{Form.name}</h1>
//             </div>
//           );
//         })}
//     </div>
//   );
// }

export default App;

import { useState } from "react";
import Card from "../components/Card";

const App = () => {
  const [profile, setProfile] = useState([]);
  const [form, setForm] = useState({
    username: "",
    role: "",
    about: "",
  });
  const [btn, setBtn] = useState("Create")
  const [index, setIndex] = useState(null)



  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleDelete = (idx) => {
    // const arr = [...profile]

    // arr.splice(idx , 1)

    // setProfile(arr)

    setProfile(profile.filter((obj, i) => i != idx));
  };



  const handleSubmit = (e) => {
    e.preventDefault();

    if(btn == "Update"){
      setProfile(profile.map((p , i) => {
       return i == index ? {...form} : p 
      }))
       
    }

    else{
     setProfile([
      ...profile,
      {
        username: form.username,
        role: form.role,
        about: form.about,
      },
      ]);

    }
    
    form.username = ''
    form.role =''
    form.about =''
    
  };


  const handleEdit = (idx) =>{
    const arr = [...profile]
    const p = arr.splice(idx , 1)
    
    setForm({...form  , ...p[0]})
    setBtn("Update")
    setIndex(idx)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Role"
          name="role"
          value={form.role}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="About"
          name="about"
          value={form.about}
          onChange={handleChange}
        />

        <button className="createbtn">{btn}</button>
      </form>

      <div className="profiles">
        <Card profile={profile} handleDelete={handleDelete} handleEdit={handleEdit} />
        
      </div>
    </>
  );
};

export default App;

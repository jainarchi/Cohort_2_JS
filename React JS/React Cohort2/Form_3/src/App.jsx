import { useEffect, useState } from "react";
import Card from "../components/Card";

const App = () => {
  const [profile, setProfile] = useState(() =>{
    const stored = localStorage.getItem("allProfile")
    return stored ? JSON.parse(stored) : []
  });
  const [form, setForm] = useState({
    username: "",
    role: "",
    about: "",
  });
  const [btn, setBtn] = useState("Create")
  const [index, setIndex] = useState(null)



  useEffect(() =>{
    localStorage.setItem("allProfile" , JSON.stringify(profile))
  }, [profile])
  
 
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  
  const handleDelete =(idx) =>{
    setProfile(profile.filter((p , i) => i != idx ))
  }
  


  const handleSubmit = (e) => {
    e.preventDefault();

    if(btn == "Update"){
      setProfile( profile.map((p , i) => i == index ? {...form} : p ))
      setBtn("Create")
      setIndex(null)
    }

    else{
      setProfile([
      ...profile,
      {
        username: form.username,
        role: form.role,
        about: form.about,
      },
    ])
    }

    setForm({
      username: '',
      role:'',
      about:''
    })
  };



  const handleEdit = (idx) =>{
    setForm({...form , ...[...profile][idx] })
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
        <Card
          profile={profile}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </div>
    </>
  );
};

export default App;

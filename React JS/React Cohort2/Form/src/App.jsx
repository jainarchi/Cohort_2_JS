import { useState } from "react";



const App = () => {
  const [username, setUsername] = useState('')
  const [role, setRole] = useState('')
  const [about, setAbout] = useState('')


// profile take space in RAM
  const [profile, setProfile] = useState([
    {
      username: "archi jain",
      role: "frontend developer",
      about: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      username: "Ayush jain",
      role: "Enteropunor",
      about:
        "Soluta consectetur qui quidem praesentium pariatur numquam atque. Qui assumenda reprehenderit neque incidunt quas aliquam culpa doloremque nulla sunt!",
    },
  ]);


  const handleSubmit = (e) =>{
    e.preventDefault()

    const newProfile = [...profile]

    newProfile.push({
      username,
      role,
      about
    })
    setProfile(newProfile)

    setProfile('')
    setAbout('')
    setRole('')


    // setProfile([...profile , {username , role , about}]);
  }

  return (
    <>

     <form onSubmit={handleSubmit}>

       <input 
       type="text"
       placeholder="Name"
       name="username" 
       value={username}
       onChange={(e) => setUsername(e.target.value)}
       />

       <input 
       type="text" 
       placeholder="Role"
       name="role" 
       value={role}
       onChange={(e) => setRole(e.target.value)}

        />

       <input 
       type="text" 
       placeholder="About"
       name="about"
       onChange={(e)=> setAbout(e.target.value)}
       />

       <button>Create</button>
     </form>


      {profile.map((profile) => {
        return (
          <div>
            <h3>{profile.username}</h3>
            <h3>{profile.role}</h3>
            <p>{profile.about}</p>
          </div>
        );
      })}
    </>
  );
};

export default App;

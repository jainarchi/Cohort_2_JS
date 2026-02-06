import React from 'react'

const Card = ({profile , handleDelete , handleEdit}) => {
  return (
    <>
        {profile.map((profile , idx) => {
        return (
          <div className="profile" key={idx}>
            <h3>{profile.username}</h3>
            <h3>{profile.role}</h3>
            <p>{profile.about}</p>

            <div>
              <button onClick={() => handleDelete(idx)}>Trash</button>
              <button onClick={() => handleEdit(idx)}>Edit</button>
            </div>
          </div>
        );
      })}
      
    </>
  )
}

export default Card

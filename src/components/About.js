import React from 'react'

function About({image= "src=https://via.placeholder.com/215", about}) {
  return (
    <aside>
      <img  alt= "blog logo" image={image}></img>
      <p>{about}</p>
    </aside>
  )
}

export default About;
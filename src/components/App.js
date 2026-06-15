import React, { useEffect, useState } from "react";
const apiURL = "https://dog.ceo/api/breeds/image/random"

function App() {
  const [image, setImage] = useState(null)

  useEffect(() => {
    fetch(apiURL)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setImage(data.message)
    })
  }, [])

  if(!image) return <p>Loading...</p>

  return (
    <img src={image} alt="A Random Dog"/>
  )
}

export default App
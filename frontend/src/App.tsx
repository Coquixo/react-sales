//import './index.css'

import { useState } from "react"

const App =() => {
  const [data, setData] = useState(null);

  const getRequest = () => {
    console.log("Button Clicked")
    fetch("http://localhost:8000/")
      .then((response) => response.json())
      .then((data) => setData(data));
  }

  return (
    <>
      <div className="bg-gray-100 p-8">
        <h1 className="text-3xl font-bold text-blue-600">Hello, Tailwind CSS with TypeScript!</h1>
        <p className="mt-4 text-gray-700">Tailwind CSS is awesome!</p>
      </div>
      <div className="bg-gray-200 p-8 mt-4" onClick={() => getRequest()}>
        Button
      </div>
      <div>
        {data && <p>{data}</p>}
      </div>
    </>
  )
}


export default App

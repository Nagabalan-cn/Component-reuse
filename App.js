import React, {useEffect,useState} from 'react'

function App() {
  const [name,setname]=useState('click any button') 
  const [count,setcount]=useState(0)
  const [calc,setcalc]=useState(0)
   
  

  useEffect(() =>{ 
    setcalc(() => (count * 2))
    console.log(calc)
   },[count,calc])


  return (
    <div>
      <button onClick={() => setname('bala')}>bala</button>
      <button onClick={() => setname('nandha')}>nandha</button>
      <button onClick={() => setname('react')}>react</button>
      <h1>{name}</h1>
      <br></br>
      <br></br>
      <p>{count}</p>
      <button onClick={() => setcount((e) => e + 1)}>count</button>
      <p>Calculation:{calc}</p>
    </div>
  )

}

export default App
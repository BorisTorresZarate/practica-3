import { useEffect, useState } from "react"
import { Input } from "./components/Inputs"
import { Buttons } from "./components/Buttons"
import { Wrapper } from "./components/Wrapper"
import './App.css'

function App() {

  const [bill, setBill] = useState(0)
  const [people, setPeople] = useState(1)
  const [percentage, setPercentage] = useState(0)
  const [totals, setTotals] = useState({ tip: 0, total: 0 })

  const ComprobarValores = (e) => {
    console.log(e.target.name)
    let name = e.target.name;
    let value = parseFloat(e.target.value);

    if (name === 'bill') {
      setBill(value)
    }

    if (name === 'people') {
      setPeople(value)
    }

    if (name === 'percentage') {
      setPercentage(value)
    }

  }

  useEffect(() => {
    if (people > 0 && percentage > 0 && bill > 0) {
      let tip = (bill * (percentage / 100)) / people
      let total = (bill * (percentage / 100) + bill) / people

      setTotals({ tip: tip, total: total });
    }
  }, [bill, people, percentage])

  return (
    <>
      <header><img src="./public/images/logo.svg" alt="" /></header>
      <div className="general-wrapper">
        <div className="data-wrapper">

          <h1>Bill</h1>
          <Input id={'input-bill'} name={'bill'} value={bill} onChange={ComprobarValores} />

          <h2>Select Tip %</h2>
          <Buttons percentage={percentage} setPercentage={ComprobarValores} />

          <h2>Number of People <span className="alert">Can't be Zero</span></h2>
          <Input id={'input-people'} name={'people'} value={people} onChange={ComprobarValores} />

        </div>
        <Wrapper totals={totals} />
      </div>
    </>
  )
}

export default App

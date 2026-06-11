import { useState } from "react"

const Button = ({ handleClick, text }) => {
    return (
        <button onClick={handleClick}>
            {text}
        </button>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState(0)

    const handleGood = () => {
        const updatedGood = good + 1
        setGood(updatedGood)
        setAll(updatedGood + neutral + bad)
    }

    const handleNeutral = () => {
        const updatedNeutral = neutral + 1
        setNeutral(updatedNeutral)
        setAll(updatedNeutral + good + bad)
    }

    const handleBad = () => {
        const updatedBad = bad + 1
        setBad(updatedBad)
        setAll(updatedBad + good + neutral)
    }

    return (
        <div>
            <h1>give feedback</h1>
            <Button handleClick={handleGood} text='good' />
            <Button handleClick={handleNeutral} text='neutral' />
            <Button handleClick={handleBad} text='bad' />
            <h1>Statistics</h1>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
            <p>all {all}</p>
        </div>
    )
}

export default App
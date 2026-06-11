import { useState } from "react"

const Button = ({ handleClick, text }) => {
    return (
        <button onClick={handleClick}>
            {text}
        </button>
    )
}

const StatisticLine = ({ text, value }) => {
    return (
        <div>
            {text === 'positive' ? <p>{text} {value} %</p> : <p>{text} {value}</p>}
        </div>
    )
}

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
    return (
        all === 0 ? <p>no feedback given</p> :
            <div>
                <h1>statistics</h1>
                <StatisticLine text='good' value={good} />
                <StatisticLine text='neutral' value={neutral} />
                <StatisticLine text='bad' value={bad} />
                <StatisticLine text='all' value={all} />
                <StatisticLine text='average' value={average} />
                <StatisticLine text='positive' value={positive} />
            </div>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const all = good + neutral + bad
    const average = all === 0 ? 0 : (good * 1 + neutral * 0 + bad * -1) / all
    const positive = all === 0 ? 0 : (good / all) * 100

    const handleGood = () => {
        setGood(good + 1)
    }

    const handleNeutral = () => {
        setNeutral(neutral + 1)
    }

    const handleBad = () => {
        setBad(bad + 1)
    }

    return (
        <div>
            <h1>give feedback</h1>
            <Button handleClick={handleGood} text='good' />
            <Button handleClick={handleNeutral} text='neutral' />
            <Button handleClick={handleBad} text='bad' />
            <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                all={all}
                average={average}
                positive={positive}
            />
        </div>
    )
}

export default App
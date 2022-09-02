import { useState } from 'react'

function Counter() {
    const [value, setValue] = useState(0)

    const addOne = () => {
        if (value < 10) {
            setValue(value + 1)
        }
    }

    const subtractOne = () => {
        if (value > 0) {
            setValue(value - 1)
        }
    }

    const reset = () => {
        setValue(0)
    }

    return (
        <div className="Counter">
            <div className='main-div'>
                <h1>Counter: {value}</h1>
                <button onClick={addOne}>Increase</button>
                <button onClick={subtractOne}>Decrease</button>
                <button onClick={reset}>Reset to 0</button>
            </div>
        </div>
    );
}

export default Counter;
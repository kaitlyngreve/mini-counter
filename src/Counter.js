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
            <p>Counter: {value}</p>
            <button onClick={addOne}>Increase</button>
            <button onClick={subtractOne}>Decrease</button>
            <button onClick={reset}>Reset to 0</button>
        </div>
    );
}

export default Counter;
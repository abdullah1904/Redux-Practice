import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { decrement, increment, incrementByAmount, incrementAsync } from "../state/counter/counterSlice";

export const CounterButtons = () => {
    const dispatch = useDispatch<AppDispatch>();
    return (
        <div>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(incrementByAmount(10))}>Increment by 10</button>
            <button onClick={() => dispatch(incrementAsync(10))}>Increment Async by 10</button>
        </div>
    )
}

export const CounterDisplay = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    return (
        <div>
            <p>{count}</p>
        </div>
    )
}
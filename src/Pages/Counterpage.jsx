import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/counterSlice";

export default function CounterPage() {
    const dispatch = useDispatch();
    const [formValue, setFormValue] = useState(0)
    const { number } = useSelector((state) => state.counter)
    return (
        <div className="container">
            <h1>Counter Page</h1>
            <h4>Current Counter number : {number}</h4>
            <input type="text"
                placeholder="enter any number"
                value={formValue}
                onChange={(e) => setFormValue(e.target.value)} />
            <hr />
            <button className="btn btn-danger" onClick={() => dispatch(increment(formValue))}>+</button>
            <button className="btn btn-primary" onClick={() => dispatch(decrement(formValue))}>-</button>

        </div>
    )
}
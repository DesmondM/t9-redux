import React, {useState} from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './features/counter';
import { divide, multiply } from './features/multiplesSlice';
import PostsList from './features/posts/PostsList';
import AddPostForm from './features/posts/AddPostForm';

function App() {
    // const [count, setCount] = useState(0);
    // const {count} = useSelector(state => state.counter);
    const count = useSelector(state=>state.counter.count)
    const multiples=useSelector(state=>state.multiples.multiples)
    const dispatch = useDispatch();
    const [number, setNumber] = useState();

  return (
    <>
    <div className="App">
        <h1>Count: {count}</h1>
        <button onClick={() => dispatch(increment())}>Increment ++</button>
        <button onClick={() => dispatch(decrement())}>Decrement --</button>
        <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
        <button onClick={() => dispatch(incrementByAmount(Number(number)))}> Increment by {number}  </button>
        
    </div>
    <div className="App">
        <h1>Count: {multiples}</h1>
        <button onClick={() => dispatch(multiply())}>Multiply * </button>
        <button onClick={() => dispatch(divide())}>Divide / </button>
        <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
        <button onClick={() => dispatch(incrementByAmount(Number(number)))}> Increment by {number}  </button>
        
    </div>
    <div><PostsList/></div>
    <div><AddPostForm/></div>
    </>
  );
}

export default App;

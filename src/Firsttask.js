import {useState} from 'react'
const Firsttask = () => {
    const [count, setCount] = useState(0);
  
    const increment = () => {
      setCount(count + 1);
    };
  
    return (
      <div>
        <p>Счетчик: {count}</p>
        <button onClick={increment}>Увеличить</button>
      </div>
    );
  };
  export default Firsttask
   
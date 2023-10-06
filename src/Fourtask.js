import {useState} from 'react'
const Fourtask = () => {
    const [color, setColor] = useState('green');

  const handleClick = () => {
    setColor(color === 'green' ? 'orange' : 'green');
  }

  const style = {
    color: color
  };

  return (
    <div>
      <button onClick={handleClick}>Сменить цвет</button>
      <p style={style}>Разный текст</p>
    </div>
  );}
  export default Fourtask
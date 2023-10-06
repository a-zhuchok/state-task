import {useState} from 'react'
const Secondtask = ()=>{
    const [showText, setShowText] = useState(false);
  
    const handleClick = () => {
        setShowText(!showText);
      }
  
    return (
      <div>
        <button onClick={handleClick}>Показать/скрыть текст</button>
      {showText && <p>Текст, который исчезает и появляется</p>}
      </div>
    );
}
export default Secondtask
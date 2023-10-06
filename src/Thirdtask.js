import {useState} from 'react'
const Thirdtask = () => {
    const [text, setText] = useState('');
  
    const handleChange = (event) => {
      setText(event.target.value);
    }
  
    return (
      <div>
        <label>
          Введи текст:
          <input type="text" value={text} onChange={handleChange} />
        </label>
        <p>{text}</p>
      </div>
    );
  }
export default Thirdtask
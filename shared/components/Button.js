import styles from './Button.module.scss'
import { useState, useRef, useEffect } from 'react';

const Button = ({ label, onClick, children }) => {
  const [color, setColor] = useState('red');
  const [size, setSize] = useState(20);
  const ref = useRef()
  const handleClick = () => {
    setColor(color === 'red' ? 'green' : 'red');
    setSize(size+=2);
  }
  
  return (
    <button 
      ref={ref} 
      className={styles.button} 
      onClick={handleClick} 
      style={{color, fontSize:size, borderWidth:size}}
    >
      {children}_{color}
    </button>
  )
}
export default Button;

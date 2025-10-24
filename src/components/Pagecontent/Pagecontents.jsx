import React, { useRef, useState } from 'react';
import './Pagecontents.css';
import M1 from '../../assets/images/bhairavam.jpg';
import M2 from '../../assets/images/hanuman.jpg';
import M3 from '../../assets/images/images.jpg';
import M4 from '../../assets/images/jailer.jpg';
import M5 from '../../assets/images/odela.jpg';
import M6 from '../../assets/images/coolie.jpg';
import M7 from '../../assets/images/kannappa.jpg';
import M8 from '../../assets/images/Mirai.jpg';

function Pagecontents() {
  const scrollRef = useRef(null);
  const [scrollDistance, setScrollDistance] = useState(300); 
  const images = [M1, M2, M3, M4, M5, M6, M7, M8];


  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -scrollDistance, behavior: 'smooth' });
  };


  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: scrollDistance, behavior: 'smooth' });
  };

  
  const increaseScroll = () => setScrollDistance(prev => prev + 50);
  const decreaseScroll = () => setScrollDistance(prev => Math.max(50, prev - 50));

  return (
    <div>
      <h2 id='now'>Trending Now</h2>
      <div className='card-container'>
        <button className='bt1' onClick={scrollLeft}> &lt; </button>

        <div className='card' ref={scrollRef}>
          {images.map((img, i) => (
            <div className='card1' key={i}>
              <img src={img} alt={`Trending movie ${i + 1}`} />
            </div>
          ))}
        </div>

        <button className='bt2' onClick={scrollRight}> &gt; </button>
      </div>


      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <button onClick={decreaseScroll}>−</button>
        <span style={{ margin: '0 10px', color: '#fff' }}>{scrollDistance}px</span>
        <button onClick={increaseScroll}>+</button>
      </div>
    </div>
  );
}

export default Pagecontents;

import { useState } from 'react';

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div className='h-screen w-screen transition delay-200' 
      style={{ backgroundColor: color }}>
        <div className='flex items-center justify-center h-full'>

          <div className='bg-white flex h-12 items-center justify-around fixed bottom-10 w-3/4 rounded-xl shadow-sm overflow-hidden'>

            <button className='bg-red-600 h-10 rounded-full w-16 text-white transition-transform duration-150 transform active:scale-95 active:shadow-lg'
             onClick={() => setColor('red')}>Red</button>
            <button className='bg-green-600 h-10 rounded-full w-16 text-white transition-transform duration-150 transform active:scale-95 active:shadow-lg'
             onClick={() => setColor('green')}>Green</button>
            <button className='bg-yellow-600 h-10 rounded-full w-16 text-white transition-transform duration-150 transform active:scale-95 active:shadow-lg' 
            onClick={() => setColor('yellow')}>Yellow</button>
            <button className='bg-white text-black h-10 rounded-full w-16 transition-transform duration-150 transform active:scale-95 active:shadow-lg' 
            onClick={() => setColor('white')}>White</button>
            <button className='bg-[olive] text-white h-10 rounded-full w-16 transition-transform duration-150 transform active:scale-95 active:shadow-lg' 
            onClick={() => setColor('olive')}>Olive</button>
            <button className='bg-blue-600 h-10 rounded-full w-16 text-white transition-transform duration-150 transform active:scale-95 active:shadow-lg'
             onClick={() => setColor('blue')}>Blue</button>
            <button className='bg-purple-600 h-10 rounded-full w-16 text-white transition-transform duration-150 transform active:scale-95 active:shadow-lg' 
            onClick={() => setColor('purple')}>Purple</button>
            <button className='bg-pink-600 h-10 rounded-full w-16 text-white transition-transform duration-150 transform active:scale-95 active:shadow-lg' 
            onClick={() => setColor('pink')}>Pink</button>
            <button className='bg-orange-600 h-10 rounded-full w-16 text-white transition-transform duration-150 transform active:scale-95 active:shadow-lg' 
            onClick={() => setColor('orange')}>Orange</button>
            <button className='bg-teal-600 h-10 rounded-full w-16 text-white transition-transform duration-150 transform active:scale-95 active:shadow-lg' 
            onClick={() => setColor('teal')}>Teal</button>
            <button className='bg-gray-600 h-10 rounded-full w-16 text-white transition-transform duration-150 transform active:scale-95 active:shadow-lg' 
            onClick={() => setColor('gray')}>Gray</button>
            <button className='bg-black h-10 rounded-full w-16 text-white transition-transform duration-150 transform active:scale-95 active:shadow-lg' 
            onClick={() => setColor('black')}>Black</button>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

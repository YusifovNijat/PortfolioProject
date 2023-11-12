import React from 'react';

import './home.css';

import TypeWriterEffect from 'react-typewriter-effect';

const Home = () => {
  return (
    <div className='home'>

            

             <TypeWriterEffect
                textStyle={{
                  color: '#ebebe3',
                  fontSize: '42px'
                  }}
                startDelay={1000}
                 multiText={[
                  'NIJAT YUSIFOV',
                  'FRONT-END DEVELOPER',
                  'BACK-END DEVELOPER'
                  ]}
                multiTextDelay={2000}
                typeSpeed={100}
                multiTextLoop
                hideCursorAfterText
             />
          
                <img src={require('../../images/me.jpeg')} alt="myself" className='my-picture' />

    </div>
  )
}

export default Home;
import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <ReactTypingEffect
          text={["Web Developments", "Software Engineering", "Data Analytics"]}
          cursorRenderer={cursor => <h1>{cursor}</h1>}
          displayTextRenderer={(text, i) => {
            return (
              <h1 style={{color: '#fff'}}>
                {text}
              </h1>
            );
          }}
          speed={400}
          eraseSpeed={200}
          eraseDelay={1000}
          typingDelay={500}   
        />
      </div>
    </div>
  )
}

export default Header;

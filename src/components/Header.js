import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1>Portfolio</h1>
        <ReactTypingEffect
          className="typed-text"
          text={["Web Developments", "Full-Stack Projects", "Software Engineering", "Data Analytics"]}
          cursorRenderer={(cursor) => {
            return(<h1 className="typed-cursor" >{cursor}</h1>);
            }
          }
          displayTextRenderer={(text, i) => {
            return (
              <h1 className="typed-text" style={{ color: '#fff'}}>
                {text}
              </h1>
            );
          }}
          speed={150}
          eraseSpeed={150}
          eraseDelay={1500}
          typingDelay={500}   
        />
      </div>
    </div>
  )
}

export default Header;

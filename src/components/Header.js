import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1 className="neon-flicker-text">Portfolio</h1>
        <ReactTypingEffect
          className="typed-text"
          text={["Web Developments", "Full-Stack Projects", "Software Engineering", "Data Analytics"]}
          cursorRenderer={(cursor) => {
            return(<h2 className="typed-cursor" >{cursor}</h2>);
            }
          }
          displayTextRenderer={(text, i) => {
            return (
              <h2 className="typed-text glow-text" style={{ color: '#fff'}}>
                {text}
              </h2>
            );
          }}
          speed={150}
          eraseSpeed={150}
          eraseDelay={1500}
          typingDelay={500}   
        />
        <a href="#" className="btn-main-offer">contact me</a>
      </div>
    </div>
  )
}

export default Header;

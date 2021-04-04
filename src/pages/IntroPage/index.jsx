import React, { Component } from 'react';
import { GrabZone } from './Grabber';
import './index.css';

/**
 * React Components
 */

class IntroPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      debug: false,
      cursorGrabbed: false,
      gameOver: false,
    };
    this.handleToggleDebug = this.handleToggleDebug.bind(this);
    this.handleButtonClicked = this.handleButtonClicked.bind(this);
    this.handleCursorGrabbed = this.handleCursorGrabbed.bind(this);
  }

  handleToggleDebug() {
    this.setState({
      debug: !this.state.debug,
    });
  }

  handleCursorGrabbed() {
    this.setState({
      cursorGrabbed: true,
    });
    setTimeout(() => {
      this.setState({
        cursorGrabbed: false,
      });
    }, 2000);
  }

  handleButtonClicked() {
    this.setState({
      gameOver: true,
    });
    setTimeout(() => {
      this.setState({
        gameOver: false,
      });
    }, 4000);
  }

  render() {
    const { cursorGrabbed, gameOver, debug } = this.state;
    const screenStyle = cursorGrabbed ? { cursor: 'none' } : {};
    const appClass = debug ? 'intro-page intro-page--debug' : 'intro-page';

    return (
      <div className={appClass} style={screenStyle}>
        <section className='container'>
          <h1>Hello!</h1>
          <h2>Welcome to the history page.</h2>
          <p>This is a classic website, no traps or weird stuff!</p>
          <p>
            Feel free to browse, relax and, I don't know, click the button down
            there? Might as well, right?
          </p>

          <button className='debug-button' onClick={this.handleToggleDebug}>
            Debug
          </button>
        </section>

        <button className='trap-button' onClick={this.handleButtonClicked}>
          {gameOver && 'Nice one'}
          {cursorGrabbed && 'Gotcha!'}
          {!gameOver && !cursorGrabbed && 'Button!'}
        </button>

        <div className='grab-zone-wrapper'>
          <GrabZone
            onCursorGrabbed={this.handleCursorGrabbed}
            cursorGrabbed={cursorGrabbed}
            gameOver={gameOver}
          />
        </div>
      </div>
    );
  }
}

export default IntroPage;

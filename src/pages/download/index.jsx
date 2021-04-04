import React from 'react';
import { EXPLAINS, USEFUL_LINKS } from '@/constants';
import chromeLogo from '@/assets/chrome-logo.svg';
import chromiumLogo from '@/assets/chromium-logo.svg';

import './index.css';
import ContentList from './ContentList';

function DownloadPage(props) {
  const { setPage } = props;
  const explains = EXPLAINS.map((item, index) => {
    const { detail, steps = [], title } = item;

    const stepLis = steps.map((s, i) => {
      const { href, text } = s;
      const raw = href ? (
        <a target='_blank' href={href}>
          {text}
        </a>
      ) : (
        <span>{text}</span>
      );
      return <li key={`step_${index}_${i}`}>{raw}</li>;
    });

    return (
      <li key={index}>
        {title}
        <span className='detail'>{detail}</span>
        <ol> {stepLis}</ol>
      </li>
    );
  });

  const onGoTopClick = () => {
    window.document.body.scrollTop = 0;
    window.document.documentElement.scrollTop = 0;
  };
  return (
    <div style={{ marginLeft: 20 }}>
      <div className='header'>
        <div style={{ marginLeft: 15 }}>
          <a target='_blank' href='https://www.google.com/chrome/'>
            <img src={chromeLogo} className='logo-img' />
          </a>
          <span onClick={() => setPage('eggs')} style={{ cursor: 'pointer' }}>
            ‿
          </span>
          <a target='_blank' href='https://www.chromium.org/'>
            <img src={chromiumLogo} className='logo-img chromium-logo' />
          </a>
        </div>
        <h1>Chromium History Versions Download ↓</h1>
        <h3>说明：</h3>
        <ul className='explains'>{explains}</ul>
      </div>
      <div className='content'>
        <h3>版本:</h3>
        <ContentList />
      </div>
      <div className='footer'>
        <h3>一些有用的链接:</h3>
        <ul>
          {USEFUL_LINKS.map((item) => {
            const { name, href } = item;
            return (
              <li key={name}>
                <a target='_blank' href={href}>
                  {name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <button onClick={onGoTopClick} className='go-top' title='Go to top'>
        ↑ Top
      </button>
    </div>
  );
}

export default DownloadPage;

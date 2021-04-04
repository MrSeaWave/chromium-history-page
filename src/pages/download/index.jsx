import React from 'react';
import { EXPLAINS, USEFUL_LINKS } from '@/constants';
import './index.css';

function DownloadPage() {
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
    <div>
      <h1>Chromium History Versions Download ↓</h1>
      <h3>说明：</h3>
      <ul className='explains'>{explains}</ul>
      <div className='content'>
        <h3>版本:</h3>
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

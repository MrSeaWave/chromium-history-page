import React from 'react';
import DownloadPage from './download';
import IntroPage from './IntroPage';

const { useState } = React;

function Home() {
  const [page, setPage] = useState('download');

  let view = <DownloadPage setPage={setPage} />;
  if (page !== 'download') view = <IntroPage setPage={setPage} />;

  return <div>{view}</div>;
}

export default Home;

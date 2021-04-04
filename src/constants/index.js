const grabberBodyPrefixPath =
  'https://cdn.jsdelivr.net/gh/MrSeaWave/figure-bed-profile@main/uPic/2021/grabber_';

export const GRABBER_BODY = {
  head: `${grabberBodyPrefixPath}head.svg`,
  waiting: `${grabberBodyPrefixPath}hand.svg`,
  stalking: `${grabberBodyPrefixPath}hand-waiting.svg`,
  grabbing: `${grabberBodyPrefixPath}hand.svg`,
  grabbed: `${grabberBodyPrefixPath}hand-with-cursor.svg`,
  shaka: `${grabberBodyPrefixPath}hand-surfs-up.svg`,
};

export const OS_LIST = [
  { val: 'Mac', file: 'chrome-mac.zip' },
  { val: 'Win_x64', file: 'chrome-win.zip' },
  { val: 'Win', file: 'chrome-win32.zip' },
  { val: 'Linux_x64', file: 'chrome-linux.zip' },
  { val: 'Linux', file: 'chrome-linux.zip' },
  { val: 'Android', file: 'chrome-android.zip' },
];

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

export const EXPLAINS = [
  {
    title: '可执行文件，像：',
    detail:
      'chrome-mac.zip, chrome-win.zip, chrome-win32.zip, chrome-linux.zip, chrome-android.zip ...',
  },
  {
    title: '如何获取 version 与 position 的映射关系',
    steps: [
      {
        text: '寻找所有的版本 version',
        href: 'https://chromium.googlesource.com/chromium/src/+refs',
      },
      {
        text:
          '通过 version 获取 position (类似的api https://omahaproxy.appspot.com/)',
        href: 'https://omahaproxy.appspot.com/deps.json?version=86.0.4240.63',
      },
      {
        text:
          '对 position 按照 os（例如 Mac ）进行分类, 并找出对应的数据是否存在',
        href:
          'https://commondatastorage.googleapis.com/chromium-browser-snapshots/index.html?prefix=Mac/',
      },
      {
        text: '忽略一些错误数据',
      },
      {
        text: '生成最终的数据，并且在这个页面展示',
      },
    ],
  },
  {
    title: '资源',
    steps: [
      {
        text: '原始JSON数据',
        href: 'https://github.com/MrSeaWave/chromium-history-dataSource',
      },
      {
        text: '当前页面代码',
        href: 'https://github.com/MrSeaWave/chromium-history-page',
      },
      {
        text: '爬虫',
        href: 'https://github.com/MrSeaWave/chromium-history-crawler',
      },
      {
        text: '爬虫Actions',
        href: 'https://github.com/MrSeaWave/chromium-history-crawler/actions',
      },
    ],
  },
];

export const USEFUL_LINKS = [
  {
    name: 'Official Version List',
    href: 'https://chromium.googlesource.com/chromium/src/+refs',
  },
  {
    name: 'Official Look Up Page (omahaproxy)',
    href: 'https://omahaproxy.appspot.com/',
  },
  {
    name: 'Official Download Page',
    href:
      'https://commondatastorage.googleapis.com/chromium-browser-snapshots/index.html',
  },
];

import { getVerPosOsJson } from '@/apis';
import React from 'react';
import Select from 'react-select';
import debounce from 'lodash.debounce';
import Fuse from 'fuse.js';
import { DOWNLOAD_URL_BASE, OS_LIST } from '@/constants';

const { useEffect, useState, useCallback } = React;

function ContentList() {
  const [verPosList, setVerPosList] = useState([]);
  const [fetchStatus, setFetchStatus] = useState('done');
  const [selectedOption, setSelectedOption] = useState({
    value: 'Mac',
    label: 'Mac',
  });
  const [searchVal, setSearchVal] = useState('');
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    console.log('fetch data', selectedOption);
    setFetchStatus('fetching');
    getVerPosOsJson(selectedOption.value).then((resp) => {
      const val = Object.entries(resp.data).map(([v, p]) => {
        const os = selectedOption.value;
        return {
          ver: v,
          pos: p,
          href: `${DOWNLOAD_URL_BASE}${os}/${p}/`,
        };
      });
      setVerPosList(val);
      setDataList(val);
      setFetchStatus('done');
    });
  }, [selectedOption]);
  const options = OS_LIST.map((item) => ({
    value: item.val,
    label: item.val,
  }));

  // react hook 使用防抖的方式 https://zhuanlan.zhihu.com/p/88799841
  // react class 使用防抖的的方式 https://billqiu.github.io/2017/10/15/how-to-debounce-in-react/
  const sendQuery = (keyword) => {
    console.log(`keyword for ${keyword}`, verPosList.length);

    const searchFuse = new Fuse(verPosList, {
      distance: 1000,
      keys: ['ver', 'pos'],
    });
    const result = searchFuse.search(keyword);
    setDataList(result);
  };

  const delayedQuery = useCallback(
    debounce((q) => sendQuery(q), 500),
    [fetchStatus]
  );
  const onChange = (e) => {
    // 设定搜索数据
    setSearchVal(e.target.value);
    // 防抖：取出相应的数据
    delayedQuery(e.target.value);
  };

  console.log('RENDER', fetchStatus);
  console.log('OS_LIST', selectedOption, OS_LIST);
  const fileName = OS_LIST.find((item) => item.val === selectedOption.value)
    .file;
  return (
    <div>
      <Select
        className='select-class'
        value={selectedOption}
        onChange={(selectedOption) => {
          setSearchVal('');
          setSelectedOption(selectedOption);
        }}
        options={options}
      />
      <input
        value={searchVal}
        type='search'
        placeholder='Search Version or Position'
        style={{ marginTop: 20 }}
        onChange={onChange}
      />
      <div class='ver-pos-tips'>
        version (chromium_base_position): {fileName}
      </div>
    </div>
  );
}

export default ContentList;

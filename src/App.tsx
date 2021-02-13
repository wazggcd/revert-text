import React from 'react';
import './App.css';
import {copyToClipboard} from './utils/hepler';
import {createMessage} from './components/Message';
import Egg from './components/Egg'
import Light from './components/Light';

const cpScsText = '✅ 复制成功~'
const cpScsEmpty = '❗️输入框为空，啥也没复制哦~'

const App = () => {
  const [ v, setV ] = React.useState<string>('')
  const revertV = v.split('').reverse().join('')
  const onInputChange = React.useCallback((e) => {
    setV(e.target.value)
  }, [])
  // 复制
  const copy = React.useCallback(() => {
    if (!revertV) return createMessage()(cpScsEmpty)
    copyToClipboard(revertV)
    createMessage()(cpScsText)
  }, [revertV])
  const onEnter = React.useCallback((e: any) => {
    if (e.code !== 'Enter') return
    copy()
  }, [revertV, copy])

  return (
    <div className="App">
      <h1 className="header">反转文字</h1>
      <div className="input">
        <input
          autoFocus
          placeholder="随便输入点什么..."
          value={v}
          onChange={onInputChange}
          onKeyDown={onEnter}
        />
      </div>
      <button className="btn" onClick={copy}>点 我 复 制</button>
      <p id="revertShow">{revertV}</p>
      <Egg text={v}/>
    </div>
  );
}
export default App

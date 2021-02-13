/**
 *
 * Egg
 *
 * @author Songsz
 * @date 2021-02-14
 *
 */

import * as React from 'react';
import './index.scss'

interface IEggProps {
  text: string
  right?: boolean
  paddingBorder?: number
  style?: React.CSSProperties
  lightSwing?: number
  suiSwing?: number
}

const Light: React.FC<IEggProps> = props => {
  const {text, right, style, paddingBorder = 20, lightSwing = 3, suiSwing = 4} = props;
  const _style = {
    top: 0,
    [right ? 'right' : 'left']: paddingBorder,
    ...style,
  }
  return <>
    <div style={_style} className="deng-box">
      <div
        className="deng"
        style={{
          animation: `swing ${lightSwing}s infinite ease-in-out`,
        }}
      >
        <div className="xian"/>
        <div className="deng-a">
          <div className="deng-b">
            <div className="deng-t">{text || '春'}</div>
          </div>
        </div>
        <div
          className="sui-a"
          style={{
            animation: `swing ${suiSwing}s infinite ease-in-out`,
          }}
        >
          <div className="sui-c"/>
          <div className="sui-b"/>
        </div>
      </div>
    </div>
  </>
};

export default Light

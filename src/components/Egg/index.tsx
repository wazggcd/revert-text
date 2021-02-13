/**
 *
 * Egg
 *
 * @author Songsz
 * @date 2021-02-14
 *
 */

import * as React from 'react';
import { fireworks } from '../../utils/fireworks';
import { encode, decode } from '../../utils/hepler';
import Light from '../Light';

const preStr = 'JUU'
const strList = ['4JUIwJUEy', '0JUI4JUI5', '1JThEJTg5']

const getFullStr: (array: number[]) => string = (array = []) => array.reduce((pre, cur) => `${pre}${preStr}${strList[cur]}`, '')
const str1 = getFullStr([1])
const str2 = getFullStr([2])
const str012 = getFullStr([0,1,2])
const str12 = getFullStr([1,2])

interface IEggProps {
  text: string
}

const Egg: React.FC<IEggProps> = props => {
  const {text} = props;
  const [lightText1, setLightText1] = React.useState<string>('春')
  const [lightText2, setLightText2] = React.useState<string>('节')

  React.useEffect(() => {
    const encodeStr = encode(text)
    // 加载烟花
    if (encodeStr === str012) {
      fireworks()
    }
    // 更改灯笼文字
    if (encodeStr === str1) {
      setLightText1(decode(str1))
    }
    if (encodeStr === str12) {
      setLightText1(decode(str1))
      setLightText2(decode(str2))
    }
  }, [text, setLightText1, setLightText2])
  return <>
    <Light
      text={lightText1}
      style={{
        zIndex: 1000,
        top: -15,
      }}
      suiSwing={4.2}
      paddingBorder={-10}
      />
    <Light
      text={lightText2}
      right
      paddingBorder={-10}
      lightSwing={4.5}
      suiSwing={3}
    />
    {/*<Light
      text="快"
      right
      paddingBorder={35}
      style={{
        top: -20,
      }}
      lightSwing={4}
      suiSwing={3.5}
    />
    <Light text="乐" right paddingBorder={-35} lightSwing={3.4} suiSwing={4.2}/>*/}
  </>
};

export default Egg;

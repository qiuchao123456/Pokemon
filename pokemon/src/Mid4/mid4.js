import React from 'react';
import Img from './tujian.jpg';

var Mid4Css =require('./mid4.css');
export default class Mid4 extends React.Component{
    render(){
        return(
            <div className={Mid4Css.div1}>
                <div>
                    <div className={Mid4Css.div2}>
                        <h1>精灵图鉴</h1>
                    </div>
                    <div><p className={Mid4Css.p1}>《宝可梦图鉴》是相关游戏、动画、漫画等相关产品中的重要道具之一，在动画、电玩等之中有不同的型态，又因电玩中各<br/>版本不同而亦不同。主要功能是检查神奇宝贝资料、状态，了解掌握的技能等。</p></div>
                </div>
                <div className={Mid4Css.div3}>
                    <a href="http://wiki.52poke.com/wiki/%E5%AE%9D%E5%8F%AF%E6%A2%A6%E5%88%97%E8%A1%A8%EF%BC%88%E6%8C%89%E5%85%A8%E5%9B%BD%E5%9B%BE%E9%89%B4%E7%BC%96%E5%8F%B7%EF%BC%89"><img src={Img}/></a>
                    <a href="http://wiki.52poke.com/wiki/%E5%AE%9D%E5%8F%AF%E6%A2%A6%E5%88%97%E8%A1%A8%EF%BC%88%E6%8C%89%E5%85%A8%E5%9B%BD%E5%9B%BE%E9%89%B4%E7%BC%96%E5%8F%B7%EF%BC%89"><img src={Img}/></a>
                </div>
                <div className={Mid4Css.div4}><a href="http://wiki.52poke.com/wiki/%E5%AE%9D%E5%8F%AF%E6%A2%A6%E5%88%97%E8%A1%A8%EF%BC%88%E6%8C%89%E5%85%A8%E5%9B%BD%E5%9B%BE%E9%89%B4%E7%BC%96%E5%8F%B7%EF%BC%89"><span>详情>></span></a></div>
            </div>
        )
    }
}
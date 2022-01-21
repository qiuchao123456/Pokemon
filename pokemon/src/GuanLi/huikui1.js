import React from 'react';
import Header1 from './Header1/header1';
import Img1 from './1.png';
import Img2 from './3.png';
import Img3 from './5.png';
import Img4 from './6.png';
import {Link} from 'react-router-dom';

var HuiKui1Css=require('./huikui1.css');
export default class HuiKui1 extends React.Component{
    render(){
        return(
            <div>
                <Header1/>
                <div className={HuiKui1Css.div1}>
                    <div className={HuiKui1Css.div2}>
                        游客回馈
                    </div>
                    <div className={HuiKui1.clearfix}></div>
                    <div className={HuiKui1Css.div4}>
                        <div>
                            <img src={Img1}/>
                        </div>
                        <div className={HuiKui1Css.div3}>
                            游客1：
                        </div>
                    </div>
                    <div className={HuiKui1Css.div6}>
                        <div className={HuiKui1Css.div5}>
                            姓名：张三
                        </div>
                        <div className={HuiKui1Css.div5}>
                            电话：130760432XX
                        </div>
                        <div className={HuiKui1Css.div5}>
                            留言：日头不眨眼，火热在人间。褪去厚衣衫，林荫寻悠闲。清心又寡欲，坐看风云变。烦扰多少事，轻轻付笑谈。以禅养心术，处之皆安然。盛夏时分，愿君惬意！
                        </div>
                    </div>
                    <div className={HuiKui1Css.clearfix}></div>
                    <div className={HuiKui1Css.xian}></div>
                    <div className={HuiKui1Css.div4}>
                        <div>
                            <img src={Img2}/>
                        </div>
                        <div className={HuiKui1Css.div3}>
                            游客2：
                        </div>
                    </div>
                    <div className={HuiKui1Css.div6}>
                        <div className={HuiKui1Css.div5}>
                            姓名：李四
                        </div>
                        <div className={HuiKui1Css.div5}>
                            电话：187808736XX
                        </div>
                        <div className={HuiKui1Css.div5}>
                            留言：时光的记忆曲线，将美好串联；人生的情感轨迹，将幸福标注；生活的点点滴滴，将快乐洋溢；生命的友情之花，将情谊芬芳。朋友，惟愿你天天开心，永享幸福！
                        </div>
                    </div>
                    <div className={HuiKui1Css.clearfix}></div>
                    <div className={HuiKui1Css.xian}></div>
                    <div className={HuiKui1Css.div4}>
                        <div>
                            <img src={Img3}/>
                        </div>
                        <div className={HuiKui1Css.div3}>
                            游客3：
                        </div>
                    </div>
                    <div className={HuiKui1Css.div6}>
                        <div className={HuiKui1Css.div5}>
                            姓名：王五
                        </div>
                        <div className={HuiKui1Css.div5}>
                            电话：130760432XX
                        </div>
                        <div className={HuiKui1Css.div5}>
                            留言：阳光洒在心中，惊醒一帘幽梦；问候如沐清风，蓝了朗朗晴空；泛起甜甜笑容，心事一切随风。愿你开启快乐一天。
                        </div>
                    </div>
                    <div className={HuiKui1Css.clearfix}></div>
                    <div className={HuiKui1Css.xian}></div>
                    <div className={HuiKui1Css.div4}>
                        <div>
                            <img src={Img4}/>
                        </div>
                        <div className={HuiKui1Css.div3}>
                            游客4：
                        </div>
                    </div>
                    <div className={HuiKui1Css.div6}>
                        <div className={HuiKui1Css.div5}>
                            姓名：李四
                        </div>
                        <div className={HuiKui1Css.div5}>
                            电话：187808736XX
                        </div>
                        <div className={HuiKui1Css.div5}>
                            留言：什么时候出下一季啊，我好期待啊！
                        </div>
                    </div>
                    <div className={HuiKui1Css.clearfix}></div>
                    <div className={HuiKui1Css.div7}>
                        <Link to="/huikui2"><input type="submit" value="下一页" className={HuiKui1Css.anniu}></input></Link>
                    </div>
                </div>
            </div>
        )
    }
}
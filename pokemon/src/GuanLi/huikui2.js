import React from 'react';
import Header1 from './Header1/header1';
import Img1 from './7.png';
import Img2 from './9.png';
import Img3 from './11.png';
import Img4 from './12.png';
import {Link} from 'react-router-dom';

var HuiKui2Css=require('./huikui2.css');
export default class HuiKui2 extends React.Component{
    render(){
        return(
            <div>
                <Header1/>
                <div className={HuiKui2Css.div1}>
                    <div className={HuiKui2Css.div2}>
                        游客回馈
                    </div>
                    <div className={HuiKui2.clearfix}></div>
                    <div className={HuiKui2Css.div4}>
                        <div>
                            <img src={Img1}/>
                        </div>
                        <div className={HuiKui2Css.div3}>
                            游客5：
                        </div>
                    </div>
                    <div className={HuiKui2Css.div6}>
                        <div className={HuiKui2Css.div5}>
                            姓名：张三
                        </div>
                        <div className={HuiKui2Css.div5}>
                            电话：130760432XX
                        </div>
                        <div className={HuiKui2Css.div5}>
                            留言：天热了，我托清风，为你殷勤打扇；闲暇时，我用问候，与你绵绵攀谈；烦躁了，我洒细雨，为你洗去尘世如烟。时值酷暑，愿你心情惬意，更胜从前。
                        </div>
                    </div>
                    <div className={HuiKui2Css.clearfix}></div>
                    <div className={HuiKui2Css.xian}></div>
                    <div className={HuiKui2Css.div4}>
                        <div>
                            <img src={Img2}/>
                        </div>
                        <div className={HuiKui2Css.div3}>
                            游客6：
                        </div>
                    </div>
                    <div className={HuiKui2Css.div6}>
                        <div className={HuiKui2Css.div5}>
                            姓名：李四
                        </div>
                        <div className={HuiKui2Css.div5}>
                            电话：187808736XX
                        </div>
                        <div className={HuiKui2Css.div5}>
                            留言：时光的记忆曲线，将美好串联；人生的情感轨迹，将幸福标注；生活的点点滴滴，将快乐洋溢；生命的友情之花，将情谊芬芳。朋友，惟愿你天天开心，永享幸福！
                        </div>
                    </div>
                    <div className={HuiKui2Css.clearfix}></div>
                    <div className={HuiKui2Css.xian}></div>
                    <div className={HuiKui2Css.div4}>
                        <div>
                            <img src={Img3}/>
                        </div>
                        <div className={HuiKui2Css.div3}>
                            游客7：
                        </div>
                    </div>
                    <div className={HuiKui2Css.div6}>
                        <div className={HuiKui2Css.div5}>
                            姓名：王五
                        </div>
                        <div className={HuiKui2Css.div5}>
                            电话：130760432XX
                        </div>
                        <div className={HuiKui2Css.div5}>
                            留言：阳光洒在心中，惊醒一帘幽梦；问候如沐清风，蓝了朗朗晴空；泛起甜甜笑容，心事一切随风。愿你开启快乐一天。
                        </div>
                    </div>
                    <div className={HuiKui2Css.clearfix}></div>
                    <div className={HuiKui2Css.xian}></div>
                    <div className={HuiKui2Css.div4}>
                        <div>
                            <img src={Img4}/>
                        </div>
                        <div className={HuiKui2Css.div3}>
                            游客8：
                        </div>
                    </div>
                    <div className={HuiKui2Css.div6}>
                        <div className={HuiKui2Css.div5}>
                            姓名：李四
                        </div>
                        <div className={HuiKui2Css.div5}>
                            电话：187808736XX
                        </div>
                        <div className={HuiKui2Css.div5}>
                            留言：我的朋友，无论你身处何方，都祝愿你天天开心，幸福无限，常联系！
                        </div>
                    </div>
                    <div className={HuiKui2Css.clearfix}></div>
                    <div className={HuiKui2Css.div8}>
                        <Link to="/huikui1"><input type="submit" value="上一页" className={HuiKui2Css.anniu}></input></Link>
                    </div>
                    <div className={HuiKui2Css.div9}>
                        <input type="submit" value="下一页" className={HuiKui2Css.anniu}></input>
                    </div>
                </div>
            </div>
        )
    }
}
import React from 'react';
import Header1 from './Header1/header1';
import Img4 from './4.jpg';
import Img5 from './5.png';
import Img6 from './6.png';
import {Link} from 'react-router-dom';

var PingLun2Css=require('./pinglun2.css');
export default class PingLun2 extends React.Component{
    render(){
        return(
            <div>
                <Header1/>
                <div className={PingLun2Css.div1}>
                    <div className={PingLun2Css.tou}>
                        <div>
                            <img src={Img5}/>
                        </div>
                        <div className={PingLun2Css.div2}>
                            游客789：
                        </div>
                    </div>
                    <div className={PingLun2Css.div3}>
                        <div>
                        第一次画快龙，怕即荔枝，梦幻，皮卡丘， 请见谅
                        </div>
                        <div>
                            <img src={Img4}/>
                        </div>
                    </div>
                    <div  className={PingLun2Css.div4}>
                        <div className={PingLun2Css.anniu}>
                            <Link to="/xiugai"><input type="submit" value="置顶" className={PingLun2Css.anniu1} ></input></Link>
                        </div>
                        <div className={PingLun2Css.anniu}>
                            <Link to="/xiugai"><input type="submit" value="删除" className={PingLun2Css.anniu1} ></input></Link>
                        </div>
                    </div>
                    <div className={PingLun2Css.clearfix}></div>
                    <div className={PingLun2Css.xian}></div>
                    <div className={PingLun2Css.tou}>
                        <div>
                            <img src={Img6}/>
                        </div>
                        <div className={PingLun2Css.div2}>
                            游客147：
                        </div>
                    </div>
                    <div className={PingLun2Css.div3}>
                        <div>
                            [艾莉丝那集有快龙的]求看过的告诉我。。。
                        </div>
                    </div>
                    <div  className={PingLun2Css.div5}>
                        <div className={PingLun2Css.anniu}>
                            <Link to="/xiugai"><input type="submit" value="置顶" className={PingLun2Css.anniu1} ></input></Link>
                        </div>
                        <div className={PingLun2Css.anniu}>
                            <Link to="/xiugai"><input type="submit" value="删除" className={PingLun2Css.anniu1} ></input></Link>
                        </div>
                    </div>
                    <div className={PingLun2Css.clearfix}></div>
                    <div className={PingLun2Css.div6}>
                        <Link to="/pinglun1"><input type="submit" value="上一页" className={PingLun2Css.anniu2}></input></Link>
                    </div>
                    <div className={PingLun2Css.div7}>
                        <input type="submit" value="下一页" className={PingLun2Css.anniu2}></input>
                    </div>
                </div>
            </div>
        )
    }
}
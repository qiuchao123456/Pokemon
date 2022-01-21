import React from 'react';
import Header1 from './Header1/header1';
import Img1 from './1.png';
import Img2 from './2.jpg';
import Img3 from './3.png';
import {Link} from 'react-router-dom';

var PingLun1Css=require('./pinglun1.css');
export default class PingLun1 extends React.Component{
    render(){
        return(
            <div>
                <Header1/>
                <div className={PingLun1Css.div1}>
                    <div className={PingLun1Css.tou}>
                        <div>
                            <img src={Img1}/>
                        </div>
                        <div className={PingLun1Css.div2}>
                            游客123：
                        </div>
                    </div>
                    <div className={PingLun1Css.div3}>
                        <div>
                            美洛耶塔变身 好看只要点一个赞 集齐一百个赞 我再发几个伊布进化的图片。
                        </div>
                        <div>
                            <img src={Img2}/>
                        </div>
                        
                    </div>
                    <div  className={PingLun1Css.div4}>
                        <div className={PingLun1Css.anniu}>
                            <Link to="/xiugai"><input type="submit" value="置顶" className={PingLun1Css.anniu1} ></input></Link>
                        </div>
                        <div className={PingLun1Css.anniu}>
                            <Link to="/xiugai"><input type="submit" value="删除" className={PingLun1Css.anniu1} ></input></Link>
                        </div>
                    </div>
                    <div className={PingLun1Css.clearfix}></div>
                    <div className={PingLun1Css.xian}></div>
                    <div className={PingLun1Css.tou}>
                        <div>
                            <img src={Img3}/>
                        </div>
                        <div className={PingLun1Css.div2}>
                            游客456：
                        </div>
                    </div>
                    <div className={PingLun1Css.div3}>
                        <div>
                        谁能告诉我小智收服精灵和精灵进化是在什么时候?
                        </div>
                    </div>
                    <div  className={PingLun1Css.div5}>
                        <div className={PingLun1Css.anniu}>
                            <Link to="/xiugai"><input type="submit" value="置顶" className={PingLun1Css.anniu1} ></input></Link>
                        </div>
                        <div className={PingLun1Css.anniu}>
                            <Link to="/xiugai"><input type="submit" value="删除" className={PingLun1Css.anniu1} ></input></Link>
                        </div>
                    </div>
                    <div className={PingLun1Css.clearfix}></div>
                    <div className={PingLun1Css.div6}>
                        <Link to="/pinglun2"><input type="submit" value="下一页" className={PingLun1Css.anniu2}></input></Link>
                    </div>
                </div>
            </div>
        )
    }
}
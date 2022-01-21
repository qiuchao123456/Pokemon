import React from 'react';
import Img from './guanli.jpg';
import {Link} from 'react-router-dom';

var Header1Css=require('./header1.css');
export default class header1 extends React.Component{
    render(){
        return(
            <div>               
                <div className={Header1Css.div5}>
                    V1.0
                </div>
                <div className={Header1Css.div1}>
                    <div className={Header1Css.div3}>
                        <img src={Img}/>
                    </div>
                    <div  className={Header1Css.div4}>
                        精灵宝可梦管理系统
                    </div>
                </div>
                <div className={Header1Css.clearfix}></div>
                <div  className={Header1Css.div2}>
                    <div className={Header1Css.div6}>
                        <Link to="/guanliyuan" target="_black">管理员信息</Link>
                    </div>
                    <div className={Header1Css.div6}>
                        <Link to="/jingling" target="_black">精灵管理</Link>
                    </div>
                    <div className={Header1Css.div6}>
                        <Link to="/pinglun1" target="_black">评论管理</Link>
                    </div>
                    <div className={Header1Css.div6}>
                        <Link to="/gonggao" target="_black">公告管理</Link>
                    </div>
                    <div className={Header1Css.div6}>
                        <Link to="/huikui1" target="_black">回馈管理</Link>
                    </div>
                </div>
            </div>
        )
    }
}
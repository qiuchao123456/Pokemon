import React from 'react';
import WaterLogo from './image/water.jpg';
import FireLogo from './image/fire.JPEG';
import GrassLogo from './image/grass.jpg';
import IceLogo from './image/ice.jfif';
import XiangKeBiaoLogo from './image/xiangkebiao.jpg'
import {Link} from 'react-router-dom';

var AttributeCss = require('./attribute.css');

export default class Attribute extends React.Component{
    render(){
        return(
            <div>
                 <div className={AttributeCss.h1}><h1>属性介绍</h1></div>
                <div className={AttributeCss.divbox}>
                   <div className = {AttributeCss.divbox1}>
                       <div className = {AttributeCss.divbox2}><Link to="../Water/water" target="_black"><p className={AttributeCss.p1}>水系</p><img src={WaterLogo} className={AttributeCss.img1}></img></Link></div>
                       <div className = {AttributeCss.divbox2}><Link to="../Fire/fire" target="_black"><p className={AttributeCss.p1}>火系</p><img src={FireLogo} className={AttributeCss.img1}></img></Link></div>
                       <div className = {AttributeCss.divbox2}><Link to="../Grass/grass" target="_black"><p className={AttributeCss.p1}>草系</p><img src={GrassLogo} className={AttributeCss.img1}></img></Link></div>
                       <div className = {AttributeCss.divbox2}><Link to="../Ice/ice" target="_black"><p className={AttributeCss.p1}>冰系</p><img src={IceLogo} className={AttributeCss.img1}></img></Link></div>
                       <div className={AttributeCss.divbox3}><Link to="../PuTong/putong" target="_black"><span>更多>></span></Link></div>
                   </div>
                   <div className={AttributeCss.divbox4}>
                        <div><p className={AttributeCss.p1}>属性相克表</p></div>
                        <div><img src={XiangKeBiaoLogo}></img>
                        <div className={AttributeCss.divbox3}><Link to="../XiangKeBiao/xiangkebiao" target="_black"><span>详情>></span></Link></div>
                    </div>
                   </div>
                </div>
            </div>
        )
    }
}
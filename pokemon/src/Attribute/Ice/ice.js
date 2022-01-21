import React from 'react';
import Header from './../../Header/header';
import Footer from './../../Footer/footer';
import IceImg from './../Ice/1.jpg';
import { Link } from 'react-router-dom';


var IceCss = require('./ice.css');

export default class Ice extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div>
                    <div className={IceCss.h1}><h1>冰系</h1></div>
                    <div className={IceCss.divbox1}>
                        <Link to='/PuTong/putong'><span>普通系</span></Link>
                        <Link to="/Fire/fire"><span>火系</span></Link>
                        <Link to="/Water/water"><span>水系</span></Link>
                        <Link to="/Dian/dian"><span>电系</span></Link>
                        <Link to="/Grass/grass"><span>草系</span></Link>
                        <Link to="/Ice/ice"><span>冰系</span></Link>
                        <Link to="/GeDou/gedou"><span>格斗系</span></Link>
                        <Link to="/Du/du"><span>毒系</span></Link>
                        <Link to="/DiMian/dimian"><span>地面系</span></Link>
                        <Link to="/Fly/fly"><span>飞行系</span></Link>
                        <Link to="/ChaoNeng/chaoneng"><span>超能</span></Link>
                        <Link to="/Stone/stone"><span>岩石系</span></Link>
                        <Link to="/Dragon/dragon"><span>龙系</span></Link>
                        <Link to="/Ghost/ghost"><span>鬼系</span></Link>
                        <Link to="/Insect/insect"><span>虫系</span></Link>
                        <Link to="/Evil/evil"><span>邪恶系</span></Link>
                        <Link to="/Steel/steel"><span>钢铁系</span></Link>
                        <Link to="/YaoJing/yaojing"><span>妖精</span></Link>
                    </div>
                    <div>
                        <img src={IceImg} className={IceCss.img}></img>
                        <p className={IceCss.p1}>炎炎夏日，谈起冰这个词就让人下意识的感觉到凉爽吧！既然有“冰比冰水冰”的说法，就说明了冰系和水系难舍难分的依赖关系——这也怪不得那么多冰系PM都要附带一个水属性。不过还是有一些PM不愿意沦为水系附庸的，如面恶心善的迷唇姐或者面善心恶的狃拉，当然还有长毛猪和神秘的冰神柱。当然了，能驾驭暴风雪的PM看来也是很不简单的主，如果两个冰系PM交手的时，没准一方就会趾高气扬的冲着对方说：“要想打败我这样的黄金圣斗士，你就必须掌握绝对零度的冻气……”</p>
                        <p className={IceCss.p1}>冰系克制的属性有草、地面、飞行、龙4个，不利的属性是火、水、冰、钢4个，不过地面和飞行是出现率很高的属性，强力的龙系PM一般都少不了被冰打4倍，所以冰属性的攻击意义还是蛮大的。代表技巧冷冻光威力高达95，命中100%，还有10%的冰封效果，使用非常广泛，能学的PM数量也有不少。即使没有冷冻光的PM，很多也会用冷冻拳或者觉醒冰来替代，可见冰系攻击的重要性。但另一方面，冰系的防守方面可真是不怎么样，仅仅抵抗冰系，但却有火、格斗、岩、钢4个弱点，是有点不象话了……</p>
                        <p className={IceCss.p2}>代表宝可梦有：刺甲贝（铁甲贝）、玛狃拉、阿罗拉九尾&阿罗拉穿山王、象牙猪、冰鬼护……</p>
                    </div>
                    <div>
                        <div className={IceCss.divbox3}>
                            <Link to="/Grass/grass" target="_black">上一个</Link>
                            <Link to="/GeDou/gedou" target="_black">下一个</Link>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
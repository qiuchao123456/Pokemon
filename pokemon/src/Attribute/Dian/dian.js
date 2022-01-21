import React from 'react';
import Header from './../../Header/header';
import Footer from './../../Footer/footer';
import DianImg from './../Dian/1.gif'
import {Link} from 'react-router-dom';

var DianCss = require('./dian.css');

export default class Dian extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div>
                    <div className={DianCss.h1}><h1>电系</h1></div>
                    <div className={DianCss.divbox1}>
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
                        <img src={DianImg} className={DianCss.img}></img>
                        <p className={DianCss.p1}>雷电在宗教典籍和RPG游戏中常常被诠释为天罚，也就多了几分神权的威严在里面。不过在“天大地大它最大”的口袋妖怪世界中，自然不可能有神的存在——就算有神也被一干拥有呼风唤雨、通天彻地之能的口袋妖怪们赶到爪哇国去了。雷电只不过是口袋妖怪的一种武器而已，就像杀手兔张开的利爪、拉达的牙齿那样平常。雷电身份的降格也不见得是什么好事，生活中动辄就触电也难免皮肉之苦。皮卡丘、正负小兔啊，你们的脸蛋好可爱，真想捏一下^0^——“啊！我的手指头怎么烧焦了……”</p>
                        <p className={DianCss.p1}>电系克制的属性只有两个：水和飞行，但不利的属性却有电、草、地面、龙4个，对蓄电特性PM无效。好在代表技巧10万伏特的威力、命中、追加效果都还让人满意；而雷电各方面性能均佳，唯独命中仅有70%，不是很够用，但搭配求雨后就不再有命中问题，两者都是技巧机器，相当一部分PM都可以领悟。乍一看电系在攻击方面可能无足轻重，因为从打击的属性上来看并不怎么样。但实际电系攻击的出现率很高，甚至有时候超过了火系，这是什么原因呢？这是由于水系PM整体实力强大，使得必须有足够的力量来遏制它们，草系在攻击方面有先天不足，所以这个重任就落在电系身上了，在打击水系方面，电系技巧可以说是独一无二。在防守方面电系表现相当不错，仅有一个地面系弱点，但却能抵抗电、飞行、钢铁三个属性之多。看闪电鸟、双灯鱼良好的属性抵抗能力，就知道电是多么好的一个防守属性了。</p>
                        <p className={DianCss.p2}>代表宝可梦有：皮卡丘、雷伊布、卡璞.呜呜、雷公、雷电云、捷克罗姆……</p>
                    </div>
                    <div>
                        <div className={DianCss.divbox3}>
                            <Link to="/Water/water" target="_black">上一个</Link>
                            <Link to="/Grass/grass" target="_black">下一个</Link>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
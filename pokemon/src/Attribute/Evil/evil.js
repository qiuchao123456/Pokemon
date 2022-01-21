import React from 'react';
import Header from './../../Header/header';
import Footer from './../../Footer/footer';
import EvilImg from './../Evil/1.jpg';
import { Link } from 'react-router-dom';

var EvilCss = require('./evil.css');

export default class Evil extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div>
                    <div className={EvilCss.h1}><h1>邪恶系</h1></div>
                    <div className={EvilCss.divbox1}>
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
                        <img src={EvilImg} className={EvilCss.img}></img>
                        <p className={EvilCss.p1}>邪恶是自金银起增加的新属性，当时在超能系神兽泛滥的情况下，完全免疫超能系攻击的邪恶系确实让人眼前一亮，四天王中甚至都有一个恶天王。不过这个恶天王不争气，放着好好的巨甲兽不用，却用霸王花、耿鬼什么的来凑数，难怪一次又一次被我们玩家踩在脚下。邪恶系只克制超能和鬼，但原因却很让人费解，按说应该是“邪不胜正”才对。鬼系怕邪恶更让人不禁想到“厉鬼也怕恶人”之类的蛮横道理。当然，恶系怕格斗倒是天经地义，遇到恶人的话，还是用老拳狠狠的修理他！</p>
                        <p className={EvilCss.p1}>邪恶系在攻击上不算出彩，克2个属性被3个属性抵抗怎么都是说不过去的。不过咬碎却为恶系争了光，因为它不仅威力和命中都差强人意，最主要还在于20%追加特防下降的效果。可以说人们使用咬碎的主要目的也就是为了它，运气好的话连卡比兽这样的高特防PM也消受不起。另一个技巧就是追击，虽然威力一般，但特效却非常好，最主要还是用来追杀耿鬼或者胡地之流，对方一点办法也没有。在防守方面恶系也不过不失，只不过除了月精灵和巨甲兽外，恶系PM没有在耐久上能登台面的。</p>
                        <p className={EvilCss.p2}>代表宝可梦有：勾魂眼、阿罗拉……</p>
                    </div>
                    <div>
                        <div className={EvilCss.divbox3}>
                            <Link to="/Insect/insect" target="_black">上一个</Link>
                            <Link to="/Steel/steel" target="_black">下一个</Link>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
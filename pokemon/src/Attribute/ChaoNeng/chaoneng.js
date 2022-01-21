import React from 'react';
import Header from './../../Header/header';
import Footer from './../../Footer/footer';
import ChaoNengImg from './../ChaoNeng/1.jpg'
import {Link} from 'react-router-dom';

var ChaoNengCss = require('./chaoneng.css');

export default class ChaoNeng extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div>
                    <div className={ChaoNengCss.h1}><h1>超能系</h1></div>
                    <div className={ChaoNengCss.divbox1}>
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
                        <img src={ChaoNengImg} className={ChaoNengCss.img}></img>
                        <p className={ChaoNengCss.p1}>超能力一直是那些体格正常但却富于幻想的平凡人类所梦寐以求的东西，当然了，还有一些患有臆想症的人宣称他们能利用“超能力”来折弯汤匙，或者意念传送等，不管这是真是假，至少胡地的超能力不是盖的。超能力PM大多面黄肌瘦，细手细脚，看看胡地、吸盘魔偶、超梦、迪奥西斯的体格就知道了……因此可以断定它们几乎从不进食，仅靠打坐冥想来补充能量（恰好超能系都有冥想……）。说是从不进食可能也不大恰当，因为超能系克毒，所以毒很可能就是它们的食物，也就是说，超能系吸毒，难怪它们都这么瘦骨嶙峋，面无血色。当然超能系还有一些例外的东西，比如宝石海星、比如安农、比如日月神石，这些可能就是因为“采天地之灵气，集日月之精华”，长此以往，修炼成精，故此带有超能力，其实这种超能力，就是我们通常所说的“妖气”……</p>
                        <p className={ChaoNengCss.p1}>超能力只克制了格斗和毒两个属性，不利的却有超、钢、恶，若不是有一干特攻出色的超能系硬撑着，恐怕没有多少人会察觉到超能系攻击的存在。在防守方面呢？被鬼、虫、恶克制，抵抗的只有格斗和超能，要说也真是够可怜的了。之所以超能系还被人认为是大系，只因为超能系PM阵容实在强大，从传统的胡地、超能女皇，到比较异类的钢螃蟹、宝石海星都是极其常见的热门人选。此外，就是因为精神干扰这个技巧的实用性强，不仅威力和命中出色，还有追加降特防的效果，虽然几率很低，但关键时刻如果发动也是能扭转战局的。</p>
                        <p className={ChaoNengCss.p2}>代表宝可梦有：超梦、沙奈朵、胡地、洛奇亚、代欧奇希斯……</p>
                    </div>
                    <div>
                        <div className={ChaoNengCss.divbox3}>
                            <Link to='/Fly/fly' target="_black">上一个</Link>
                            <Link to="/Stone/stone" target="_black">下一个</Link>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
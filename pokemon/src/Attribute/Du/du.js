import React from 'react';
import Header from './../../Header/header';
import Footer from './../../Footer/footer';
import DuImg from './../Du/1.jpg';
import { Link } from 'react-router-dom';

var DuCss = require('./du.css');

export default class Du extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div>
                    <div className={DuCss.h1}><h1>毒系</h1></div>
                    <div className={DuCss.divbox1}>
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
                        <img src={DuImg} className={DuCss.img}></img>
                        <p className={DuCss.p1}>毒在一般RPG来说也是一个重要的要素，千奇百怪的巫毒和神秘莫测的蛊毒都给这个属性增加了更多神秘的色彩。不过在口袋妖怪的世界中倒没这么复杂，总体来说也就两类：一类是身上带毒的，比如阿柏怪、大针蜂、毒刺水母这种身含毒素的生物，一般都能使天敌退避三舍，对于它们本身来说带毒是一件至高无上的光荣事情；另一类就是各种各样的毒物，如双弹瓦斯、臭臭泥、吞食王等等，简单来说就是万毒之源，前者那些PM身上带的毒，未必赶得上它们的万分之一。不过这么一来也就出问题了，瓦斯应该是易燃气体吧，那对它使用大字火，岂不是当场就要发生大爆炸了（恰好瓦斯也有大爆炸这招）？</p>
                        <p className={DuCss.p1}>毒仅仅克制草，但却对毒、地面、岩石、鬼不利，对钢无效，可以说是非常寒碜，不过代表技能毒炸弹威力却达90之多，且30%几率追加中毒的效果更让人为之心动。毒系PM是没有任何理由放弃这一优秀技能的，至于非毒系PM，在没有什么好技巧的情况下，选择它也是很正常的。在防守方面，毒系仅有地面和超能两个弱点，但却抵抗了草、格斗、毒、虫4个属性，已经是相当难得了。</p>
                        <p className={DuCss.p2}>代表宝可梦有：阿柏怪、大针蜂、毒刺水母、双弹瓦斯、臭臭泥、吞食王……</p>
                    </div>
                    <div>
                        <div className={DuCss.divbox3}>
                            <Link to="/GeDou/gedou" target="_black">上一个</Link>
                            <Link to="/DiMian/dimian" target="_black">下一个</Link>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
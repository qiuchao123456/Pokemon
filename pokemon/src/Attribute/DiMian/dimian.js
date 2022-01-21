import React from 'react';
import Header from './../../Header/header';
import Footer from './../../Footer/footer';
import DiMianImg from './../DiMian/1.jpg';
import { Link } from 'react-router-dom';

var DiMianCss = require('./dimian.css');

export default class DiMian extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div>
                    <div className={DiMianCss.h1}><h1>地面系</h1></div>
                    <div className={DiMianCss.divbox1}>
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
                        <img src={DiMianImg} className={DiMianCss.img}></img>
                        <p className={DiMianCss.p1}>天为乾、地为坤；无论是五行还是四大元素，土都是重要的一环。本来按说地面系应该是不亚于水系的大属性才对，因为不客气的说，只要是生活在地面上的生物，以及地面上矿石土块这些无机物，都应该算是地面系呢……但宝可梦里面的定义也太狭隘了，似乎除了天然生成的矿石土块，好像只有天天掘土为生的动物，才算有“地面系”的资格呢！- -b除此之外还有一个非常严重的错误，那就是为什么草系会克制地面系呢？显而易见，没有大地提供的养分支持，植物怎么可能生长呢？就算是植物“寄生”在大地身上，那以植物为食的铁甲犀牛、火山骆驼等等，难道也怕草系不成？想像着他们在草原上奔驰的情景，根据属性相克来推算，它们就好比是在上刀山下火海，而且一日三餐以穿肠毒药为食！</p>
                        <p className={DiMianCss.p1}>地面系克制火、电、毒、岩、钢，仅仅不利于草和虫，对飞行系和浮游特性的PM无效，再加上地面系的第一绝招——地震的优秀性能（威力100，命中100%，PP10），还需要怀疑这个属性的地位么？当之无愧的NO.1啊！虽然除了地震外，其他地面系技巧基本上没什么实用价值，不过这一招也就足够了。大部分物攻PM都会使用地震作为自己的主攻技巧，而地面系的PM由于具有属性修正，能带来更高的攻击力输出，是队伍中重要的物攻力量。当然，由于地震的泛滥，相对就会使对手的草系、虫系、飞行系以及浮游特性的PM出现率大大提高，这就需要使用其他属性的技巧来补足。最后再强调一次，虽然地震效果十分优秀，但过分依赖它也是不合适的。防守方面，地面系虽然有水、草、冰三个弱点，但抵抗了电、毒、岩，并不能算很差的。</p>
                        <p className={DiMianCss.p2}>代表宝可梦有：隆隆岩、鲶鱼王、超甲狂暴（曾译名：超铁暴龙）、象牙猪、重泥挽马 ……</p>
                    </div>
                    <div>
                        <div className={DiMianCss.divbox3}>
                            <Link to="/Du/du" target="_black">上一个</Link>
                            <Link to="/Fly/fly" target="_black">下一个</Link>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
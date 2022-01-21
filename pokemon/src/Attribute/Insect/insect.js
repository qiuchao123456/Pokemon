import React from 'react';
import Header from './../../Header/header';
import Footer from './../../Footer/footer';
import InsectImg from './../Insect/1.jpg';
import { Link } from 'react-router-dom';

var InsectCss = require('./insect.css');

export default class Insect extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div>
                    <div className={InsectCss.h1}><h1>虫系</h1></div>
                    <div className={InsectCss.divbox1}>
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
                        <img src={InsectImg} className={InsectCss.img}></img>
                        <p className={InsectCss.p1}>据说口袋妖怪源自于老田年轻时捉虫的灵感，不过考虑到大多数孩子们可能对奇形怪状的昆虫并没有很高的心理承受能力，因此口袋妖怪最终没有变成“口袋昆虫”。一开始设计者就没打算在虫系方面下太多工夫，但后来考虑到“萝卜白菜，各有所爱”，多几条虫子其实也未尝不可。虫系PM基本上分为两大类，一种是跑龙套的，它们种族值之和绝对不超过400，也没什么好技巧，一般情况下不会有人会在对战中使用它们。另一种则实力非凡，赫拉克罗斯、佛烈托斯双雄自问世起就出尽风头，而宝石起新增的忍者蝉和化石蝎也凭借实力得到了玩家的认可。说起来这里面最可惜的还是飞天螳螂，外形和能力都无话可说，但飞行系这个属性真是无用的累赘，如果换成和赫拉克罗斯一样的格斗系那该多好（动画中的飞天螳螂也是擅长搏斗的啊）！另一个就是壶壶，纯粹是因为吃了技巧匮乏的亏，不过凭借呆头呆脑的外形，也是有相当一批爱好者的。</p>
                        <p className={InsectCss.p1}>虫系是物攻输出的重要属性之一，这是因为百万大角的存在。如果把其他副作用去掉，百万大角确实可以算是物攻第一高。不过再看看虫系其他技能，信号光线威力仅75，巨钳螳螂空有一流的物攻但却只能用威力60的银色风（如果除去觉醒虫的话），就该对这个属性有一个新的认识了。事实上虫系一直不是攻击的好属性，克制超草恶，但却被飞行、毒、格斗、钢铁、火、鬼这6个属性所抵抗，真是有点说不过去了。这也是百万大角虽然性能出色，但尼多王却很少使用它的原因。防守方面虫系表现比较平庸，抵抗地斗草，畏惧火飞岩，不过和钢系结合起来却是比较完美，这也是为何佛烈托斯如此出彩的原因。</p>
                        <p className={InsectCss.p2}>代表宝可梦有：盖诺赛克特、爆肌蚊、费洛美螂……</p>
                    </div>
                    <div>
                        <div className={InsectCss.divbox3}>
                            <Link to="/Ghost/ghost" target="_black">上一个</Link>
                            <Link to="/Evil/evil" target="_black">下一个</Link>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
import React from 'react';
import Header from './../../Header/header';
import Footer from './../../Footer/footer';
import WaterImg from './../Water/1.jpg'
import { Link } from 'react-router-dom';


var WaterCss = require('./water.css');

export default class Water extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div>
                    <div className={WaterCss.h1}><h1>水系</h1></div>
                    <div className={WaterCss.divbox1}>
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
                        <img src={WaterImg} className={WaterCss.img}></img>
                        <p className={WaterCss.p1}>水火不容这是亘古不变的真理，因此宝可梦的世界中也不会出现“水+火”这种奇怪的属性来，不过，水系和其他乱七八糟的属性结合可真不少，算算和水系不沾亲带故的属性，除了火以外也就剩下格斗、鬼、钢铁了，水系PM的数量也是宝可梦中数一数二的。水是生命之源，生物种类数量最多的，除了昆虫也就数水生生物了吧，况且一提到水生生物，不由自主的就会联想到“海味”、“大闸蟹”、“鱼翅”这些词，这也难怪为什么老任设计了这么多千奇百怪的水属性PM了吧！</p>
                        <p className={WaterCss.p1}>水系也是主角属性之一，克制了火、地、岩，不利于水、草、龙，对蓄水特性的PM无效，和火系地位难分上下。和火系那两个技巧类似，水系的冲浪和水压也分别担当了95威力和120威力的角色，不过水压的命中率变成了80%，追加的效果也被取消，最主要是冲浪和水压能学PM的数量较少，仅限于水系PM和极少数非水系PM，普及率远远不及火系来的高，而且水系的主要攻击技巧也就是这两种，其他技巧都存在这样或者那样的问题。当然，虽然水系技巧从这些方面来分析要稍逊于火系一筹，但水系PM强大的实力加上属性加成修正，使得水系仍然成为特攻输出的主流属性。而防守方面，水系只有草和电两个弱点，其中草系攻击出现率不仅不高而且威力有限，主要也就是担心电系攻击而已。抵抗的属性有火、水、冰、钢4个属性，算差强人意吧。</p>
                        <p className={WaterCss.p2}>代表宝可梦有：暴鲤龙、美纳斯、拉普拉斯、刺龙王、杰尼龟……</p>
                    </div>
                    <div>
                        <div className={WaterCss.divbox3}>
                            <Link to="/Fire/fire" target="_black">上一个</Link>
                            <Link to="/Dian/dian" target="_black">下一个</Link>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
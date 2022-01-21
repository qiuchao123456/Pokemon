import React from 'react';
import Header from './../../Header/header';
import Footer from './../../Footer/footer';
import YaoJingImg from './../YaoJing/1.jpg';
import { Link } from 'react-router-dom';

var YaoJingCss = require('./yaojing.css');

export default class YaoJing extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div>
                    <div className={YaoJingCss.h1}><h1>妖精系</h1></div>
                    <div className={YaoJingCss.divbox1}>
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
                        <img src={YaoJingImg} className={YaoJingCss.img}></img>
                        <p className={YaoJingCss.p1}>妖精属性的神奇宝贝大都娇小可爱，但是却可以克制龙系，因此也时常遭到玩家群体的调侃，戏称为“屠龙勇士”。只有布卢家族和皮皮家族在图鉴分类上为妖精神奇宝贝，有趣的是在随后变更为妖精属性的神奇宝贝中，只有它们两家作为单一属性的神奇宝贝是替换而不是添加妖精属性。</p>
                        <p className={YaoJingCss.p1}>妖精属性克制龙属性、格斗属性、恶属性，被火属性、毒属性、钢属性抵抗；妖精属性免疫龙属性，抵抗格斗属性、恶属性、虫属性，被毒属性和钢属性克制。普通</p>
                        <p className={YaoJingCss.p2}>代表宝可梦有：阿罗拉九尾、波克基斯、风妖精、仙子伊布、谜拟Q……</p>
                    </div>
                    <div>
                        <div className={YaoJingCss.divbox3}>
                            <Link to="/Steel/steel" target="_black">上一个</Link>
                            <Link to="/YaoJing/yaojing" target="_black">下一个</Link>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
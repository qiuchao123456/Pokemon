import React from 'react';
import Header from './../../Header/header';
import Footer from './../../Footer/footer';
import PuTongImg from './../PuTong/1.jpg'
import {Link} from 'react-router-dom';

var PuTongCss = require('./putong.css');

export default class PuTong extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div>
                    <div className={PuTongCss.h1}><h1>普通系</h1></div>
                    <div className={PuTongCss.divbox1}>
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
                        <img src={PuTongImg} className={PuTongCss.img}></img>
                        <p className={PuTongCss.p1}>普通系光从字面意思上实在是很难归纳其特点，看看所涉及到的也是包罗万象。下到最常见最“普通”的动物——老鼠、麻雀；上到可以吞下一切的卡比兽。另外3D龙、百变怪、天气小子这些非常规的PM也归入普通系大家族，确实让人有点无法理解。也许普通系就是那些未经分类的PM，不然怎么也想不出凶恶的杀手兔怎么会和泪汪汪的胖可丁会是同一家。小护士快乐的来源也是一个谜，先不说它笨拙的小手怎么去看护病人，看它那体形，要不然怎么那么怕格斗，拳打脚踢什么的还好，要是被来个过肩摔什么的，再爬起来怕是也要费一大番功夫了。</p>
                        <p className={PuTongCss.p1}>普通系技巧对岩石、钢铁不利，对鬼无效，没有任何克制的属性。虽然在打击面上表现很平庸，但技巧却胜在实用。通过提升亲密度来提升威力，最高可达102的报恩是相当可靠的技巧；威力稍小但具有麻痹效果的压制，威力更大但带有反作用伤害的舍身撞也是各有千秋。这些技巧绝大多数PM都可以学习，不过因为不能克制到任何属性，所以很少见到普通系以外的PM去考虑这种技巧。另外一个异类技巧就是空元气，在异常状态下威力加倍，如果再配合“根性”这个特性，想不重创对手都难。即使普通系在性能上没有什么出彩的地方，这些能力技巧出色的PM也义无反顾的举起了普通系的大旗。虽然格斗系表面看来是普通系的天敌，不过由于格斗系挡不起报恩，在实际战斗中也不敢随便来找普通系的茬。</p>
                        <p className={PuTongCss.p2}>代表宝可梦有：卡比兽、3D龙、百变怪、天气小子……</p>
                    </div>
                    <div>
                        <div className={PuTongCss.divbox3}>
                            <Link to='/PuTong/putong' target="_black">上一个</Link>
                            <Link to="/Fire/fire" target="_black">下一个</Link>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
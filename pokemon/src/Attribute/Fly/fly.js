import React from 'react';
import Header from './../../Header/header';
import Footer from './../../Footer/footer';
import FlyImg from './../Fly/1.jfif';
import { Link } from 'react-router-dom';

var FlyCss = require('./fly.css');

export default class Fly extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div>
                    <div className={FlyCss.h1}><h1>飞行系</h1></div>
                    <div className={FlyCss.divbox1}>
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
                        <img src={FlyImg} className={FlyCss.img}></img>
                        <p className={FlyCss.p1}>上有天，下有地，不过和地面系一样，在摒弃了所谓的图腾崇拜后，一干飞行系就顶替了“天”这个位置。从所包含的数量上来说，飞行系不愧是一个大属性，可另一方面，飞行系都是作为其他属性的附庸，比如“普通+飞行”、“水+飞行”、“地面+飞行”等，没有纯粹的飞行系PM。飞行系大部分都是鸟类，世界上的鸟类变化多端，从最常见的麻雀海鸥，到传说中的铁鸟（不就是飞机么……）凤凰，都逃不过口袋妖怪这张大网。由于鸟类多以昆虫和植物为食，所以虫、草系PM才会被飞行系所克制。飞行系还有一些例外，比如鲤鱼跳龙门后变成的东西（暴鲤龙），或者是城堡或者财宝的守卫（血翼飞龙、喷火龙……），要么就是随处可见的蜜蜂蝴蝶之类。它们仅仅是因为能“飞行”，就要被迫和那些鸟类降格（升格？）混为一谈，未免太不负责任了……</p>
                        <p className={FlyCss.p1}>飞行系克制草、虫、格斗三个属性，也仅对电、岩石、钢不利，在攻击方面算是不过不失，不过由于它对一些热门的PM有优秀的4倍效果（赫拉克罗斯、蘑菇袋鼠），因此还是不得不承认其价值的。飞行系的问题主要出现在威力上，威力仅为80的钻孔啄没有任何特效，能学习的PM也是比较有限，其中物攻最高的嘟嘟利也仅有110的种族值，物攻一流的血翼飞龙、快龙竟然沦落到要使用觉醒力。对于非飞行系PM来说，如果不是为了对付那两个怕飞行的PM，一般是不大可能去使用飞行系技巧的。在防守方面，飞行系被电、冰、岩石三个属性克制，但抵抗了草、格斗、虫和地面4个属性，尤其是对地面的完全抵抗实在弥足珍贵，因为地震的恐怖性能是众所周知的。另一方面，由于威力强大的气合拳存在，飞行系的存在也几乎是必不可少。虽然单看来飞行系在防守方面不是很突出，不过飞行系都和其他属性搭配，实际的复合属性还是很不错的。</p>
                        <p className={FlyCss.p2}>代表宝可梦有：喷火龙、血翼飞龙、铁鸟、暴鲤龙……</p>
                    </div>
                    <div>
                        <div className={FlyCss.divbox3}>
                            <Link to="/DiMian/dimian" target="_black">上一个</Link>
                            <Link to="/ChaoNeng/chaoneng" target="_black">下一个</Link>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
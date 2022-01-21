import React from 'react';
import Header from './../../Header/header';
import Footer from './../../Footer/footer';
import SteelImg from './../Steel/1.jpeg';
import { Link } from 'react-router-dom';

var SteelCss = require('./steel.css');

export default class Steel extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div>
                    <div className={SteelCss.h1}><h1>钢铁系</h1></div>
                    <div className={SteelCss.divbox1}>
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
                        <img src={SteelImg} className={SteelCss.img}></img>
                        <p className={SteelCss.p1}>钢铁系和邪恶系一样都是金银的新属性，但一出世就抢尽了风头。盔甲鸟、合金蛇、佛烈托斯从诞生之日起就是最好的物理盾牌人选，而“钢系杀手”三合一磁怪在宝石中也一直有相当地位。当然，种族值极高的合金十字和钢神柱，还有吉拉奇，更不用说了。钢系PM最让人费解的地方就是他们身上的钢，是来自于何处？因为如此高硬度的钢显然不是那些天然的矿石可以相比的（看看岩石系都是一些什么软柿子），而历经风吹雨打岁月的洗礼而不生锈，也证明了它们和一般的铁有本质的区别。不过想想PM既然可以人造（如3D龙），那么人类给钢系PM提供一些钢材也是情理之中了。比如人类可以通过给PM穿上“金属外套”的方法使其变成钢系，难怪网络上一度流传所谓的“盔甲超梦”之类的谣言。</p>
                        <p className={SteelCss.p1}>钢系让人印象最深的地方就是对全属性将近2/3的抵抗，难怪和不少属性相结合起来都是一流盾牌。不过那个“岩+钢”的钢甲龙却是个例外，附带的岩系不仅没带来任何帮助，反倒拖了钢系的后腿，格斗和地面两个4倍克制的属性，让人焉能不怕。攻击方面钢系只能说是一把钝刀，克制冰岩，却对火水电钢不利，技巧方面也验证了这点：钢翅膀威力仅有70且普及率低，一般是难得一见；钢尾巴威力较高，特效也不错，但命中率不敢让人放心；彗星拳威力和钢尾巴相同，命中比钢尾巴高一些，主要是20%提升物攻的特效比较优秀，但能学的PM也实在太少，对于皮可西这样不能利用属性修正威力的PM来说，意义也实在有限。至于那个吉拉奇的独有技巧破灭之愿，就没有什么提的必要了。</p>
                        <p className={SteelCss.p2}>代表宝可梦有：路卡利欧、纸御剑、大嘴娃、坚果哑铃、坚盾剑怪……</p>
                    </div>
                    <div>
                        <div className={SteelCss.divbox3}>
                            <Link to="/Evil/evil" target="_black">上一个</Link>
                            <Link to="/YaoJing/yaojing" target="_black">下一个</Link>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
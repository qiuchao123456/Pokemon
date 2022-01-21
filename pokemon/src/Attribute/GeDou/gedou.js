import React from 'react';
import Header from './../../Header/header';
import Footer from './../../Footer/footer';
import GeDouImg from './../GeDou/1.jpg';
import { Link } from 'react-router-dom';

var GeDouCss = require('./gedou.css');

export default class GeDou extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div>
                    <div className={GeDouCss.h1}><h1>格斗系</h1></div>
                    <div className={GeDouCss.divbox1}>
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
                        <img src={GeDouImg} className={GeDouCss.img}></img>
                        <p className={GeDouCss.p1}>格斗系的PM可能最贴近我们人类的现实生活，因为这些PM几乎都是人型类，在现实生活中不难找到他们的影子。怪力就是活跃在全美WWF职业摔跤联盟的第一明星，相扑怪自然是来自东瀛的相扑力士；沙瓦郎大概是李小龙截拳道门下的第XX代弟子，卡波郎一看就是没事爱练瑜伽功的印度阿三。当然，有一些可能是人类后天培养驯化的格斗机器，比如赫拉克罗斯和火烈鸡，源自人们斗虫斗鸡的嗜好；蘑菇袋鼠就是擂台上常见的袋鼠了，可不要小看它，寻常的格斗家还未必是它的对手呢，若是吃了它一踢或尾巴一鞭，搞不好都有可能内脏出血送去急救了。</p>
                        <p className={GeDouCss.p1}>克制了冰、邪恶、钢铁、岩石、普通5个属性之多，但不利的属性也有飞行、超能、毒、虫4个之多，对鬼更是完全无效的格斗系，可谓毁誉参半。接下来再看技巧本身的性能问题，也是不容乐观：威力高达100、且容易会心的技巧——“交叉突刺”命中率稍稍差了些（仅80%），但问题是只有少数PM才能学到，连某些格斗系PM都不会；威力高达150的“气合拳”是大众化的技巧，但因为在发动时要求不能受到对方攻击伤害，所以注定只能作辅助技巧；“爆炸拳”也是一个普遍能学的技巧，威力有100之多且命中后必定追加混乱效果，但只有50%的命中率，让所有人用起来都不放心；最后是常见的格斗技巧“瓦割”，基本上有手的PM都能学，不过区区75的威力，也让人太失望了。说了这么多可能大家都晕了，总之结合属性特点，再加上可选择的技巧综合考虑，格斗系技巧作为主攻还是不太合适。再看防守方面，只有超和飞两个弱点，不过抵抗的虫、岩、恶也并非常见的攻击属性……</p>
                        <p className={GeDouCss.p2}>代表宝可梦有：火焰鸡、斗笠菇、路卡利欧、怪力、战舞郎、修建老匠……</p>
                    </div>
                    <div>
                        <div className={GeDouCss.divbox3}>
                            <Link to="/Ice/ice" target="_black">上一个</Link>
                            <Link to="/Du/du" target="_black">下一个</Link>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
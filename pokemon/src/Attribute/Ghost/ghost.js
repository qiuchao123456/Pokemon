import React from 'react';
import Header from './../../Header/header';
import Footer from './../../Footer/footer';
import GhostImg from './../Ghost/1.jpg';
import { Link } from 'react-router-dom';


var GhostCss = require('./ghost.css');

export default class Ghost extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div>
                    <div className={GhostCss.h1}><h1>鬼系</h1></div>
                    <div className={GhostCss.divbox1}>
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
                        <img src={GhostImg} className={GhostCss.img}></img>
                        <p className={GhostCss.p1}>鬼是源自人内底对未知的恐惧，所以也带有了几多神秘的色彩。不过口袋妖怪中不搞什么封建迷信，鬼一样不过是看得见但却不一定摸得着的PM而已。本来装神弄鬼的鬼天王橘子也是个了不起的角色，但和龙一样无奈，当时“姓鬼”的PM也只有三只，所以橘子也只好拉来一批毒系PM凑数。还好新作中老任也注意到了这个问题，不过可能考虑到“鬼”这个概念不是很容易用具体的PM来诠释，所以只增加了少数几个。由于耿鬼孤军奋战的日子实在太久，鬼系不要说再给人带来神秘感，只怕是要被人淡忘也说不定。最后不得不称赞一句鬼蝉的创意，虽时刻处在死亡的边缘（因为只有1点HP），但想要打到它也确实不容易。新作若能将这个创意继续发扬光大，势必也会为口袋妖怪的对战系统增光添彩。</p>
                        <p className={GhostCss.p1}>鬼系给人的感觉就是精于旁门左道，因此决不在攻击方面过多崭露头角。对于鬼系PM来说这确实没错，不过影球这个技巧使用频率相当高，主要是以报恩、地震、格斗系技巧为主攻的PM所考虑的备选，目的主要就是为了打击不怕普通和格斗系技巧，特性又免疫了地震的耿鬼、梦妖和鬼蝉。鬼系克制超能、鬼两个属性，不利于普通、钢铁和邪恶，主力技巧影球威力80，还有那可有可无的特效，若不是出于打击面来考虑，相信没多少人会选择鬼系技巧的。防守方面鬼系相当出色，无效化普通和格斗，抵抗虫和毒，只被邪恶和鬼所克制，这就难怪为何浮游特性的耿鬼使用频率那么高，光这个抗性就帮上大忙了！</p>
                        <p className={GhostCss.p2}>代表宝可梦有：椰蛋树、吉利蛋、急冻鸟、胡地、耿鬼、宝石海星、肯泰罗……</p>
                    </div>
                    <div>
                        <div className={GhostCss.divbox3}>
                            <Link to="/Dragon/dragon" target="_black">上一个</Link>
                            <Link to="/Insect/insect" target="_black">下一个</Link>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
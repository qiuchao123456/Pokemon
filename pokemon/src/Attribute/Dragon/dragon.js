import React from 'react';
import Header from './../../Header/header';
import Footer from './../../Footer/footer';
import DragonImg from './../Dragon/1.jpg';
import { Link } from 'react-router-dom';

var DragonCss = require('./dragon.css');

export default class Dragon extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div>
                    <div className={DragonCss.h1}><h1>龙系</h1></div>
                    <div className={DragonCss.divbox1}>
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
                        <img src={DragonImg} className={DragonCss.img}></img>
                        <p className={DragonCss.p1}>龙无论在中国还是西方都是高高在上的神物，口袋妖怪中本也如此，可以驾驭龙系精灵的龙天王阿渡何其威风！可惜那时候“属龙”的PM满打满算就三个，当人们对愚蠢到被冷冻光一击死的快龙失去兴趣时，龙系PM的光环也就开始黯淡了。其实这只能怪老任，谁让龙系PM数量那么少，搞得阿渡不得不拿来暴鲤“龙”、喷火“龙”、化石飞“龙”什么的来滥竽充数。到了宝石时代可能设计者也意识到了这个问题，一口气增加了一大群龙系PM，而且其中亦不乏实力超群的水都兄妹、血翼飞龙等等。但是人们对“龙”的认识已经根深蒂固，见到它就会想到“又是一条被冷冻光秒杀的东西”之类的想法。如果老任在新作中不增加一些其他种类的复合属性的话，那么龙系PM也就走下神坛了。</p>
                        <p className={DragonCss.p1}>虽然龙系PM在游戏中算不上风光，不过不可否认它是一个好属性。对火水电草4大特攻属性的抵抗就很难能可贵，弱点只有龙和冰两个而已。虽然冷冻光什么时候都是它们的克星，但在操作熟练的玩家手中这不会成为什么大问题。在攻击方面龙系实在可怜，克制龙属性而不利于钢属性，技巧更是乏善可陈。龙爪威力仅80且没有任何特效，龙之吐息特效尚可但威力偏低，至于有副作用的逆鳞就更不用说了。从龙系技巧的上镜率高低我们也不难看出一二了。</p>
                        <p className={DragonCss.p2}>代表宝可梦有：喷火龙、双斧战龙、沙漠蜻蜓、赤面龙、毒藻龙（毒拉密妮）、暗黑酋雷姆……</p>
                    </div>
                    <div>
                        <div className={DragonCss.divbox3}>
                            <Link to="/Stone/stone" target="_black">上一个</Link>
                            <Link to="/Ghost/ghost" target="_black">下一个</Link>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
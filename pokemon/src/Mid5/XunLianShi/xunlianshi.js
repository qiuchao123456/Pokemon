import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header/header';
import Footer from '../../Footer/footer';

import img0 from './img/11.jpg';
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';
import img5 from './img/5.jpg';
import img6 from './img/6.jpg';
import img7 from './img/7.jpg';
import img8 from './img/8.jpg';
import img9 from './img/9.jpg';
import img10 from './img/10.jpg';

var XunLianShiCss = require('./xunlianshi.css');

export default class XunLianShi extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div className={XunLianShiCss.div1}>
                    <h1>最强训练师</h1>
                </div>
                <div className={XunLianShiCss.divbox1}>
                    <Link to="/ZhanLi/zhanli"><span>实力榜</span></Link>
                    <Link to="/ZhanLi/renqi1"><span>人气榜</span></Link>
                    <Link to="/ShenShou/shenshou"><span>神兽榜</span></Link>
                    <Link to="/Girl/girl"><span>女主榜</span></Link>
                    <Link to="/XunLianShi/xunlianshi"><span>训练师榜</span></Link>
                    <Link to="/XiYou/xiyou"><span>稀有精灵榜</span></Link>
                </div>
                <div>
                    <div>
                        <div>
                            <div className={XunLianShiCss.divbox01}>
                                <img src={img0} className={XunLianShiCss.img0}></img>
                            </div>
                            <div className={XunLianShiCss.div2}><p className={XunLianShiCss.font}>首先说明，这个排名是以《宠物小精灵》动画为基础，但是由于动画中有些差距不是很明显，所以会有些参考游戏和漫画的内容，（另外排名不涉及各世代主角，毕竟主角的潜力是无限的）。</p></div>
                            <div>
                                <div className={XunLianShiCss.div01}>
                                    <h2>NO1：渡</h2>
                                </div>
                                <div className={XunLianShiCss.divbox01}>
                                    <img src={img1}></img>
                                </div>
                                <div className={XunLianShiCss.div2}>
                                    <p className={XunLianShiCss.font}>属性：龙</p>
                                    <p className={XunLianShiCss.font}>主要精灵：快龙</p>
                                    <p className={XunLianShiCss.font}>上榜理由：第一位总是会引起争议，包括我自己也在犹豫是否该与希罗娜对调或者有没有更好的。但斟酌很久后觉得还是把小渡放在首位。口袋世界第一个真正意义上的冠军（始终觉得小茂是冠军有点奇怪）。动画里也是救世的存在，有点类似大吾的角色带领主角去硬刚水舰队。漫画里几乎将主角四人组团灭，最后遭小黄点化。游戏里就更不用说了，两只快龙打完小编就快哭了把渡排在希罗娜前面还是从阵容考虑，全龙系的阵容实力足够强大，特别是仙系还没出的时候，而且都是些很稀有的龙。游戏里还配有老喷这种伪龙系，克服了对冰系的弱点。另外小渡的造型天生有一种王者气概，当然这不是主要原因啦。</p>
                                </div>
                            </div>
                            <div>
                                <div className={XunLianShiCss.div01}>
                                    <h2>NO2：希罗娜/竹阑</h2>
                                </div>
                                <div className={XunLianShiCss.divbox01}>
                                    <img src={img2}></img>
                                </div>
                                <div className={XunLianShiCss.div2}>
                                    <p className={XunLianShiCss.font}>属性：无特定</p>
                                    <p className={XunLianShiCss.font}>主要精灵：烈咬陆鲨</p>
                                    <p className={XunLianShiCss.font}>上榜理由：美貌，实力，气场，智慧于一身，几乎是整个口袋妖怪系列最完美的女性角色，又配有一只几乎无敌的烈咬陆鲨（游戏里这只也超级难打....）。动画里也是唯一拍出过与四天王对决的冠军，然而三只解决大叶，用海牛兽就刚掉阿柳的主力，种种表现已经说明神奥的四天王跟她的差距都还很大，特别是解说员那句能战胜她的训练家在哪里给女神加分太多。考虑整体阵容虽然不错了但还能进一步提升，位列第二位！</p>
                                </div>
                            </div>
                            <div>
                                <div className={XunLianShiCss.div01}>
                                    <h2>NO3：米可利</h2>
                                </div>
                                <div className={XunLianShiCss.divbox01}>
                                    <img src={img3}></img>
                                </div>
                                <div className={XunLianShiCss.div2}>
                                    <p className={XunLianShiCss.font}>属性：水</p>
                                    <p className={XunLianShiCss.font}>主要精灵：美纳斯</p>
                                    <p className={XunLianShiCss.font}>上榜理由：这个理由还是很充分，漫画里直说了米可利打败过大吾，大吾差点给他当四天王，但是米可利为了妹子甘心在红蓝宝石时期做馆主。另外米可利不仅实力强，华丽大赛界也是冠军级，堪称实力与华丽并存的几乎完美型冠军。唯一不足的可能就是没有准神级别的宠，除了美纳斯其他纸面上看着略菜。</p>
                                </div>
                            </div>
                            <div>
                                <div className={XunLianShiCss.div01}>
                                    <h2>NO4：大吾</h2>
                                </div>
                                <div className={XunLianShiCss.divbox01}>
                                    <img src={img4}></img>
                                </div>
                                <div className={XunLianShiCss.div2}>
                                    <p className={XunLianShiCss.font}>属性：钢</p>
                                    <p className={XunLianShiCss.font}>主要精灵：巨金怪</p>
                                    <p className={XunLianShiCss.font}>上榜理由：大吾排在五六两位前面主要是考虑到其阵容超高的防御力，这在正面对决里防御好还是很有优势的，毕竟很多项目的比赛中有句话叫冠军靠防守，加上有准神压阵，整体实力还是很强的。另外漫画里有着救世的表现，带领四天王一起拯救世界，让两大神兽归位，自己最后壮烈牺牲。实力强又有大义加成，故排名第四。</p>
                                </div>
                            </div>
                            <div>
                                <div className={XunLianShiCss.div01}>
                                    <h2>NO5：阿黛克</h2>
                                </div>
                                <div className={XunLianShiCss.divbox01}>
                                    <img src={img5}></img>
                                </div>
                                <div className={XunLianShiCss.div2}>
                                    <p className={XunLianShiCss.font}>属性：无特定</p>
                                    <p className={XunLianShiCss.font}>主要精灵：巴弗罗 、火神虫</p>
                                    <p className={XunLianShiCss.font}>上榜理由：还是挺犹豫大叔跟卡露乃谁在前面的。考虑大叔有个火神虫压阵还是放在前面吧。而且根据动画里的描述他应该守了有十年的冠军了，不可能是黑白的天王们太弱吧，自身实力应该够强。不过他的阵容要说强但除了火神虫也没太牛逼的了，而且虫系居多（毕竟虫系还是相对实力较弱的属性），另外他的精灵都是第五世代的，还是比较有局限性的，就排在这里吧。</p>
                                </div>
                            </div>
                            <div>
                                <div className={XunLianShiCss.div01}>
                                    <h2>NO6：卡露乃</h2>
                                </div>
                                <div className={XunLianShiCss.divbox01}>
                                    <img src={img6}></img>
                                </div>
                                <div className={XunLianShiCss.div2}>
                                    <p className={XunLianShiCss.font}>属性：无特定</p>
                                    <p className={XunLianShiCss.font}>主要精灵：沙奈朵</p>
                                    <p className={XunLianShiCss.font}>上榜理由：xy冠军。相信实力是很强，不过由于漫画还在更新，游戏里也没有表现出太过人的地方，另外由于现在各种动不动就mega，动画里虐智爷上来就mega了，跟以往那些不进化硬刚就把主角们虐哭的相比还是欠点说服力，故就排在这里啦。</p>
                                </div>
                            </div>
                            <div>
                                <div className={XunLianShiCss.div01}>
                                    <h2>NO7：坂木</h2>
                                </div>
                                <div className={XunLianShiCss.divbox01}>
                                    <img src={img7}></img>
                                </div>
                                <div className={XunLianShiCss.div2}>
                                    <p className={XunLianShiCss.font}>属性：地面</p>
                                    <p className={XunLianShiCss.font}>主要精灵：铁甲暴龙 、猫老大</p>
                                    <p className={XunLianShiCss.font}>上榜理由：动画里一直只出现在屏幕里和喵喵的脑海里的神秘人物，但绝逼是所有对立组织的BOSS里单兵作战能力最强的。虽然动画里没有其战斗画面，而且平时身边就放出个猫老大，但是通过漫画可以看出其对地面系的领悟已经达到宗师的级别，至少肯定比神奥四天王的菊野强，甚至都总结出了一本地面系奥义的书。而且就那只猫老大曾经都在动画里把智爷打跪了。至于是否更强不好说，姑且就排在这里吧。</p>
                                </div>
                            </div>
                            <div>
                                <div className={XunLianShiCss.div01}>
                                    <h2>NO8：大木博士</h2>
                                </div>
                                <div className={XunLianShiCss.divbox01}>
                                    <img src={img8}></img>
                                </div>
                                <div className={XunLianShiCss.div2}>
                                    <p className={XunLianShiCss.font}>属性：一般</p>
                                    <p className={XunLianShiCss.font}>主要精灵：惊角鹿、 袋龙</p>
                                    <p className={XunLianShiCss.font}>上榜理由：这个可能会争议有点大。大木博士这种口袋世界第一博士曾经也必定有着不错的实战经验。也确实拿过联盟冠军（年轻的时候还跟菊子有点暧昧）擅长用一般属性，不过现在他应该啥属性都有了...觉得实力应该在四天王之上，考虑到排在前面的更强，就排在这里吧。</p>
                                </div>
                            </div>
                            <div>
                                <div className={XunLianShiCss.div01}>
                                    <h2>NO9：悟松</h2>
                                </div>
                                <div className={XunLianShiCss.divbox01}>
                                    <img src={img9}></img>
                                </div>
                                <div className={XunLianShiCss.div2}>
                                    <p className={XunLianShiCss.font}>属性：超能</p>
                                    <p className={XunLianShiCss.font}>主要精灵：青铜钟</p>
                                    <p className={XunLianShiCss.font}>上榜理由：神奥地区最强天王，且一般淡定学者范的都暗藏巨大实力，动画里四两拨千斤式调教不听话的叉尾浮鼬，凸显智者风范。主要精灵青铜钟，玩过游戏的都清楚这只青铜钟钢起来防御力多强，可与第十互换。</p>
                                </div>
                            </div>
                            <div>
                                <div className={XunLianShiCss.div01}>
                                    <h2>NO10：源治</h2>
                                </div>
                                <div className={XunLianShiCss.divbox01}>
                                    <img src={img10}></img>
                                </div>
                                <div className={XunLianShiCss.div2}>
                                    <p className={XunLianShiCss.font}>属性：龙</p>
                                    <p className={XunLianShiCss.font}>主要精灵：爆蝾螈</p>
                                    <p className={XunLianShiCss.font}>上榜理由：虽然方缘四天王没有太明显的实力之分，作为动画中唯一登场的四天王，所擅长的属性足够强，爆蝾螈也算是准神，所以宝石四天王只有他上榜，可跟第九位互换。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={XunLianShiCss.span}>
                            <Link to="/Girl/girl" target="_black"><span>上一个</span></Link>
                            <Link to="/XiYou/xiyou" target="_black"><span>下一个</span></Link>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div >
        )
    }
}
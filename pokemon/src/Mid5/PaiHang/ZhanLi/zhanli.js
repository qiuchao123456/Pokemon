import React from 'react';
import Header from './../../../Header/header';
import Footer from './../../../Footer/footer';
import P1 from './6.jpeg';
import P2 from './8.jpg';
import P3 from './3.jpg';
import P4 from './7.jpeg';
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/4.jpg';
import img4 from './img/zhan4.jpg';
import img5 from './img/zhan5.jpg';
import img6 from './img/zhan6.jpg';
import { Link } from 'react-router-dom';



var ZhanLiCss = require('./zhanli.css')
export default class ZhanLi extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className={ZhanLiCss.div1}>
                    <h1>实力排行榜</h1>
                </div>
                <div className={ZhanLiCss.divbox1}>
                    <Link to="/ZhanLi/zhanli"><span>实力榜</span></Link>
                    <Link to="/ZhanLi/renqi1"><span>人气榜</span></Link>
                    <Link to="/ShenShou/shenshou"><span>神兽榜</span></Link>
                    <Link to="/Girl/girl"><span>女主榜</span></Link>
                    <Link to="/XunLianShi/xunlianshi"><span>训练师榜</span></Link>
                    <Link to="/XiYou/xiyou"><span>稀有精灵榜</span></Link>
                </div>
                <div className={ZhanLiCss.divbox2}>
                    <p>所谓实力榜，故名思义就是那些实力十分突出的角色的一个排名。在众多的宝可梦精灵中，哪几个可以摘得实力榜呢？让我们来一起看看吧！</p>
                </div>
                <div>
                    <div>
                        <div>
                            <div className={ZhanLiCss.div01}>
                                <h2>NO.1 超梦</h2>
                            </div>
                            <div className={ZhanLiCss.divbox01}>
                                <img src={img1} />
                            </div>
                            <div className={ZhanLiCss.div2}>
                                <p className={ZhanLiCss.font}>超高的种族值带来压倒性的全方位的性能优势，无论攻守，都很强大，并且还拥有本作少有的“自我再生”。</p>
                            </div>
                        </div>
                        <div>
                            <div className={ZhanLiCss.div01}>
                                <h2>NO.2 阿尔宙斯</h2>
                            </div>
                            <div className={ZhanLiCss.divbox01}>
                                <img src={P2} />
                            </div>
                            <div className={ZhanLiCss.div2}>
                                <p className={ZhanLiCss.font}>阿尔宙斯创造了整个神奇宝贝的世界。同时它也创造了传说神奇宝贝帝牙卢卡、帕路奇犽和骑拉帝纳，让它们掌管时间和空间以及反物质。也创造出由克希，艾姆利多，亚克诺姆，它们代表着知识、感情、意志。传说神奇宝贝也是同时被创造的。</p>
                            </div>
                        </div>
                        <div>
                            <div className={ZhanLiCss.div01}>
                                <h2>NO.3 烈咬陆鲨</h2>
                            </div>
                            <div className={ZhanLiCss.divbox01}>
                                <img src={P4} />
                            </div>
                            <div className={ZhanLiCss.div2}>
                                <p className={ZhanLiCss.font}>烈咬陆鲨，没错，从四代出来开始之后就一直叱咤风云，很多龙系都无法相媲美的卡璞·利亚斯就是指烈咬陆鲨了，烈咬陆鲨一度称霸了PGL的使用率排名，知道被后来的谜拟Q取代，偶尔还会被土猫抢先使用率，不过好像最近烈咬陆鲨的PGL排名已经大不如前了，，但不管怎样，地龙爸爸永远是地龙爸爸，好用是无可厚非的，高打击面以及高物攻下面还有着破100的关键速度，使得烈咬陆鲨不管塞在哪个队伍里都可以发挥出很好的作用，说烈咬陆鲨不好用的，大概还是没有吃过它的地震吧。</p>
                            </div>
                        </div>
                        <div>
                            <div className={ZhanLiCss.div01}>
                                <h2>NO.4 化石翼龙</h2>
                            </div>
                            <div className={ZhanLiCss.divbox01}>
                                <img src={img2} />
                            </div>
                            <div className={ZhanLiCss.div2}>
                                <p className={ZhanLiCss.font}>和Mega进化后的理由接近，首屈一指的高速“挑拨”和高速“岩棱”。</p>
                            </div>
                        </div>
                        <div>
                            <div className={ZhanLiCss.div01}>
                                <h2>NO.5 班吉拉斯</h2>
                            </div>
                            <div className={ZhanLiCss.divbox01}>
                                <img src={P3} />
                            </div>
                            <div className={ZhanLiCss.div2}>
                                <p className={ZhanLiCss.font}>班吉拉斯不是龙系，但是其外表却是实实在在的大恐龙，其实单纯从属性来讲班吉拉斯的抗性并不算好，面对常见的“水地面钢虫草妖精”都被2倍打击，更别说还有一个4倍的草系。但是这依旧掩盖不住班吉拉斯的出色，比赛中常见配招有“咬碎、尖石攻击、岩崩、地震、冰冻拳、龙之舞”等。</p>
                            </div>
                        </div>
                        <div>
                            <div className={ZhanLiCss.div01}>
                                <h2>NO.6 卡比兽</h2>
                            </div>
                            <div className={ZhanLiCss.divbox01}>
                                <img src={img3} />
                            </div>
                            <div className={ZhanLiCss.div2}>
                                <p className={ZhanLiCss.font}>优秀的特耐盾牌。靠着“哈欠”和队友的“岩棱”进行干扰，十分强力，可以学到“自爆”，做出本作最大的本系自爆输出吧。</p>
                            </div>
                        </div>
                        <div>
                            <div className={ZhanLiCss.div01}>
                                <h2>NO.7 吉利蛋</h2>
                            </div>
                            <div className={ZhanLiCss.divbox01}>
                                <img src={img4} />
                            </div>
                            <div className={ZhanLiCss.div2}>
                                <p className={ZhanLiCss.font}>本作最强的特防盾。靠着“地球上投”输出，“毒毒”下异常状态，“生蛋”恢复体力，剩下一招个人推荐对付鬼系毒系的耿鬼，“地球上投”和“毒毒”都没有作用的耿鬼不怕吉利蛋的这两个杀招，可以配“影子球”针对耿鬼盲点。也可以用其他特殊攻击技能期待特效发动。</p>
                            </div>
                        </div>
                        <div>
                            <div className={ZhanLiCss.div01}>
                                <h2>NO.8 呆河马</h2>
                            </div>
                            <div className={ZhanLiCss.divbox01}>
                                <img src={img5} />
                            </div>
                            <div className={ZhanLiCss.div2}>
                                <p className={ZhanLiCss.font}>和Mega进化后的差异是物理耐久，即便没有进化物理耐久依然是非常可靠的水平。靠“哈欠”进行干扰，本身的技巧也非常丰富。</p>
                            </div>
                        </div>
                        <div>
                            <div className={ZhanLiCss.div01}>
                                <h2>NO.9 妙蛙蛤</h2>
                            </div>
                            <div className={ZhanLiCss.divbox01}>
                                <img src={img6} />
                            </div>
                            <div className={ZhanLiCss.div2}>
                                <p className={ZhanLiCss.font}>拥有非常令人讨厌的“催眠粉”和“寄生种子”的搭档，各项能力都很均衡的宝可梦，在队伍中的位置很好调剂。</p>
                            </div>
                        </div>
                        <div>
                            <div className={ZhanLiCss.div01}>
                                <h2>NO.10 巨金怪</h2>
                            </div>
                            <div className={ZhanLiCss.divbox01}>
                                <img src={P1} />
                            </div>
                            <div className={ZhanLiCss.div2}>
                                <p className={ZhanLiCss.font}>巨金怪的话，也跟暴飞龙一样在七代的时候被甩进了UB的小黑屋，但是现在有没有放出来小编就不清楚了，且不说平台，在实机上巨金怪的出场率可是高得惊人的，几乎每两局就可以看到对手的队伍里有一只巨金怪，而这个时候的巨金怪则大部分都是携带进化石的MEGA配置，巨金怪的话，打法自然就没什么好说的，凭借着MGEA之后的特性硬爪的威力加成，然后靠着非常优秀的物攻突突突就是巨金怪的主要打法，有着钢加超能的优秀抗性还有着非常高的物防使得巨金怪也是个非常难啃的大物盾，还有着先制子弹拳可以说是非常可怕了，被甩进小黑屋也不是不无道理。</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={ZhanLiCss.span}>
                        <Link to="/ZhanLi/zhanli" target="_black"><span>上一个</span></Link>
                        <Link to="/ZhanLi/renqi1" target="_black"><span>下一个</span></Link>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
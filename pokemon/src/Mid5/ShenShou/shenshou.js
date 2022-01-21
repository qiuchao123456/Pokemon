import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header/header';
import Footer from '../../Footer/footer';
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


var ShenShouCss = require('./shenshou.css');

export default class ShenShou extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div className={ShenShouCss.div1}>
                    <h1>十大最强神兽</h1>
                </div>
                <div className={ShenShouCss.divbox1}>
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
                            <div className={ShenShouCss.div2}><p className={ShenShouCss.font}>神奇宝可梦作为大家都熟悉的动漫，在动漫里面有着许许多多的宝可梦，他们各不相同，属性不一样，外貌也不一样，自然而然，它们的能力数值都是大不相同的，在宝可梦的世界里，有些宝可梦非常强，可以控制时间和空间，也有的是大海的掌管者，那么今天我们就来看看这些十大最强神兽吧！</p></div>
                            <div>
                                <div className={ShenShouCss.div01}>
                                    <h2>NO1：渡</h2>
                                </div>
                                <div className={ShenShouCss.divbox01}>
                                    <img src={img1}></img>
                                </div>
                                <div className={ShenShouCss.div01}>
                                    <p className={ShenShouCss.font}>虽然是一般属性的传说宝可梦，但是，他可以免疫所有它身上石板的属性，阿尔宙思作为创世神，曾经在超克时空里出现，能力不详，因为可以免疫所有属性的伤害，非常强大，所以能拿第一也是稳的不行。作为宝可梦之神，按理来说攻击能力应该非常强大，但是在动漫里面，它的防御能力却是最强的，身上的石板也是集合了所有已知的属性，所以，说创世神是第一，也是毋庸置疑的。</p>
                                </div>
                            </div>
                            <div>
                                <div className={ShenShouCss.div01}>
                                    <h2>NO2：裂空座</h2>
                                </div>
                                <div className={ShenShouCss.divbox01}>
                                    <img src={img2}></img>
                                </div>
                                <div className={ShenShouCss.div01}>
                                    <p className={ShenShouCss.font}>是一种在接近外太空的神兽，不会在陆上出现，在裂空的访问中出现，曾经击败迪奥西斯，大家都叫他天空龙，因为它在天空的姿态如同龙一般威武！也是很强大的神奇宝贝。</p>
                                </div>
                            </div>
                            <div>
                                <div className={ShenShouCss.div01}>
                                    <h2>NO3：固拉多</h2>
                                </div>
                                <div className={ShenShouCss.divbox01}>
                                    <img src={img3}></img>
                                </div>
                                <div className={ShenShouCss.div01}>
                                    <p className={ShenShouCss.font}>和盖欧亚能力持平的神奇宝可梦，和吉拉一起在七夜许愿一起出现，能力和体型都非常大，固拉多在剧里面拥有巨大的光热之能，可谓是非常强大的神兽了。</p>
                                </div>
                            </div>
                            <div>
                                <div className={ShenShouCss.div01}>
                                    <h2>NO4：梦幻</h2>
                                </div>
                                <div className={ShenShouCss.divbox01}>
                                    <img src={img4}></img>
                                </div>
                                <div className={ShenShouCss.div01}>
                                    <p className={ShenShouCss.font}>作为在世界里被推为世界超级属性的梦幻，可以变成其他的宝可梦，同时还拥有超级能力，在梦幻电影里出现过。</p>
                                </div>
                            </div>
                            <div>
                                <div className={ShenShouCss.div01}>
                                    <h2>NO5：洛奇亚</h2>
                                </div>
                                <div className={ShenShouCss.divbox01}>
                                    <img src={img5}></img>
                                </div>
                                <div className={ShenShouCss.div01}>
                                    <p className={ShenShouCss.font}>动漫里面，它作为海神，掌控大海，在世界被毁灭前出现拯救世界，后续被三神鸟击败，在洛奇亚的爆诞里出现。</p>
                                </div>
                            </div>
                            <div>
                                <div className={ShenShouCss.div01}>
                                    <h2>NO6：雪拉比</h2>
                                </div>
                                <div className={ShenShouCss.divbox01}>
                                    <img src={img6}></img>
                                </div>
                                <div className={ShenShouCss.div01}>
                                    <p className={ShenShouCss.font}>动漫里它有着超时空的超能力，而且，在拉比黑暗状态时，展示了它的超强破坏力！曾经出现在时空遭遇战中。作为超时空的代表，可爱的外表下，就是它强大的力量。</p>
                                </div>
                            </div>
                            <div>
                                <div className={ShenShouCss.div01}>
                                    <h2>NO7：迪奥西斯</h2>
                                </div>
                                <div className={ShenShouCss.divbox01}>
                                    <img src={img7}></img>
                                </div>
                                <div className={ShenShouCss.div01}>
                                    <p className={ShenShouCss.font}>作为动漫里超强的神奇宝可梦，严重伤害了天空龙，不仅如此，它的技能也很强大，还会分身术，曾经在裂空访问的时候，出现并且遇到小智等人。</p>
                                </div>
                            </div>
                            <div>
                                <div className={ShenShouCss.div01}>
                                    <h2>NO8：吉拉祈</h2>
                                </div>
                                <div className={ShenShouCss.divbox01}>
                                    <img src={img8}></img>
                                </div>
                                <div className={ShenShouCss.div01}>
                                    <p className={ShenShouCss.font}>作为剧场版七夜许愿星的猪脚，电影说了吉拉借助彗星的力量苏醒的七天里面，和小智相遇，然后一起旅行的故事。</p>
                                </div>
                            </div>
                            <div>
                                <div className={ShenShouCss.div01}>
                                    <h2>NO9：拉迪傲斯</h2>
                                </div>
                                <div className={ShenShouCss.divbox01}>
                                    <img src={img9}></img>
                                </div>
                                <div className={ShenShouCss.div01}>
                                    <p className={ShenShouCss.font}>这个神兽和上一个亚斯差不多，都很聪明，它可以利用翅膀来进行高速飞行，做到超越飞机的速度，同亚斯一起在水之都守护者一起出现。</p>
                                </div>
                            </div>
                            <div>
                                <div className={ShenShouCss.div01}>
                                    <h2>NO10：拉迪娅斯</h2>
                                </div>
                                <div className={ShenShouCss.divbox01}>
                                    <img src={img10}></img>
                                </div>
                                <div className={ShenShouCss.div01}>
                                    <p className={ShenShouCss.font}>拉迪娅斯这个神兽，智商很高，能够听得懂人类的花，平常依靠能够折射光线的羽毛，来隐藏自己，通过弯曲的羽毛，还可以转变成其他姿态，在剧场版水之都守护神里面和小智相遇！</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={ShenShouCss.span}>
                            <Link to="/ZhanLi/renqi1" target="_black"><span>上一个</span></Link>
                            <Link to="/Girl/girl" target="_black"><span>下一个</span></Link>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
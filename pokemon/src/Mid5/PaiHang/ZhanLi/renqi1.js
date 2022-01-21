import React from 'react';
import Header from '../../../Header/header';
import Footer from '../../../Footer/footer';
import P1 from './1.jpg';
import img1 from './img/ren1.jpg';
import img2 from './img/ren2.jpg';
import img3 from './img/ren3.jpeg';
import img4 from './img/ren4.jpeg';
import img5 from './img/ren5.jpeg';
import img6 from './img/ren6.jfif';
import img7 from './img/ren7.jfif';
import img8 from './img/ren8.jfif';
import img9 from './img/ren9.jfif';
import { Link } from 'react-router-dom';



var RenQiCss = require('./renqi.css')
export default class RenQi extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className={RenQiCss.div1}>
                    <h1>人气排行榜</h1>
                </div>
                <div className={RenQiCss.divbox1}>
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
                            <div className={RenQiCss.div01}>
                                <h2>NO.1 喷火龙</h2>
                            </div>
                            <div className={RenQiCss.div01}>
                                <img src={img1} />
                            </div>
                            <div className={RenQiCss.div2}>
                                <p className={RenQiCss.font}>让人意外的是，排名首位的是喷火龙，而不是皮卡丘，并且它还获得了四成以上压倒性的支持率。</p><p className={RenQiCss.font}>在EP045中,为了与化石翼龙决斗,火恐龙进化成了喷火龙与化石翼龙战斗｡其实在小火龙进化成火恐龙开始便不再听从小智话了，在EP106中曾经在橘子群岛被急冻光线冰冻,小智的悉心照料终于感动了喷火龙｡喷火龙也成为了小智的王牌｡在EP135中,为了让喷火龙更好的修行,小智将它留在了喷火龙山谷｡bw118中重新回到小智身边,并且完虐爱丽丝的快龙。</p>
                            </div>
                        </div>
                        <div>
                            <div className={RenQiCss.div01}>
                                <h2>NO.2 谜拟Q</h2>
                            </div>
                            <div className={RenQiCss.div01}>
                                <img src={P1} />
                            </div>
                            <div className={RenQiCss.div2}>
                                <p className={RenQiCss.font}>不知道大家是不是太心疼谜拟Q的过去而将它投了这么高的名次，因为之所以迷拟Q披上和皮卡丘非常相似的画皮是因为他的人气，迷拟Q虽然比不上皮卡丘可爱，但确实独具魅力，不过看过它的本体的训练家下场都会非常惨，所以除了武藏外真的有人养它么？</p>
                            </div>
                        </div>
                        <div>
                            <div className={RenQiCss.div01}>
                                <h2>NO.3 皮卡丘</h2>
                            </div>
                            <div className={RenQiCss.div01}>
                                <img src={img2} />
                            </div>
                            <div className={RenQiCss.div2}>
                                <p className={RenQiCss.font}>皮卡丘上榜是完全在意料之中的，凭着其可爱呆萌的外表、超强的十万伏特和让人听了都酥了的皮卡皮卡叫声，让它有着很高的人气，且皮卡丘已经成了《精灵宝可梦》的代表角色，也是小智最初选择的宝可梦，与小智共同旅行了20年（作品中的时间线真过分）。不仅仅觉醒了新的技能，还会照料后辈宝可梦，是作品中成长最大的宝可梦。</p>
                            </div>
                        </div>
                        <div>
                            <div className={RenQiCss.div01}>
                                <h2>NO.4 梦幻</h2>
                            </div>
                            <div className={RenQiCss.div01}>
                                <img src={img3} />
                            </div>
                            <div className={RenQiCss.div2}>
                                <p className={RenQiCss.font}>日本投票的第三名是皮卡丘，第五名才是梦幻，而海外的第四名则就已经是梦幻了，实际上梦幻在宝可梦圈的影响力可不仅仅限于日本，特别是在初代，梦幻那个时候是属于非常珍贵的存在，而在欧美，梦幻更是很多宝可梦爱好者经常讨论的话题，且海外版的玩家对于配信宝可梦更加热衷，这也就不难理解为什么官方配信活动中，欧美版总会有那么多的福利了。</p>
                            </div>
                        </div>
                        <div>
                            <div className={RenQiCss.div01}>
                                <h2>NO.5 鲤鱼王</h2>
                            </div>
                            <div className={RenQiCss.div01}>
                                <img src={img4} />
                            </div>
                            <div className={RenQiCss.div2}>
                                <p className={RenQiCss.font}>没错，排名第五的自然就是文章标题说到的鲤鱼王了，鲤鱼王能够上榜倒也不是那么奇怪，其上榜的理由跟百变怪是有类似的地方的，在很多的恶搞视频里（特别是欧美玩家制作的视频），鲤鱼王都是首当其冲的受害者，果然真的是爱得越深，也就黑得越惨了。</p>
                            </div>
                        </div>
                        <div>
                            <div className={RenQiCss.div01}>
                                <h2>NO.6 阿尔宙斯</h2>
                            </div>
                            <div className={RenQiCss.div01}>
                                <img src={img5} />
                            </div>
                            <div className={RenQiCss.div2}>
                                <p className={RenQiCss.font}>不管是海外的投票还是日本网民的投票，阿尔宙斯都位于投票的票数最高，原因就在于旧世代全球连接那时候阿尔宙斯确实是被推上了最强宝可梦的位置，总种族值每项都120让很多宝可梦都望尘莫及，而官方给了阿尔宙斯的设定就是创造了宝可梦世界的创世神，这样的设定也直接让阿尔宙斯成为了宝可梦世界里最至高无上的存在，喜欢它的人自然就多了。</p>
                            </div>
                        </div>
                        <div>
                            <div className={RenQiCss.div01}>
                                <h2>NO.7 可达鸭</h2>
                            </div>
                            <div className={RenQiCss.div01}>
                                <img src={img6} />
                            </div>
                            <div className={RenQiCss.div2}>
                                <p className={RenQiCss.font}>可达鸭真的一出场就非常招人喜欢呢！如果指外表的话真的是天然呆又萌的可爱。但真要说它最受欢迎的特点应该是一副天真无邪的傻傻模样吧，还有一套表情包引来一帮漫迷，可达鸭总是动不动就惹小霞生气，但它本身也没做什么。既是小霞的烦恼也是小霞的王牌之一。</p>
                            </div>
                        </div>
                        <div>
                            <div className={RenQiCss.div01}>
                                <h2>NO.8 喵喵</h2>
                            </div>
                            <div className={RenQiCss.div01}>
                                <img src={img7} />
                            </div>
                            <div className={RenQiCss.div2}>
                                <p className={RenQiCss.font}>一只会说人话的的精灵，它的爱情很坎坷，被爱情抛弃，幸好，它有一帮好损友，虽然每次任务都没有完成，三人相依为命，也是这部剧中最大的看点，在队伍中担任军师一职，一只高智商精灵同时也是名副其实的穷屌丝。</p>
                            </div>
                        </div>
                        <div>
                            <div className={RenQiCss.div01}>
                                <h2>NO.9 胖丁</h2>
                            </div>
                            <div className={RenQiCss.div01}>
                                <img src={img8} />
                            </div>
                            <div className={RenQiCss.div2}>
                                <p className={RenQiCss.font}>一只粉色球状神奇宝贝，有猫耳朵却不是猫。它的体内都是空气，风一吹就飘远。当她不高兴时，身体会涨大来发泄情绪。梦想成为一名歌星，但其实是一名催眠师。它的歌声具有催眠功效会让人睡着，在此献给失眠人士。</p>
                            </div>
                        </div>
                        <div>
                            <div className={RenQiCss.div01}>
                                <h2>NO.10 雷伊布</h2>
                            </div>
                            <div className={RenQiCss.div01}>
                                <img src={img9} />
                            </div>
                            <div className={RenQiCss.div2}>
                                <p className={RenQiCss.font}>伊布在接触雷之石时进化成雷伊布，属电系神奇宝贝。心情兴奋的时候，会射出许多带有电气而变得笔直的体毛。当电力在体内蓄积时，浑身上下竖立的毛发就会像导弹一样一根根发射出去。</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={RenQiCss.span}>
                        <Link to="/ZhanLi/zhanli" target="_black"><span>上一个</span></Link>
                        <Link to="/ShenShou/shenshou" target="_black"><span>下一个</span></Link>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
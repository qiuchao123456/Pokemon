import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header/header';
import Footer from '../../Footer/footer';
import img1 from './img/1.jpeg';
import img2 from './img/2.png';
import img3 from './img/34.jpeg';
import img4 from './img/5.jpeg';
import img5 from './img/6.jpeg';
import img6 from './img/78.jpeg';
import img7 from './img/9.jpeg';
import img8 from './img/10.jpeg';


var XiYouCss = require('./xiyou.css');

export default class extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div className={XiYouCss.div1}>
                    <h1>稀有榜</h1>
                </div>
                <div className={XiYouCss.divbox1}>
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
                            <div className={XiYouCss.div2}><p className={XiYouCss.font}>精灵宝可梦go稀有精灵排行榜是什么样的呢?日本玩家总结出来的最难拥有的稀有精灵排行榜，大家是不是很想知道呢!那么现在手机玩小编就为大家带来稀有精灵top10详解咯!</p></div>
                            <div>
                                <div className={XiYouCss.div01}>
                                    <h2>NO1：百变怪</h2>
                                </div>
                                <div className={XiYouCss.divbox01}>
                                    <img src={img1}></img>
                                </div>
                                <div className={XiYouCss.div01}>
                                    <p className={XiYouCss.font}>目前为止还没有被抓过，甚至连碰都没碰过的就是百变怪，因为情报还过少，所以暂时排在第一名。之前那个美国抓齐142只的大师也没有百变怪。(这是绿茶小编以前看动画的时候最想要的一只神奇宝贝了，拥有它就拥有所有神奇宝贝，不是吗?)</p>
                                </div>
                            </div>
                            <div>
                                <div className={XiYouCss.div01}>
                                    <h2>NO2：快龙</h2>
                                </div>
                                <div className={XiYouCss.divbox01}>
                                    <img src={img2}></img>
                                </div>
                                <div className={XiYouCss.div01}>
                                    <p className={XiYouCss.font}>收集迷你龙32只之后可以进化，但迷你龙也是被稀有类型的小精灵，入手难度相对高，不过快龙能力值却是一等一的，所以如果遇到有迷你龙出现的地方，建议可以多绕几回，绝对不会后悔，排第二名。</p>
                                </div>
                            </div>
                            <div>
                                <div className={XiYouCss.div01}>
                                    <h2>NO3、4：卡比兽&吉利蛋</h2>
                                </div>
                                <div className={XiYouCss.divbox01}>
                                    <img src={img3}></img>
                                </div>
                                <div className={XiYouCss.div01}>
                                    <p className={XiYouCss.font}>卡比兽和吉利蛋都是能从蛋孵化后获得的小精灵，但10KM的蛋很难得，孵出来的话很幸运、遇到的话也幸运，抓到的话更幸运!排第三、四名。(卡比兽实在是萌呆了，绿茶小编表示hole不住了)</p>
                                </div>
                            </div>
                            <div>
                                <div className={XiYouCss.div01}>
                                    <h2>NO5：胡地</h2>
                                </div>
                                <div className={XiYouCss.divbox01}>
                                    <img src={img4}></img>
                                </div>
                                <div className={XiYouCss.div01}>
                                    <p className={XiYouCss.font}>玩过pokemon系列游戏的人应该都知道凯西这只小精灵，如果不用比凯西还要快的小精灵让凯西睡着，凯西就会直接瞬间移动跑掉，在《Pokémon Go》里也一样，然后还要收集32只…，排第五名。</p>
                                </div>
                            </div>
                            <div>
                                <div className={XiYouCss.div01}>
                                    <h2>NO6：乘龙</h2>
                                </div>
                                <div className={XiYouCss.divbox01}>
                                    <img src={img5}></img>
                                </div>
                                <div className={XiYouCss.div01}>
                                    <p className={XiYouCss.font}>水系小精灵可以在水边、河边、海边、甚至沼地都可能遇的到，但乘龙在水系里面又被分到稀有类型，所以把它排在第六名，如果真的想抓的话可以去沿海城市。</p>
                                </div>
                            </div>
                            <div>
                                <div className={XiYouCss.div01}>
                                    <h2>NO7、8：艾比郎&沙瓦郎</h2>
                                </div>
                                <div className={XiYouCss.divbox01}>
                                    <img src={img6}></img>
                                </div>
                                <div className={XiYouCss.div01}>
                                    <p className={XiYouCss.font}>虽然听说在城市地带还比较好遇到的，但在城市地区会遭遇的小精灵可不是只有艾比郎和沙瓦朗的，所以排第七、八名。</p>
                                </div>
                            </div>
                            <div>
                                <div className={XiYouCss.div01}>
                                    <h2>NO9：隆隆岩</h2>
                                </div>
                                <div className={XiYouCss.divbox01}>
                                    <img src={img7}></img>
                                </div>
                                <div className={XiYouCss.div01}>
                                    <p className={XiYouCss.font}>如果想拿到第三型态的小精灵的话，就必须抓32只第一型态的小精灵才可以进化。虽然小拳石真的满地都是，尤其是在山区或是沙漠地带真的很多，但似乎没什么人把他进化成隆隆岩，只有在网络上看过一张照片而已，不过想拿到隆隆岩的话，收集32只小拳石相对起来也比较快，排第九名。</p>
                                </div>
                            </div>
                            <div>
                                <div className={XiYouCss.div01}>
                                    <h2>NO10：化石翼龙</h2>
                                </div>
                                <div className={XiYouCss.divbox01}>
                                    <img src={img8}></img>
                                </div>
                                <div className={XiYouCss.div01}>
                                    <p className={XiYouCss.font}>很多人说没有抓到化石翼龙，不过其他上传《Pokémon Go》视频的玩家们都有抓到，走一走就抓到的机率其实也不低，所以排在第10名。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={XiYouCss.span}>
                            <Link to="/XunLianShi/xunlianshi" target="_black"><span>上一个</span></Link>
                            <Link to="/XiYou/xiyou" target="_black"><span>下一个</span></Link>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
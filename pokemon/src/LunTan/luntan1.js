import React from 'react';
import Header from './../Header/header';
import Footer from './../Footer/footer';
import { Link } from 'react-router-dom';
import Img1 from './1.png';
import Img2 from './2.jpg';
import Img3 from './3.png';
import Img4 from './4.jpg';
import Img5 from './5.png';
import Img6 from './6.png';
import Img7 from './7.png';
import Img8 from './8.webp';
import Img9 from './9.png';
import Img10 from './10.webp';
import Img11 from './img/11.png';
import Img12 from './img/12.jpg';
import Img13 from './img/13.jpg';
import Img14 from './img/14.jpg';
import Img15 from './img/15.jpg';
import lou1 from './img/1louping.png';
import lou2 from './img/2louping.png';
import lou3 from './img/3louping.png';
import lou4 from './img/4louping.png';
import lou5 from './img/5louping.png';
import lou6 from './img/6louping.png';
import lou7 from './img/7louping.png';

var LunTan1Css = require("./luntan1.css");

export default class LunTan1 extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className={LunTan1Css.div1}>
                    最新论坛
                </div>
                <div className={LunTan1Css.div0}>
                    <div className={LunTan1Css.div2}>
                        公<br />告
                    </div>
                    <div className={LunTan1Css.div3}>
                        1:由于免费开放评论区，遭到部分微友恶意打广告及发布危害社会的语言，现在开启评论审核功能！凡是提交评论，都需要经过网站管理员审核，才能显示出来！
                        <br />
                        2:维护健康网站的发展，是我们所有人的责任与义务，希望人人从自身做起，维护及健康上网！
                        <br />
                        3:论坛将严格执行规定，删除各类形式的广告!同时抱着开放的心态，欢迎各位新老会员交流和讨论！
                    </div>
                </div>
                <div className={LunTan1Css.clearfix}></div>
                <div className={LunTan1Css.div4}>
                    <div className={LunTan1Css.div5}>精彩评论:</div>
                    <div className={LunTan1Css.clearfix}></div>
                    <div className={LunTan1Css.divbox1}>
                        <div className={LunTan1Css.div6}>
                            <img src={Img1} />
                            <span class={LunTan1Css.span}>游客1：</span>
                            美洛耶塔变身 好看只要点一个赞 集齐一百个赞 我再发几个伊布进化的图片。
                        </div>
                        <div className={LunTan1Css.div6}>
                            <img src={Img2} />
                            <img src={lou1} className={LunTan1Css.img2}></img>
                        </div>
                        <div className={LunTan1Css.div6}>
                            <img src={Img3} />
                            <span class={LunTan1Css.span}>游客2：</span>
                            第一次画快龙，怕即荔枝，梦幻，皮卡丘， 请见谅
                        </div>
                        <div className={LunTan1Css.div6}>
                            <img src={Img4} />
                            <img src={lou2} className={LunTan1Css.img3}></img>
                        </div>
                        <div className={LunTan1Css.div6}>
                            <img src={Img5} />
                            <span class={LunTan1Css.span}>游客3：</span>
                            [艾莉丝那集有快龙的]求看过的告诉我。。。
                            <img src={lou3} className={LunTan1Css.img4}></img>
                        </div>
                        <div className={LunTan1Css.div6}>
                            <img src={Img6} />
                            <span class={LunTan1Css.span}>游客4：</span>
                            谁能告诉我小智收服精灵和精灵进化是在什么时候?
                            <img src={lou4} class={LunTan1Css.img4}></img>
                        </div>
                        <div className={LunTan1Css.div6}>
                            <img src={Img7} />
                            <span class={LunTan1Css.span}>游客5：</span>
                            一枚胖子来报到~ 现在体重83 目标是收养一只宝可梦，求大伙推荐一波！！！
                        </div>
                        <div className={LunTan1Css.div6}>
                            <img src={Img8} />
                            <img src={lou5} class={LunTan1Css.img2}></img>
                        </div>
                        <div className={LunTan1Css.div6}>
                            <img src={Img9} />
                            <span class={LunTan1Css.span}>游客5：</span>
                            好喜欢皮卡丘萌萌哒！大爱皮卡丘，皮卡、皮卡~~~
                        </div>
                        <div className={LunTan1Css.div6}>
                            <img src={Img10} />
                            <img src={lou6} class={LunTan1Css.img2}></img>
                        </div>
                        <div className={LunTan1Css.div6}>
                            <img src={Img11} />
                            <span class={LunTan1Css.span}>游客6：</span>
                            各位宝可梦的情敌们，拔剑吧！皮卡丘是我的，你们都别想了
                            <img src={lou6} class={LunTan1Css.img4}></img>
                        </div>
                        <div className={LunTan1Css.div6}>
                            <img src={Img12} />
                            <span class={LunTan1Css.span}>游客7：</span>
                            刚看了《大侦探皮卡丘》，真的被萌化了，感谢宝可梦陪伴了我一路走来，每次看到他们都是满满的感动，一切的不开心全都没有了，加油！宝可梦...
                            <img src={lou7} class={LunTan1Css.img5}></img>
                        </div>
                    </div>
                    <div className={LunTan1Css.divbox3}>输入你的评论：</div>
                    <div className={LunTan1Css.btn4}>
                        <input type="text" className={LunTan1Css.btn1} value="请填写标题" />
                    </div>
                    <div>
                        <textarea rows="10" cols="80" className={LunTan1Css.btn2}>内容</textarea><br />
                        <input type="button" value="发表"  className={LunTan1Css.btn3}></input>
                    </div>
                </div>
                <div className={LunTan1Css.divbox4}>
                    <Link to="/LunTan/luntan1" target="_black">回到顶部>></Link>
                </div>
                <Footer />
            </div>
        )
    }
}
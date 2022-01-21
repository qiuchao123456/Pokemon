import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header/header';
import Footer from '../../Footer/footer';

import Img1 from './img/g01.jpg';
import Img2 from './img/g11.jpg';
import Img3 from './img/g02.jpg';
import Img4 from './img/g22.jpg';
import Img5 from './img/g03.jpg';
import Img6 from './img/g33.jpg';
import Img7 from './img/g04.jpg';
import Img8 from './img/g44.jpg';
import Img9 from './img/g05.jpg';
import Img10 from './img/g55.jpg';
import Img11 from './img/g06.jpg';
import Img12 from './img/g66.jpg';
import Img13 from './img/g07.jpg';
import Img14 from './img/g77.jpg';
import Img15 from './img/g08.jpg';
import Img16 from './img/g88.jpg';
import Img17 from './img/g09.jpg';
import Img18 from './img/g99.jpg';
import Img19 from './img/g10.jpg';
import Img20 from './img/g101.jpg';

var GirlCss = require('./girl.css');

export default class Girl extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div className={GirlCss.div1}>
                    <h1>最美女主榜</h1>
                </div>
                <div className={GirlCss.divbox1}>
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
                            <div className={GirlCss.div01}>
                                <h2>NO.1 Lovable and charming villain role 小次郎</h2>
                            </div>
                            <div className={GirlCss.div01}>
                                <img src={Img1} />
                            </div>
                            <div className={GirlCss.div01}>
                                <img src={Img2} />
                            </div>
                            <div className={GirlCss.div01}>
                                <h2>NO.2 仙系道馆馆主兼服装设计师玛绣大人</h2>
                            </div>
                            <div className={GirlCss.div01}>
                                <img src={Img3} />
                            </div>
                            <div className={GirlCss.div01}>
                                <img src={Img4} />
                            </div>
                            <div className={GirlCss.div01}>
                                <h2>NO.3 瑟妹子</h2>
                            </div>
                            <div className={GirlCss.div01}>
                                <img src={Img5} />
                            </div>
                            <div className={GirlCss.div01}>
                                <img src={Img6} />
                            </div>
                            <div className={GirlCss.div01}>
                                <h2>NO.4 可尔妮</h2>
                            </div>
                            <div className={GirlCss.div01}>
                                <img src={Img7} />
                            </div>
                            <div className={GirlCss.div01}>
                                <img src={Img8} />
                            </div>
                            <div className={GirlCss.div01}>
                                <h2>NO.5 虫系道馆馆主 紫罗兰</h2>
                            </div>
                            <div className={GirlCss.div01}>
                                <img src={Img9} />
                            </div>
                            <div className={GirlCss.div01}>
                                <img src={Img10} />
                            </div>
                            <div className={GirlCss.div01}>
                                <h2>NO.6 虫系道馆馆主 紫罗兰</h2>
                            </div>
                            <div className={GirlCss.div01}>
                                <img src={Img11} />
                            </div>
                            <div className={GirlCss.div01}>
                                <img src={Img12} />
                            </div>
                            <div className={GirlCss.div01}>
                                <h2>NO.7 米茹菲 萌萌猫星脸妹子</h2>
                            </div>
                            <div className={GirlCss.div01}>
                                <img src={Img13} />
                            </div>
                            <div className={GirlCss.div01}>
                                <img src={Img14} />
                            </div>
                            <div className={GirlCss.div01}>
                                <h2>NO.8 尤利嘉选的大姐姐 蕾娜</h2>
                            </div>
                            <div className={GirlCss.div01}>
                                <img src={Img15} />
                            </div>
                            <div className={GirlCss.div01}>
                                <img src={Img16} />
                            </div>
                            <div className={GirlCss.div01}>
                                <h2>NO.9 宠物小精灵美容师洁西卡</h2>
                            </div>
                            <div className={GirlCss.div01}>
                                <img src={Img17} />
                            </div>
                            <div className={GirlCss.div01}>
                                <img src={Img18} />
                            </div>
                            <div className={GirlCss.div01}>
                                <h2>NO.10 幼儿园老师</h2>
                            </div>
                            <div className={GirlCss.div01}>
                                <img src={Img19} />
                            </div>
                            <div className={GirlCss.div01}>
                                <img src={Img20} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={GirlCss.span}>
                            <Link to="/ShenShou/shenshou" target="_black"><span>上一个</span></Link>
                            <Link to="/XunLianShi/xunlianshi" target="_black"><span>下一个</span></Link>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
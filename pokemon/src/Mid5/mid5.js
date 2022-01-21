import React from 'react';
import Img from './1.png';
import { Link } from 'react-router-dom';

var Mid5Css = require('./mid5.css');
export default class Mid5 extends React.Component {
    render() {
        return (
            <div>
                <div className={Mid5Css.h1}><h1>排行榜</h1></div>
                <div className={Mid5Css.p1}><p>这里收集了一些宝可梦们小精灵们的一些排行情况，快来跟我一起去看看吧！</p></div>
                <div className={Mid5Css.div1}>
                    <div className={Mid5Css.div3}>
                        <div className={Mid5Css.div5}>
                            <img src={Img} />
                        </div>
                        <div>
                            <div className={Mid5Css.main}>
                                <Link to="/ZhanLi/zhanli" target="_black">实力榜</Link>
                            </div>
                            <div className={Mid5Css.main}>
                                <Link to="/ZhanLi/renqi1" target="_black">人气榜</Link>
                            </div>
                            <div className={Mid5Css.main}>
                                <Link to="/ShenShou/shenshou" target="_black">神兽榜</Link>
                            </div>
                            <div className={Mid5Css.main}>
                                <Link to="/Girl/girl" target="_black">女主榜</Link>
                            </div>
                            <div className={Mid5Css.main}>
                                <Link to="/XunLianShi/xunlianshi" target="_black">训练榜</Link>
                            </div>
                            <div className={Mid5Css.main}>
                                <Link to="/XiYou/xiyou" target="_black">稀有榜</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={Mid5Css.span1}><Link to="/ZhanLi/zhanli" target="_black"><span>详情>></span></Link></div>
            </div>
        )
    }
}
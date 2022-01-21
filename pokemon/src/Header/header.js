import React from 'react';
import logo from './logo.jpeg';
import { Link } from 'react-router-dom';

var HeaderCss = require('./header.css')

export default class Header extends React.Component {
    render() {
        return (
            <div className={HeaderCss.header}>
                <div>
                    <div className={HeaderCss.imglogobox}>
                        <img src={logo} height="80px" width="284px"></img>
                    </div>

                    <div className={HeaderCss.ulbox}>
                        <ul>
                            <li>
                                <Link to='/homepage' className={HeaderCss.headbox}>宝可梦首页</Link>
                                <div className={HeaderCss.menu}>
                                    <span><Link to='/homepage'>首页</Link></span><br />
                                    <span><Link to='/LunTan/luntan1'>精灵论坛</Link></span><br />
                                </div>
                            </li>


                            <li>
                                <Link to="/PuTong/putong" className={HeaderCss.headbox}>属性小讲堂</Link>
                                <div className={HeaderCss.menu}>
                                    <span><Link to="/PuTong/putong">普通</Link></span><br />
                                    <span><Link to="/Fire/fire">火系</Link></span><br />
                                    <span><Link to="/Water/water">水系</Link></span><br />
                                    <span><Link to="/Dian/dian">电系</Link></span><br />
                                    <span><Link to="/Grass/grass">草系</Link></span><br />
                                    <span><Link to="/Ice/ice">冰系</Link></span><br />
                                    <span><Link to="/GeDou/gedou">格斗系</Link></span><br />
                                    <span><Link to="/Du/du">毒系</Link></span><br />
                                    <span><Link to="/PuTong/putong">更多>></Link></span>
                                </div>
                            </li>




                            <li>
                                <Link to="/StoryOne/one" className={HeaderCss.headbox}>故事简介</Link>
                                <div className={HeaderCss.menu}>
                                    <span><Link to="/StoryOne/one">第1季</Link></span><br />
                                    <span><Link to="/StoryTwo/storytwo">第2季</Link></span><br />
                                    <span><Link to="/StoryThree/storythree">第3季</Link></span><br />
                                    <span><Link to="/StoryFour/storyfour">第4季</Link></span><br />
                                    <span><Link to="/StorySuperHope/storysuperhope">超级愿望</Link></span><br />
                                    <span><Link to="/StoryXY/storyXY">XY</Link></span><br />
                                    <span><Link to="/StoryXY2/storyXY2">XY2</Link></span><br />
                                    <span><Link to="/StoryXYZ/storyXYZ">XY&Z</Link></span><br />
                                    <span><Link to="/StorySunMoon/storysunmoon">太阳&月亮</Link></span><br />
                                </div>
                            </li>

                            <li>
                                <Link href="http://wiki.52poke.com/wiki/%E5%AE%9D%E5%8F%AF%E6%A2%A6%E5%88%97%E8%A1%A8%EF%BC%88%E6%8C%89%E5%85%A8%E5%9B%BD%E5%9B%BE%E9%89%B4%E7%BC%96%E5%8F%B7%EF%BC%89" className={HeaderCss.headbox}>精灵图鉴</Link>
                                <div>

                                </div>
                            </li>
                            <li>
                                <Link href="" className={HeaderCss.headbox}>关于我们</Link>
                                <div className={HeaderCss.menu}>
                                    <span><Link to="/XiangKeBiao/xiangkebiao">属性相克表</Link></span><br />
                                    <span><Link to="/LianXi/lianxi">联系我们</Link></span><br />
                                </div>
                            </li>
                            <li width="40px">
                                <Link to="/ZhanLi/zhanli" className={HeaderCss.headbox}>排行榜</Link>
                                <div className={HeaderCss.menu}>
                                    <span><Link to="/ZhanLi/zhanli">实力榜</Link></span><br />
                                    <span><Link to="/ZhanLi/renqi1">人气榜</Link></span><br />
                                    <span><Link to="/ShenShou/shenshou">神兽榜</Link></span><br />
                                    <span><Link to="/Girl/girl">女主榜</Link></span><br />
                                    <span><Link to="/XunLianShi/xunlianshi">训练师榜</Link></span><br />
                                    <span><Link to="/XiYou/xiyou">稀有精灵榜</Link></span><br />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
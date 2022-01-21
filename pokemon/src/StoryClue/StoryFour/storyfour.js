import React from 'react';
import StoryFourImg from './../StoryFour/1.jpg';
import AnNue from './../StoryFour/2.jpg';
import Header from './../../Header/header';
import Footer from './../../Footer/footer';
import {Link} from 'react-router-dom';

var StoryFourCss = require('./../StoryFour/storyfour.css');

export default class StoryFour extends React.Component{
    render(){
        return(
            <div>
               <Header></Header>
               <div>
                   <div className={StoryFourCss.divbox1}><h1>《精灵宝可梦》第四季</h1></div>
                   <div className={StoryFourCss.divbox2}>
                   <Link to="/StoryOne/one"><span>第一季</span></Link>
                   <Link to="/StoryTwo/storytwo"><span>第二季</span></Link>
                   <Link to="/StoryThree/storythree"><span>第三季</span></Link>
                   <Link to="/StoryFour/storyfour"><span>第四季</span></Link>
                   <Link to="/StorySuperHope/storysuperhope"><span>超级愿望</span></Link>
                   <Link to="/StoryXY/storyXY"><span>XY</span></Link>
                   <Link to="/StoryXY2/storyXY2"><span>XY2</span></Link>
                   <Link to="/StoryXYZ/storyXYZ"><span>XY&Z</span></Link>
                   <Link to="/StorySunMoon/storysunmoon"><span>太阳和月亮</span></Link>
                   </div>
                   <div>
                       <h2>-------------第四季-------------</h2>
                       <img src={StoryFourImg} className={StoryFourCss.img1}></img>
                       <p className={StoryFourCss.p1}>本次的故事发生在全新的冒险舞台——“合众地方”。其蓝本是第五世代游戏（口袋妖怪黑白）。小智与皮卡丘和新伙伴艾莉丝、天桐一起展开为了追寻梦想和冒险以及和各种各样神奇宝贝的邂逅的旅行。</p>
                   </div>
                   <div>
                       <div className={StoryFourCss.divbox3}>
                       <Link to="/StoryThree/storythree" target="_black">上一季</Link>
                       <Link to="/StorySuperHope/storysuperhope" target="_black">下一季</Link>
                        </div>
                   </div>
                   <div>
                       <p className={StoryFourCss.p2}>点击这里立即观看精彩剧情</p>
                       <div className={StoryFourCss.divbox4}><a href="https://v.qq.com/detail/h/hibacbz0801byjb.html"><img src={AnNue} className={StoryFourCss.img2}></img></a></div>
                   </div>
               </div>
               <Footer></Footer>
            </div>
        )
    }
}
import React from 'react';
import StorySunMoonImg from './../StorySunMoon/1.jpg';
import AnNue from './../StorySunMoon/2.jpg';
import Header from './../../Header/header';
import Footer from './../../Footer/footer';
import {Link} from 'react-router-dom';

var StorySunMoonCss = require('./../StorySunMoon/storysunmoon.css');

export default class StorySunMoon extends React.Component{
    render(){
        return(
            <div>
               <Header></Header>
               <div>
                   <div className={StorySunMoonCss.divbox1}><h1>《精灵宝可梦》太阳和月亮</h1></div>
                   <div className={StorySunMoonCss.divbox2}>
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
                       <h2>-------------太阳和月亮-------------</h2>
                       <img src={StorySunMoonImg} className={StorySunMoonCss.img1}></img>
                       <p className={StorySunMoonCss.p1}>小智与皮卡丘新的冒险开始了！ 新的冒险舞台是自然资源丰富的阿罗拉地区。在阿罗拉地区这个四处都是蔚蓝的天空和蓝色的大海的地方，等待着小智和皮卡丘的是？ 新的精灵宝可梦，新的伙伴，以及新的经历……新的冒险旅程终于拉开了帷幕！ 去吧！全力！大冒险！！
</p>
                   </div>
                   <div>
                       <div className={StorySunMoonCss.divbox3}>
                       <Link to="/StoryXYZ/storyXYZ" target="_black">上一季</Link>
                           <a href="">下一季</a>
                        </div>
                   </div>
                   <div>
                       <p className={StorySunMoonCss.p2}>点击这里立即观看精彩剧情</p>
                       <div className={StorySunMoonCss.divbox4}><a href="https://v.qq.com/detail/8/8rbtcil5a2heb7d.html"><img src={AnNue} className={StorySunMoonCss.img2}></img></a></div>
                   </div>
               </div>
               <Footer></Footer>
            </div>
        )
    }
}
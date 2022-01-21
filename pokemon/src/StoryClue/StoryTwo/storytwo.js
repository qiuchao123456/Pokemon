import React from 'react';
import StoryTwoImg from './../StoryTwo/1.jpg';
import AnNue from './../StoryTwo/2.jpg';
import Header from './../../Header/header';
import Footer from './../../Footer/footer';
import {Link} from 'react-router-dom';

var StoryTwoCss = require('./../StoryTwo/storytwo.css');

export default class StoryTwo extends React.Component{
    render(){
        return(
            <div>
               <Header></Header>
               <div>
                   <div className={StoryTwoCss.divbox1}><h1>《精灵宝可梦》第二季</h1></div>
                   <div className={StoryTwoCss.divbox2}>
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
                       <h2>-------------第二季-------------</h2>
                       <img src={StoryTwoImg} className={StoryTwoCss.img1}></img>
                       <p className={StoryTwoCss.p1}>《神奇宝贝超世代》是系列动画《神奇宝贝》第二部。其蓝本是第四世代游戏（口袋妖怪宝石版）在此系列中，无印篇的女同伴小霞不再跟着小智，而橙华市的新手训练家小遥加入队伍。小遥本来只打算旅行，但得知神奇宝贝华丽大赛后，就决定成为协调训练家。小遥的弟弟，小胜也跟着他们旅行，还带着神奇宝贝领航员。不过，因为小胜年龄不足，所以没有神奇宝贝。小智的伙伴，小刚也在此系列的开端回来。</p>
                   </div>
                   <div>
                       <div className={StoryTwoCss.divbox3}>
                           <Link to="/StoryOne/one" target="_black">上一季</Link>
                           <Link to="/StoryThree/storythree" target="_black">下一季</Link>
                        </div>
                   </div>
                   <div>
                       <p className={StoryTwoCss.p2}>点击这里立即观看精彩剧情</p>
                       <div className={StoryTwoCss.divbox4}><a href="https://v.qq.com/detail/9/9yfjl0rjm0l5tys.html"><img src={AnNue} className={StoryTwoCss.img2}></img></a></div>
                   </div>
               </div>
               <Footer></Footer>
            </div>
        )
    }
}
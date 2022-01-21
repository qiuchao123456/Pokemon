import React from 'react';
import StoryXYZImg from './../StoryXYZ/1.jpg';
import AnNue from './../StoryXYZ/2.jpg';
import Header from './../../Header/header';
import Footer from './../../Footer/footer';
import {Link} from 'react-router-dom';

var StoryXYZCss = require('./../StoryXYZ/storyXYZ.css');

export default class StoryXYZ extends React.Component{
    render(){
        return(
            <div>
               <Header></Header>
               <div>
                   <div className={StoryXYZCss.divbox1}><h1>《精灵宝可梦》XY&Z</h1></div>
                   <div className={StoryXYZCss.divbox2}>
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
                       <h2>-------------XY&Z-------------</h2>
                       <img src={StoryXYZImg} className={StoryXYZCss.img1}></img>
                       <p className={StoryXYZCss.p1}>《精灵宝可梦XY&Z》讲述主人公小智揭开从来没有任何人看到过的传说中的神兽Zygarde隐藏的秘密，并且与神秘组织“闪光团”展开激战的故事。小智的精灵甲贺忍蛙出现了不可思议的变化。</p>
                   </div>
                   <div>
                       <div className={StoryXYZCss.divbox3}>
                       <Link to="/StoryXY2/storyXY2" target="_black">上一季</Link>
                       <Link to="/StorySunMoon/storysunmoon" target="_black">下一季</Link>
                        </div>
                   </div>
                   <div>
                       <p className={StoryXYZCss.p2}>点击这里立即观看精彩剧情</p>
                       <div className={StoryXYZCss.divbox4}><a href="https://v.qq.com/detail/o/o638xbha5jz73ya.html"><img src={AnNue} className={StoryXYZCss.img2}></img></a></div>
                   </div>
               </div>
               <Footer></Footer>
            </div>
        )
    }
}
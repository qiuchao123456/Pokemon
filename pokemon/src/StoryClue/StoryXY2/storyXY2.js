import React from 'react';
import StoryXY2Img from './../StoryXY2/1.jpg';
import AnNue from './../StoryXY2/2.jpg';
import Header from './../../Header/header';
import Footer from './../../Footer/footer';
import {Link} from 'react-router-dom';

var StoryXY2Css = require('./../StoryXY2/storyXY2.css');

export default class StoryXY2 extends React.Component{
    render(){
        return(
            <div>
               <Header></Header>
               <div>
                   <div className={StoryXY2Css.divbox1}><h1>《精灵宝可梦》XY2</h1></div>
                   <div className={StoryXY2Css.divbox2}>
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
                       <h2>-------------XY2-------------</h2>
                       <img src={StoryXY2Img} className={StoryXY2Css.img1}></img>
                       <p className={StoryXY2Css.p1}>《精灵宝可梦XY2》是宝可梦游戏改编电视动画连续剧的第五部，主题是“美丽”，“羁绊”，“进化”，伴随而来的是明显的画质提升、着重针对人物心理的描写和全新的剧情设定。动画主角一如既往是小智和皮卡丘，旅行的搭档则是来自于卡洛斯地方的新伙伴莎莉娜、希特隆和柚丽嘉。</p>
                   </div>
                   <div>
                       <div className={StoryXY2Css.divbox3}>
                       <Link to="/StoryXY/storyXY" target="_black">上一季</Link>
                       <Link to="/StoryXYZ/storyXYZ" target="_black">下一季</Link>
                        </div>
                   </div>
                   <div>
                       <p className={StoryXY2Css.p2}>点击这里立即观看精彩剧情</p>
                       <div className={StoryXY2Css.divbox4}><a href="https://www.iqiyi.com/a_19rrh9xegx.html"><img src={AnNue} className={StoryXY2Css.img2}></img></a></div>
                   </div>
               </div>
               <Footer></Footer>
            </div>
        )
    }
}
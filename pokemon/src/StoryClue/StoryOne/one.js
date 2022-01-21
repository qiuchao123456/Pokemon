import React from 'react';
import StoryOneImg from './../StoryOne/1.jpg';
import AnNue from './../StoryOne/2.jpg';
import Header from './../../Header/header';
import Footer from './../../Footer/footer';
import {Link} from 'react-router-dom';

var StoryOneCss = require('./../StoryOne/one.css');

export default class StoryOne extends React.Component{
    render(){
        return(
            <div>
               <Header></Header>
               <div>
                   <div className={StoryOneCss.divbox1}><h1>《精灵宝可梦》第一季</h1></div>
                   <div className={StoryOneCss.divbox2}>
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
                       <h2>-------------第一季-------------</h2>
                       <img src={StoryOneImg} className={StoryOneCss.img1}></img>
                       <p className={StoryOneCss.p1}>无印篇在日本东京电视台始播于1997年4月1日，结束于2002年11月14日。包含了小智在关都地方、橘子群岛、城都地方的旅行。和小智一同旅行的有自行车被皮卡丘弄坏的小霞；以及原本是尼比市的道馆训练家，立志成为神奇宝贝培育家的小刚。在橘子群岛旅行期间，小刚留在了内木博士的研究所，作为神奇宝贝观察家的小建加入了小智一行...</p>
                   </div>
                   <div>
                       <div className={StoryOneCss.divbox3}>
                           <a href="">上一季</a>
                           <Link to="/StoryTwo/storytwo" target="_black">下一季</Link>
                        </div>
                   </div>
                   <div>
                       <p className={StoryOneCss.p2}>点击这里立即观看精彩剧情</p>
                       <div className={StoryOneCss.divbox4}><a href="https://v.qq.com/detail/t/tyeqdw6rof7t5ow.html"><img src={AnNue} className={StoryOneCss.img2}></img></a></div>
                   </div>
               </div>
               <Footer></Footer>
            </div>
        )
    }
}
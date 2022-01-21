import React from 'react';
import StorySuperHopeImg from './../StorySuperHope/1.jpg';
import AnNue from './../StorySuperHope/2.jpg';
import Header from './../../Header/header';
import Footer from './../../Footer/footer';
import {Link} from 'react-router-dom';

var StorySuperHopeCss = require('./../StorySuperHope/storysuperhope.css');

export default class StorySuperHope extends React.Component{
    render(){
        return(
            <div>
               <Header></Header>
               <div>
                   <div className={StorySuperHopeCss.divbox1}><h1>《精灵宝可梦》超级愿望</h1></div>
                   <div className={StorySuperHopeCss.divbox2}>
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
                       <h2>-------------超级愿望-------------</h2>
                       <img src={StorySuperHopeImg} className={StorySuperHopeCss.img1}></img>
                       <p className={StorySuperHopeCss.p1}> 来自真新镇的10岁少年小智以成为精灵宝可梦训练大师为目标，即将踏上修行之旅。要知道，精灵宝可梦训练师与宝可梦在冒险时总是时时刻刻在一起，可以说是共同成长的伙伴。而且在共同的生活中产生的彼此的友情力量会让宝可梦在战斗中更加强大。所以，拥有一只适合自己的宝可梦对于宝可梦训练师来说是多么重要！可是，小智因为早上赖床迟到，险些失去挑选精灵宝可梦的资格，于是，他领走了一只被挑剩下的宝可梦——皮卡丘。皮卡丘虽然长相可爱，但性格内向而不亲近人类，稍有不满就乱放电，暴躁的脾气让小智吃尽了苦头。</p>
                   </div>
                   <div>
                       <div className={StorySuperHopeCss.divbox3}>
                       <Link to="/StoryFour/storyfour" target="_black">上一季</Link>
                       <Link to="/StoryXY/storyXY" target="_black">下一季</Link>
                        </div>
                   </div>
                   <div>
                       <p className={StorySuperHopeCss.p2}>点击这里立即观看精彩剧情</p>
                       <div className={StorySuperHopeCss.divbox4}><a href="https://v.qq.com/detail/w/wb17srwetojjlyr.html"><img src={AnNue} className={StorySuperHopeCss.img2}></img></a></div>
                   </div>
               </div>
               <Footer></Footer>
            </div>
        )
    }
}
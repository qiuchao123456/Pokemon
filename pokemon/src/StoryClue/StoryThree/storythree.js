import React from 'react';
import StoryThreeImg from './../StoryThree/1.jpg';
import AnNue from './../StoryThree/2.jpg';
import Header from './../../Header/header';
import Footer from './../../Footer/footer';
import {Link} from 'react-router-dom';

var StoryThreeCss = require('./../StoryThree/storythree.css');

export default class StoryThree extends React.Component{
    render(){
        return(
            <div>
               <Header></Header>
               <div>
                   <div className={StoryThreeCss.divbox1}><h1>《精灵宝可梦》第三季</h1></div>
                   <div className={StoryThreeCss.divbox2}>
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
                       <h2>-------------第三季-------------</h2>
                       <img src={StoryThreeImg} className={StoryThreeCss.img1}></img>
                       <p className={StoryThreeCss.p1}>小智、皮卡丘、长尾怪手终于到达神奥地方。小智在打电话给大木博士的途中遇到了火箭队的突袭而同皮卡丘失散，便与长尾怪手立刻出发寻找皮卡丘的身影；另一方面，新人训练家小光的妈妈彩子曾是顶尖协调训练家，小光亦想成为顶尖协调训练家，于是由双叶镇出发展开路程。在其后，小智的同伴小刚归队，二人邂逅了小光。自此，三人一同结伴旅行。 几经辛苦，小光终于集齐5枚缎带徽章，她在神奥华丽大型庆典表示出色，首次参加便晋级至决赛，但在决赛以稍微差距败于好友小望；小智亦集齐8枚徽章，他在神奥联盟有好开始，在第1回战打败尚志，第2回战打败某女路人，第3回战(16强)打败考平，8强更打败真司，可是他无法势如破竹而在准决赛惨败于达克多，4强出局。 神奥之旅随着神奥联盟结束而来到尾声，小智及小刚曾邀请小光一同前往关都地方，但小光因卷卷耳被邀请而不能前来，当天日落，小智在码头上和小光以最后一次击掌道别，与皮卡丘及小刚乘船返回关都地方。翌日日出后，小智和小刚回到关都地方，在往真新镇及尼比市的分叉路口，小智和小刚握手及互相祝福对方后正式告别。小智和皮卡丘终于看见真新镇，他们跑进返回真新镇前的最后一段路，神奥之旅正式划上句号。</p>
                   </div>
                   <div>
                       <div className={StoryThreeCss.divbox3}>
                       <Link to="/StoryTwo/storytwo" target="_black">上一季</Link>
                       <Link to="/StoryFour/storyfour" target="_black">下一季</Link>
                        </div>
                   </div>
                   <div>
                       <p className={StoryThreeCss.p2}>点击这里立即观看精彩剧情</p>
                       <div className={StoryThreeCss.divbox4}><a href="https://v.qq.com/detail/u/ulvcbmiwibeg2un.html"><img src={AnNue} className={StoryThreeCss.img2}></img></a></div>
                   </div>
               </div>
               <Footer></Footer>
            </div>
        )
    }
}
import React from 'react';
import One from  './Image/01.jpg';
import Two from './Image/02.jpg';
import Three from './Image/03.jpg';
import Four from './Image/04.jpg';
import SuperHope from './Image/superhope.jpg';
import XY from './Image/XY.jpeg';
import more from './Image/more.jpg';
import {Link} from 'react-router-dom';





var StoryClueCss = require('./storyclue.css')

export default class StoryClue extends React.Component{
    render(){
        return(
            <div>
                
                <div className={StoryClueCss.h1}><h1>故事副本</h1></div>
                <div><p className={StoryClueCss.p1}>电视动画《精灵宝可梦》（ポケモン），改编自精灵宝可梦系列游戏。是由汤山邦彦等执导，园田英树、大桥志吉等编剧，松本梨香、大谷育江等配音的电视动画系列。</p></div>
                <div className={StoryClueCss.container}>
                    <div className={StoryClueCss.box}> 
                    <Link to="/StoryOne/one" target="_black">
                        <img src={One}></img>
                        <span><p className={StoryClueCss.p1}>第一季</p></span>
                    </Link>
                    </div>
                    <div className={StoryClueCss.box}>
                    <Link to="/StoryTwo/storytwo" target="_black">
                        <img src={Two}></img>
                        <span><p className={StoryClueCss.p1}>第二季</p></span>
                    </Link>
                    </div>
                    <div className={StoryClueCss.box}>
                    <Link to="/StoryThree/storythree" target="_black">
                        <img src={Three}></img>
                        <span><p className={StoryClueCss.p1}>第三季</p></span>
                    </Link>
                    </div>
                    <div className={StoryClueCss.box}>
                    <Link to="/StoryFour/storyfour" target="_black">
                        <img src={Four}></img>
                        <span><p className={StoryClueCss.p1}>第四季</p></span>
                    </Link>
                    </div>
                    <div className={StoryClueCss.box}>
                    <Link to="/StorySuperHope/storysuperhope" target="_black">
                        <img src={SuperHope}></img>
                        <span><p className={StoryClueCss.p1}>超级愿望</p></span>
                    </Link>
                    </div>
                    <div className={StoryClueCss.box}>
                    <Link to="/StoryXY/storyXY" target="_black">
                        <img src={XY}></img>
                        <span><p className={StoryClueCss.p1}>XY</p></span>
                    </Link>
                    </div>
                </div>
                <div className={StoryClueCss.more}>
                    <p>想要了解更多精彩剧情，请点击</p>
                    <Link to="/StoryOne/one" target="_black"><img src={more} className={StoryClueCss.moreImg}></img></Link>
                </div>
            </div>
            
        )
    }
}
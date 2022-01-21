import React from 'react';
import Header1 from './Header1/header1';
import {Link} from 'react-router-dom';


var JingLingCss=require('./jingling.css');
export default class JingLing extends React.Component{
    render(){
        return(
            <div>
                <Header1/>
                <div className={JingLingCss.div1}>
                    <div>
                        <div className={JingLingCss.div2}>
                            精灵增加
                        </div>
                        <div className={JingLingCss.div3}>
                            精灵名称：
                        </div>
                        <div>
                            <input type="text" placeholder="精灵名称"  className={JingLingCss.div4}></input>
                        </div>
                        <div className={JingLingCss.clearfix}></div>
                        <div className={JingLingCss.div3}>
                            精灵性别：
                        </div>
                        <div>
                            <input type="text" placeholder="精灵性别"  className={JingLingCss.div4}></input>
                        </div>
                        <div className={JingLingCss.clearfix}></div>
                        <div className={JingLingCss.div3}>
                            精灵属性：
                        </div>
                        <div>
                            <input type="text" placeholder="精灵属性"  className={JingLingCss.div4}></input>
                        </div>
                        <div className={JingLingCss.clearfix}></div>
                        <div className={JingLingCss.div3}>
                            精灵生命：
                        </div>
                        <div>
                            <input type="text" placeholder="精灵生命"  className={JingLingCss.div4}></input>
                        </div>
                        <div className={JingLingCss.clearfix}></div>
                        <div className={JingLingCss.div3}>
                            精灵战力：
                        </div>
                        <div>
                            <input type="text" placeholder="精灵战力"  className={JingLingCss.div4}></input>
                        </div>
                        <div className={JingLingCss.clearfix}></div>
                        <div className={JingLingCss.div3}>
                            精灵介绍：
                        </div>
                        <div>
                            <input type="text" placeholder="精灵介绍"  className={JingLingCss.div4}></input>
                        </div>
                        <Link to="/xiugai"><input type="submit" value="确认添加"  className={JingLingCss.div5}></input></Link>
                        <div className={JingLingCss.clearfix}></div>
                        <div className={JingLingCss.div2}>
                            精灵删除
                        </div>
                        <div className={JingLingCss.div3}>
                            精灵名称：
                        </div>
                        <div>
                            <input type="text" placeholder="精灵名称"  className={JingLingCss.div4}></input>
                            <Link to="/xiugai"><input type="submit" value="确认删除"  className={JingLingCss.div5}></input></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
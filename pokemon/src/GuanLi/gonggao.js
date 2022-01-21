import React from 'react';
import Header1 from './Header1/header1';
import {Link} from 'react-router-dom';


var GongGaoCss=require('./gonggao.css');
export default class GongGao extends React.Component{
    render(){
        return(
            <div>
                <Header1/>
                <div className={GongGaoCss.div1}>
                    <div className={GongGaoCss.div2}>
                        公告
                    </div>
                    <div className={GongGaoCss.clearfix}></div>
                    <div className={GongGaoCss.div3}>
                        <input type="text" placeholder="公告修改" className={GongGaoCss.div4}></input>
                    </div>
                    <div className={GongGaoCss.div5}>
                        <Link to="/xiugai"><input type="submit" value="确认修改" className={GongGaoCss.anniu}></input></Link>
                    </div>
                </div>
            </div>
        )
    }
}
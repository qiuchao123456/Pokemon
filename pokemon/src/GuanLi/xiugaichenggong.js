import React from 'react';
import Img from './xiugai.jpg';
import Header1 from './Header1/header1';


var XiuGaiCss=require('./xiugaichenggong.css');
export default class XiuGai extends React.Component{
    render(){
        return(
            <div>
                <Header1/>
                <div className={XiuGaiCss.div1}>
                    <div className={XiuGaiCss.div2}>
                    <img src={Img}/>
                    </div>
                    <div className={XiuGaiCss.clearfix}></div>
                    <div className={XiuGaiCss.div3}>
                        成功！
                    </div> 
                </div>
            </div>
        )
    }
}
import React from 'react';
import Footer from './../Footer/footer';
import Header from './../Header/header';

var LianXiCss=require('./lianxi.css')
export default class LianXi extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <div className={LianXiCss.div0}>
                    <div className={LianXiCss.div1}>
                        联系我们
                    </div>
                    <div className={LianXiCss.box}>
                        <div className={LianXiCss.div2}>
                            告示：请输入您的真实信息，以便我们及时联系到您！
                        </div>
                        <div className={LianXiCss.div3}>
                            <div className={LianXiCss.div5}>
                                <div className={LianXiCss.div10}></div>
                                <div className={LianXiCss.zi}>
                                    姓名：
                                </div>
                                
                                <div>
                                    <input type="text" placeholder="请输入您的姓名" className={LianXiCss.div4}></input>
                                </div>
                            </div>
                            <div className={LianXiCss.clearfix}></div>
                            <div  className={LianXiCss.div5}>
                                <div className={LianXiCss.zi}>
                                    电话：
                                </div>
                                <div>
                                    <input type="text" placeholder="请输入您的电话" className={LianXiCss.div4}></input>
                                </div>
                            </div>
                            <div className={LianXiCss.clearfix}></div>
                            <div  className={LianXiCss.div5}>
                                <div className={LianXiCss.zi}>
                                    留言：
                                </div>
                                <div>
                                    <input type="text" placeholder="请输入您的留言" className={LianXiCss.div6}></input>
                                </div>
                            </div>
                            <div className={LianXiCss.clearfix}></div>
                            <div>
                                <input type="submit" value="提交" className={LianXiCss.div7}></input>
                            </div>
                            <div className={LianXiCss.clearfix}></div>
                            
                        </div>
                        <div className={LianXiCss.div8}>感谢您的留言！</div>
                        
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

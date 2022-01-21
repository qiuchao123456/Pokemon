import React from 'react';
import Header1 from './Header1/header1';
import {Link} from 'react-router-dom';

var GuanLiYuanCss=require('./guanliyuan.css');
export default class GuanLiYuan extends React.Component{
    render(){
        return(
            <div>
                <Header1/>
                <div className={GuanLiYuanCss.div1}>
                    <div className={GuanLiYuanCss.div2}>
                        <div className={GuanLiYuanCss.div3}>
                            管理员一
                        </div>
                        <div className={GuanLiYuanCss.div4}>
                            姓名：
                        </div>
                        <div>
                            <input type="text" value="邱超"  className={GuanLiYuanCss.div5}></input>
                        </div>
                        <div className={GuanLiYuanCss.clearfix}></div>
                        <div  className={GuanLiYuanCss.div4}>
                            性别：
                        </div>
                        <input type="text" value="男"  className={GuanLiYuanCss.div5}></input>
                        <div className={GuanLiYuanCss.clearfix}></div>
                        <div  className={GuanLiYuanCss.div4}>
                            电话：
                        </div>
                        <input type="text" value="123456789"  className={GuanLiYuanCss.div5}></input>
                        <div className={GuanLiYuanCss.clearfix}></div>
                        <div  className={GuanLiYuanCss.div4}>
                            职业：
                        </div>
                        <input type="text" value="在读大学生"  className={GuanLiYuanCss.div5}></input>
                        <Link to="/xiugai"><input type="submit" value="确认修改"  className={GuanLiYuanCss.div6}></input></Link>
                    </div>
                    <div  className={GuanLiYuanCss.div2}>
                        <div className={GuanLiYuanCss.div3}>
                            管理员二
                        </div>
                        <div className={GuanLiYuanCss.div4}>
                            姓名：
                        </div>
                        <div>
                            <input type="text" value="李政松"  className={GuanLiYuanCss.div5}></input>
                        </div>
                        <div className={GuanLiYuanCss.clearfix}></div>
                        <div  className={GuanLiYuanCss.div4}>
                            性别：
                        </div>
                        <input type="text" value="男"  className={GuanLiYuanCss.div5}></input>
                        <div className={GuanLiYuanCss.clearfix}></div>
                        <div  className={GuanLiYuanCss.div4}>
                            电话：
                        </div>
                        <input type="text" value="987654321"  className={GuanLiYuanCss.div5}></input>
                        <div className={GuanLiYuanCss.clearfix}></div>
                        <div  className={GuanLiYuanCss.div4}>
                            职业：
                        </div>
                        <input type="text" value="在读大学生"  className={GuanLiYuanCss.div5}></input>
                        <Link to="/xiugai"><input type="submit" value="确认修改"  className={GuanLiYuanCss.div6}></input></Link>
                    </div>
                </div>
            </div>
        )
    }
}
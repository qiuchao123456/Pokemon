import React from 'react';
import Header from './../../Header/header';
import Footer from './../../Footer/footer';
import XiangKeBiaoImg from './../XiangKeBiao/1.jpg';
import {Link} from 'react-router-dom';

var XiangKeBiaoCss = require('./xiangkebiao.css');

export default class XiangKeBiao extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div>
                    <div><h1 className={XiangKeBiaoCss.h1}>-----------------属性相克表-------------------</h1></div>
                    <div><img src={XiangKeBiaoImg} className={XiangKeBiaoCss.img1}></img></div>
                    <div className={XiangKeBiaoCss.divbox1}>
                        <h3>普通系:</h3>
                        <p className={XiangKeBiaoCss.p1}>攻击不太有效属性:岩、鬼(无效)、钢<br/>攻击非常有效属性:无<br/>代表神奇宝贝:小卡比兽、卡比兽、百变怪、请假王、吉利蛋</p>
                        <h3>火系</h3>
                        <p className={XiangKeBiaoCss.p1}>攻击不太有效之属性:火、水、岩、龙<br/>攻击非常有效属性:草、冰、虫、钢<br/>代表神奇宝贝:喷火龙、烈火猴、鸭嘴巨龙、火焰鸡、风速狗</p>
                        <h3>水系</h3>
                        <p className={XiangKeBiaoCss.p1}>攻击不太有效属性:草、龙、水<br/>攻击非常有效属性:火、岩、地<br/>代表神奇宝贝:水箭龟、玛利露、巨沼怪、美纳斯、暴雪王</p>
                        <h3>电系</h3>
                        <p className={XiangKeBiaoCss.p1}>攻击不太有效属性:地面(无效)、雷、草、龙<br/>攻击非常有效属性:飞、水<br/>代表神奇宝贝:比卡超、雷霆蛋、电击魔、幽浮磁怪、比超</p>
                        <h3>草系</h3>
                        <p className={XiangKeBiaoCss.p1}>攻击不太有效属性:火、草、毒、飞、虫、龙、钢<br/>攻击非常有效属性:水、岩、地面<br/>代表神奇宝贝:奇异花、霸王花、蜥蜴王、大地龟、坚果哑铃</p>
                        <h3>冰系</h3>
                        <p className={XiangKeBiaoCss.p1}>攻击不太有效属性:火、水、冰、钢<br/>攻击非常有效属性:草、地、飞、龙<br/>代表神奇宝贝:白海狮、帝牙海狮、冰鬼护、背背龙</p>
                        <h3>格斗系</h3>
                        <p className={XiangKeBiaoCss.p1}>攻击不太有效属性:超、飞、虫、毒、鬼(无效)<br/>攻击非常有效属性:普、冰、恶、岩、钢<br/>代表神奇宝贝:怪力、艾尔莱特、路卡里奥、比华拉</p>
                        <h3>毒系</h3>
                        <p className={XiangKeBiaoCss.p1}>攻击不太有效属性:岩、地、毒、鬼、钢(无效)<br/>攻击非常有效属性:草<br/>代表神奇宝贝:毒气双子、叉字蝠、烂泥兽、吞食兽</p>
                        <h3>地面系</h3>
                        <p className={XiangKeBiaoCss.p1}>攻击不太有效属性:草、飞(无效)、虫<br/>攻击非常有效属性:火、雷、毒、岩、钢<br/>代表神奇宝贝:三头地鼠、尼多王、穿山王、沙漠蜻蜓</p>
                        <h3>飞行系</h3>
                        <p className={XiangKeBiaoCss.p1}>攻击不太有效属性:雷、钢、岩<br/>攻击非常有效属性:草、格、虫<br/>代表神奇宝贝:大比鸟、多多利、音符鸟、喷火龙</p>
                        <h3>超能</h3>
                        <p className={XiangKeBiaoCss.p1}>攻击不太有效属性:超、恶(无效)、钢<br/>攻击非常有效属性:格、毒<br/>代表神奇宝贝:梦幻、超梦、富迪、果然翁、沙奈朵</p>
                        <h3>岩石系</h3>
                        <p className={XiangKeBiaoCss.p1}>攻击不太有效属性:格、地、钢<br/>攻击非常有效属性:火、冰、飞<br/>代表神奇宝贝:滚动岩、大岩蛇、化石飞龙、重甲暴龙</p>
                        <h3>龙系</h3>
                        <p className={XiangKeBiaoCss.p1}>攻击不太有效属性:钢、冰<br/>攻击非常有效属性:龙<br/>代表神奇宝贝:启暴龙、刺龙王、暴蝾螈、鲨猛龙</p>
                        <h3>鬼系</h3>
                        <p className={XiangKeBiaoCss.p1}>攻击不太有效属性:恶、普(无效)、钢<br/>攻击非常有效属性:超、鬼<br/>代表神奇宝贝:耿鬼、梦魔、鬼影盆</p>
                        <h3>虫系</h3>
                        <p className={XiangKeBiaoCss.p1}> 攻击不太有效属性:火、飞、格、毒、鬼、钢<br/>攻击非常有效属性:草、超、恶<br/>代表神奇宝贝:钳刀甲虫、佛烈托斯、巨钳螳螂、赫拉克罗斯</p>
                        <h3>邪恶系</h3>
                        <p className={XiangKeBiaoCss.p1}>攻击不太有效属性:格斗、恶、钢、虫<br/>攻击非常有效属性:超、鬼<br/>代表神奇宝贝:黑鲁加、班吉拉、魔狃拉、阿勃梭鲁</p>
                        <h3>钢铁系</h3>
                        <p className={XiangKeBiaoCss.p1}>攻击不太有效属性:火、水、雷、钢<br/>攻击非常有效属性:冰、岩<br/>代表神奇宝贝:大钢蛇、波士可多拉、巨金怪</p>
                    </div>
                    <div className={XiangKeBiaoCss.divbox2}><Link to="../XiangKeBiao/xiangkebiao" target="_black">回到顶部>></Link></div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
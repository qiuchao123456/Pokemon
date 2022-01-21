import React from 'react';
import Header from './../../Header/header';
import Footer from './../../Footer/footer';
import GrassImg from './../Grass/1.jpg';
import {Link} from 'react-router-dom';

var GrassCss = require('./grass.css');

export default class Grass extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div>
                    <div className={GrassCss.h1}><h1>草系</h1></div>
                    <div className={GrassCss.divbox1}>
                        <Link to='/PuTong/putong'><span>普通系</span></Link>
                        <Link to="/Fire/fire"><span>火系</span></Link>
                        <Link to="/Water/water"><span>水系</span></Link>
                        <Link to="/Dian/dian"><span>电系</span></Link>
                        <Link to="/Grass/grass"><span>草系</span></Link>
                        <Link to="/Ice/ice"><span>冰系</span></Link>
                        <Link to="/GeDou/gedou"><span>格斗系</span></Link>
                        <Link to="/Du/du"><span>毒系</span></Link>
                        <Link to="/DiMian/dimian"><span>地面系</span></Link>
                        <Link to="/Fly/fly"><span>飞行系</span></Link>
                        <Link to="/ChaoNeng/chaoneng"><span>超能</span></Link>
                        <Link to="/Stone/stone"><span>岩石系</span></Link>
                        <Link to="/Dragon/dragon"><span>龙系</span></Link>
                        <Link to="/Ghost/ghost"><span>鬼系</span></Link>
                        <Link to="/Insect/insect"><span>虫系</span></Link>
                        <Link to="/Evil/evil"><span>邪恶系</span></Link>
                        <Link to="/Steel/steel"><span>钢铁系</span></Link>
                        <Link to="/YaoJing/yaojing"><span>妖精</span></Link>
                    </div>
                    <div>
                        <img src={GrassImg} className={GrassCss.img}></img>
                        <p className={GrassCss.p1}>草系其实代表着所有的植物，而植物又象征着绿色，大清早打开窗户，在清晨温和的阳光下深深的呼吸一口气，看着窗外令人心怡的翠绿，这世界多么的美好啊！-_-b不过草系口袋妖怪和我们心中的绿色环境却有着截然不同的差别，首先就是一大堆附带毒属性的家伙——妙蛙花、霸王花、大食花，让人不仅有倒胃口；然后就是它们成名招式——亿万吸取和寄生种子，专门吸取对方的生命。什么叫吸取生命呢？大家听说过吸星大法吧，只要草系PM一发功，保你几十年来的武功修为付之东流；严重点可能直接吸成人干，这也太可怕了！草系PM并不是没有漂亮的，美丽花、向日葵、毽子棉都让人爱从心生。不过当它们也如法炮制吸取生命时，我们就不难想象到诸如“画皮”之类的词汇了……</p>
                        <p className={GrassCss.p1}>草系克制的属性仅有岩、地、水三个，不利的属性却有火、草、毒、飞、虫、龙、钢7个之多。再看攻击技巧，亿万吸取威力仅60，PP只有5；觉醒草因为威力高点所以常见一些，也只有70而已；太阳光威力和命中都让人满意，但若非晴天下还要蓄力1回合，也实在靠不住。综上所述，草系在攻击上好比一把锈迹斑斑的钝刀，很难指望用它来砍人。防守方面呢？草系被火、冰、毒、飞、虫5个属性所克制，居全属性之最；抵抗的属性有水、电、草、地面，其中水、电、地面都是常见的攻击属性，这点倒还算不错。草系在攻防两方面都可以用“可怜”来形容，但草系PM实力却不一般，除了他们本身能力技巧比较好以外，另外原因就是它们多半都有其他的复合属性吧！</p>
                        <p className={GrassCss.p2}>代表宝可梦有：妙蛙花、妙蛙种子、暴雪王、坚果哑铃、败露球菇、风妖精、谢米……</p>
                    </div>
                    <div>
                        <div className={GrassCss.divbox3}>
                            <Link to="/Dian/dian" target="_black">上一个</Link>
                            <Link to="/Ice/ice" target="_black">下一个</Link>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
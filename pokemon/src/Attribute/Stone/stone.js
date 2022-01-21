import React from 'react';
import Header from './../../Header/header';
import Footer from './../../Footer/footer';
import StoneImg from './../Stone/1.jpg'
import {Link} from 'react-router-dom';


var StoneCss = require('./stone.css');

export default class Stone extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div>
                    <div className={StoneCss.h1}><h1>岩石系</h1></div>
                    <div className={StoneCss.divbox1}>
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
                        <img src={StoneImg} className={StoneCss.img}></img>
                        <p className={StoneCss.p1}>岩属性非常可怜，本来它应该算是五行或者四大元素之中的“土”，无奈半路杀出来一个地面系，把岩系几乎逼上了绝路。纯岩系PM只有可怜的三只，不过它们和其他属性的结合倒也不少：岩+地面（本来就是一家，何苦要分开……）、岩+水（太阳珊瑚还好说，可对于化石鱼、多刺菊石兽它们来说，在水里难道不会沉下去么？）、岩+超能/岩+邪恶（正如前文所说，这些石头修炼成精了……）、岩+草（不知道是像石头一样硬的草，还是从石头里长出来草）……不过能让岩系扬眉吐气的莫过于巨甲兽，此物自从金银时代诞生起就独当一面，到了宝石时代则更加变本加厉，居然能带来永久的天气效果，可以与古拉顿、海皇牙相提并论了。凭借巨甲的庇护，“沙尘暴队”成为了最近口袋迷中的关键词之一。</p>
                        <p className={StoneCss.p1}>岩石系的打击面尚可，克制火、冰、虫、飞行4个属性之多，不利于格斗、地面、钢铁。但岩崩威力区区75实在寒碜，虽然有不错的追加效果，可对于大部分慢吞吞的岩系来说形同虚设。但我们都知道岩系在物理攻击中所扮演的重要地位，这主要是因为岩系是唯一克制飞行系的物理属性，而飞行系抵抗虫、地面、格斗三个物攻大系，可以说是物攻PM的死敌。若没有岩系技巧的协助，赫拉克罗斯、车轮象这些物攻好手可能没这么风光。不得不提的一个技巧就是岩石爆破，虽然它威力和命中都很不稳定，但由于是可以破解替身的多段攻击，在替身战术风靡后也摇身一变为香饽饽。防守方面岩系表现一般，抵抗普火毒飞，被水草地斗克制，要承担起防守任务怕是力不从心。</p>
                        <p className={StoneCss.p2}>代表宝可梦有：班基拉斯、化石翼龙、蒂安希、虚吾伊德……</p>
                    </div>
                    <div>
                        <div className={StoneCss.divbox3}>
                        <Link to="/ChaoNeng/chaoneng" target="_black">上一个</Link>
                        <Link to="/Dragon/dragon" target="_black">下一个</Link>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
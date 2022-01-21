import React from 'react';
import Header from './../../Header/header';
import Footer from './../../Footer/footer';
import FireImg from './../Fire/1.gif';
import {Link} from 'react-router-dom';

var FireCss = require('./fire.css');

export default class Fire extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div>
                    <div className={FireCss.h1}><h1>火系</h1></div>
                    <div className={FireCss.divbox1}>
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
                        <img src={FireImg} className={FireCss.img}></img>
                        <p className={FireCss.p1}>这是在任何系列中都少不了的属性呢，毕竟是四大元素之一，怎可能错过出席的机会呢？如果假想在宝可梦中的世界，火系可能是最至高无上的属性，因为天敌水系上不了陆地，干着急也没办法；岩石和地面系虽然火系惹不起，不过这些属性的PM大部分似乎都不是什么肉食动物，更没有捕食猎物的习惯，干吗要和火系过不去呢？反观火系，有炎帝（狮子）、喷火龙（蜥蜴&恐龙？）、地狱狗、风速狗（犬科）、九尾（狐狸）都是标准的食肉动物。当然了，烈焰马（脾气暴戾的草……食动物）、煤炭龟（乌龟是吃什么来着？）、熔岩蜗牛（这个就更可怜了……）这些都是例外，不提也罢。</p>
                        <p className={FireCss.p1}>在动漫中，火系作为历代的主角属性之一，其实用性自然当之无愧。克制的属性是草、冰、虫、钢铁，而不利的属性是火、水、岩石、龙，对引火特性的PM无效。虽然在属性相克方面比较平均，但是在技巧方面无愧于主角的标准。火焰放射威力达95，命中率100%，PP多达15；大字火威力高达120，85%的命中率也足可以放心使用，唯一缺点就是PP只有5。这两个技巧各有千秋，能学的PM数量不算少，对于不少物攻型PM来说，还可以有效的利用这技巧来丰富打击面，况且还有10%追加对手烧伤的效果，如果运气好的话也是相当有利的。还有一个不可忽视的技巧是“燃烧殆尽”，这个基本上只有火系PM才能学，威力高达140，命中率90%，虽然命中后有降低自己两级特攻的副作用，不过这可以通过换人或者携带道具白色香草来恢复，因为那140的威力实在太诱人了！在防守方面，火系仅被岩石、地面、水三个属性克制，却抵御火、草、冰、虫、钢铁5个属性，也是很不错的，只怪老任太偏心眼，为何火系的PM就那么的弱……</p>
                        <p className={FireCss.p2}>代表宝可梦有：炎帝、喷火龙、地狱狗、风速狗、九尾、烈焰马、煤炭龟、熔岩蜗牛……</p>
                    </div>
                    <div>
                        <div className={FireCss.divbox3}>
                            <Link to='/PuTong/putong' target="_black">上一个</Link>
                            <Link to="/Water/water" target="_black">下一个</Link>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
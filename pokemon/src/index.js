import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import HomePage from './HomePage/homepage';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

//管理
import GuanLiYuan from './GuanLi/guanliyuan';
import JingLing from './GuanLi/jingling';
import GongGao from './GuanLi/gonggao';
import PingLun1 from './GuanLi/pinglun1';
import PingLun2 from './GuanLi/pinglun2';
import XiuGai from './GuanLi/xiugaichenggong';
import HuiKui1 from './GuanLi/huikui1';
import HuiKui2 from './GuanLi/huikui2';



// 故事副本
import StoryOne from './StoryClue/StoryOne/one';
import StoryTwo from './StoryClue/StoryTwo/storytwo';
import StoryThree from './StoryClue/StoryThree/storythree';
import StoryFour from './StoryClue/StoryFour/storyfour';
import StorySuperHope from './StoryClue/StorySuperHope/storysuperhope';
import StoryXY from './StoryClue/StoryXY/storyXY';
import StoryXY2 from './StoryClue/StoryXY2/storyXY2';
import StoryXYZ from './StoryClue/StoryXYZ/storyXYZ';
import StorySunMoon from './StoryClue/StorySunMoon/storysunmoon';

//属性介绍
import Fire from './Attribute/Fire/fire';
import ChaoNeng from './Attribute/ChaoNeng/chaoneng';
import Dian from './Attribute/Dian/dian';
import DiMian from './Attribute/DiMian/dimian';
import Dragon from './Attribute/Dragon/dragon';
import Du from './Attribute/Du/du';
import Evil from './Attribute/Evil/evil';
import Fly from './Attribute/Fly/fly';
import GeDou from './Attribute/GeDou/gedou';
import Ghost from './Attribute/Ghost/ghost';
import Grass from './Attribute/Grass/grass';
import Ice from './Attribute/Ice/ice';
import Insect from './Attribute/Insect/insect';
import PuTong from './Attribute/PuTong/putong';
import Steel from './Attribute/Steel/steel';
import Stone from './Attribute/Stone/stone';
import Water from './Attribute/Water/water';
import YaoJing from './Attribute/YaoJing/yaojing';

//属性相克表
import XiangKeBiao from './Attribute/XiangKeBiao/xiangkebiao';

//联系我们
import LianXi from './LianXi/lianxi';

//论坛
import LunTan1 from './LunTan/luntan1';

//精灵图鉴
import Mid4 from './Mid4/mid4';
import Mid5 from './Mid5/mid5';

// 排行榜
import ZhanLi from './Mid5/PaiHang/ZhanLi/zhanli';
import RenQi from './Mid5/PaiHang/ZhanLi/renqi1';
import Girl from './Mid5/Girl/girl';
import XunLianShi from './Mid5/XunLianShi/xunlianshi';
import ShenShou from './Mid5/ShenShou/shenshou';
import xiyou from './Mid5/XiYou/xiyou';


class IndexPage extends React.Component {

    render() {
        return (
            <div>
                <BrowserRouter basename='pokemon'>
                    <Switch>
                        <Route path="/homepage" component={HomePage}></Route>

                        {/* 管理 */}
                        <Route path="/guanliyuan" component={GuanLiYuan}></Route>
                        <Route path="/huikui1" component={HuiKui1}></Route>
                        <Route path="/huikui2" component={HuiKui2}></Route>
                        <Route path="/jingling" component={JingLing}></Route>
                        <Route path="/gonggao" component={GongGao}></Route>
                        <Route path="/pinglun1" component={PingLun1}></Route>
                        <Route path="/pinglun2" component={PingLun2}></Route>
                        <Route path="/xiugai" component={XiuGai}></Route>


                        {/* 故事副本 */}
                        <Route path="/StoryOne/one" component={StoryOne}></Route>
                        <Route path="/StoryTwo/storytwo" component={StoryTwo}></Route>
                        <Route path="/StoryThree/storythree" component={StoryThree}></Route>
                        <Route path="/StoryFour/storyFour" component={StoryFour}></Route>
                        <Route path="/StorySuperHope/storysuperhope" component={StorySuperHope}></Route>
                        <Route path="/StoryXY/storyXY" component={StoryXY}></Route>
                        <Route path="/StoryXY2/storyXY2" component={StoryXY2}></Route>
                        <Route path="/StoryXYZ/storyXYZ" component={StoryXYZ}></Route>
                        <Route path="/StorySunMoon/storysunmoon" component={StorySunMoon}></Route>

                        {/* 属性介绍 */}
                        <Route path="/Fire/fire" component={Fire}></Route>
                        <Route path="/ChaoNeng/chaoneng" component={ChaoNeng}></Route>
                        <Route path="/Dian/dian" component={Dian}></Route>
                        <Route path="/DiMian/dimian" component={DiMian}></Route>
                        <Route path="/Dragon/dragon" component={Dragon}></Route>
                        <Route path="/Du/du" component={Du}></Route>
                        <Route path="/Evil/evil" component={Evil}></Route>
                        <Route path="/Fly/fly" component={Fly}></Route>
                        <Route path="/GeDou/gedou" component={GeDou}></Route>
                        <Route path="/Ghost/ghost" component={Ghost}></Route>
                        <Route path="/Grass/grass" component={Grass}></Route>
                        <Route path="/Ice/ice" component={Ice}></Route>
                        <Route path="/Insect/insect" component={Insect}></Route>
                        <Route path="/PuTong/putong" component={PuTong}></Route>
                        <Route path="/Steel/steel" component={Steel}></Route>
                        <Route path="/Stone/stone" component={Stone}></Route>
                        <Route path="/Water/water" component={Water}></Route>
                        <Route path="/YaoJing/yaojing" component={YaoJing}></Route>

                        {/* 属性相克表 */}
                        <Route path="/XiangKeBiao/xiangkebiao" component={XiangKeBiao}></Route>

                        {/* 联系我们 */}
                        <Route path="/LianXi/lianxi" component={LianXi}></Route>

                        {/* 论坛 */}
                        <Route path="/LunTan/luntan1" component={LunTan1}></Route>


                        {/* 精灵图鉴 */}
                        <Route path="/Mid4/mid4" component={Mid4}></Route>

                        {/* 排行榜 */}
                        <Route path="/Mid5/mid5" component={Mid5}></Route>
                        <Route path="/ZhanLi/zhanli" component={ZhanLi}></Route>
                        <Route path="/ZhanLi/renqi1" component={RenQi}></Route>
                        <Route path="/Girl/girl" component={Girl}></Route>
                        <Route path="/XunLianShi" component={XunLianShi}></Route>
                        <Route path="/ShenShou/shenshou" component={ShenShou}></Route>
                        <Route path="/XiYou/xiyou" component={xiyou}></Route>

                        <Redirect to="/homepage"></Redirect>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

ReactDOM.render(<IndexPage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

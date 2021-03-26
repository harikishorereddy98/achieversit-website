import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Angular from './Angular';
import DigitalMarketing from './Digital';
import HomeComp from './HomeComp';
import Ionic from './Ionic';
import MEAN from './Mean';
import MERN from './Mern';
import Phython from './Phython';
import ReactJS from './React';
import Reactnative from './Reactnative';
import Uidevelopment from './Uidevelopment';
import VUEJS from './Vue';
import Webdev from './Webdev';


const Router = () => {
    return(

        <Switch>
            <Route path="/"  exact component={HomeComp}/>
            <Route path ="/ui-developement" exact component={Uidevelopment}></Route>
            <Route path="/Angular" exact component={Angular}></Route>
            <Route path="/ReactJS" exact component={ReactJS}></Route>
            <Route path="/VUEJS" exact component={VUEJS}></Route>
            <Route path="/MEAN" exact  component={MEAN}></Route>
            <Route path="/MERN" exact component={MERN}></Route>
            <Route path="/Digital Marketing" exact component={DigitalMarketing}></Route>
            <Route path='/Phython' exact component={Phython}></Route>
            <Route path="/Ionic" exact component={Ionic}></Route>
            <Route path="/React Native" exact component={Reactnative}></Route>
            <Route path='/web Dev' exact component={Webdev}></Route>

        </Switch>
    )
}
export default Router;
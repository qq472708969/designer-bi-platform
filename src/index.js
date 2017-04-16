import React from 'react';
import ReactDOM from 'react-dom';
import dp_Layout from './components/dp_layout';
import './css/index.css';

// 引入React-Router模块
import {Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router'

// 配置路由
ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={dp_Layout}>
            {/*<IndexRoute path="myCard" component={myCard}/>*/}
            {/*<Route path="myTable" component={myTable}/>*/}
            {/*<Route path="myForm" component={myForm}/>*/}
            {/*<Route path="myChart" component={myChart}/>*/}
            {/*<Route path="myCalendar" component={myCalendar}/>*/}
            {/*<Route path="myAnimate" component={myAnimate}/>*/}
            {/*<Route path="myCard" component={myCard}/>*/}
        </Route>
    </Router>
), document.getElementById("root"));
import React from 'react';
import {BrowserRouter,Route,Switch} from "react-router-dom"
import 'react-dates/initialize'
import "../styles/components/_date-picker.scss"
import 'react-dates/lib/css/_datepicker.css'

import Header from '../components/Header'
import HelpPage from '../components/HelpPage'
import DashboardPage from '../components/ExpenseDashboard' 
import EditExpensePage from '../components/EditExpensePage' 
import AddExpensePage from '../components/AddExpensePage' 
import NotFoundPage from '../components/NotFoundPage' 

//Routes
const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path='/' component={DashboardPage} exact={true}/>
                <Route path='/help' component={HelpPage} exact={true}/>
                <Route path='/create' component={AddExpensePage} exact={true}/>
                <Route path='/edit/:id' component={EditExpensePage} exact={true}/>
                <Route path='/dashboard' component={DashboardPage} exact={true}/>
                <Route component={NotFoundPage} exact={true}/>
            </Switch>
            
        </div>
    </BrowserRouter>
)

export default AppRouter
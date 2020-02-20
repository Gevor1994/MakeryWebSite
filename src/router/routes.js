import React, {Suspense, lazy, useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';
import { history } from '../redux/store'

const TopNav = lazy(() => import('../containers/TopNav'))
const Footer = lazy(() => import ('../containers/Footer'));
const Home = lazy(() => import('../pages/Home'));
const Who = lazy(() => import('../pages/Who'));
const What = lazy(() => import('../pages/What'));
const Team = lazy(() => import('../pages/Team'));
const Careers = lazy(() => import('../pages/Careers'));
const Contact = lazy(() => import('../pages/Contact'));
const Portfolio = lazy(() => import('../pages/Portfolio'));
const Cafe = lazy(() => import('../containers/Cafe'));
const NotFound = lazy(() => import('../pages/NotFound'));

const AppRouter = (props) => {
    useEffect(() => {
        const unlisten = history.listen(() => {
            window.scrollTo(0, 0);
        });
        return () => {
            unlisten();
        };
    }, []);

    return (
        <Suspense fallback={<div/>}>
            <Switch>
                <Route exact path="/en" render={props => (
                    <Suspense fallback={<div/>}>
                        <TopNav/>
                        <Home {...props} />
                        <Footer/>
                    </Suspense>
                )}/>

                <Route path="/en/who-are-we" render={props => (
                    <Suspense fallback={<div/>}>
                        <TopNav/>
                        <Who {...props} />
                        <Footer/>
                    </Suspense>
                )}/>

                <Route path="/en/what-we-do" render={props => (
                    <Suspense fallback={<div/>}>
                        <TopNav/>
                        <What {...props} />
                        <Footer/>
                    </Suspense>
                )}/>

                <Route path="/en/team" render={props => (
                    <Suspense fallback={<div/>}>
                        <TopNav/>
                        <Team {...props} />
                        <Footer/>
                    </Suspense>
                )}/>

                <Route path="/en/careers" render={props => (
                    <Suspense fallback={<div/>}>
                        <TopNav/>
                        <Careers {...props} />
                        <Footer/>
                    </Suspense>
                )}/>

                <Route path="/en/portfolio" render={props => (
                    <Suspense fallback={<div/>}>
                        <TopNav/>
                        <Portfolio {...props} />
                        <Footer/>
                    </Suspense>
                )}/>

                <Route path="/en/contacts" render={props => (
                    <Suspense fallback={<div/>}>
                        <TopNav/>
                        <Contact {...props} />
                        <Footer/>
                    </Suspense>
                )}/>

                <Route path="/en/bar" render={props => (
                    <Suspense fallback={<div/>}>
                        <TopNav/>
                        <Cafe {...props} />
                        <Footer/>
                    </Suspense>
                )}/>

                <Route render={props => (
                    <Suspense fallback={<div/>}>
                        <NotFound {...props} />
                    </Suspense>
                )}/>
            </Switch>
        </Suspense>
    );
}

export default AppRouter;
import React ,{Fragment}from 'react';
import Logo from '../../UI/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import './SideDrawer.css';

const SideDrawer = (props) => {
    // conditional css
    const attachedClasses = props.open ? ["SideDrawer","Open"] : ["SideDrawer","Close"];
    return (
        <Fragment>
            <Backdrop show={props.open} clicked={props.sideDrawerClick}/>
            <div className={attachedClasses.join(" ")}>
                <div className="SideDrawerLogo">
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Fragment> 
    );
}

export default SideDrawer;
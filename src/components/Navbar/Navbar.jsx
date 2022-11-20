import React from "react";
import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import SiteBar from "../SiteBar/SiteBar";
import {connect} from "react-redux";






const Nav = (props) => {

  const setActiveClass = ({ isActive }) => {
      console.log(isActive)
    return isActive ? classes.active : ''
  }
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <img className={classes.navIcon} src="/UI_UX/Profile.png" />
        <NavLink to="/profile/3" className={setActiveClass}>Profile</NavLink></div>
      <div className={classes.item}>
        <img className={classes.navIcon} src="/UI_UX/Massages.png" />
        <NavLink to="/dialogs" className={setActiveClass}>Massages</NavLink>
      </div>
      <div className={classes.item}>
        <img className={classes.navIcon} src="/UI_UX/Users.png" />
        <NavLink to="/users" className={setActiveClass}>Users</NavLink>
      </div>
      <div className={classes.item}>
        <img className={classes.navIcon} src="/UI_UX/News.png" />
        <NavLink to="/news" className={setActiveClass}>News</NavLink></div>
      <div className={classes.item}>
        <img className={classes.navIcon} src="/UI_UX/Music.png" />
        <NavLink to="/music" className={setActiveClass}>Music</NavLink>
      </div>
      <div className={classes.item}>
        <img className={classes.navIcon} src="/UI_UX/Settings.png" />
        <NavLink to="/settings" className={setActiveClass}>Settings</NavLink>
      </div>
      <div className={classes.item}>
        <h3>Friends</h3>
        {<SiteBar friends={props.siteBar.friends} />}
      </div>
    </nav>
  )
}
const mapStateToProps = (state) => ({
    siteBar: state.siteBar

})



export default connect(mapStateToProps,null)(Nav)



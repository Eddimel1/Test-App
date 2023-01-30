import React from "react";
import classes from "./NavBar.module.scss";
import { CommonImage } from "../../../Shared/Components/Graphics/Images/Raster/CommonImage";
import { CommonLabel } from "../../../Shared/Components/Labels/CommonLabel";
import {SettingOutlined , ShoppingCartOutlined } from '@ant-design/icons'
import { CounterBadge } from "../../../Shared/Components/Badges/Counter/Counter";

export const NavBar = () => {
    const current_bet_count = Number(window.localStorage.getItem("bet_count"))
  return (
    <div className={classes.navBarWrapper}>
      <div className={classes.navBarContainer}>
        <div className={classes.navBarLeftSection}>
          <div className={classes.navBarImageAndTitleContainer}>
            <div className={classes.navBarImageContainer}>
              <CommonImage
                options={{
                  src: "https://www.bet-experts.com/wp-content/uploads/2021/09/1xbet-logo-v2.png",
                  alt: "1xbet",
                }}
              ></CommonImage>
            </div>
            <div className={classes.navBarTitle}>Join 1xBet!</div>
          </div>
        </div>
        <div className={classes.navBarCenterSection}>
          <CommonLabel>Home</CommonLabel>
          <CommonLabel>Stakes</CommonLabel>
          <CommonLabel>About Us</CommonLabel>
        </div>
        <div className={classes.navBarRightSection} onClick={()=> window.location.assign('http://localhost:3000/basket')}>
          <div className={classes.navBarIconItem}>
          <SettingOutlined style={{fontSize:'1.7rem'}}></SettingOutlined>
          </div>

          <div className={classes.navBarIconItem} style={{position:'relative'}} >
          <CounterBadge count={current_bet_count} color='green'></CounterBadge>
          <ShoppingCartOutlined style={{fontSize:'2rem', position:'relative'}}></ShoppingCartOutlined>
          </div>
          <div className={classes.navBarAvatarContainer}>
          <CommonImage options={{src:'https://st3.depositphotos.com/1767687/16607/v/450/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg',alt:'avatar'}}></CommonImage>
          </div>
         
        </div>
      </div>
    </div>
  );
};

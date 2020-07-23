import React from "react";
import classes from './Header.module.css';
import NavigationBar from "../../Components/Navigation/NavigationBar";
import Hero from "../Hero/Hero";
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import PaginatedList from "../PaginatedList/PaginatedList";

// the Header component represents the
// header of our page
// it will contain the nav bar, jumbotron, some text, ...
const Header = (props) => {
    // variable to hold the hero image
    let hero = null;
    // if we don't have search operation
    if (!props.isSearch)
        hero = <Route path="/movies" exact component={Hero} />
    else
        hero = <Route path="/movies" exact component={PaginatedList} />
    return (
        <header className={classes.Header}>
            <NavigationBar />
            {hero}
        </header>
    );
}

const mapStateToProps = state => {
    return {
        isSearch: state.isSearch
    }
}

export default connect(mapStateToProps)(Header);
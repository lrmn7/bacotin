import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.mwidth}>
        <div className={classes.logo}>
          <div>BACOTIN</div>
          <div className={classes.author}>by L RMN</div>
        </div>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink to="/quotes" activeClassName={classes.active}>
                All Bacot
              </NavLink>
            </li>
            <li>
              <NavLink to="/new-quote" activeClassName={classes.active}>
                Add a Bacot
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MainNavigation;
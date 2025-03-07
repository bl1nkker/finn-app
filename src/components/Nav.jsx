import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import { NavLink } from 'react-router-dom';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

// Custom styles
import './../pages/pagesStyles/Dashboard.css'
import { useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 3,
  },
  toolBar: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    boxShadow: theme.shadows[100]
  },

  // Links
  nav_link: {
    fontSize: "12px",
    color: theme.palette.text.primary,
    marginLeft: 12,
    marginRight: 12,
    textDecoration: "none"
  },
  nav_links_container:{
    display:"flex",
    justifyContent:"center",
    alignItems: "center"
  },

  // Menu
  nav_menu:{
    display:"flex",
    justifyContent:"center",
    alignItems: "center"
  },
  nav_title:{
    fontSize: "14px"
  },

  // User
  user_container:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"flex-end",
    marginLeft: 10
  },
  user_info:{
    fontSize: "14px"
  }, 
  user_avatar:{
    width:45,
    height:45,
    padding:1,
    marginRight:10,
    border: "1px solid black",
    borderRadius: "50%"
  }
}));

export default function Nav() {
  const classes = useStyles();
  const currentUser = localStorage.getItem("username")
  const [anchorEl, setAnchorEl] = React.useState(null);

  const facilities = useSelector(state => state.settings.companies)
  const userIsStaff = localStorage.getItem("isStaff")
  const [currentFacility, setCurrentFacility] = React.useState(facilities[0])
  // const [value, setValue] = React.useState(0);

  const activeLinkStyle = {
    borderBottom: "2px solid #3F40F0",
    paddingBottom: "21px",
    color: "#3F40F0"
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleChangeFacility = (facility) => {
    setCurrentFacility(facility)
    setAnchorEl(null);
  };

  return (
    <div className={classes.root} >
      <AppBar position="static">
        <Toolbar className={classes.toolBar}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item xs={2} className={classes.nav_menu}>
              <Typography aria-controls="simple-menu" aria-haspopup="true" className={classes.nav_title}>
                {currentFacility?.name ? currentFacility.name : "Не выбрано"}
              </Typography>
              <ArrowDropDownIcon onClick={handleClick}/>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleChangeFacility}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
              >
                {facilities.map(facility =>(<MenuItem onClick={() => handleChangeFacility(facility)}>{facility.name}</MenuItem>))}
              </Menu>
            </Grid>
            <Grid className={classes.links_container} item xs={8}>
              <NavLink activeStyle={activeLinkStyle} className={classes.nav_link} to="/home">Главная</NavLink>
              <NavLink activeStyle={activeLinkStyle} className={classes.nav_link} to="/budget">Бюджет</NavLink>
              <NavLink activeStyle={activeLinkStyle} className={classes.nav_link} to="/revenue">Выручка</NavLink>
              <NavLink activeStyle={activeLinkStyle} className={classes.nav_link} to="/scans">Сканы</NavLink>
              <NavLink activeStyle={activeLinkStyle} className={classes.nav_link} to="/registry">Реестр Накладных</NavLink>
              <NavLink activeStyle={activeLinkStyle} className={classes.nav_link} to="/imports">Поставщики</NavLink>
              <NavLink activeStyle={activeLinkStyle} className={classes.nav_link} to="/coworkers">Сотрудники</NavLink>
              <NavLink activeStyle={activeLinkStyle} className={classes.nav_link} to="/salary">Зарплата</NavLink>
              <NavLink activeStyle={activeLinkStyle} className={classes.nav_link} to="/signals">Сигналы</NavLink>
              {userIsStaff && <NavLink activeStyle={activeLinkStyle} className={classes.nav_link} to="/settings">Настройки</NavLink>}
            </Grid>
            <Grid item xs={1} className={classes.user_container}>
              <img className={classes.user_avatar} src='https://iconarchive.com/download/i91959/icons8/windows-8/Users-Administrator.ico' alt='user_avatar'/>
              <div>
                <Typography component="p" className={classes.user_info}>{currentUser}</Typography>
                <Typography component="p"className={classes.user_info}>Менеджер</Typography>
              </div>
                
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

    </div >
  );
}
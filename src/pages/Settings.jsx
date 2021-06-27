import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import user from "../img/imports/user.svg";
import edit from "../img/imports/edit_icon.svg";
import React, { useState, useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import addScanIcon from "../img/imports/add_scan_icon.svg";
import addIcon from "../img/imports/add_icon.svg";

const useStyles = makeStyles((theme) => ({
  hideLastBorder: {
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  },
  paper: {
    margin: 20,
  },
  tableHead: {
    marginBottom: 10,
  },
  titleBlock: {
    marginBottom: 10,
  },
  titleText: {
    color: theme.palette.secondary.main,
  },
  tableHeaderFirstStyle: {
    textAlign: "left !important",
  },
  tableHeaderStyle: {
    textAlign: "center",
    fontWeight: 400,
    fontStyle: "normal",
  },
  tableHeader: {
    padding: 10,
    paddingLeft: 30,
    fontFamily:'Roboto'
  },
  modalElement: {
    width: "280px",
    marginTop: "20px",
  },
  redText: {
    color: theme.palette.error.main,
  },
  greenText: {
    color: theme.palette.success.main,
  },
  endText:{
    
    marginLeft:'auto',
  },
  addIcon: {
    marginLeft:11,
    marginRight:'auto',
    transform:'translateY(3px)'
  },
  redIcon: {
    marginLeft:10,
    transform:'translateY(3px)',
    filter:
      "brightness(0) saturate(100%) invert(57%) sepia(89%) saturate(3330%) hue-rotate(325deg) brightness(94%) contrast(95%);",
  },
  textCenter: {
    textAlign: "center",
  },
  textLeft: {
    textAlign: "left",
  },
  textRight: {
    textAlign: "right",
  },
}));

let style={
  green:{
    color:'#219653',
  },
  red:{
    color:'#EB5757',
  }
}

function createData(name, type, comment, id) {
  return { name, type, comment, id };
}

export default function Settings() {
  const classes = useStyles();
  const [token, setToken] = React.useState("");
  const [rows, setRows] = React.useState([]);

  const [openAddAccountModal, setOpenAddAccountModal] = useState(false);

  const handleClickOpenAddAccountModal = () => {
    setOpenAddAccountModal(true);
  };

  const handleCloseAddAccountModal = () => {
    setOpenAddAccountModal(false);
  };

  React.useEffect(() => {
    async function fetchData() {
      let token = localStorage.getItem("token");
      setToken(token);
      let req = await fetch(
        "http://localhost:8000/api/app/importers/?format=json",
        {
          method: "GET",
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      if (req.status === 200) {
        let data = await req.json();
        let newRows = [];
        for (let d of data) {
          console.log(d);
          newRows.push(
            createData(d.company_name, d.production_type, d.comment, d.id)
          );
        }
        setRows(newRows);
      } else {
        console.log(req);
      }
    }
    fetchData();
  }, []);

  return (
    <div className={classes.paper}>
      <Dialog
        open={openAddAccountModal}
        onClose={handleCloseAddAccountModal}
        aria-labelledby="form-dialog-title"
        maxWidth={"md"}
      >
        <DialogTitle id="form-dialog-title">Добавить аккаунт</DialogTitle>
        <Divider />
        <Grid item xs={6}></Grid>
      </Dialog>
      <Container maxWidth="xl">
        <Paper className={classes.titleBlock}>
          <Toolbar>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                className={classes.titleText}
                variant="h5"
                component="div"
              >
                Настройки
              </Typography>
            </Grid>
          </Toolbar>
          <Divider />
        </Paper>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="baseline"
          spacing={3}
        >
          <Grid item xs={6}>
            <Paper className={classes.titleBlock}>
              <Toolbar>
                <Grid container direction="column">
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    style={{ paddingBottom: 10, paddingTop: 15, justifyContent:'space-between' }}
                  >
                    <Typography
                      className={`${classes.titleText} ${classes.greenText}`}
                      variant="h5"
                      component="div"
                    >
                      Аккаунты
                      <img
                        src={addIcon}
                        alt=""
                        className={classes.addIcon}
                        style={{ marginLeft: 5 }}
                        onClick={() => {
                          handleClickOpenAddAccountModal();
                        }}
                      />
                    </Typography>
                    <Grid item>
                      <Typography
                        className={`${classes.titleText} ${classes.greenText}`}
                        variant="h5"
                        component="div"
                      >
                        2
                      </Typography>
                    </Grid>
                  </Grid>
                  <Divider />
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    style={{ paddingBottom: 10, paddingTop: 10 }}
                  >
                    <Grid
                      item
                      xs={3}
                      className={`${classes.tableHeaderStyle} `}
                    >
                      <Typography>ФИО</Typography>
                    </Grid>
                    <Grid
                      item
                      xs={3}
                      className={`${classes.tableHeaderStyle} `}
                    >
                      <Typography>Номер телефона</Typography>
                    </Grid>
                    <Grid
                      item
                      xs={3}
                      className={`${classes.tableHeaderStyle} `}
                    >
                      <Typography>Почта</Typography>
                    </Grid>
                    <Grid
                      item
                      xs={3}
                      className={`${classes.tableHeaderStyle} `}
                    >
                      <Typography>Статус</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Toolbar>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.titleBlock}>
              <Toolbar>
                <Grid container direction="column">
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    style={{ paddingBottom: 10, paddingTop: 15, justifyContent:'space-between' }}
                  >
                    <Typography
                      className={`${classes.titleText} ${classes.redText}`}
                      variant="h5"
                      component="div"
                    >
                      Предприятия
                      <img
                        src={addIcon}
                        alt=""
                        className={classes.redIcon}
                        style={{ marginLeft: 5 }}
                      />
                    </Typography>
                    <Grid item>
                      <Typography
                        className={`${classes.titleText} ${classes.redText} ${classes.endText}`}
                        variant="h5"
                        component="div"
                      >
                        2
                      </Typography>
                    </Grid>
                  </Grid>
                  <Divider />
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    style={{ paddingBottom: 10, paddingTop: 10, justifyContent:'space-between' }}
                  >
                    <Grid
                      item
                      xs={3}
                      className={`${classes.tableHeaderStyle} `}
                    >
                      <Typography>Название</Typography>
                    </Grid>
                    <Grid
                      item
                      xs={3}
                      className={`${classes.tableHeaderStyle} `}
                    >
                      <Typography>Статус</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Toolbar>
            </Paper>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="baseline"
          spacing={3}
        >
          <Grid item xs={6}>
            <Paper className={classes.titleBlock}>
              <div className={classes.tableHeader}>
                <Grid container direction="row" justifyContent="space-between" >
                  <Grid item xs={3} className={classes.textCenter} style={{fontWeight:400}}>
                    Иванов Иван Иванович
                  </Grid>
                  <Grid item xs={3} className={classes.textCenter}>
                    +7 (978) 047-55-66
                  </Grid>
                  <Grid item xs={3} className={classes.textCenter}>
                    usermail@mail.ru
                  </Grid>
                  <Grid item xs={3} className={classes.textCenter}>
                    {false?'Активен':'Не Активен'}
                  </Grid>
                </Grid>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.titleBlock}>
              <div className={classes.tableHeader}>
                <Grid container direction="row" justifyContent="space-between">
                  <Grid item xs={9} className={classes.textLeft}>
                    258: Покровка 10 (p10 Мск)
                  </Grid>
                  <Grid item xs={3} className={classes.textCenter} style={{color:'red'}}>
                    {false?'Активен':'Не Активен'}
                  </Grid>
                </Grid>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

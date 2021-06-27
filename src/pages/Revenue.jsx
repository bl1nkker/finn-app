import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import addScanIcon from "../img/imports/add_scan_icon.svg";
import addIcon from "../img/imports/add_icon.svg";
import React, { useState, useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { KeyboardDatePicker } from "@material-ui/pickers";

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
  },
  tableInlineRowStyle: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  modalElement: {
    width: "180px",
    marginTop: "20px",
  },
}));

function getSum(num) {
  return Math.round(num * 100) / 100;
}

export default function Scans() {
  const classes = useStyles();
  const [token, setToken] = useState("");
  const [rows, setRows] = useState([]);

  //modal stuff
  const [open, setOpen] = useState(false);
  const [selectedDate, handleDateChange] = useState(new Date());
  const [newCashFree, setNewCashFree] = useState(0);
  const [newCash, setNewCash] = useState(0);
  const [newNP, setNewNP] = useState(0);
  const [newTables, setNewTables] = useState(0);
  const [newGuests, setNewGuests] = useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setNewCashFree(0);
    setNewCash(0);
    setNewGuests(0);
    setNewNP(0);
    setNewTables(0);
    handleDateChange(new Date());
    setOpen(false);
  };

  const handleAdd = async () => {
    let req = await fetch(
      "http://localhost:8000/api/app/revenue/?format=json",
      {
        method: "POST",
        body: JSON.stringify({
          cash_income: newCash,
          cash_free_income: newCashFree,
          np: newNP,
          tables: newTables,
          guests: newGuests,
          added_at: `${selectedDate.getFullYear()}-${
            selectedDate.getMonth() + 1
          }-${selectedDate.getDate() + 1}`,
          //add facility and user detection
          facility: 1,
          added_by: 1,
        }),
        headers: {
          "content-type": "application/json",
          Authorization: `token ${token}`,
        },
      }
    );
    if (req.status === 201) {
      console.log("uspeh");
    } else {
      alert("fail");
    }
    fetchData();
    handleClose();
  };

  const fetchData = async () => {
    let token = localStorage.getItem("token");
    setToken(token);
    let req = await fetch(
      "http://localhost:8000/api/app/revenue/?format=json&ordering=-added_at",
      {
        method: "GET",
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    );
    if (req.status === 200) {
      let data = await req.json();
      let rows = [];
      for (let d of data) {
        let didAdd = false;
        if (rows.length === 0) {
          rows = [{}];
          rows[0].date = d.added_at;
          rows[0].revenues = [
            { cashFree: d.cash_free_income, cash: d.cash_income, np: d.np },
          ];
          rows[0].sum = d.cash_free_income + d.cash_income + d.np;
          rows[0].numTables = d.tables;
          rows[0].numGuests = d.guests;
          rows[0].avgTable = getSum(rows[0].sum / rows[0].numTables);
          rows[0].avgGuest = getSum(rows[0].sum / rows[0].numGuests);
          didAdd = true;
        } else {
          for (let i in rows) {
            if (rows[i].date == d.added_at) {
              let newRevs = rows[i].revenues;
              newRevs.push({
                cashFree: d.cash_free_income,
                cash: d.cash_income,
                np: d.np,
              });
              rows[i].revenues = newRevs;
              rows[i].sum =
                rows[i].sum + d.cash_free_income + d.cash_income + d.np;
              rows[i].numTables = rows[i].numTables + d.tables;
              rows[i].numGuests = rows[i].numGuests + d.guests;
              rows[i].avgTable = getSum(rows[i].sum / rows[i].numTables);
              rows[i].avgGuest = getSum(rows[i].sum / rows[i].numGuests);
              didAdd = true;
            }
          }
        }
        if (!didAdd) {
          let index = rows.length;
          rows[index] = {};
          rows[index].date = d.added_at;
          rows[index].revenues = [
            { cashFree: d.cash_free_income, cash: d.cash_income, np: d.np },
          ];
          rows[index].sum = d.cash_free_income + d.cash_income + d.np;
          rows[index].numTables = d.tables;
          rows[index].numGuests = d.guests;
          rows[index].avgTable = getSum(
            rows[index].sum / rows[index].numTables
          );
          rows[index].avgGuest = getSum(
            rows[index].sum / rows[index].numGuests
          );
          didAdd = true;
        }
      }
      setRows(rows);
      console.log(rows);
    } else {
      console.log(req);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={classes.paper}>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Добавить выручку</DialogTitle>
        <Divider />
        <DialogContent>
          <Grid container justify="space-between" direction="row" spacing={3}>
            <Grid item xs>
              <KeyboardDatePicker
                placeholder="2018/10/10"
                className={classes.modalElement}
                value={selectedDate}
                onChange={(date) => {
                  handleDateChange(date);
                  console.log(selectedDate);
                }}
                label="Дата"
                margin="dense"
                format="yyyy/MM/dd"
              />
            </Grid>
            <Grid item xs>
              <TextField
                className={classes.modalElement}
                autoFocus
                margin="dense"
                label="НП"
                type="number"
                value={newNP}
                onChange={(event) => {
                  setNewNP(event.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Grid container direction="row" spacing={3}>
            <Grid item xs>
              <TextField
                className={classes.modalElement}
                margin="dense"
                label="Безнал."
                type="number"
                value={newCashFree}
                onChange={(event) => {
                  setNewCashFree(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs>
              <TextField
                className={classes.modalElement}
                margin="dense"
                label="Столы"
                type="number"
                value={newTables}
                onChange={(event) => {
                  setNewTables(event.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Grid container direction="row" spacing={3}>
            <Grid item xs>
              <TextField
                className={classes.modalElement}
                margin="dense"
                label="Наличный"
                type="number"
                value={newCash}
                onChange={(event) => {
                  setNewCash(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs>
              <TextField
                className={classes.modalElement}
                margin="dense"
                label="Гости"
                type="number"
                value={newGuests}
                onChange={(event) => {
                  setNewGuests(event.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            spacing={5}
            style={{ marginBottom: 10 }}
          >
            <Grid item xs>
              <Button
                className={`${classes.button} ${classes.modalElement}`}
                onClick={() => {
                  handleClose();
                }}
                type="button"
                fullWidth
                variant="outlined"
                color="error"
              >
                Закрыть
              </Button>
            </Grid>
            <Grid item xs>
              <Button
                className={`${classes.button} ${classes.modalElement}`}
                type="button"
                fullWidth
                variant="outlined"
                onClick={() => {
                  handleAdd();
                }}
              >
                Добавить
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Container maxWidth="xl">
        <Paper className={classes.titleBlock}>
          <Toolbar>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Typography
                className={classes.titleText}
                variant="h5"
                component="div"
              >
                Выручка
              </Typography>
              <div>
                <img
                  src={addIcon}
                  style={{ marginRight: 20 }}
                  onClick={() => {
                    handleClickOpen();
                  }}
                  alt=""
                />
                <img src={addScanIcon} alt="" />
              </div>
            </Grid>
          </Toolbar>
          <Divider />
          <div className={classes.tableHeader}>
            <Grid container direction="row" alignItems="center">
              <Grid item xs={1} className={`${classes.tableHeaderStyle}`}>
                <Typography>Дата</Typography>
              </Grid>
              <Grid
                item
                xs={5}
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Grid item xs={4} className={classes.tableHeaderStyle}>
                  <Typography>Безналичный расчет</Typography>
                </Grid>
                <Grid item xs={4} className={`${classes.tableHeaderStyle} `}>
                  <Typography>Наличный расчет</Typography>
                </Grid>
                <Grid item xs={4} className={`${classes.tableHeaderStyle} `}>
                  <Typography>НП</Typography>
                </Grid>
              </Grid>
              <Grid
                item
                xs={6}
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Grid item xs={4} className={`${classes.tableHeaderStyle} `}>
                  <Typography>Сумма</Typography>
                </Grid>
                <Grid item xs={2} className={`${classes.tableHeaderStyle} `}>
                  <Typography>Кол-во столов</Typography>
                </Grid>
                <Grid item xs={2} className={`${classes.tableHeaderStyle} `}>
                  <Typography>Кол-во гостей</Typography>
                </Grid>
                <Grid item xs={2} className={`${classes.tableHeaderStyle} `}>
                  <Typography>Средний стол</Typography>
                </Grid>
                <Grid item xs={2} className={`${classes.tableHeaderStyle} `}>
                  <Typography>Средний гость</Typography>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Paper>
        {rows.map((date) => (
          <Paper className={classes.titleBlock}>
            <div className={classes.tableHeader}>
              <Grid
                container
                direction="row"
                alignItems="center"
                justify="space-between"
              >
                <Grid item xs={1} className={`${classes.tableHeaderStyle}`}>
                  <Typography variant="body2">{date.date}</Typography>
                </Grid>
                <Grid item xs={5} className={`${classes.tableHeaderStyle}`}>
                  {date.revenues.map((d) => (
                    <div>
                      <Grid
                        container
                        direction="row"
                        alignItems="center"
                        className={`${classes.tableInlineRowStyle}`}
                      >
                        <Grid item xs={4} className={classes.tableHeaderStyle}>
                          <Typography variant="body2">{d.cashFree}₽</Typography>
                        </Grid>
                        <Grid
                          item
                          xs={4}
                          className={`${classes.tableHeaderStyle} `}
                        >
                          <Typography variant="body2">{d.cash}₽</Typography>
                        </Grid>
                        <Grid
                          item
                          xs={4}
                          className={`${classes.tableHeaderStyle} `}
                        >
                          <Typography variant="body2">
                            {d.np === null && "–"}
                            {d.np != null && `${d.np}₽`}
                          </Typography>
                        </Grid>
                      </Grid>
                      {date.revenues.indexOf(d) !==
                        date.revenues.length - 1 && <Divider />}
                    </div>
                  ))}
                </Grid>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  justify="space-between"
                  item
                  xs={6}
                  className={`${classes.tableHeaderStyle}`}
                >
                  <Grid item xs={4} className={`${classes.tableHeaderStyle} `}>
                    <Typography variant="body2">{date.sum}₽</Typography>
                  </Grid>
                  <Grid item xs={2} className={`${classes.tableHeaderStyle} `}>
                    <Typography variant="body2">{date.numTables}</Typography>
                  </Grid>
                  <Grid item xs={2} className={`${classes.tableHeaderStyle} `}>
                    <Typography variant="body2">{date.numGuests}</Typography>
                  </Grid>
                  <Grid item xs={2} className={`${classes.tableHeaderStyle} `}>
                    <Typography variant="body2">{date.avgTable}₽</Typography>
                  </Grid>
                  <Grid item xs={2} className={`${classes.tableHeaderStyle} `}>
                    <Typography variant="body2">{date.avgGuest}₽</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </Paper>
        ))}
      </Container>
    </div>
  );
}

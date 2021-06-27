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
import Checkbox from "@material-ui/core/Checkbox";

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
  addIcon: {},
  redIcon: {
    filter:
      "brightness(0) saturate(100%) invert(57%) sepia(89%) saturate(3330%) hue-rotate(325deg) brightness(94%) contrast(95%);",
  },
}));

function createData(name, type, comment, id) {
  return { name, type, comment, id };
}

export default function Budget() {
  const classes = useStyles();
  const [token, setToken] = React.useState("");
  const [rows, setRows] = React.useState([]);

  const [openAddModal, setOpenAddModal] = useState(false);

  const handleClickOpenAddModal = () => {
    setOpenAddModal(true);
  };

  const handleCloseAddModal = () => {
    setOpenAddModal(false);
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
        open={openAddModal}
        onClose={handleCloseAddModal}
        aria-labelledby="form-dialog-title"
        maxWidth={"md"}
      >
        <DialogTitle id="form-dialog-title">Добавить поставщика</DialogTitle>
        <Divider />
        <DialogContent>
          <Grid container justify="space-between" direction="row" spacing={3}>
            <Grid item xs>
              <TextField
                className={classes.modalElement}
                autoFocus
                margin="dense"
                label="Наименование компании"
                type="text"
              />
            </Grid>
            <Grid item xs>
              <TextField
                className={classes.modalElement}
                autoFocus
                margin="dense"
                label="ИНН"
                type="text"
              />
            </Grid>
          </Grid>
          <Grid container direction="row" spacing={3}>
            <Grid item xs>
              <TextField
                className={classes.modalElement}
                margin="dense"
                label="Наименование банка"
                type="text"
              />
            </Grid>
            <Grid item xs>
              <TextField
                className={classes.modalElement}
                margin="dense"
                label="БИК"
                type="text"
              />
            </Grid>
          </Grid>
          <Grid container direction="row" spacing={3}>
            <Grid item xs>
              <TextField
                className={classes.modalElement}
                margin="dense"
                label="Корреспондентский счет"
                type="text"
              />
            </Grid>
            <Grid item xs>
              <TextField
                className={classes.modalElement}
                margin="dense"
                label="Расчетный счет"
                type="text"
              />
            </Grid>
          </Grid>
          <Grid container direction="row" spacing={3}>
            <Grid item xs={6}>
              <FormControl variant="outlined" className={classes.modalElement}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Тип продукции
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={1}
                  label="Тип продукции"
                >
                  <MenuItem value={1}>
                    <em>Продукты</em>
                  </MenuItem>
                  <MenuItem value={2}>Ten</MenuItem>
                  <MenuItem value={3}>Twenty</MenuItem>
                  <MenuItem value={4}>Другое</MenuItem>
                </Select>
              </FormControl>
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
                  handleCloseAddModal();
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
                Бюджет
              </Typography>
              <Typography
                className={`${classes.titleText}`}
                variant="h5"
                component="div"
              >
                103 569.00 ₽
              </Typography>
            </Grid>
          </Toolbar>
          <Divider />
        </Paper>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={6}>
            <Paper className={classes.titleBlock}>
              <Toolbar>
                <Grid container direction="column">
                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                    style={{ paddingBottom: 10, paddingTop: 15 }}
                  >
                    <Typography
                      className={`${classes.titleText} ${classes.greenText}`}
                      variant="h5"
                      component="div"
                    >
                      Доход
                      <img
                        src={addIcon}
                        alt=""
                        className={classes.addIcon}
                        style={{ marginLeft: 5 }}
                      />
                    </Typography>
                    <Grid item>
                      <Typography
                        className={`${classes.titleText} ${classes.greenText}`}
                        variant="h5"
                        component="div"
                      >
                        352 747.00 ₽
                      </Typography>
                    </Grid>
                  </Grid>
                  <Divider />
                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                    style={{ paddingBottom: 10, paddingTop: 10 }}
                  >
                    <Grid
                      item
                      xs={2}
                      className={`${classes.tableHeaderStyle} `}
                    >
                      <Typography>Дата</Typography>
                    </Grid>
                    <Grid
                      item
                      xs={2}
                      className={`${classes.tableHeaderStyle} `}
                    >
                      <Typography>Контрагент</Typography>
                    </Grid>
                    <Grid
                      item
                      xs={2}
                      className={`${classes.tableHeaderStyle} `}
                    >
                      <Typography>Сумма</Typography>
                    </Grid>
                    <Grid
                      item
                      xs={2}
                      className={`${classes.tableHeaderStyle} `}
                    >
                      <Typography>Описание</Typography>
                    </Grid>
                    <Grid
                      item
                      xs={2}
                      className={`${classes.tableHeaderStyle} `}
                    >
                      <Typography>Внес</Typography>
                    </Grid>
                    <div
                      style={{ display: "flex", alignItems: "center" }}
                      className={`${classes.tableHeaderStyle} `}
                    >
                      <Checkbox
                        checked={
                          rows.filter((r) => r.isSelected).length ===
                            rows.length && rows.length !== 0
                        }
                        onChange={() => {}}
                        style={{ padding: 0 }}
                        inputProps={{ "aria-label": "primary checkbox" }}
                      />
                      <Typography>Статус</Typography>
                    </div>
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
                    justify="space-between"
                    style={{ paddingBottom: 10, paddingTop: 15 }}
                  >
                    <Typography
                      className={`${classes.titleText} ${classes.redText}`}
                      variant="h5"
                      component="div"
                    >
                      Расход
                      <img
                        src={addIcon}
                        alt=""
                        className={classes.redIcon}
                        style={{ marginLeft: 5 }}
                      />
                    </Typography>
                    <Grid item>
                      <Typography
                        className={`${classes.titleText} ${classes.redText}`}
                        variant="h5"
                        component="div"
                      >
                        352 747.00 ₽
                      </Typography>
                    </Grid>
                  </Grid>
                  <Divider />
                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                    style={{ paddingBottom: 10, paddingTop: 10 }}
                  >
                    <Grid
                      item
                      xs={2}
                      className={`${classes.tableHeaderStyle} `}
                    >
                      <Typography>Контрагент</Typography>
                    </Grid>
                    <Grid
                      item
                      xs={2}
                      className={`${classes.tableHeaderStyle} `}
                    >
                      <Typography>Сумма</Typography>
                    </Grid>
                    <Grid
                      item
                      xs={2}
                      className={`${classes.tableHeaderStyle} `}
                    >
                      <Typography>Описание</Typography>
                    </Grid>
                    <Grid
                      item
                      xs={2}
                      className={`${classes.tableHeaderStyle} `}
                    >
                      <Typography>Внес</Typography>
                    </Grid>
                    <div
                      style={{ display: "flex", alignItems: "center" }}
                      className={`${classes.tableHeaderStyle} `}
                    >
                      <Checkbox
                        checked={
                          rows.filter((r) => r.isSelected).length ===
                            rows.length && rows.length !== 0
                        }
                        onChange={() => {}}
                        style={{ padding: 0 }}
                        inputProps={{ "aria-label": "primary checkbox" }}
                      />
                      <Typography>Статус</Typography>
                    </div>
                  </Grid>
                </Grid>
              </Toolbar>
            </Paper>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="baseline"
          spacing={3}
        >
          <Grid item xs={6}>
            <Paper className={classes.titleBlock}>
              <div
                className={classes.tableHeader}
                style={{ display: "flex", alignItems: "center" }}
              >
                26.01.2021
                <Grid container direction="row" justify="space-between">
                  <Grid
                    item
                    xs={3}
                    className={classes.textCenter}
                    style={{ fontWeight: 400 }}
                  >
                    В-отчет
                  </Grid>
                  <Grid item xs={3} className={classes.textCenter}>
                    404.00
                  </Grid>
                  <Grid item xs={3} className={classes.textCenter}>
                    usermail@mail.ru
                  </Grid>
                  <Grid item xs={3} className={classes.textCenter}>
                    {false ? "Активен" : "Не Активен"}
                  </Grid>
                </Grid>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.titleBlock}>
              <div className={classes.tableHeader}>
                <Grid container direction="row" justify="space-between">
                  <Grid item xs={9} className={classes.textLeft}>
                    258: Покровка 10 (p10 Мск)
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    className={classes.textCenter}
                    style={{ color: "red" }}
                  ></Grid>
                </Grid>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

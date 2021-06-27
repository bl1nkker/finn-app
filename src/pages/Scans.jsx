import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import addScanIcon from '../img/imports/add_scan_icon.svg'
import Checkbox from '@material-ui/core/Checkbox';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  hideLastBorder: {
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  },
  paper: {
    margin: 20
  },
  tableHead: {
    marginBottom: 10
  },
  titleBlock: {
    marginBottom: 10,
  },
  titleText: {
    color: theme.palette.secondary.main
  },
  tableHeaderFirstStyle: {
    textAlign: "left !important"
  },
  tableHeaderStyle: {
    textAlign: "center",
    fontWeight: 400,
    fontStyle: "normal",

  },
  tableHeader: {
    padding: 10,
    paddingLeft: 30
  }
}));

function createData(date, files) {
  return { date, files };
}

export default function Scans() {
  const classes = useStyles();
  const [data, setData] = useState([
    createData('26.01.2021', [
      { type: 'Накладная', name: 'Джиэфси27.12.2020.jpg', id: 0, checked: false },
      { type: 'Накладная', name: 'Джиэфси27.12.2020.jpg', id: 0, checked: false },
      { type: 'Накладная', name: 'Джиэфси27.12.2020.jpg', id: 0, checked: false },
      { type: 'Накладная', name: 'Джиэфси27.12.2020.jpg', id: 0, checked: false },
    ]),
    createData('25.01.2021', [
      { type: 'Накладная', name: 'Джиэфси27.12.2020.jpg', id: 0, checked: false },
      { type: 'Накладная', name: 'Джиэфси27.12.2020.jpg', id: 0, checked: false },
    ]),
  ])

  return (
    <div className={classes.paper}>
      <Container maxWidth="xl" >
        <Paper className={classes.titleBlock}>
          <Toolbar>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography className={classes.titleText} variant="h5" component="div">
                Сканы
              </Typography>
              <img src={addScanIcon} />
            </Grid>
          </Toolbar>
          <Divider />
          <div className={classes.tableHeader}>
            <Grid
              container
              direction="row"
              alignItems="center"
            >
              <Grid item xs={2} className={`${classes.tableHeaderStyle}`}>
                <Typography>
                  Дата
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Grid item xs={5} className={classes.tableHeaderStyle}>
                    <Typography>
                      Тип Документа
                </Typography>
                  </Grid>
                  <Grid item xs={6} className={`${classes.tableHeaderStyle} `}>
                    <Typography>
                      Файл
                    </Typography>
                  </Grid>
                  <Grid item xs={1} className={`${classes.tableHeaderStyle} `}>
                    <Typography>
                      <Checkbox
                        checked={false}
                        onChange={(e) => console.log(e)}
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                      />
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Paper>
        {data.map(date => (
          <Paper className={classes.titleBlock}>
            <div className={classes.tableHeader}>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item xs={2} className={`${classes.tableHeaderStyle}`}>
                  <Typography variant="body2">
                    {date.date}
                  </Typography>
                </Grid>
                <Grid item xs={10} className={`${classes.tableHeaderStyle}`}>
                  {date.files.map(d => (
                    <div>
                      <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Grid item xs={5} className={classes.tableHeaderStyle}>
                          <Typography variant="body2">
                            {d.type}
                          </Typography>
                        </Grid>
                        <Grid item xs={6} className={`${classes.tableHeaderStyle} `}>
                          <Typography variant="body2">
                            <Link>
                              {d.name}
                            </Link>
                          </Typography>
                        </Grid>
                        <Grid item xs={1} className={`${classes.tableHeaderStyle} `}>
                          <Checkbox
                            checked={d.checked}
                            onChange={(e) => console.log(e)}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                          />
                        </Grid>
                      </Grid>
                      {date.files.indexOf(d) !== date.files.length - 1 &&
                        <Divider />
                      }
                    </div>
                  ))}
                </Grid>
              </Grid>
            </div>
          </Paper>
        ))}

      </Container>
    </div >
  );
}
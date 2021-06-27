import React, { useRef } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { withStyles } from "@material-ui/core/styles";
import OtpInput from "react-otp-input";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(10),
      marginBottom: theme.spacing(10),
      padding: theme.spacing(5),
    },
    zIndex: 100,
  },
  root: {
    padding: theme.spacing(3, 2),
    height: 200,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  button: {
    height: "45px",
  },
  paperContainer: {
    marginTop: 0,
    top: 0,
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
  },
  background: {
    position: "absolute",
    background: `url(${"/login_bg.png"})}`,
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
    filter: "brightness(50%)",
    margin: 0,
    top: 0,
    padding: 0,
    left: 0,
    zIndex: -50,
  },
  inputOTP: {
    width: "100% !important",
    color: "red",
  },
}));

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  let { children, classes, onClose, ...other } = props;

  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6" style={{ textAlign: "center" }} component="div">
        {children}
      </Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

export default function Login() {
  const classes = useStyles();

  const [login, setLogin] = React.useState("");
  const [loginError, setLoginError] = React.useState(false);
  const [password, setPassword] = React.useState("");

  const [openSendCode, setOpenSendCode] = React.useState(false);
  const [resetEmail, setResetEmail] = React.useState("");
  const [resetCode, setResetCode] = React.useState("");
  const [currentScreen, setCurrentScreen] = React.useState(0);
  const [resetPassword, setResetPassword] = React.useState("");
  const [resetPassword2, setResetPassword2] = React.useState("");

  const handleClickOpenSendCode = () => {
    setCurrentScreen(0);
    setOpenSendCode(true);
  };

  const handleCloseOpenSendCode = () => {
    setOpenSendCode(false);
  };

  const handleChangeResetEmail = (e) => {
    setResetEmail(e.target.value);
  };

  const handleLogin = async (e) => {
    let req = await fetch(
      "http://localhost:8000/api/accounts/auth/loginaccount",
      {
        method: "POST",
        body: JSON.stringify({
          email: login,
          password: password,
        }),
        headers: {
          "content-type": "application/json",
        },
      }
    );
    let res = await req.json();
    console.log(res);
    if (req.status === 200) {
      localStorage.setItem("token", res.token);
      // Store user in localStorage
      localStorage.setItem("username", res.user.full_name);
      localStorage.setItem("userEmail", res.user.email);
      console.log(localStorage.getItem("token"));
      window.location.href = "/home";
    } else {
      setLoginError(true);
    }
  };

  return (
    <div className={`${classes.root} ${classes.paperContainer}`}>
      <CssBaseline />
      <Container component="div" maxWidth="xs">
        <Paper className={classes.paper} variant="outlined">
          <Typography component="p" variant="h5">
            Войти
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{
              width: "100%",
              mt: 1,
            }}
          >
            <TextField
              margin="normal"
              fullWidth
              id="standard-login"
              label="Логин"
              name="login"
              autoComplete="username"
              variant="standard"
              onChange={(event) => {
                setLogin(event.target.value);
              }}
            />
            <TextField
              error={loginError}
              helperText={loginError ? "Неправильный пароль." : ""}
              margin="normal"
              fullWidth
              name="password"
              label="Пароль"
              type="password"
              id="standard-password"
              autoComplete="current-password"
              variant="standard"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <Button
              onClick={(event) => handleLogin(event)}
              className={classes.button}
              type="button"
              fullWidth
              variant="outlined"
              sx={{ mt: 3, mb: 2 }}
            >
              Войти
            </Button>
            <Grid container>
              <Grid item xs>
                <Link onClick={() => handleClickOpenSendCode()} variant="body2">
                  Забыли Пароль?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Paper>
        <Dialog
          onClose={handleCloseOpenSendCode}
          aria-labelledby="customized-dialog-title"
          open={openSendCode}
        >
          <DialogTitle
            id="customized-dialog-title"
            onClose={handleCloseOpenSendCode}
          >
            {(currentScreen === 0 || currentScreen === 1) &&
              "Восстановление пароля"}
            {currentScreen === 2 && "Обновите пароль"}
          </DialogTitle>
          <DialogContent dividers>
            <Typography
              variant="h6"
              style={{ textAlign: "center", fontSize: 14, fontWeight: 300 }}
              gutterBottom
            >
              {currentScreen === 0 && "Адрес электронной почты аккаунта CRM"}
              {currentScreen === 1 &&
                `Введите код, который мы вам отправили на адрес ${resetEmail}`}
            </Typography>
            {currentScreen === 0 && (
              <TextField
                margin="normal"
                fullWidth
                id="standard-email"
                label="Email"
                name="email_reset"
                autoComplete="email"
                variant="standard"
                value={resetEmail}
                onChange={handleChangeResetEmail}
              />
            )}
            {currentScreen === 1 && (
              <div style={{ margin: "0 auto" }}>
                <OtpInput
                  onChange={(otp) => setResetCode(otp)}
                  numInputs={6}
                  inputStyle="MuiInput-input MuiInputBase-input css-gga68z-MuiInputBase-input inputOTP"
                  className="MuiInput-root MuiInputBase-root MuiInputBase-colorPrimary css-u1nrid-MuiInputBase-root-MuiInput-root"
                  shouldAutoFocus={true}
                  value={resetCode}
                  separator="–"
                />
              </div>
            )}
            {currentScreen === 2 && (
              <div>
                <TextField
                  margin="normal"
                  fullWidth
                  label="Пароль"
                  variant="standard"
                  type="password"
                  value={resetPassword}
                  onChange={(e) => {
                    setResetPassword(e.target.value);
                  }}
                />
                <TextField
                  margin="normal"
                  fullWidth
                  label="Повторите Пароль"
                  variant="standard"
                  type="password"
                  value={resetPassword2}
                  onChange={(e) => {
                    setResetPassword2(e.target.value);
                  }}
                />
              </div>
            )}
            {currentScreen === 0 && (
              <Button
                onClick={() => {
                  setCurrentScreen(1);
                }}
                className={classes.button}
                type="button"
                fullWidth
                variant="outlined"
                sx={{ mt: 3, mb: 2 }}
              >
                Отправить код
              </Button>
            )}
            {currentScreen === 1 && (
              <Button
                onClick={() => {
                  setCurrentScreen(2);
                }}
                className={classes.button}
                type="button"
                fullWidth
                variant="outlined"
                sx={{ mt: 3, mb: 2 }}
              >
                Подтвердить Код
              </Button>
            )}
            {currentScreen === 2 && (
              <Button
                onClick={() => {
                  handleCloseOpenSendCode();
                }}
                className={classes.button}
                type="button"
                fullWidth
                variant="outlined"
                sx={{ mt: 3, mb: 2 }}
              >
                Сменить Пароль
              </Button>
            )}
          </DialogContent>
        </Dialog>
      </Container>
      <div
        className={classes.background}
        style={{ backgroundSize: "cover" }}
      ></div>
    </div>
  );
}

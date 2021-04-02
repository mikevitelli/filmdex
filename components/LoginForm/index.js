import {
  TextField,
  Switch,
  Button,
  FormControlLabel,
  Divider,
  Typography,
} from "@material-ui/core";
import styles from "../../styles/Home.module.css";

import GoogleButton from "react-google-button";
import { provider, signIn } from "next-auth/client";

const LoginForm = (props) => {
  return (
    <>
      {/* <h1>Login</h1> */}
      <TextField
        style={{ width: "240px", height: "50px" }}
        id="outlined-basic"
        label="Email or Username"
        variant="outlined"
      />{" "}
      <br />
      <br />
      <TextField
        style={{ width: "240px", height: "50px" }}
        id="outlined-basic"
        label="Password"
        variant="outlined"
      />
      {/* UNCOMMENT FOR SWITCH */}
      {/* <br />
      <br /> */}
      {/* <FormControlLabel
        value="top"
        control={<Switch />}
        label="Remember Me?"
        labelPlacement="top"
      /> */}
      <br />
      <br />
      <Button style={{ width: "240px", height: "50px" }} variant="outlined">
        Login
      </Button>
      <br />
      <br />
      <Divider variant="middle" />
      <Typography
        // className={classes.dividerInset}
        color="textSecondary"
        display="block"
        variant="caption"
      >
        or
      </Typography>
      <br />
      <GoogleButton
        type="light"
        className={styles.googleBttn}
        style={{ marginLeft: "7px" }}
        onClick={() => signIn()}
      />
      <br />
    </>
  );
};

export default LoginForm;

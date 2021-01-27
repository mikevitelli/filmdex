import { TextField, Switch, Button } from "@material-ui/core";

const LoginForm = () => {
  return (
    <>
      <h1>Login</h1>
      <TextField id="outlined-basic" label="Email" variant="outlined" />{" "}
      <br></br>
      <br></br>
      <TextField id="outlined-basic" label="Password" variant="outlined" />
      <br></br>
      <p>Remember Me?</p>
      <Switch
        color="default"
        inputProps={{ "aria-label": "checkbox with default color" }}
      />
      <br></br>
      <br></br>
      <Button variant="outlined">Login</Button>
    </>
  );
};

export default LoginForm;

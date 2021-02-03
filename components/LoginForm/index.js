import { TextField, Switch, Button, FormControlLabel } from "@material-ui/core";

const LoginForm = () => {
  return (
    <>
      <h1>Login</h1>
      <TextField id="outlined-basic" label="Email" variant="outlined" /> <br />
      <br />
      <TextField id="outlined-basic" label="Password" variant="outlined" />
      <br />
      <br />
      <FormControlLabel
        value="top"
        control={<Switch />}
        label="Remember Me?"
        labelPlacement="top"
      />
      <br />
      <br />
      <Button variant="outlined">Login</Button>
    </>
  );
};

export default LoginForm;

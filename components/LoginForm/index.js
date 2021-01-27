import { TextField, Switch } from "@material-ui/core";

const LoginForm = () => {
  return (
    <>
      <h1>Login</h1>
      <TextField id="outlined-basic" label="Email" variant="outlined" />{" "}
      <br></br>
      <br></br>
      <TextField id="outlined-basic" label="Password" variant="outlined" />
      <br></br>
      <Switch
        defaultChecked
        color="default"
        inputProps={{ "aria-label": "checkbox with default color" }}
      />
    </>
  );
};

export default LoginForm;

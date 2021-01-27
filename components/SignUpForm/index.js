import { TextField, Switch, Button } from "@material-ui/core";

const SignUpForm = () => {
  return (
    <>
      <h1>Sign Up</h1>
      <TextField id="outlined-basic" label="Username" variant="outlined" />{" "}
      <br></br>
      <br></br>{" "}
      <TextField id="outlined-basic" label="Email" variant="outlined" />{" "}
      <br></br>
      <br></br>
      <TextField id="outlined-basic" label="Password" variant="outlined" />
      <br></br>
      <br></br>
      <TextField
        id="outlined-basic"
        label="Confirm Password"
        variant="outlined"
      />
      <br></br>
      <br></br>
      <Button variant="outlined">Sign Up</Button>
    </>
  );
};

export default SignUpForm;

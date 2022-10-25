import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUpUser } from "../config/firebasemethods";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  let signUp = () => {
    signUpUser({
      email,
      password,
      userName: "Affan Murtaza",
      contact: "090078601",
    })
      .then((success) => {
        console.log(success);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <h1>Signup</h1>
      <Box>
        <Box>
          <TextField
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            variant="standard"
          />
        </Box>
        <Box>
          <TextField
            label="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            variant="standard"
          />
        </Box>
      </Box>
      <button onClick={signUp}>Sign Up</button>
    </>
  );
}
export default Signup;

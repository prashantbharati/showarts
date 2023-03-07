import React, { useState } from "react";
import { Grid, TextField, Typography } from "@material-ui/core";
import countries from "./countries";
const Zamp = () => {
  const [value, setValue] = useState("");
  const [result, setresult] = useState([]);
  const handlechange = (e) => {
    setValue(e.target.value);
    console.log(value);
    let result1 = countries.filter(checkstring);
    console.log(result1);
    setresult(result1);
    console.log(result, "result printed");
  };

  function checkstring(country) {
    console.log(value, country);
    // return value === country.name;
    return country.name.includes(value);
  }

  return (
    <>
      <Grid container>
        <Grid item xs={3}>
          <Typography style={{ backgroundColor: "#8BF5FA", height: "100vh" }}>
            dashboard
          </Typography>
        </Grid>

        <Grid item xs={9}>
          <TextField
            name="title"
            variant="outlined"
            label="Title"
            fullWidth
            onChange={handlechange}
          />

          {value === "" &&
            countries.map((country) => (
              <div>
                <Typography> {country.name}</Typography>
              </div>
            ))}
          {result.map((country) => (
            <div>
              <Typography> {country.name}</Typography>
            </div>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Zamp;

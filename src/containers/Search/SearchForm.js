import React from "react";

import makeStyles from "@material-ui/core/styles/makeStyles";
import { required,regexValidation } from "../../utils/errorUtils";
import { ValidationConstants } from "../../utils/ValidationConstants";
import { Button } from "../../components/button";
import Form from "../../components/form";
import { InputTextBox } from "../../components/inputTextBox";
import { Typography,Grid } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  search: {
    margin: theme.spacing(3, 0.8, 2),
  },
  clear: {
    margin: theme.spacing(3, 0, 2),
  },
  boxdiv: {
    backgroundColor: "#FFFFFF",
    padding: theme.spacing(3),
    textAlign: "center",
    margin: theme.spacing(1),
    border: "1px solid",
    height:'80vh'
  },
}));

export const SearchForm = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.boxdiv}>
      <Typography>Search for a customer account below.</Typography>
      <Form
        form="searchForm"
        onSubmit={props.handleloginSubmit}
      >
        <InputTextBox
          name="telephone"
          label="Telephone"
          placeholder="Please Enter Telephone"
          fullWidth
          variant="outlined"
          validation={[regexValidation(ValidationConstants.PHONE_NUMBER)]}
          isformfield={true}
        />
        <InputTextBox
          name="ban"
          label="Ban No"
          placeholder="ex:12345,143563"
          fullWidth
          variant="outlined"
          validation={[required("Ban No")]}
          isformfield={true}
        />
       <InputTextBox
          name="cid"
          label="CID"
          placeholder="Please Enter CID"
          fullWidth
          variant="outlined"
          isformfield={true}
        />
        <Grid container justify='flex-end'>
        <Grid item ={6}>
        <Button type="button" fullWidth className={classes.clear}>
          Clear
        </Button>
        </Grid>
        <Grid item ={6}>
        <Button type="submit" fullWidth color="secondary" className={classes.search}>
          Search
        </Button>
        </Grid>
        </Grid>
      </Form>
    </div>
  );
};

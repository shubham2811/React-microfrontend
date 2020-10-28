import React from "react";

import makeStyles from "@material-ui/core/styles/makeStyles";
import { required,regexValidation } from "../../utils/errorUtils";
import { ValidationConstants } from "../../utils/ValidationConstants";
import { Button } from "../../components/button";
import Form from "../../components/form";
import { InputTextBox } from "../../components/inputTextBox";
import { Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
  },
  submit: {
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
        className={classes.form}
        form="searchForm"
        onSubmit={props.handleloginSubmit}
      >
        <InputTextBox
          name="telephone"
          label="Telephone"
          placeholder="Please Enter Ban No"
          fullWidth
          variant="outlined"
          validation={[regexValidation(ValidationConstants.PHONE_NUMBER)]}
          isformfield={true}
        />
        <InputTextBox
          name="ban"
          label="Ban No"
          placeholder="Please Enter Ban No"
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
        <Button type="submit" fullWidth className={classes.submit}>
          Search
        </Button>
      </Form>
    </div>
  );
};

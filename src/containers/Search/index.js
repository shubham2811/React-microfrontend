import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { SearchForm } from "./SearchForm";
import { CardList } from "../../components/cardList";
import BanResult from "../../DummyData/banResult.json";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
}));
const headers = [
  { label: "Customer Name", value: "billingAccountName" },
  { label: "Account Type", value: "billingAcctType" },
  { label: "BAN", value: "billingAcctNum" },
  { label: "Status", value: "billingAcctStatus" },
  { label: "Billing Address", value: "billingAddress" },
];
const Search = () => {
  const [result, setResult] = useState([]);
  const handleSearch = (data) => {
    // console.log(data);

    const searchResult = BanResult.data.filter(
      (item) => item.billingAcctNum === data.ban
    );
    setResult(searchResult);
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item md={4}>
          <SearchForm handleloginSubmit={handleSearch} />
        </Grid>

        <Grid item md={8}>
          <CardList rowData={result} headers={headers} count={result.length} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Search;

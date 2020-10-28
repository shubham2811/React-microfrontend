import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import Tooltip from "@material-ui/core/Tooltip";

export const CardList = ({ headers, rowData,count }) => {
  return (
    <>
    <Typography>{count} search Results</Typography>
      {rowData ? (
        <>
          {rowData.map((row) => {
            return (
              <Grid item lg={12} md={12} xl={12} xs={12} key={row.id}>
                <Card>
                  <CardContent>
                    <Grid container spacing={2}>
                      {headers.map((header) => {
                        return (
                          <Grid item key={header.label}>
                            <Tooltip
                              title={header.label}
                              placement="top-start"
                              arrow
                            >
                              <Typography variant="h6">
                                {header.label}
                              </Typography>
                            </Tooltip>
                            <Tooltip
                              placement="bottom-start"
                              title={
                                row[header.value] !== null &&
                                row[header.value].toString()
                              }
                              arrow
                            >
                              <Typography component="p">
                                {row[header.value] !== null
                                  ? row[header.value].toString()
                                  : null}
                              </Typography>
                            </Tooltip>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </>
      ) : (
        <Grid container direction="row" justify="center" alignItems="center">
          <Typography noWrap variant="h5">
            No Records Found
          </Typography>
        </Grid>
      )}
    </>
  );
};

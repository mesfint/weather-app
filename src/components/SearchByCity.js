import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
}));

export const SearchByCity = ({ getWeatherInfo, searchTerm, setSearchTerm }) => {
  const classes = useStyles();
  return (
    <>
      <div className="inputSearch">
        <Paper onSubmit={getWeatherInfo} component="form">
          <InputBase
            className="input"
            type="text"
            placeholder="Search City ..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <SearchIcon
            style={{
              margin: "-7px 0 ",
              paddingRight: "15px",
              cursor: "pointer",
            }}
          />

          {/*  <button type="submit">Enter</button> */}
        </Paper>
      </div>
    </>
  );
};

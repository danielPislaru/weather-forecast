import { useState, useRef } from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Stack,
  Divider,
  Alert,
} from "@mui/material";
import { SearchTwoTone, Close } from "@mui/icons-material";
import { Grid } from "react-loader-spinner";

import Forecast from "./Forecast";
import axios from "axios";

const BASE_URL = "https://www.metaweather.com/api/location";
const CROSS_DOMAIN = "https://the-ultimate-api-challenge.herokuapp.com";
const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;

const App = () => {
  const inputRef = useRef();

  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [searchLocation, setSearchLocation] = useState("");

  const [forecast, setForecast] = useState(null);

  const getWoeid = async (location) => {
    setError(false);
    try {
      setLoading(true); //get woeid
      const { data } = await axios.get(`${REQUEST_URL}/search`, {
        params: { query: location },
      });

      if (!data || data.length == 0) {
        setError("There is no such location!");
        return;
      }
      return data;
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const getForecastData = async (woeid) => {
    setError(false);
    try {
      setLoading(true);
      const { data } = await axios.get(`${REQUEST_URL}/${woeid}`);

      if (!data || data.length == 0) {
        setError("There is no such location!");
        return;
      }
      return data;
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setForecast(null);

    if (!searchLocation || searchLocation == "") return;
    const city =
      searchLocation.charAt(0).toUpperCase() + searchLocation.slice(1);

    const data = await getWoeid(city);

    if (!data || data == "") return;
    const response = await getForecastData(data[0].woeid);

    setForecast(response);
    console.log(response);
  };

  return (
    <Box
      bgcolor="neutral.main"
      sx={{
        height: "100%",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          height: "max(300px, 60%, 40vh)",
          width: "min(700px, 95%, 100vw)",
        }}
      >
        <Typography variant="h2" align="center">
          Weather{" "}
          <Typography
            variant="span"
            sx={{ fontWeight: "bold", color: "primary.main" }}
          >
            Forecazzy
          </Typography>
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            inputRef={inputRef}
            sx={{ my: 1 }}
            fullWidth
            variant="outlined"
            placeholder="Search city"
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <Stack
                    spacing={1}
                    direction="row-reverse"
                    divider={<Divider orientation="vertical" flexItem />}
                  >
                    <IconButton
                      disabled={searchLocation == ""}
                      onClick={handleSubmit}
                    >
                      <SearchTwoTone />
                    </IconButton>
                    {searchLocation !== "" && (
                      <IconButton
                        onClick={() => {
                          setSearchLocation("");
                          setError(false);
                          setForecast(null);
                        }}
                      >
                        <Close />
                      </IconButton>
                    )}
                  </Stack>
                </InputAdornment>
              ),
            }}
          />
        </form>

        {isError && <Alert severity="error">{isError}</Alert>}
        {isLoading && (
          <Box
            sx={{
              m: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid color="#E0D4FA" height={80} width={80} />
          </Box>
        )}
        {forecast && <Forecast weather={forecast} />}
      </Box>
    </Box>
  );
};

export default App;

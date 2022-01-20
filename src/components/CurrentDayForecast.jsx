import { Box, Typography, Stack } from "@mui/material";

import useWindowDimensions from "../utils/useWindowDimensions";

const CurrentDayForecast = ({ todayForecast }) => {
  const { date, weatherDescription, weatherIcon, temperature, weekday } =
    todayForecast;

  const isMobile = useWindowDimensions();
  return (
    <Box sx={{ width: isMobile ? "100%" : "50%" }}>
      <Typography variant="h6">
        {weekday}, {date}
      </Typography>
      <Stack
        spacing={1}
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <img
          src={weatherIcon}
          alt="weather-icon"
          className="current-weather-icon"
        />
        <Box>
          <Typography variant="h2">{temperature}°</Typography>
          <Typography variant="h6">{weatherDescription}</Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default CurrentDayForecast;

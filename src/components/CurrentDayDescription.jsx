import React from "react";
import { Box, Typography, Stack } from "@mui/material";

import useWindowDimensions from "../utils/useWindowDimensions";

const CurrentDayDescription = ({ consolidated_weather }) => {
  const {
    max_temp,
    min_temp,
    wind_speed,
    humidity,
    air_pressure,
    predictability,
  } = consolidated_weather;

  const isMobile = useWindowDimensions();
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Stack
        sx={{ textAlign: "center" }}
        spacing={1}
        direction={isMobile ? "column" : "row"}
        justifyContent="space-around"
        alignItems="center"
      >
        <Stack
          spacing={1}
          direction={isMobile ? "row" : "column"}
          justifyContent="space-between"
        >
          <Stack direction="column">
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              {Math.floor(max_temp)}°
            </Typography>
            <Typography variant="subtitle2">High</Typography>
          </Stack>
          <Stack direction="column">
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              {Math.floor(min_temp)}°
            </Typography>
            <Typography variant="subtitle2">Low</Typography>
          </Stack>
        </Stack>

        <Stack
          spacing={1}
          direction={isMobile ? "row" : "column"}
          justifyContent="space-between"
        >
          <Stack direction="column">
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              {Math.floor(wind_speed)} km/h
            </Typography>
            <Typography variant="subtitle2">Wind</Typography>
          </Stack>
          <Stack direction="column">
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              {Math.floor(humidity)} %
            </Typography>
            <Typography variant="subtitle2">Humidity</Typography>
          </Stack>
        </Stack>

        <Stack
          spacing={1}
          direction={isMobile ? "row" : "column"}
          justifyContent="space-between"
        >
          <Stack direction="column">
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              {air_pressure} mb
            </Typography>
            <Typography variant="subtitle2">Air Pressure</Typography>
          </Stack>
          <Stack direction="column">
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              {predictability} %
            </Typography>
            <Typography variant="subtitle2">Predictability</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default CurrentDayDescription;

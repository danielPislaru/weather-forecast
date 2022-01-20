import React, { useState } from "react";
import { Box, Typography, Stack, Divider, Paper } from "@mui/material";
import { useEffect } from "react";

import getCurrentDayForecast from "./utils/getCurrentDayForecast";
import getUpcomingDaysForecast from "./utils/getUpcomingDaysForecast";

import CurrentDayForecast from "./components/CurrentDayForecast";
import CurrentDayDescription from "./components/CurrentDayDescription";
import UpcomingDaysForecast from "./components/UpcomingDaysForecast";

import useWindowDimensions from "./utils/useWindowDimensions";

const Forecast = ({ weather }) => {
  const isMobile = useWindowDimensions();

  const {
    consolidated_weather,
    title,
    sun_rise,
    sun_set,
    parent: { title: state },
  } = weather;

  const [todayForecast, setTodayForecast] = useState(null);
  const [upcomingForecast, setUpcomingForecast] = useState(null);

  useEffect(() => {
    const fetchTodayForecast = async () => {
      try {
        const responseToday = await getCurrentDayForecast(
          consolidated_weather[0],
          title
        );
        setTodayForecast(responseToday);
      } catch (error) {
        console.log("error = ", error);
      }
    };

    const fetchUpcomingForecast = async () => {
      try {
        const responseUpcoming = await getUpcomingDaysForecast(
          consolidated_weather
        );
        setUpcomingForecast(responseUpcoming);
      } catch (error) {
        console.log("error = ", error);
      }
    };

    fetchTodayForecast();
    fetchUpcomingForecast();
  }, [weather]);

  return (
    <Paper>
      <Box sx={{ p: 1 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", my: 1 }}>
          {title}, {state}
        </Typography>
        <Stack
          sx={{ my: 2 }}
          spacing={1}
          direction={isMobile ? "column" : "row"}
          alignItems={isMobile ? "flex-start" : "center"}
          divider={<Divider orientation="vertical" flexItem />}
        >
          <CurrentDayForecast todayForecast={todayForecast || {}} />
          <CurrentDayDescription
            consolidated_weather={consolidated_weather[0] || {}}
          />
        </Stack>
        <UpcomingDaysForecast upcomingForecast={upcomingForecast || []} />
      </Box>
    </Paper>
  );
};

const MemoForecast = React.memo(Forecast);
export default MemoForecast;

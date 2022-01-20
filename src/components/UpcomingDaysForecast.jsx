import { Box, Typography, Stack, Paper } from "@mui/material";

const imgUrlBase = "https://www.metaweather.com/static/";

const UpcomingDaysForecast = ({ upcomingForecast }) => {
  console.log("upcomingForecast = ", upcomingForecast);

  return (
    <Stack spacing={1} direction="row" justifyContent="space-between">
      {upcomingForecast?.map((item, idx) => {
        return (
          <Paper
            sx={{
              p: 1,
              width: "min(100px, 18%, 100vw)",
              backgroundColor: "neutral.main",
            }}
            key={idx}
          >
            <Stack
              spacing={1}
              direction="column"
              justifyContent="center"
              alignContent="center"
              alignItems="center"
            >
              <Typography variant="subtitle2">{item.weekday}</Typography>
              <img
                className="future-weather-icon"
                src={`${imgUrlBase}img/weather/${item.imgUrl}.svg`}
                alt=""
              />
              <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                {item.temperature}°
              </Typography>
            </Stack>
          </Paper>
        );
      })}
    </Stack>
  );
};

export default UpcomingDaysForecast;

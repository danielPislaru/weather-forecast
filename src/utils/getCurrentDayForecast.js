import moment from "moment";

const getCurrentDayForecast = async (data, title) => ({
  weekday: moment(data.applicable_data).format("dddd"),
  date: moment(data.applicable_data).format("MMMM Do"),
  location: title,
  temperature: Math.round(data.the_temp),
  weatherIcon: `https://www.metaweather.com/static/img/weather/${data.weather_state_abbr}.svg`,
  weatherDescription: data.weather_state_name,
});

export default getCurrentDayForecast;

export const convertTempUnitToFahrenheit = (temp) => {
  return temp * 1.8 + 32;
};
export const convertTempUnitToCelsius = (temp) => {
  return temp;
};

export const getLocalTime = (timezone) => {
  const localTimeZone = new Date();

  const currentHours = localTimeZone.getHours();
  let currentMin = localTimeZone.getMinutes();
  if (currentMin < 10) {
    currentMin = `0${currentMin}`;
  }
  //(getTimezoneOffset) =>Return the timezone difference between UTC and Local Time:
  let displayedTime;
  const localZone = localTimeZone.getTimezoneOffset() / -60;
  const targetZone = timezone / 3600;
  const timeDiff = targetZone - localZone;
  let newTime = currentHours + timeDiff;
  if (timezone) {
    if (newTime > 12 && newTime < 24) {
      newTime -= 12;
      displayedTime = `${newTime.toString()}:${currentMin.toString()} pm`;
    } else if (newTime > 24) {
      newTime -= 24;
    } else {
      displayedTime = `${newTime.toString()}:${currentMin.toString()} am`;
    }
  } else {
    displayedTime = '00:00 + am';
  }

  return displayedTime;
};

export const getDate = (dt) => {
  const unixTimestamp = dt;
  const milliseconds = dt * 1000;
  const dateObject = new Date(milliseconds);
  return (
    dateObject.toLocaleString('en-US', { weekday: 'short' }) +
    ' ' +
    dateObject.toLocaleString('en-US', { month: 'short' }) +
    ' ' +
    dateObject.toLocaleString('en-US', { year: 'numeric' })
  );
};

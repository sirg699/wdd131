// STATIC WEATHER VALUES
const temperature = 10; // °C
const windSpeed = 5; // km/h

// WIND CHILL FUNCTION (ONE-LINE RETURN)
function calculateWindChill(temp, speed) {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(speed, 0.16) +
    0.3965 * temp * Math.pow(speed, 0.16)
  ).toFixed(1);
}

// DISPLAY WIND CHILL
document.getElementById("windchill").textContent =
  temperature <= 10 && windSpeed > 4.8
    ? `${calculateWindChill(temperature, windSpeed)} °C`
    : "N/A";

// FOOTER DATES
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

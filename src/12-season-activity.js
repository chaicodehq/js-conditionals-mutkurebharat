/**
 * 🗺️ WanderLust Travel Planner
 *
 * WanderLust is a travel planning app that suggests fun activities
 * based on the month and the current temperature. Users enter the
 * month number and temperature, and the app recommends what to do!
 *
 * Step 1 — Determine the season from the month:
 *   - December, January, February  (12, 1, 2)   → "Winter"
 *   - March, April, May            (3, 4, 5)     → "Spring"
 *   - June, July, August           (6, 7, 8)     → "Summer"
 *   - September, October, November (9, 10, 11)   → "Autumn"
 *
 * Step 2 — Suggest an activity based on season AND temperature (°C):
 *   - Winter + temp < 0     → "skiing"
 *   - Winter + temp >= 0    → "ice skating"
 *   - Spring + temp > 20    → "hiking"
 *   - Spring + temp <= 20   → "museum visit"
 *   - Summer + temp > 35    → "swimming"
 *   - Summer + temp <= 35   → "cycling"
 *   - Autumn + temp > 15    → "nature walk"
 *   - Autumn + temp <= 15   → "reading at a cafe"
 *
 * Return an object: { season: string, activity: string }
 *
 * Rules:
 *   - If month is not 1–12, return null
 *
 * @param {number} month - Month of the year (1-12)
 * @param {number} temperature - Current temperature in Celsius
 * @returns {{ season: string, activity: string } | null}
 */
export function getSeasonActivity(month, temperature) {
  if (month < 1 || month > 12) {
    return null;
  }

  let winterSeasonArr = [12, 1, 2];
  let SpringSeasonArr = [3, 4, 5];
  let SummerSeasonArr = [6, 7, 8];
  let AutumnSeasonArr = [9, 10, 11];

  let weather;

  if (winterSeasonArr.includes(month)) {
    if (temperature < 0) {
      weather = { season: "Winter", activity: "skiing" };
    } else if (temperature >= 0) {
      weather = { season: "Winter", activity: "ice skating" };
    }
  } else if (SpringSeasonArr.includes(month)) {
    if (temperature > 20) {
      weather = { season: "Spring", activity: "hiking" };
    } else if (temperature <= 20) {
      weather = { season: "Spring", activity: "museum visit" };
    }
  } else if (SummerSeasonArr.includes(month)) {
    if (temperature > 35) {
      weather = { season: "Summer", activity: "swimming" };
    } else if (temperature <= 35) {
      weather = { season: "Summer", activity: "cycling" };
    }
  } else if (AutumnSeasonArr.includes(month)) {
    if (temperature > 15) {
      weather = { season: "Autumn", activity: "nature walk" };
    } else if (temperature <= 15) {
      weather = { season: "Autumn", activity: "reading at a cafe" };
    }
  }

  return weather;
}

# SP-500-Return-Data

## General Overview

A visual, interactive graph of the return data for the S&P 500. This project ingests data from the rawdata sheet of an Excel file, calculates the daily and total returns, and displays the results in a line chart with dates on the X-axis and total return %s on the Y-axis. The project is built primarily with React, Express, and Javascript. 

## Features Implemented

- Ingests data from rawdata tab in Excel file
- Calculates total return up to a specific point
- Interactive line chart using Recharts which provides details on hover
- Responsive UI
- Loading icon while data is being fetched

## Technologies

- **Front End**: React, Recharts, date-fns
- **Back End**: Node.js, Express, xlsx
- **Hosting**: GitHub Pages

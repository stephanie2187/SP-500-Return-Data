# SP-500-Return-Data

## General Overview

A visual, interactive graph of the return data for the S&P 500. This project ingests data from the rawdata sheet of an Excel file, calculates the daily and total returns, and displays the results in a line chart with dates on the X-axis and total return %s on the Y-axis. The project is built primarily with React, Express, and Javascript. Project can be viewed at: https://stephanie2187.github.io/SP-500-Return-Data/

<img width="1405" alt="Screenshot 2024-10-01 at 5 54 36 PM" src="https://github.com/user-attachments/assets/c795379e-3019-4c29-8a62-08fe3189ec6e">


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

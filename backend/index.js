
const express = require('express');
const cors = require('cors');
const xlsx = require('xlsx');

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json()); 

// Access rawdata from xlsx, convert to JSON
const workbook = xlsx.readFile('data/2024SoftwareInternAssignment.xlsx');
const workSheet = workbook.Sheets['rawdata'];
let sData = xlsx.utils.sheet_to_json(workSheet);

// Calculate total returns
let cumulative = 1;
let totalReturns = []

for (let i = 0; i < sData.length; i++) {
    const dailyReturn = sData[i]['DailyReturn'];
    if (!(dailyReturn === undefined)) {
        cumulative = cumulative * (1 + (dailyReturn / 100 ));
        const returnPercent = 100* (cumulative - 1);
        totalReturns.push({
            ...sData[i], 
            TotalReturn: returnPercent.toFixed(4) + '%',
        });
    } else {
        totalReturns.push({
            ...sData[i],
            TotalReturn: 'Invalid' 
        });
    }
    
}

app.get('/', (req, res) => {
    res.send('S&P 500 Data');
});

app.get('/api/data', (req, res) => {
    res.json(totalReturns);
});

module.exports = app;
  
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
}
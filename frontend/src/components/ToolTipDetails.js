import { format } from 'date-fns';
import './ToolTip.css';

const ToolTipDetails = ({ active, payload }) => {
    if (active && payload && payload.length) {
        const { day, dailyReturn, totalReturn } = payload[0].payload;

        // formats the date, daily return, and total return on hover
        return (
            <div id="toolTip" className="tool-tip-details">
                <p>{`Date: ${format(day, 'M/d/yy')}`}</p>
                <p>{`Daily Return: ${dailyReturn.toFixed(4) + '%'}`}</p>
                <p>{`Total Return: ${totalReturn}%`}</p>
            </div>
        );
    }
};

export default ToolTipDetails;

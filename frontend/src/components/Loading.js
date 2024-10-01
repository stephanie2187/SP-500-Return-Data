import { Oval } from 'react-loader-spinner';
import "./Loading.css";

const Loading = () => {
    return (
        <div className="loading">
            <p id="loading-text">Loading Data</p>
            <Oval id="loading-spinner" color="black" height={30} width={30} />
        </div>
    );
}

export default Loading;

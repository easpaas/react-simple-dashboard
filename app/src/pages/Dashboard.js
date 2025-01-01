// Main page with widgets
import NavBar from "../components/Navbar";

import KeyMetrics from './KeyMetrics';
import PieCharts from './PieCharts';
import BarCharts from './BarCharts';
import ScatterPlots from './ScatterPlots';
import Tables from './Tables';

function Dashboard({title}) {
    return (
        <div>
            <NavBar title={title ?? 'Label'}/>
            {/* tables for detailed data */}
            <Tables />
            {/* cards for key metrics */}
            <KeyMetrics />
            {/* charts for visualizations */}
            {/* Piecharts */}
            <PieCharts />
            {/* Barcharts */}
            <BarCharts />
            {/* Scatter plots */}
            <ScatterPlots />
        </div>
    )
}

export default Dashboard;
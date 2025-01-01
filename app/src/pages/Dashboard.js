import NavBar from "../components/Navbar";
import KeyMetrics from "./KeyMetrics";
import BarCharts from './BarCharts';
import PieCharts from './PieCharts';
import ScatterPlots from "./ScatterPlots";

function Dashboard({title}) {
    return (
        <>
            <NavBar title={title ?? 'Label'}/>
            <>
                <KeyMetrics />
                <BarCharts />
                <PieCharts />
                <ScatterPlots />
            </>
        </>
    )
}

export default Dashboard;
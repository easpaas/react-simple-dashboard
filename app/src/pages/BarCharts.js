import { Paper } from "@mui/material";
import { BarChart } from "@mui/x-charts";


function BarCharts() {
return (
    <>
        <BarChart
            series={[
                { data: [35, 44, 24, 34] },
                { data: [51, 6, 49, 30] },
                { data: [15, 25, 30, 50] },
                { data: [60, 50, 15, 25] },
            ]}
            title={"Quarterly Stats"}
            height={290}
            width={600}
            xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
            margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
        />
    </>
)};

export default BarCharts;
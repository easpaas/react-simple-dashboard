import { Paper } from "@mui/material";
import Card from "../components/Card";

const data = {
    sessionDuration: {
        value: 100 
    }, 
    activeUsers: {
        daily: 988, 
        monthly: 15000,
        ratio: function() {
            return Math.floor((this.daily/this.monthly) * 100);
        } 
    },
    sessionPages: {
        value: 9
    }, 
    pageLoadTime: {
        value: 3.5
    }
}

function KeyMetrics() {
    const sessionDuration = data.sessionDuration.value;
    const activeUserRatio = data.activeUsers.ratio();
    const sessionPages = data.sessionPages.value;
    const pageLoadTime = data.pageLoadTime.value;

    return (
        <Paper elevation="4" style={{ margin: '80px auto', padding: '2%', display: 'flex', justifyContent: 'space-around'}}>
            <Card title="Session Duration" info="(mins)" value={sessionDuration} />
            <Card title="Daily Active Users (DAU) / Monthly Active Users (MAU)" info="Formula: DAU/MAU x 100 (stickiness rate)" value={activeUserRatio} />
            <Card title="Per Session" info="pages" value={sessionPages}/>
            <Card title="Page Load Time" info="(secs)" value={pageLoadTime} />
        </Paper>
    )
}

export default KeyMetrics;
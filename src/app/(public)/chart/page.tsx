import ChartOne from '@/components/Charts/gendarChart/GenderChart'
import dynamic from 'next/dynamic';
import React from 'react'

async function fetchData(url: string) {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Failed to fetch data from ${url}`);
    }
    return res.json();
}

const ChartPage = async () => {


    return (
        <div>
            <ChartOne />
        </div>
    )
}



// export default ChartPage
export default dynamic(() => Promise.resolve(ChartPage), {

})

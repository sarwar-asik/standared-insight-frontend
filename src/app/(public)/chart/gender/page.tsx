import GenderChart from '@/components/Charts/gendarChart/GenderChart';

import dynamic from 'next/dynamic';
import React from 'react'


const GenderChartPage = async () => {


    return (
        <div>
            <GenderChart />
        </div>
    )
}



// export default GenderChartPage
export default dynamic(() => Promise.resolve(GenderChartPage), {

})

import FinalChart from '@/components/Charts/FinalChart/FinalChart';


import dynamic from 'next/dynamic';
import React from 'react'


const LocationChartPage = async () => {


    return (
        <div>
            <FinalChart />
        </div>
    )
}



// export default LocationChartPage
export default dynamic(() => Promise.resolve(LocationChartPage), {

})

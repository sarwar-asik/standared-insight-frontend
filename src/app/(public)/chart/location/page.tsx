
import LocationChart from '@/components/Charts/LocationChart/LocationChart';
import dynamic from 'next/dynamic';
import React from 'react'


const LocationChartPage = async () => {


    return (
        <div>
            <LocationChart />
        </div>
    )
}



// export default LocationChartPage
export default dynamic(() => Promise.resolve(LocationChartPage), {

})

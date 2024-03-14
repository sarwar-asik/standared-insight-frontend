import ChartOne from '@/components/Charts/ChartOne'
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
    const questionData = await fetchData(`'https://standared-insight-server-qv0oamc2a-sarwar-asik.vercel.app/api/v1/question`);
    const answerData = await fetchData(`'https://standared-insight-server-qv0oamc2a-sarwar-asik.vercel.app/api/v1/answer`); // Corrected call

    return (
        <div>
            <ChartOne questionData={questionData} answerData={answerData} />
        </div>
    )
}



// export default ChartPage
export default dynamic(() => Promise.resolve(ChartPage), {

})

'use client';
import { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import { getChartData } from '../chartData/genderChartData';
import axios from 'axios';
import useFetchData from '@/hooks/useFetchData';
import { answersData } from '@/db/answer';


// const SERVER_URL = 'https://standared-insight-server-ev51donrk-sarwar-asik.vercel.app';

const SERVER_URL = 'https://standared-insight-server.vercel.app';
// const SERVER_URL = 'http://localhost:5000';


export default function LocationChart() {



    const { data: questionData, loading: questionLoading, error: questionError } = useFetchData({ url: `${SERVER_URL}/api/v1/question` });
    const { data: answerData, loading: answerLoading, error: answerError } = useFetchData({ url: `${SERVER_URL}/api/v1/answer` });





    // console.log(questionData, answerData)

    const [chartData, setChartData] = useState<any>(null);
    const chartRef = useRef<HTMLCanvasElement | null | any>(null);
    const chartInstanceRef = useRef<Chart | null>(null);


    const [locationData, setLocationData] = useState<{ location: string; count: number }[]>([]);

    useEffect(() => {
        const getLocationData = () => {
            const locationCounts: { [key: string]: number } = {};


            const locationAnswers = answersData?.filter((answer: any) => answer.questionIndex === 3);

            console.log(locationAnswers)
            // Count the occurrences of each location
            locationAnswers?.forEach((answer: any) => {
                if (locationCounts[answer.answer]) {
                    locationCounts[answer.answer]++;
                } else {
                    locationCounts[answer.answer] = 1;
                }
            });

            // Convert the counts to the format required for the chart
            const locationChartData = Object.keys(locationCounts).map((location) => ({
                location,
                count: locationCounts[location],
            }));

            setLocationData(locationChartData);
        };

        getLocationData();
    }, [answerData?.data]);


    console.log(locationData)




    // console.log(chartData, 'chartData')


    useEffect(() => {
        if (chartRef.current) {
            if (chartRef.current.chart) {
                chartRef.current.chart.destroy();
            }

            const context = chartRef.current.getContext("2d") as any

            const newChart = new Chart(context, {
                type: "bar",
                data: {
                    labels: locationData.map((data) => data.location),
                    datasets: [
                        {
                            label: 'Count',
                            data: locationData.map((data) => data.count),
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1,
                        },
                    ],
                },
                options:
                {
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            });

            chartRef.current.chart = newChart;
        }
    }, [locationData]);



    if (!questionData || !answerData) {
        return <div className='text-center'>Loading Location data...</div>;
    }

    return (
        <div className='text-center container mx-auto'>
            <h2 className='text-3xl text-slate-700 font-semibold'>Location Chart</h2>
            <div className="max-h-[50rem] bg-red-40 mx-auto">
                <canvas ref={chartRef} style={{
                    margin: "auto",
                    height: "38rem",
                    minWidth: "46rem"
                }} />
            </div>
        </div>
    );
}

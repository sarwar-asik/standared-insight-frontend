'use client';
import { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import { getChartData } from '../chartData/genderChartData';
import axios from 'axios';
import useFetchData from '@/hooks/useFetchData';


// const SERVER_URL = 'https://standared-insight-server-ev51donrk-sarwar-asik.vercel.app';

// const SERVER_URL = 'https://standared-insight-server.vercel.app';
const SERVER_URL = 'http://localhost:5000';

async function fetchData(url: string) {
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Failed to fetch data from ${url}. Status: ${res.status}`);
        }
        return res.json();
    } catch (error: any) {
        throw new Error(`Failed to fetch data from ${url}. Error: ${error.message}`);
    }
}
export default function GenderChart() {



    const { data: questionData, loading: questionLoading, error: questionError } = useFetchData({ url: `${SERVER_URL}/api/v1/question` });
    const { data: answerData, loading: answerLoading, error: answerError } = useFetchData({ url: `${SERVER_URL}/api/v1/answer` });



    // console.log(questionData, answerData)

    const [chartData, setChartData] = useState<any>(null);
    const chartRef = useRef<HTMLCanvasElement | null | any>(null);
    const chartInstanceRef = useRef<Chart | null>(null);



    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getChartData({ questionData, answerData });
                setChartData(data);
            } catch (error) {

                console.error('Error fetching chart data:', error);
            }
        };

        fetchData();
    }, [answerData, questionData]);

    console.log(chartData, 'chartData')
    useEffect(() => {
        if (chartRef.current) {
            if (chartRef.current.chart) {
                chartRef.current.chart.destroy();
            }

            const context = chartRef.current.getContext("2d") as any

            const newChart = new Chart(context, {
                type: "bar",
                data: chartData,
                options:
                {
                    plugins: {
                        title: {
                            display: true,
                            text: "Age and Gender Chart",
                        },
                    },
                    layout: {
                        padding: 40,

                    },
                    // responsive: true
                    scales: {
                        x: {
                            type: "category",
                        },
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            });

            chartRef.current.chart = newChart;
        }
    }, [chartData]);



    if (!questionData || !answerData) {
        return <div className='text-center'>Loading data...</div>;
    }

    return (
        <div className='text-center container mx-auto'>
            <h2 className='text-2xl font-semibold'>Gender and Age Chart</h2>
            <div className="max-h-[50rem] bg-red-40 mx-auto">
                <canvas ref={chartRef} style={{
                    margin: "auto",
                    height: "40rem",
                    minWidth: "70%"
                }} />
            </div>
        </div>
    );
}

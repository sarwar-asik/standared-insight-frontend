'use client';
import { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import { getChartData } from './data';


const SERVER_URL = 'https://standared-insight-server-qv0oamc2a-sarwar-asik.vercel.app/';


async function fetchData(url: string) {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Failed to fetch data from ${url}`);
    }
    return res.json();
}
export default function ChartOne() {


    const [questionData, setQuestionData] = useState([]);
    const [answerData, setAnswerData] = useState([]);
    const [error, setError] = useState<any>(null);

    // Fetch data using useEffect
    useEffect(() => {
        const fetchQuestionData = async () => {
            try {
                const data = await fetchData(`${SERVER_URL}/api/v1/question`);
                setQuestionData(data);
            } catch (error) {
                setError(error);
            }
        };

        const fetchAnswerData = async () => {
            try {
                const data = await fetchData(`${SERVER_URL}/api/v1/answer`);
                setAnswerData(data);
            } catch (error) {
                setError(error);
            }
        };

        fetchQuestionData();
        fetchAnswerData();
    }, []); // Empty dependency array ensures data is fetched only once on component mount


    // console.log(questionData, answerData)

    const [chartData, setChartData] = useState<any>(null);
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const chartInstanceRef = useRef<Chart | null>(null);

    console.log(chartData, 'chartData')
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


    useEffect(() => {
        if (chartData && chartRef.current && !chartInstanceRef.current) {
            const ctx = chartRef.current.getContext('2d');
            if (ctx) {
                chartInstanceRef.current = new Chart(ctx, {
                    type: 'bar',
                    data: chartData,
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                    },
                });
            }
        }
    }, [chartData]);

    if (error) {
        return <div>Error fetching data: {error.message}</div>;
    }

    if (!questionData || !answerData) {
        return <div>Loading data...</div>;
    }

    return (
        <div>
            <h2>First Chart</h2>
            {/* <canvas ref={chartRef} /> */}
        </div>
    );
}

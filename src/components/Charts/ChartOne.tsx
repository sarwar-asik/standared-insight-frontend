'use client';
import { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import { getChartData } from './data';




export default function ChartOne({ questionData, answerData }: { questionData: any, answerData: any }) {

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


    return (
        <div>
            <h2>First Chart</h2>
            {/* <canvas ref={chartRef} /> */}
        </div>
    );
}

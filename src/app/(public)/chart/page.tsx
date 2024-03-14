import ChartOne from '@/components/Charts/ChartOne'
import React from 'react'

async function getQuestion() {
    const res = await fetch('http://localhost:5000/api/v1/question')
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

async function getAnswer() {
    const res = await fetch('http://localhost:5000/api/v1/question')

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function ChartPage() {
    const questionData = await getQuestion()
    const answerData = await getAnswer()

    return (
        <div>
            <ChartOne questionData={questionData} answerData={answerData} />
        </div>
    )
}

// utils/data.ts
import { answersData } from "@/db/answer";
import { questionsData } from "@/db/question";

interface ChartData {
  labels: any;
  datasets: any[];
}

export const getChartData = ({
  questionData,
  answerData,
}: {
  questionData: any;
  answerData: any;
}): Promise<ChartData> => {
  console.log(questionData, answerData);
  return new Promise((resolve) => {
    const ageData = {
      labels: ["0-20", "21-40", "41-60", "61+"],
      maleCount: [0, 0, 0, 0],
      femaleCount: [0, 0, 0, 0],
    };

    answerData?.data?.forEach((answer: any) => {
      const question = questionData?.data?.find(
        (q: any) => q.questionIndex === answer.questionIndex
      );
      if (question && question.question === "@How old are you?") {
        const ageGroup = parseInt(answer.answer);
        if (answer.answer === "36-40" || answer.answer === "41-45") {
          ageData.maleCount[1]++;
        } else if (
          answer.answer === "21-25" ||
          answer.answer === "26-30" ||
          answer.answer === "31-35"
        ) {
          ageData.maleCount[0]++;
        } else if (
          answer.answer === "46-50" ||
          answer.answer === "51-55" ||
          answer.answer === "56-60"
        ) {
          ageData.maleCount[2]++;
        } else if (
          answer.answer === "61-65" ||
          answer.answer === "66-70" ||
          answer.answer === "71+"
        ) {
          ageData.maleCount[3]++;
        }

        if (answer.answer === "36-40" || answer.answer === "41-45") {
          ageData.femaleCount[1]++;
        } else if (
          answer.answer === "21-25" ||
          answer.answer === "26-30" ||
          answer.answer === "31-35"
        ) {
          ageData.femaleCount[0]++;
        } else if (
          answer.answer === "46-50" ||
          answer.answer === "51-55" ||
          answer.answer === "56-60"
        ) {
          ageData.femaleCount[2]++;
        } else if (
          answer.answer === "61-65" ||
          answer.answer === "66-70" ||
          answer.answer === "71+"
        ) {
          ageData.femaleCount[3]++;
        }
      }
    });

    console.log(ageData);
    // Prepare data for the chart
    const data: ChartData = {
      labels: ageData.labels,
      datasets: [
        {
          axis: "y",
          label: "Male",
          data: ageData.maleCount,
          backgroundColor: "rgba(54, 162, 235, 0.5)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
        },
        {
          axis: "y",
          label: "Female",
          data: ageData.femaleCount,
          backgroundColor: "rgba(255, 99, 132, 0.5)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
      ],
    };

    console.log(data);

    resolve(data);
  });
};

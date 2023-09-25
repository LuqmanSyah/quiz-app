import React, { useState, useEffect } from "react";
import { questionAnswer } from "../constants/questionAnswer";

const Section = () => {
    const [answers, setAnswers] = useState({});

    useEffect(() => {
        // Mengambil data dari localStorage saat komponen dimuat
        const savedAnswers = localStorage.getItem("savedAnswers");
        if (savedAnswers) {
            setAnswers(JSON.parse(savedAnswers));
        }
    }, []);

    const handleAddAnswer = (questionId, selectedAnswer) => {
        const updatedAnswers = {
            ...answers,
            [questionId]: selectedAnswer,
        };
        console.log(updatedAnswers);

        // Menyimpan data ke localStorage
        localStorage.setItem("savedAnswers", JSON.stringify(updatedAnswers));

        setAnswers(updatedAnswers);
    };

    const handleRadioChange = (questionId, selectedAnswer) => {
        // Handler onChange untuk elemen input tipe radio
        handleAddAnswer(questionId, selectedAnswer);
    };

    return (
        <section className="max-w-7xl mx-auto flex flex-col items-center justify-center min-h-screen">
            {questionAnswer.map((item) => (
                <div key={item.id} className="my-10 max-w-xl">
                    <h3 className="font-bold text-xl">{item.question}</h3>
                    {item.answers.map((answer) => {
                        const answerId = `answer${item.id}_${answer}`;

                        return (
                            <div className="m-5" key={answer}>
                                <input type="radio" id={answerId} className="hover:cursor-pointer" name={`answer_${item.id}`} value={answer} onChange={() => handleRadioChange(item.id, answer)} checked={answers[item.id] === answer} />
                                <label htmlFor={answerId} className="ml-2 font-semibold font-lg hover:cursor-pointer">
                                    {answer}
                                </label>
                            </div>
                        );
                    })}
                </div>
            ))}
            <div className="my-10">
                <h4 className="font-bold text-xl">Jawaban yang Dipilih:</h4>
                <pre>{JSON.stringify(answers, null, 2)}</pre>
            </div>
        </section>
    );
};

export default Section;

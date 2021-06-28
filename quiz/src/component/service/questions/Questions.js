// Questions.js
// Programmé par : Maxime Lacroix-Lemire
// Dernière Mise À  Jour :  2021/06/16

import React from "react";
import QuestionBox from "../../questionbox/QuestionBox";

const lesQuestions = [
    {
        id: 1,
        question: "bla",
        resultat : "boum"
    },
    {
        id: 2,
        question: "bla bla",
        resultat : "boum boum"
    },
    {
        id: 3,
        question: "bla bla bla",
        resultat : "boum boum boum"
    },
    {
        id: 4,
        question: "bla bla bla bla",
        resultat : "boum boum boum boum"
    }
];

function Questions() {
    return (
        <div>
            <QuestionBox questions={lesQuestions} />
        </div>
    )
}

export default Questions;
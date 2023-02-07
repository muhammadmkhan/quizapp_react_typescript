export type apiResult = [{
    category: string,
    type: string,
    difficulty: string,
    question: string,
    correct_answer: string,
    incorrect_answers: string[]
}]

export type categoryList = string[];

export type QuizApp = apiResult[];
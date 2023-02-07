import { apiResult } from "../TypeDefining/Types";
import { useContext, useState } from "react";
import QuizListProvider from "../contextAPi/Quiz.page.Context";
import { useParams } from "react-router";
import { useForm, SubmitHandler } from "react-hook-form";
import Tick from "./check.png";
import { Link } from "react-router-dom";
import "./quizpage.css";
const QuizPage = () => {
  let { id } = useParams();
  let QuizList: apiResult[] = useContext(QuizListProvider);
  let [showButton, setShowButton] = useState<boolean>(false);
  let [veiwResult, setVeiwResult] = useState<boolean>(false);

  interface IFormInput {
    [key: string]: any;
  }
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmitt: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    setShowButton(() => true);
  };
  console.log(id);
  function randomArrayShuffle(array: string[]) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  let no: number = 0;

  return (
    <div className="quizpage-main-container">
      <h3 className="heading1">{id} Quiz</h3>
      <form onSubmit={handleSubmit(onSubmitt)}>
        <div className="form-group">
          {QuizList.map((ele) => {
            return ele.map((elee, indd) => {
              return veiwResult ? (
                elee.category === id ? (
                  <div className="form-group" key={indd}>
                    <label
                      className="form-check-label"
                      htmlFor={`question${(no += 1)}`}
                      style={{ fontSize: "20px" }}
                    >
                      {no}: {elee.question}
                    </label>
                    {randomArrayShuffle([
                      ...elee.incorrect_answers,
                      elee.correct_answer,
                    ]).map((ele, ind) => {
                      return (
                        <div className="form-check" key={ind}>
                          <input
                            disabled
                            className="form-check-input"
                            type="radio"
                            id={ele}
                            value={ele}
                            {...register(elee.question)}
                          />
                          <label className="form-check-label" htmlFor={ele}>
                            {ele}{" "}
                            {elee.correct_answer === ele ? (
                              <img
                                src={Tick}
                                style={{ height: "15px", width: "15px" }}
                              />
                            ) : (
                              ""
                            )}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  ""
                )
              ) : elee.category === id ? (
                <div className="form-group" key={indd}>
                  <label
                    className="form-check-label"
                    htmlFor={`question${(no += 1)}`}
                    style={{ fontSize: "20px" }}
                  >
                    {no}: {elee.question}
                  </label>
                  {randomArrayShuffle([
                    ...elee.incorrect_answers,
                    elee.correct_answer,
                  ]).map((ele, ind) => {
                    return (
                      <div className="form-check" key={ind}>
                        <input
                          className="form-check-input"
                          type="radio"
                          id={ele}
                          value={ele}
                          {...register(elee.question)}
                        />
                        <label className="form-check-label" htmlFor={ele}>
                          {ele}
                        </label>
                      </div>
                    );
                  })}
                </div>
              ) : (
                ""
              );
            });
          })}
        </div>
        {showButton ? (
          <button disabled className="btn btn-primary" type="submit">
            Submit Quiz
          </button>
        ) : (
          <button className="btn btn-primary" type="submit">
            Submit Quiz
          </button>
        )}
        <br />
        <br />
        <button
          className="btn btn-dark"
          type="button"
          style={{ display: showButton ? "" : "none" }}
          onClick={() => setVeiwResult(true)}
        >
          Veiw Answers
        </button>
      </form>
      <br />
      <Link to="/">
        <button
          className="btn btn-dark w-25"
          type="submit"
          style={{ float: "right" }}
        >
          Back
        </button>{" "}
      </Link>
    </div>
  );
};

export default QuizPage;

import { useEffect, useState } from "react";
import NavBar from "./App Bar/AppBar";
import Spinner from "react-bootstrap/Spinner";
import { fetchApi } from "./Services/Services";
import { apiResult } from "./TypeDefining/Types";
import { makingCategoryArray } from "./Services/Services";
import { categoryList, QuizApp } from "./TypeDefining/Types";
import categoryProvider from "./contextAPi/context.category";
import CategoryPage from "./categoryPage/categoryPage";
import QuizPage from "./QuizPage/QuizPage";
import QuizListProvider from "./contextAPi/Quiz.page.Context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Main.css";

const MainComponent = () => {
  let difficulty: string[] = ["hard", "medium", "easy"];
  let showList: categoryList;
  let mainList = useState<categoryList>(["null"]);
  let QuizQuesList = useState<QuizApp>([]);
  let hardResult: apiResult;
  let mediumResult: apiResult;
  let easyResult: apiResult;
  useEffect(() => {
    const handleAllData = async () => {
      mediumResult = await fetchApi("50", difficulty[1]);
      easyResult = await fetchApi("50", difficulty[2]);
      hardResult = await fetchApi("50", difficulty[0]);
      if (difficulty[0] === "hard") {
        showList = makingCategoryArray(hardResult);
        QuizQuesList[1](() => [hardResult, mediumResult, easyResult]);
        mainList[1](() => showList);
      }
    };

    handleAllData();
  }, []);

  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <div className="element-render-div">
          {mainList[0][0] === "null" ? (
            <div
              style={{
                textAlign: "center",
                paddingTop: "50%",
                paddingBottom: "50%",
              }}
            >
              <Spinner animation="grow" variant="primary" />
            </div>
          ) : (
            <Routes>
              <Route
                path="/"
                element={
                  <categoryProvider.Provider value={mainList[0]}>
                    <CategoryPage />
                  </categoryProvider.Provider>
                }
              />
              <Route
                path="/category/:id"
                element={
                  <QuizListProvider.Provider value={QuizQuesList[0]}>
                    <QuizPage />
                  </QuizListProvider.Provider>
                }
              />
            </Routes>
          )}
        </div>
      </BrowserRouter>
    </div>
  );
};

export default MainComponent;

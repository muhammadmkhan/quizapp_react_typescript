import { createContext } from "react";
import {QuizApp} from '../TypeDefining/Types';
let QuizListProvider = createContext<QuizApp>([]);
export default QuizListProvider;

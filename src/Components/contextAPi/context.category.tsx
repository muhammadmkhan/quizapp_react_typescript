import { createContext } from "react";

import {categoryList } from '../TypeDefining/Types'
let categoryProvider  = createContext<categoryList>([]);
export default categoryProvider;

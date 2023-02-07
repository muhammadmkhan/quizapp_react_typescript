import { apiResult } from "../TypeDefining/Types";
import { categoryList } from "../TypeDefining/Types";
export let CategoryList: categoryList = [];
export const fetchApi = async (limit: string, diff: string) => {
    let res = await fetch(
        `https://opentdb.com/api.php?amount=${limit}&category=&difficulty=${diff}`
    );
    let converIntoJson: { response_code: number; results: apiResult } =
        await res.json();
    let result = converIntoJson.results;
    return result;
};



export const makingCategoryArray = (params: apiResult) => {
    let tempList: categoryList = [];
    params.map((ele) => {
        tempList.push(ele.category);
    });

    function getUnique(array: categoryList) {
        var uniqueArray = [];

        // Loop through array values
        for (let i: number = 0; i < array.length; i++) {
            if (uniqueArray.indexOf(array[i]) === -1) {
                uniqueArray.push(array[i]);
            }
        }
        CategoryList = uniqueArray;
    }
    getUnique(tempList)
    return CategoryList;
};

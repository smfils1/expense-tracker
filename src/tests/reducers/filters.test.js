import filterReducer from "../../reducers/filters";
import moment from "moment";

describe("Filter Reducer", () => {
  test("Should generate default state", () => {
    const state = filterReducer(undefined, {
      type: "@@INIT"
    });
    expect(state).toEqual({
      text: "",
      sortBy: "date",
      startDate: moment().startOf("month"),
      endDate: moment().endOf("month")
    });
  });

  test("Should set sortBy state", () => {
    const state = filterReducer(undefined, {
      type: "SORT_BY_AMOUNT"
    });
    expect(state.sortBy).toEqual("amount");
  });

  test("Should set sortBy state", () => {
    const currentState = {
      text: "",
      sortBy: "amount",
      startDate: undefined,
      endDate: undefined
    };
    const state = filterReducer(undefined, {
      type: "SORT_BY_DATE"
    });
    expect(state.sortBy).toEqual("date");
  });

  test("Should set text state", () => {
    const state = filterReducer(undefined, {
      type: "SET_TEXT_FILTER",
      text: "text"
    });
    expect(state.text).toEqual("text");
  });

  test("Should set start date state", () => {
    const state = filterReducer(undefined, {
      type: "SET_START_DATE",
      startDate: moment(0)
    });
    expect(state.startDate).toEqual(moment(0));
  });

  test("Should set end date state", () => {
    const state = filterReducer(undefined, {
      type: "SET_END_DATE",
      endDate: moment(0)
    });
    expect(state.endDate).toEqual(moment(0));
  });

  // test('Should ', ()=>{

  // })
  // test('Should ', ()=>{

  // })
  // test('Should ', ()=>{

  // })
  // test('Should ', ()=>{

  // })
  // test('Should ', ()=>{

  // })
  // test('Should ', ()=>{

  // })
});

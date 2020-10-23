import {
  ADD_PERFUME,
  REMOVE_PERFUME,
  SHOW_ALERT,
  HIDE_ALERT,
  UPDATE_SEARCH,
} from "./perfume-type";
import CHANEL_PERFUMES from "../../mocks/chanel_perfumes.json";
import GUERLAIN_PERFUMES from "../../mocks/guerlain_perfumes.json";
import LANCOME_PERFUMES from "../../mocks/lancome_perfumes.json";
import YSL_PERFUMES from "../../mocks/ysl_perfumes.json";
import DIOR_PERFUMES from "../../mocks/dior_perfumes.json";
import MARCJACOBS_PERFUMES from "../../mocks/marcjacobs_perfumes.json";
import VERSACE_PERFUMES from "../../mocks/versace_perfumes.json";
import CHLOE_PERFUMES from "../../mocks/chloe_perfumes.json";
import GIVENCHY_PERFUMES from "../../mocks/givenchy_perfumes.json";
import HERMES_PERFUMES from "../../mocks/hermes_perfumes.json";
import DOLCEGABNANA_PERFUMES from "../../mocks/d&g_perfumes.json";
import PRADA_PERFUMES from "../../mocks/prada_perfumes.json";

const ALL_PERFUMES = [
  ...CHANEL_PERFUMES,
  ...GUERLAIN_PERFUMES,
  ...LANCOME_PERFUMES,
  ...YSL_PERFUMES,
  ...DIOR_PERFUMES,
  ...MARCJACOBS_PERFUMES,
  ...VERSACE_PERFUMES,
  ...CHLOE_PERFUMES,
  ...GIVENCHY_PERFUMES,
  ...HERMES_PERFUMES,
  ...DOLCEGABNANA_PERFUMES,
  ...PRADA_PERFUMES,
];

const DEFAULT_PERFUMES = {
  [GUERLAIN_PERFUMES[0].name]: GUERLAIN_PERFUMES[0],
  [GUERLAIN_PERFUMES[1].name]: GUERLAIN_PERFUMES[1],
  [GUERLAIN_PERFUMES[2].name]: GUERLAIN_PERFUMES[2],
};

const defaultState = {
  selectedPerfumes: DEFAULT_PERFUMES,
  selectCount: Object.keys(DEFAULT_PERFUMES).length,
  showAlert: false,
  searchPerfumes: ALL_PERFUMES,
};

export default (state = defaultState, action) => {
  const perfumes = state.selectedPerfumes;
  const count = state.selectCount;

  switch (action.type) {
    case ADD_PERFUME:
      const newPerfumes = Object.assign({}, perfumes, action.data);
      return Object.assign({}, state, {
        selectedPerfumes: newPerfumes,
        selectCount: count + 1,
      });
    case REMOVE_PERFUME:
      delete perfumes[action.data];
      return Object.assign({}, state, {
        selectedPerfumes: perfumes,
        selectCount: count - 1,
      });
    case SHOW_ALERT:
      return Object.assign({}, state, { showAlert: true });
    case HIDE_ALERT:
      return Object.assign({}, state, { showAlert: false });
    case UPDATE_SEARCH:
      const keyword = action.data.toLowerCase();
      let validPerfumes = [];
      if (keyword) {
        for (const perfume of ALL_PERFUMES) {
          // 1. name match
          if (perfume.name.toLowerCase().includes(keyword)) {
            validPerfumes.push(perfume);
            continue;
          }
          // 2. brand match
          if (perfume.brand.brandName.toLowerCase().includes(keyword)) {
            validPerfumes.push(perfume);
            continue;
          }
        }
      } else {
        validPerfumes = ALL_PERFUMES.slice();
      }
      return Object.assign({}, state, { searchPerfumes: validPerfumes });
    default:
      return state;
  }
};

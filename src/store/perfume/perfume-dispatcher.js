import {
  ADD_PERFUME,
  HIDE_ALERT,
  REMOVE_PERFUME,
  SHOW_ALERT,
  UPDATE_SEARCH,
} from "./perfume-type";

export const addPerfumeRedux = (perfume) => {
  return {
    type: ADD_PERFUME,
    data: { [perfume.name]: perfume },
  };
};

export const removePerfumeRedux = (perfumeName) => {
  return {
    type: REMOVE_PERFUME,
    data: perfumeName,
  };
};

export const showPerfumeAlertRedux = () => {
  return {
    type: SHOW_ALERT,
  };
};

export const hidePerfumeAlertRedux = () => {
  return {
    type: HIDE_ALERT,
  };
};

export const updateSearchPerfumesRedux = (keyword) => {
  return {
    type: UPDATE_SEARCH,
    data: keyword,
  };
};

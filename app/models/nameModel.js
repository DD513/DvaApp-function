export default {
  namespace: "whoami",
  state: {
    name: null,
  },
  effects: {
    *GET_name({ payload, callback }, { put }) {
      yield put({
        type: "SET_name",
        payload: payload,
      });
      if (callback) {
        callback();
      }
    },
  },
  reducers: {
    SET_name(state, { payload }) {
      return {
        ...state,
        name: payload,
      };
    },
  },
};

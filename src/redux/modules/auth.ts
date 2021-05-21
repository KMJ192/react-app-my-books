import { push } from "connected-react-router";
import { Action, createActions, handleActions } from "redux-actions";
import { call, put, select, takeEvery } from "redux-saga/effects";
import TokenService from "../../services/TokenService";
import UserService from "../../services/UserService";
import { AuthState, LoginReqType } from "../../types";

//action타입 정의

//action초기값 정의
const intialState: AuthState = {
    token : null,
    loading : false,
    error : null
};

const prefix = "my-books/auth";

//action 생성함수
export const { pending, success, fail } = createActions("PENDING", "SUCCESS", "FAIL", { prefix });

//reducer 함수
const reducer = handleActions<AuthState, string>({
    PENDING: (state) => ({
        ...state,
        loading: true,
        error: null
    }),
    SUCCESS: (state, action) => ({
        token: action.payload,
        loading: false,
        error: null
    }),
    FAIL: (state, action: any) => ({
        ...state,
        loading: false,
        error: action.payload
    })
}, intialState, {prefix});

export default reducer;

// saga
export const { login, logout } = createActions("LOGIN", "LOGOUT", {prefix});

function* loginSaga(action: Action<LoginReqType>) {
    try{
        yield put(pending());
        const token: string = yield call(UserService.login, action.payload);
        // localstorage
        TokenService.set(token);
        yield put(success(token));
        // push
        yield put(push("/"));
    }catch (e){
        yield put(fail(new Error(e?.response?.data?.error || "UNKNOWN_ERROR")));
    }
}

function* logoutSaga(){
    try{
        yield put(pending());
        const token: string = yield select(state => state.auth.token);
        yield call(UserService.logout, token);
        TokenService.set(token);

        // localstorage
        TokenService.set(token);
        yield put(success(token));
        // push
        yield put(push("/"));
    }catch (e){
    }finally{
        TokenService.remove();
        yield put(success(null));
    }
}

export function* authSaga(){
    yield takeEvery(`${prefix}/LOGIN`, loginSaga);
    yield takeEvery(`${prefix}/LOGOUT`, logoutSaga);
}
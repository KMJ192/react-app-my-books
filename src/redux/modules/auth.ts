import { createActions, handleActions } from "redux-actions";

//action타입 정의
interface AuthState{
    token : string | null;
    loading : boolean;
    error : Error | null;
}
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
export function* authSaga(){
    
}
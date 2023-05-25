import { cartSaga } from "./CartSaga";



export default function* RootSaga() {
    yield all(
        [ 
            cartSaga(),
        ]
    )
}
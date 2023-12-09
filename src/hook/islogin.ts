import { storeKeys } from '../util/storeHelper'

export const  isAuth=()=> {
    const isLogin = localStorage.getItem(storeKeys.isLogin)
    if (isLogin) {
        return isLogin
    } else {
        return false
    }
}

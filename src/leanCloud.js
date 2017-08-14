import AV from 'leancloud-storage'

const appId = 'riDOyHROjmRnWGtjigUyeV6m-gzGzoHsz'
const appKey = 'crwbfYTfPKCdImjazgdLqF7e'
AV.init({ appId, appKey });

export default AV

export function signUp(email, username, password, successFn, errorFn) {
    let user = new AV.User()
    // 设置用户名
    user.setUsername(username)
    // 设置密码
    user.setPassword(password)
    // 设置邮箱
    user.setEmail(email);
    user.signUp().then(function (loginedUser) {
        let user = getCurrentUser(loginedUser)
        console.log(loginedUser)
        successFn.call(null, user)
    }, function (error) {
        errorFn && errorFn.call(null, error)
    });
}

export function signIn(username, password, successFn, errorFn) {
    AV.User.logIn(username, password).then(function (loginedUser) {
        let user = getCurrentUser(loginedUser)
        console.log(loginedUser)
        successFn.call(null, user)
    }, function (error) {
        errorFn.call(null, error)
    });
}
export function signOut() {
    AV.User.logOut()
    return undefined
}
export function sendPasswordResetEmail(email, successFn, errorFn) {
    AV.User.requestPasswordReset(email).then(function (success) {
        successFn.call()
    }, function (error) {
        errorFn.call()
    });
}

export function getCurrentUser() {
    let user = AV.User.current()
    if (user) {
        return getUserFromAVUser(user)
    } else {
        return null
    }
}

function getUserFromAVUser(AVUser) {
    return {
        id: AVUser.id,
        ...AVUser.attributes
    }
}
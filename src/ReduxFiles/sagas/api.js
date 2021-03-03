import { get, restApiUrls } from "../../Utils/fetchInterceptor"

export const getNews = () => {
    return get({
        url: restApiUrls.getPost,
    })
    // return get();
    // return new Promise((resolve,reject) => {
    //  db.collection("Registration_users").doc(data.userInfo.usr_email).set({ ...data })
    //     .then(function () {
    //         resolve({ "success": true, 'msg': 'Saved' })
    //     })
    //     .catch(function (error) {
    //         reject({ "success": false, 'msg': error })
    //     });
    // })
}
import db from "../models";

const insertUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            resolve('Insert successful!')
        } catch (e) {
            reject(e);
        }
    })

}
module.exports = {
    insertUser
}
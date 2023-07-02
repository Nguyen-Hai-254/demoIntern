import db from "../models";

const insertPost = (postData) => {
    return new Promise(async (resolver, reject) => {
        try {
            await db.Post.create({
                title: postData.title,
                content: postData.content,
                userId: postData.userId
            })

            let postCreated = await db.Post.findOne({
                where: { title: postData.title }
            })
            resolver(postCreated);
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    insertPost
}
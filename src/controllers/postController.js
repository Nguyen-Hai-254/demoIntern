import postService from "../services/postService";

const handleInsertPost = async (req, res) => {
    if (!req.body.title || !req.body.userId) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing input parameter!'
        })
    }

    let postData = await postService.insertPost(req.body);

    return res.status(200).json({
        errCode: 0,
        message: 'OK',
        postData: postData
    });
}

module.exports = {
    handleInsertPost
}
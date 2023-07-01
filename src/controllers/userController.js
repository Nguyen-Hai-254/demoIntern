import userServices from "../services/userServices"

const handleInsertUser = async (req, res) => {
    let user = await userServices.insertUser();

    return res.send(user);
}


module.exports = {
    handleInsertUser,
    
}
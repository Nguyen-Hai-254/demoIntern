import userServices from "../services/userServices"

const handleInsertUser = async (req, res) => {
    const { email, password, firstName, lastName, address, phoneNumber, gender } = req.body;

    const userData = {
        email,
        password,
        firstName,
        lastName,
        address,
        phoneNumber,
        gender,
    };

    try {
        const newUser = await userServices.insertUser(userData);
        return res.status(201).json(newUser);
    } catch (error) {
        return res.status(500).json({ error: "Failed to insert user" });
    }
};

const handleGetUser = async (req, res) => {
    try {
        const users = await userServices.getUsers();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({ error: "Failed to get users" });
    }
};

const handleDeleteUser = async (req, res) => {
    const { userId } = req.params;

    try {
        const deletedUser = await userServices.deleteUser(userId);
        return res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        return res.status(500).json({ error: "Failed to delete user" });
    }
};

const handleUpdateUser = async (req, res) => {
    const { userId } = req.params;
    const { email, password, firstName, lastName, address, phoneNumber, gender } = req.body;

    const userData = {
        email,
        password,
        firstName,
        lastName,
        address,
        phoneNumber,
        gender,
    };

    try {
        const updatedUser = await userServices.updateUser(userId, userData);
        const users = await userServices.getUsers();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({ error: "Failed to update user" });
    }
};

const handleGetUserWithPost = async (req, res) => {
    if (!req.query.id) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing input parameter!'
        })
    }

    let dataUserWithPost = await userServices.getUserWithPost(req.query.id);

    return res.status(200).json({
        errCode: dataUserWithPost.errCode,
        message: dataUserWithPost.message,
        data: dataUserWithPost.data ? dataUserWithPost.data : []
    })
}


module.exports = {
    handleInsertUser,
    handleGetUser,
    handleDeleteUser,
    handleUpdateUser,
    handleGetUserWithPost
}
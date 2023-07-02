import express from "express";
import userController from "../controllers/userController";
import postController from "../controllers/postController";

let router = express.Router()

let initWebRoutes = (app) => {
    router.get("/", (req, res) => {
        res.send("Texxxtttttt");
    });

    router.post("/api/insert-user", userController.handleInsertUser);
    router.get("/api/get-user", userController.handleGetUser);
    router.delete("/api/delete-user/:userId", userController.handleDeleteUser);
    router.put("/api/update-user/:userId", userController.handleUpdateUser);
    router.get("/api/getUserWithPost", userController.handleGetUserWithPost)

    router.post("/api/insert-post", postController.handleInsertPost)

    return app.use("/", router);
}

module.exports = initWebRoutes;
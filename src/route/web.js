import express from "express";
import userController from "../controllers/userController";

let router = express.Router()

let initWebRoutes = (app) => {
    router.get("/", (req, res) => {
        res.send("Texxxtttttt");
    });

    router.post("/api/insert-user", userController.handleInsertUser);

    return app.use("/", router);
}

module.exports = initWebRoutes;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const defaultRouter = (0, express_1.Router)();
defaultRouter.get('/', (req, res) => {
    res.status(200).json({
        message: 'Yayyyy Welcome to Tetris 👾👾🧱',
    });
});
defaultRouter.get('/healthCheck', (req, res) => {
    res.status(200).json({ message: 'success' });
});
exports.default = defaultRouter;

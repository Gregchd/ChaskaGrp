import { Router } from "express";
import Data from '../models/Data';

const router = Router();

router.get("/", (req, res) => {
    res.render('index');
});

router.get("/news", (req, res) => {
    res.render('news');
});

router.get("/dashboard", (req, res) => {
    res.render('dashboard');
});

router.get("/render", (req, res) => {
    res.render('render');
});

router.get("/team", (req, res) => {
    res.render('team');
});

router.get("/contact", (req, res) => {
    res.render('contact');
});

export default router;
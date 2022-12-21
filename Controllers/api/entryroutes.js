const router = require('express').Router();
const { User, Entry, Comment } = require('../../Models')

router.get('/:id')
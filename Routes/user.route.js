import express from 'express';
import { createuser, getuserbyid, getusers } from '../controllers/user.controller.js';
import { validate } from '../middleware/validation.js';
import { userRegisterSchema } from '../utils/Schema.js';
export const Userrouter = express.Router();

Userrouter.post('/register',validate(userRegisterSchema),createuser)
.get('/users',getusers)
.get('/users/:id',getuserbyid);
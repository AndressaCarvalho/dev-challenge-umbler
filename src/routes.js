import express from 'express';
import ControllerDomain from './controllers/DomainController.js';

const routes = express.Router();


routes.get('/', ControllerDomain.homeView)
routes.get('/findDomain', ControllerDomain.findDomain)


export default routes;
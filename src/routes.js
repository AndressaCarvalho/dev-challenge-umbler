import express from 'express';
import controllerDomain from './controllers/DomainController.js';

const routes = express.Router();


routes.get('/', controllerDomain.homeView)
routes.get('/domain-view', controllerDomain.domainView)


export default routes;
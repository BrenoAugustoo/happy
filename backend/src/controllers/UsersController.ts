import { Request, Response} from 'express';

import CreateUser from '../services/CreateUser';
import AuthenticateUserService from '../services/AuthenticateUserService';


export default {

    async create(request: Request, response: Response){

        const {name, email, password} = request.body;
        
        const createUser = new CreateUser();

        const user = await createUser.execute({
            name,
            email,
            password
        });

        return response.json(user);

    },

    async login(request: Request, response: Response){

        const { email, password } = request.body;
        
        const authenticateUser = new AuthenticateUserService();

        const {user, token} = await authenticateUser.execute({
            email,
            password
        })

        return response.json({user, token});
    }



};
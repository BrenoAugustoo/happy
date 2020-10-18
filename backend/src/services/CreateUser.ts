import { getRepository } from 'typeorm';
import User from '../models/Users';
import { hash } from 'bcryptjs';

interface Request {
    name: string,
    email: string,
    password: string
}

class CreateUser {
    public async execute({name, email, password}: Request): Promise<User>{
       const usersRepository = getRepository(User);
          
       const checkUserExists = await usersRepository.findOne({
            where: {email},
       });
       
       if (checkUserExists) {
           throw new Error('O e-mail já está sendo usado por outro usuário')
       }

       const criptedPassword = await hash(password, 8);

       
       const user = usersRepository.create({
           name, 
           email, 
           password: criptedPassword,
       })
       
       await usersRepository.save(user);

       return user;
    }
}

export default CreateUser;
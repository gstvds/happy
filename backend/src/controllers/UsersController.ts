import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import User from '../models/User';

export default {
  async create(request: Request, response: Response): Promise<Response> {
    const { email, name, password } = request.body;

    const usersRepository = getRepository(User);

    const checkUsersExists = await usersRepository.findOne({
      where: { email },
    });

    if (checkUsersExists) {
      throw new Error('User already exists');
    }

    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      email,
      name,
      password: hashedPassword,
    });

    await usersRepository.save(user);

    return response.status(201).json(user);
  },
};

import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import userView from '../views/user_view';
import User from '../models/User';
import AppError from '../errors/AppError';

export default {
  async create(request: Request, response: Response): Promise<Response> {
    const { email, name, password } = request.body;

    const usersRepository = getRepository(User);

    const checkUsersExists = await usersRepository.findOne({
      where: { email },
    });

    if (checkUsersExists) {
      throw new AppError('User already exists');
    }

    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      email,
      name,
      password: hashedPassword,
    });

    await usersRepository.save(user);

    return response.status(201).json(userView.render(user));
  },
};

import { Response, Request } from 'express';
import { sign } from 'jsonwebtoken';
import { compare } from 'bcryptjs';
import { getRepository } from 'typeorm';

import auth from '../config/auth';
import User from '../models/User';
import userView from '../views/user_view';
import AppError from '../errors/AppError';

export default {
  async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const usersRepository = getRepository(User);

    const getUser = await usersRepository.findOne({
      where: { email },
    });

    if (!getUser) throw new AppError('User not found');

    const passwordMatched = await compare(password, getUser.password);

    if (!passwordMatched)
      throw new AppError('Incorrect email/password combination');

    const { expiresIn, secret } = auth.jwt;

    const token = sign({}, secret, {
      subject: String(getUser.id),
      expiresIn,
    });

    return response.status(200).json({ token, user: userView.render(getUser) });
  },
};

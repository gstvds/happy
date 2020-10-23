import User from '../models/User';

interface UserReturn {
  id: number;
  name: string;
  email: string;
  created_at: Date;
  updated_at: Date;
}

export default {
  render(user: User): UserReturn {
    return {
      name: user.name,
      email: user.email,
      created_at: user.created_at,
      updated_at: user.updated_at,
      id: user.id,
    };
  },
};

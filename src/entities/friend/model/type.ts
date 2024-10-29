export type Friend = {
  id: string;
  name: string;
  age: number;
}

export type CreateFriend = Omit<Friend, 'id'>

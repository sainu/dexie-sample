import { v4 as uuidv4 } from 'uuid';
import { CreateFriend, Friend } from './type';
import { db } from '../../../shared/lib/dexie';

export const createFriend = async (item: CreateFriend) => {
  const friend: Friend = {
    id: uuidv4(),
    ...item,
  }
  console.log('Create a friend', friend)
  return await db.friends.add(friend)
}

export const getAllFriends = () => {
  return db.friends.toArray();
}

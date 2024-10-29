import { useLiveQuery } from "dexie-react-hooks"
import { FriendList, getAllFriends } from "../../../entities/friend"
import { AddFriendForm } from "../../../features/add-friend"

export const FriendsPage = () => {
  const friends = useLiveQuery(getAllFriends);

  return (
    <>
      <h1>Friends</h1>

      <h2>Add friend</h2>
      <AddFriendForm />

      <h2>Friend list</h2>
      {Array.isArray(friends) ? (
        <FriendList friends={friends} />
      ) : (
        <p>まだ友達が登録されていません。</p>
      )}
    </>
  )
}

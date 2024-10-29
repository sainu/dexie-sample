import { FC } from "react"
import { Friend } from "../model/type"

type Props = {
  friends: Friend[]
}

export const FriendList: FC<Props> = ({ friends }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <li key={friend.id}>
          <strong>{friend.name}</strong> <small>({friend.age} age)</small>
        </li>
      ))}
    </ul>
  )
}

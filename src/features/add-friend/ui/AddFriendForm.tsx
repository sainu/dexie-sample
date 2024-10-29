import { useAddFriendForm } from "../model"

export const AddFriendForm = () => {
  const { handleSubmit, submitting } = useAddFriendForm();

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" required />
      </div>
      <div>
        <label htmlFor="age">Age</label>
        <input type="number" name="age" id="age" required />
      </div>
      {submitting ? (
        <button disabled>Adding...</button>
      ) : (
        <button type="submit">Add Friend</button>
      )}
    </form>
  )
}

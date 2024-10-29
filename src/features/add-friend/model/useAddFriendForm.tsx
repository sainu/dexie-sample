import { useCallback, useState } from "react";
import { useHandleSubmit } from "../../../shared/lib/form";
import { addFriendFormSchema } from "./schema";
import { createFriend } from "../../../entities/friend";
import type { CreateFriend } from "../../../entities/friend";

export const useAddFriendForm = () => {
  const handleSubmit = useHandleSubmit();
  const [submitting, setSubmitting] = useState(false)

  const onSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    console.log('Start #onSubmit')

    setSubmitting(true);

    const form = e.target as HTMLFormElement
    const formData = new FormData(form);
    const name = formData.get('name')?.toString();
    const age = formData.get('age')?.toString();
    const permittedData = {
      name,
      age,
    }

    console.log('Permitted data', permittedData)

    const friend: CreateFriend = addFriendFormSchema.parse(permittedData)

    await createFriend(friend);

    form.reset();

    setSubmitting(false);

    console.log('Complete #onSubmit');
  }, [setSubmitting]);

  return {
    handleSubmit: handleSubmit(onSubmit),
    submitting,
  }
}

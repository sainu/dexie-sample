export const useHandleSubmit = () => {
  const handleSubmit = (
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void,
    onError?: (error: unknown) => void,
  ) => {
    return (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      try {
        onSubmit(event);
      } catch (error) {
        if (onError) {
          onError(error)
        } else {
          throw error;
        }
      }
    }
  }

  return handleSubmit;
}

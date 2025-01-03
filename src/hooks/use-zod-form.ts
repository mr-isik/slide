import { zodResolver } from '@hookform/resolvers/zod'
import { UseMutateFunction } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { ZodSchema } from 'zod'
import * as z from 'zod'

const useZodForm = (
  schema: ZodSchema,
  mutation: UseMutateFunction,
  defaultValues?: any
) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    reset,
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      ...defaultValues,
    },
  })

  const onFormSubmit = handleSubmit(async (values) => mutation({ ...values }))

  return {
    register,
    errors,
    watch,
    reset,
    onFormSubmit,
  }
}

export default useZodForm

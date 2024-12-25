import {
  createAutomations,
  deleteKeyword,
  saveKeyword,
  saveListener,
  saveTrigger,
  updateAutomationName,
} from "@/actions/automations"
import { useMutationData } from "./use-mutation-data"
import { useEffect, useRef, useState } from "react"
import * as z from "zod"
import useZodForm from "./use-zod-form"
import { AppDispatch, useAppSelector } from "@/redux/store"
import { useDispatch } from "react-redux"
import { TRIGGER } from "@/redux/slices/automation"

export const useCreateAutomation = (id?: string) => {
  const { isPending, mutate } = useMutationData(
    ["create-automation"],
    () => createAutomations(id),
    "user-automations"
  )

  return { isPending, mutate }
}

export const useEditAutomation = (automationId: string) => {
  const [edit, setEdit] = useState(false)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const enableEdit = () => {
    setEdit(true)
  }

  const disableEdit = () => {
    setEdit(false)
  }

  const { isPending, mutate } = useMutationData(
    ["update-automation"],
    /* @ts-expect-error: data type is not inferred correctly */
    (data: { name: string }) =>
      updateAutomationName(automationId, { name: data.name }),
    "automation-info",
    disableEdit
  )

  useEffect(() => {
    function handleClickedOutside(this: Document, e: MouseEvent) {
      if (
        inputRef.current &&
        !inputRef.current.contains(e.target as Node | null)
      ) {
        if (inputRef.current.value !== "") {
          mutate({ name: inputRef.current.value })
        } else {
          disableEdit()
        }
      }
    }

    document.addEventListener("mousedown", handleClickedOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickedOutside)
    }
  }, [inputRef, mutate])

  return { edit, enableEdit, disableEdit, inputRef, isPending }
}

export const useListener = (id: string) => {
  const [listener, setListener] = useState<"MESSAGE" | "SMARTAI">("MESSAGE")

  const promptSchema = z.object({
    prompt: z.string().min(1),
    reply: z.string(),
  })

  const { isPending, mutate } = useMutationData(
    ["create-listener"],
    // @ts-expect-error: data type is not inferred correctly
    (data: { prompt: string; reply: string }) =>
      saveListener(id, listener || "MESSAGE", data.prompt, data.reply),
    "automation-info"
  )

  const { errors, onFormSubmit, register, reset, watch } = useZodForm(
    promptSchema,
    // @ts-expect-error: data type is not inferred correctly
    mutate
  )

  const onSetListener = (type: "MESSAGE" | "SMARTAI") => setListener(type)

  return {
    errors,
    isPending,
    onFormSubmit,
    onSetListener,
    register,
    reset,
    watch,
    listener,
  }
}

export const useTriggers = (id: string) => {
  const types = useAppSelector(
    (state) => state.AutomationReducer.trigger?.types
  )
  const dispatch: AppDispatch = useDispatch()

  const onSetTrigger = (type: "COMMENT" | "DM") =>
    dispatch(TRIGGER({ trigger: { type } }))

  const { isPending, mutate } = useMutationData(
    ["add-trigger"],
    // @ts-expect-error: data type is not inferred correctly
    (data: { types: string[] }) => saveTrigger(),
    "automation-info"
  )

  const onSaveTrigger = () => mutate({ types })
  return { isPending, onSetTrigger, onSaveTrigger, types }
}

export const useKeywords = (id: string) => {
  const [keyword, setKeyword] = useState("")

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setKeyword(e.target.value)

  const { isPending, mutate } = useMutationData(
    ["add-keyword"],
    // @ts-expect-error: data type is not inferred correctly
    (data: { keyword: string }) => saveKeyword(id, data.keyword),
    "automation-info",
    () => setKeyword("")
  )

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      mutate({
        keyword,
      })

      setKeyword("")
    }
  }

  const { mutate: deleteMutation } = useMutationData(
    ["delete-keyword"],
    () => deleteKeyword(id),
    "automation-info"
  )

  return {
    deleteMutation,
    isPending,
    keyword,
    onKeyPress,
    onValueChange,
  }
}

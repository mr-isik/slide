'use server'

import { onCurrentUser } from '../user'
import {
  addKeyword,
  addListener,
  addTrigger,
  createAutomation,
  deleteKeywordQuery,
  findAutomation,
  getAutomations,
  updateAutomation,
} from './queries'

export const createAutomations = async (id?: string) => {
  const user = await onCurrentUser()
  try {
    const create = await createAutomation(user.id, id)
    if (create) return { status: 200, data: 'Automation Created!' }
    return { status: 404, data: 'Oops! something went wrong' }
  } catch (error) {
    return { status: 500, data: error }
  }
}

export const getAllAutomations = async () => {
  const user = await onCurrentUser()
  try {
    const automations = await getAutomations(user.id)
    if (automations) return { status: 200, data: automations.automations }
    return { status: 404, data: [] }
  } catch (error) {
    console.error(error)
    return { status: 500, data: [] }
  }
}

export const getAutomationInfo = async (id: string) => {
  await onCurrentUser()

  try {
    const automation = await findAutomation(id)

    if (automation) return { status: 200, data: automation }

    return { status: 404, data: 'Automation not found' }
  } catch (error) {
    return { status: 500, data: error }
  }
}

export const updateAutomationName = async (
  id: string,
  data: {
    name?: string
    active?: boolean
    automation?: string
  }
) => {
  await onCurrentUser()

  try {
    const update = await updateAutomation(id, data)

    if (update) return { status: 200, data: 'Automation updated!' }

    return { status: 404, data: 'Oops! could not fint automation' }
  } catch (error) {
    return { status: 500, data: 'Oops! something went wrong' }
  }
}

export const saveListener = async (
  automationId: string,
  listener: 'SMARTAI' | 'MESSAGE',
  prompt: string,
  reply?: string
) => {
  await onCurrentUser()

  try {
    const create = await addListener(automationId, listener, prompt, reply)

    if (create) return { status: 200, data: 'Listener added!' }
    return { status: 404, data: "Couldn't add listener" }
  } catch (error) {
    return { status: 500, data: 'Oops! something went wrong' }
  }
}

export const saveTrigger = async (automationId: string, trigger: string[]) => {
  await onCurrentUser()

  try {
    const create = await addTrigger(automationId, trigger)

    if (create) return { status: 200, data: 'Trigger added!' }
    return { status: 404, data: "Couldn't add trigger" }
  } catch (error) {
    return { status: 500, data: 'Oops! something went wrong' }
  }
}

export const saveKeyword = async (automationId: string, keyword: string) => {
  await onCurrentUser()

  try {
    const create = await addKeyword(automationId, keyword)

    if (create) return { status: 200, data: 'Keyword added!' }
    return { status: 404, data: "Couldn't add keyword" }
  } catch (error) {
    return { status: 500, data: 'Oops! something went wrong' }
  }
}

export const deleteKeyword = async (id: string) => {
  await onCurrentUser()

  try {
    const deleteKeyword = await deleteKeywordQuery(id)

    if (deleteKeyword) return { status: 200, data: 'Keyword deleted!' }
    return { status: 404, data: "Couldn't delete keyword" }
  } catch (error) {
    return { status: 500, data: 'Oops! something went wrong' }
  }
}

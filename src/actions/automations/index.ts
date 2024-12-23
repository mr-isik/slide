'use server';

import { onCurrentUser } from '../user';
import {
  createAutomation,
  findAutomation,
  getAutomations,
  updateAutomation,
} from './queries';

export const createAutomations = async (id?: string) => {
  const user = await onCurrentUser();
  try {
    const create = await createAutomation(user.id, id);
    if (create) return { status: 200, data: 'Automation Created!' };
    return { status: 404, data: 'Oops! something went wrong' };
  } catch (error) {
    return { status: 500, data: error };
  }
};

export const getAllAutomations = async () => {
  const user = await onCurrentUser();
  try {
    const automations = await getAutomations(user.id);
    if (automations) return { status: 200, data: automations.automations };
    return { status: 404, data: [] };
  } catch (error) {
    console.error(error);
    return { status: 500, data: [] };
  }
};

export const getAutomationInfo = async (id: string) => {
  await onCurrentUser();

  try {
    const automation = await findAutomation(id);

    if (automation) return { status: 200, data: automation };

    return { status: 404, data: 'Automation not found' };
  } catch (error) {
    return { status: 500, data: error };
  }
};

export const updateAutomationName = async (
  id: string,
  data: {
    name?: string;
    active?: boolean;
    automation?: string;
  }
) => {
  await onCurrentUser();

  try {
    const update = await updateAutomation(id, data);

    if (update) return { status: 200, data: 'Automation updated!' };

    return { status: 404, data: 'Oops! could not fint automation' };
  } catch (error) {
    return { status: 500, data: 'Oops! something went wrong' };
  }
};

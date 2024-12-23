import { createAutomations, updateAutomationName } from '@/actions/automations';
import { useMutationData } from './use-mutation-data';
import { useEffect, useRef, useState } from 'react';

export const useCreateAutomation = (id?: string) => {
  const { isPending, mutate } = useMutationData(
    ['create-automation'],
    () => createAutomations(id),
    'user-automations'
  );

  return { isPending, mutate };
};

export const useEditAutomation = (automationId: string) => {
  const [edit, setEdit] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const enableEdit = () => {
    setEdit(true);
  };

  const disableEdit = () => {
    setEdit(false);
  };

  const { isPending, mutate } = useMutationData(
    ['update-automation'],
    /* @ts-expect-error: data type is not inferred correctly */
    (data: { name: string }) =>
      updateAutomationName(automationId, { name: data.name }),
    'automation-info',
    disableEdit
  );

  useEffect(() => {
    function handleClickedOutside(this: Document, e: MouseEvent) {
      if (
        inputRef.current &&
        !inputRef.current.contains(e.target as Node | null)
      ) {
        if (inputRef.current.value !== '') {
          mutate({ name: inputRef.current.value });
        } else {
          disableEdit();
        }
      }
    }

    document.addEventListener('mousedown', handleClickedOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickedOutside);
    };
  }, [inputRef, mutate]);

  return { edit, enableEdit, disableEdit, inputRef, isPending };
};

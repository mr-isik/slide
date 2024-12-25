import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const duplicateValidation = (array: string[], el: string) => {
  if (!array.find((t) => t === el)) {
    array.push(el)
    return array
  } else {
    array = array.filter((t) => t !== el)
    return array
  }
}

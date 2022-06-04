import { RefObject, useEffect } from 'react'

type Callback = () => void

export const useOutsideClick = <T extends HTMLElement>(ref: RefObject<T>, callback: Callback, isOpen: boolean) => {
  const handleClick = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node) && isOpen) {
      callback()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  })
}

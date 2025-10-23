import { ActionButton, ActionButtonProps } from '@/components'
import { createEmptyNoteAtom } from '@renderer/store'
import { useSetAtom } from 'jotai'
import { LuPlus   } from 'react-icons/lu'

export const NewNoteButton = ({ ...props }: ActionButtonProps) => {
  const createEmptyNote = useSetAtom(createEmptyNoteAtom)

  const handleCreation = async () => {
    await createEmptyNote()
  }

  return (
    <ActionButton className='w-full flex justify-center items-center gap-1 bg-primary hover:bg-primary/90 px-2 py-1 mr-2' onClick={handleCreation} {...props}>
      <LuPlus  className="w-4 h-4" />
      <span className="text-sm text-primary-foreground font-semibold">Crear Nueva Nota</span>
    </ActionButton>
  )
}
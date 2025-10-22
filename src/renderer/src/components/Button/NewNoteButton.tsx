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
    <ActionButton className='flex justify-center items-center gap-1 bg-primary hover:bg-primary/90 px-2 py-1' onClick={handleCreation} {...props}>
      <LuPlus  className="w-4 h-4" />
      <span className="text-sm text-primary-foreground font-semibold">Crear nueva nota</span>
    </ActionButton>
  )
}
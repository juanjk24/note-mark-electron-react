import { CloseWindowButton, MinimizeWindowButton, ResizeWindowButton } from "./WindowButtons"

export const WindowButtonRow = () => {
  return <div className="flex justify-end h-8 items-center z-20 mr-[-8px] mb-4">
    <MinimizeWindowButton />
    <ResizeWindowButton />
    <CloseWindowButton />
  </div>
}

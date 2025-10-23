import { LuMinus  } from "react-icons/lu";

export const MinimizeWindowButton = () => {
    const handleMinimizeWindow = () => {
        window.context.minimizeWindow()
    }

    return (
        <button
            onClick={handleMinimizeWindow}
            className="flex items-center justify-center p-1 hover:bg-primary h-full w-12 z-10 transition-colors"
        >
            <LuMinus />
        </button>
    )
}
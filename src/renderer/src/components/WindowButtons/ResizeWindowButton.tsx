import { LuSquare  } from "react-icons/lu";

export const ResizeWindowButton = () => {
    const handleResize = () => {
        window.context.resizeWindow();
    }

    return (
        <button 
            onClick={handleResize} 
            className="flex items-center justify-center p-1 hover:bg-primary h-full w-12 z-10 transition-colors"
        >
            <LuSquare className="size-3" />
        </button>
    )
}
import { LuX } from "react-icons/lu";

export const CloseWindowButton = () => {
    const handleClose = () => {
        window.context.closeWindow();
    }
    
    return (
        <button
            onClick={handleClose}
            className="flex items-center justify-center p-1 hover:bg-destructive h-full w-12 z-10 transition-colors">
            <LuX />
        </button>
    )
}
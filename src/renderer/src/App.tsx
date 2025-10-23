import { 
  Content, 
  DraggableTopBar, 
  RootLayout, 
  Sidebar, 
  ActionButtonsRow, 
  MarkdownEditor, 
  FloatingNoteTitle, 
  NotePreviewList, 
  WindowButtonRow
} from "@/components"
import { useRef } from "react"

const App = (): React.JSX.Element => {
  const contentContainerRef = useRef<HTMLDivElement>(null)

  const resetScroll = () => {
    contentContainerRef.current?.scrollTo(0, 0)
  }

  return (
    <>
    <DraggableTopBar />
    <RootLayout>
      <Content ref={contentContainerRef} className="border-l border-border">
        <FloatingNoteTitle className="pt-2" />
        <MarkdownEditor />
      </Content>
      <Sidebar className="p-2 pt-0 border border-border">
        <WindowButtonRow />
        <ActionButtonsRow className="flex justify-between mt-1" />
        <NotePreviewList className="mt-3 space-y-1" onSelect={resetScroll} />
      </Sidebar>
    </RootLayout>
    </>
  )
}

export default App

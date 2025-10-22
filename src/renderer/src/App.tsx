import { 
  Content, 
  DraggableTopBar, 
  RootLayout, 
  Sidebar, 
  ActionButtonsRow, 
  MarkdownEditor, 
  FloatingNoteTitle, 
  NotePreviewList 
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
      <Sidebar className="p-2">
        <ActionButtonsRow className="flex justify-between mt-1" />
        <NotePreviewList className="mt-3 space-y-1" onSelect={resetScroll} />
      </Sidebar>
      <Content ref={contentContainerRef} className="border-l border-border">
        <FloatingNoteTitle className="pt-2" />
        <MarkdownEditor />
      </Content>
    </RootLayout>
    </>
  )
}

export default App

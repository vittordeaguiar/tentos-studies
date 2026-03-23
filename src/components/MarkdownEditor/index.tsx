/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownEditorProps {
  value: string;
  onChange: (val: string) => void;
}

export default function MarkdownEditor({ value, onChange }: MarkdownEditorProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      const target = e.target as HTMLTextAreaElement;
      const { selectionStart, value: text } = target;

      const currentLineStart = text.lastIndexOf("\n", selectionStart - 1) + 1;
      const currentLine = text.slice(currentLineStart, selectionStart);

      const listMatch = currentLine.match(/^(\s*(?:[-*+]|\d+\.)\s*(?:\[[ xX]\]\s*)?)/);

      if (listMatch) {
        e.preventDefault();
        
        const prefix = listMatch[1];
        
        if (currentLine.trim() === prefix.trim()) {
          const newValue = text.slice(0, currentLineStart) + text.slice(selectionStart);
          onChange(newValue);
          setTimeout(() => {
            target.selectionStart = target.selectionEnd = currentLineStart;
          }, 0);
          return;
        }

        let newPrefix = prefix;
        if (prefix.includes("[x]") || prefix.includes("[X]")) {
          newPrefix = prefix.replace(/\[[xX]\]/, "[ ]");
        }

        const insertText = "\n" + newPrefix;
        const newValue = text.slice(0, selectionStart) + insertText + text.slice(target.selectionEnd);
        
        onChange(newValue);
        
        setTimeout(() => {
          target.selectionStart = target.selectionEnd = selectionStart + insertText.length;
        }, 0);
      }
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-full w-full gap-4 editor-container">
      {/* Editor Pane */}
      <div className="flex-1 h-full min-h-[50vh]">
        <textarea
          className="w-full h-full p-6 outline-none resize-none bg-transparent font-mono text-[15px] leading-relaxed"
          placeholder={"Comece a digitar seu markdown...\n\n# Tarefas de Hoje\n- [ ] Finalizar onboarding\n- [ ] Responder e-mails\n"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{ color: "var(--text-h)" }}
        />
      </div>

      <div className="hidden lg:block w-[1px] bg-[var(--border)] h-full" />
      <div className="block lg:hidden h-[1px] bg-[var(--border)] w-full" />

      {/* Preview Pane */}
      <div className="flex-1 h-full p-6 overflow-y-auto markdown-preview">
        <ReactMarkdown 
          remarkPlugins={[remarkGfm]}
          components={{
            input: ({ node, ...props }: any) => (
              <input 
                {...props} 
                className="mr-3 accent-[var(--text-h)] cursor-pointer w-4 h-4 translate-y-[2px]" 
                readOnly // for MVP, clicking in preview won't edit the raw text
              />
            ),
            li: ({ node, ...props }: any) => <li className="mb-2 text-[var(--text-h)]" {...props} />,
            ul: ({ node, ...props }: any) => <ul className="list-none pl-1 mb-6" {...props} />,
            ol: ({ node, ...props }: any) => <ol className="list-decimal pl-6 mb-6" {...props} />,
            h1: ({ node, ...props }: any) => <h1 className="text-3xl font-bold mb-6 mt-2 text-[var(--text-h)] tracking-tight" {...props} />,
            h2: ({ node, ...props }: any) => <h2 className="text-2xl font-semibold mb-4 mt-8 text-[var(--text-h)] tracking-tight" {...props} />,
            h3: ({ node, ...props }: any) => <h3 className="text-xl font-medium mb-3 mt-6 text-[var(--text-h)]" {...props} />,
            p: ({ node, ...props }: any) => <p className="mb-5 leading-relaxed text-[var(--text)]" {...props} />,
            a: ({ node, ...props }: any) => <a className="underline decoration-[var(--border)] underline-offset-4 hover:decoration-[var(--text-h)] transition-colors" {...props} />,
            blockquote: ({ node, ...props }: any) => <blockquote className="border-l-4 border-[var(--border)] pl-4 italic text-[var(--text-muted)] my-6" {...props} />,
            code: ({ node, inline, ...props }: any) => 
               inline ? 
                 <code className="bg-[var(--code-bg)] px-1.5 py-0.5 rounded text-[14px]" {...props} /> : 
                 <code className="block bg-[var(--code-bg)] p-4 rounded-lg overflow-x-auto text-[14px] mb-6" {...props} />
          }}
        >
          {value || "*Nenhuma visualização disponível*"}
        </ReactMarkdown>
      </div>
    </div>
  );
}

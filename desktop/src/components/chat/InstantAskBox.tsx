import { useState, useCallback } from 'react'
import { useTranslation } from '../../i18n'
import { useChatStore } from '../../stores/chatStore'
import { useTabStore } from '../../stores/tabStore'

type Props = {
  sessionId?: string | null
}

export function InstantAskBox({ sessionId }: Props) {
  const t = useTranslation()
  const activeTabId = useTabStore((s) => s.activeTabId)
  const targetSessionId = sessionId ?? activeTabId
  const sendMessage = useChatStore((s) => s.sendMessage)
  const [input, setInput] = useState('')
  const [isSending, setIsSending] = useState(false)

  const handleSubmit = useCallback(async () => {
    if (!input.trim() || !targetSessionId || isSending) return
    setIsSending(true)
    try {
      await sendMessage(targetSessionId, input.trim())
      setInput('')
    } catch {
      // Error handling is done in the store
    } finally {
      setIsSending(false)
    }
  }, [input, targetSessionId, isSending, sendMessage])

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }, [handleSubmit])

  if (!targetSessionId) return null

  return (
    <div className="px-4 pb-2">
      <div className="flex items-center gap-2 rounded-[var(--aranya-radius-lg)] border border-[var(--aranya-border-soft)] bg-[var(--aranya-bg-soft)] px-3 py-2 transition-colors focus-within:border-[var(--color-border-focus)]" style={{ boxShadow: 'var(--aranya-shadow-soft)' }}>
        <span className="material-symbols-outlined text-[18px] text-[var(--color-text-tertiary)]">
          chat_bubble_outline
        </span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={t('chat.instantAskPlaceholder')}
          disabled={isSending}
          className="flex-1 bg-transparent text-[13px] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)] outline-none"
        />
        {input.trim() && (
          <button
            onClick={handleSubmit}
            disabled={isSending}
            className="flex h-6 w-6 items-center justify-center rounded-md text-[var(--color-text-tertiary)] transition-colors hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-text-primary)]"
          >
            <span className="material-symbols-outlined text-[16px]">arrow_upward</span>
          </button>
        )}
      </div>
    </div>
  )
}

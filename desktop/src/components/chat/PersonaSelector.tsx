import { useState, useCallback, useRef, useEffect } from 'react'
import { useTranslation, type TranslationKey } from '../../i18n'
import { useChatStore } from '../../stores/chatStore'
import { useTabStore } from '../../stores/tabStore'
import { PERSONAS, getPersona } from '../../config/personas'
import type { PersonaId } from '../../types/persona'

const PERSONA_IDS: PersonaId[] = ['araja', 'arana', 'arama']

type Props = {
  sessionId?: string | null
}

export function PersonaSelector({ sessionId }: Props) {
  const t = useTranslation()
  const activeTabId = useTabStore((s) => s.activeTabId)
  const targetSessionId = sessionId ?? activeTabId
  const personaId = useChatStore((s) => targetSessionId ? s.sessions[targetSessionId]?.personaId : undefined) ?? 'araja'
  const setPersona = useChatStore((s) => s.setPersona)
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currentPersona = getPersona(personaId)

  useEffect(() => {
    if (!isOpen) return
    const close = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [isOpen])

  const handleSelect = useCallback((id: PersonaId) => {
    if (targetSessionId) {
      setPersona(targetSessionId, id)
    }
    setIsOpen(false)
  }, [targetSessionId, setPersona])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 rounded-lg px-2 py-1 text-xs text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-text-primary)]"
        title={t('persona.selector.label' as TranslationKey)}
      >
        <span className="material-symbols-outlined text-[14px]">person</span>
        <span>{t(currentPersona.nameKey as TranslationKey)}</span>
        <span className="material-symbols-outlined text-[12px]">
          {isOpen ? 'expand_less' : 'expand_more'}
        </span>
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full z-50 mt-1 min-w-[200px] rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] py-1 shadow-dropdown">
          {PERSONA_IDS.map((id) => {
            const persona = PERSONAS[id]
            const isSelected = id === personaId
            return (
              <button
                key={id}
                onClick={() => handleSelect(id)}
                className={`w-full px-3 py-2 text-left transition-colors hover:bg-[var(--color-surface-hover)] ${
                  isSelected ? 'bg-[var(--color-surface-container)]' : ''
                }`}
              >
                <div className="text-sm font-medium text-[var(--color-text-primary)]">
                  {t(persona.nameKey as TranslationKey)}
                </div>
                <div className="text-xs text-[var(--color-text-tertiary)]">
                  {t(persona.descriptionKey as TranslationKey)}
                </div>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

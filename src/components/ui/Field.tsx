'use client'

import { useId, useState } from 'react'
import type {
  FocusEvent,
  InputHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react'
import { IconChevronDown } from '@/components/icons'

type FieldAsInput = InputHTMLAttributes<HTMLInputElement> & {
  as?: 'input'
  bare?: boolean
  invalid?: boolean
  hint?: string
  label?: string
  optional?: boolean
}

type FieldAsTextarea = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  as: 'textarea'
  bare?: boolean
  invalid?: boolean
  hint?: string
  label?: string
  optional?: boolean
}

type FieldAsSelect = SelectHTMLAttributes<HTMLSelectElement> & {
  as: 'select'
  bare?: boolean
  invalid?: boolean
  hint?: string
  label?: string
  optional?: boolean
}

type FieldProps = FieldAsInput | FieldAsTextarea | FieldAsSelect
type FieldElement = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement

export default function Field({
  as = 'input',
  bare,
  invalid,
  hint,
  label,
  optional,
  required,
  className = '',
  children,
  value,
  onFocus,
  onBlur,
  ...rest
}: FieldProps) {
  const autoId = useId()
  const id = rest.id ?? autoId
  const hintId = `${id}-hint`
  const [focused, setFocused] = useState(false)
  const hasValue = typeof value === 'string' ? value.length > 0 : !!value
  const floated = focused || hasValue

  const handleFocus = (e: FocusEvent<FieldElement>) => {
    setFocused(true)
    ;(onFocus as ((e: FocusEvent<FieldElement>) => void) | undefined)?.(e)
  }
  const handleBlur = (e: FocusEvent<FieldElement>) => {
    setFocused(false)
    ;(onBlur as ((e: FocusEvent<FieldElement>) => void) | undefined)?.(e)
  }

  const wrapCls = ['iva-field', invalid ? 'iva-field--invalid' : '']
    .filter(Boolean)
    .join(' ')

  const labelNode = label && (
    <label
      htmlFor={id}
      className={`iva-field__label ${floated ? 'iva-field__label--float' : ''}`.trim()}
    >
      {label}
      {optional && <span className="iva-field__optional"> (optional)</span>}
      {required && !optional && (
        <span className="iva-field__required" aria-hidden="true"> *</span>
      )}
    </label>
  )

  return (
    <div className={wrapCls}>
      <div className="iva-field__control">
        {as === 'textarea' ? (
          <textarea
            id={id}
            required={required}
            value={value as string | undefined}
            onFocus={handleFocus}
            onBlur={handleBlur}
            aria-invalid={invalid || undefined}
            aria-describedby={hint ? hintId : undefined}
            className={`iva-field__textarea ${className}`.trim()}
            {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : as === 'select' ? (
          <select
            id={id}
            required={required}
            value={value as string | undefined}
            onFocus={handleFocus}
            onBlur={handleBlur}
            aria-invalid={invalid || undefined}
            aria-describedby={hint ? hintId : undefined}
            className={`iva-field__select ${className}`.trim()}
            {...(rest as SelectHTMLAttributes<HTMLSelectElement>)}
          >
            {children}
          </select>
        ) : (
          <input
            id={id}
            required={required}
            value={value as string | undefined}
            onFocus={handleFocus}
            onBlur={handleBlur}
            aria-invalid={invalid || undefined}
            aria-describedby={hint ? hintId : undefined}
            className={`iva-field__input ${className}`.trim()}
            {...(rest as InputHTMLAttributes<HTMLInputElement>)}
          />
        )}
        {labelNode}
        {as === 'select' && (
          <IconChevronDown size={16} className="iva-field__selecticon" />
        )}
      </div>
      {hint && (
        <span id={hintId} className="iva-field__hint">
          {hint}
        </span>
      )}
    </div>
  )
}

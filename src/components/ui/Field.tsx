'use client'

import { useId } from 'react'
import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

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

type FieldProps = FieldAsInput | FieldAsTextarea

export default function Field({
  as = 'input',
  bare,
  invalid,
  hint,
  label,
  optional,
  className = '',
  ...rest
}: FieldProps) {
  const autoId = useId()
  const id = rest.id ?? autoId
  const wrapCls = ['iva-field', invalid ? 'iva-field--invalid' : '']
    .filter(Boolean)
    .join(' ')

  return (
    <div className={wrapCls}>
      {label && (
        <label className="iva-field__label" htmlFor={id}>
          {label}
          {optional && <span className="iva-field__optional"> (optional)</span>}
        </label>
      )}
      {as === 'textarea' ? (
        <textarea
          id={id}
          className={`iva-field__textarea ${className}`.trim()}
          {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          id={id}
          className={`iva-field__input ${className}`.trim()}
          {...(rest as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
      {hint && <span className="iva-field__hint">{hint}</span>}
    </div>
  )
}

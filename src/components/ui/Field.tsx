'use client'

import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

type FieldAsInput = InputHTMLAttributes<HTMLInputElement> & {
  as?: 'input'
  bare?: boolean
  invalid?: boolean
  hint?: string
}

type FieldAsTextarea = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  as: 'textarea'
  bare?: boolean
  invalid?: boolean
  hint?: string
}

type FieldProps = FieldAsInput | FieldAsTextarea

export default function Field({
  as = 'input',
  bare,
  invalid,
  hint,
  className = '',
  ...rest
}: FieldProps) {
  const wrapCls = ['iva-field', invalid ? 'iva-field--invalid' : '']
    .filter(Boolean)
    .join(' ')

  return (
    <div className={wrapCls}>
      {as === 'textarea' ? (
        <textarea
          className={`iva-field__textarea ${className}`.trim()}
          {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          className={`iva-field__input ${className}`.trim()}
          {...(rest as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
      {hint && <span className="iva-field__hint">{hint}</span>}
    </div>
  )
}

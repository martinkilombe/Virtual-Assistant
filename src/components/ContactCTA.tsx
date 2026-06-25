'use client'

import { useState } from 'react'
import isEmail from 'validator/lib/isEmail'
import { isValidPhoneNumber } from 'libphonenumber-js/min'
import Button from '@/components/ui/Button'
import Eyebrow from '@/components/ui/Eyebrow'
import Field from '@/components/ui/Field'
import { IconCheck } from '@/components/icons'

interface FormValues {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  subject?: string
  message?: string
}

const EMPTY: FormValues = { name: '', email: '', phone: '', subject: '', message: '' }

const TOPICS = [
  'Research & Reports',
  'Expensing & Invoicing',
  'Scheduling & Planning',
  'Marketing & Social',
  'Something else',
]

function validateField(key: keyof FormErrors, value: string): string | undefined {
  switch (key) {
    case 'name':
      return value.trim() ? undefined : 'Please enter your name'
    case 'email':
      return isEmail(value) ? undefined : 'Enter a valid email'
    case 'phone':
      if (!value.trim()) return undefined
      return isValidPhoneNumber(value, 'US') ? undefined : 'Enter a valid phone number'
    case 'subject':
      return value.trim() ? undefined : "Let us know what this is about"
    case 'message':
      return value.trim() ? undefined : 'Tell us how we can help'
  }
}

interface TrustItem {
  num: string
  text: string
}

interface ContactCTAProps {
  eyebrow?: string
  title?: React.ReactNode
  description?: string
  trustItems?: TrustItem[]
}

export default function ContactCTA({
  eyebrow = 'Contact',
  title = (
    <>
      Let&apos;s take it <em>off</em> your plate.
    </>
  ),
  description = "Tell us what's eating your week. We'll match you with the right assistant, usually within a day.",
  trustItems,
}: ContactCTAProps) {
  const [v, setV] = useState<FormValues>(EMPTY)
  const [err, setErr] = useState<FormErrors>({})
  const [sent, setSent] = useState(false)

  const set =
    (key: keyof FormValues) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setV((s) => ({ ...s, [key]: e.target.value }))
      setErr((s) => ({ ...s, [key]: undefined }))
    }

  const blur =
    (key: keyof FormErrors) =>
    (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setErr((s) => ({ ...s, [key]: validateField(key, e.target.value) }))
    }

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const next: FormErrors = {
      name: validateField('name', v.name),
      email: validateField('email', v.email),
      phone: validateField('phone', v.phone),
      subject: validateField('subject', v.subject),
      message: validateField('message', v.message),
    }
    setErr(next)
    if (Object.values(next).every((msg) => !msg)) setSent(true)
  }

  return (
    <section className="iva-section iva-cta" id="contact">
      <div className="iva-container">
        <div className="iva-cta__grid">
          {/* Left panel */}
          <div className="iva-cta__panel">
            <Eyebrow color="white">{eyebrow}</Eyebrow>
            <h2 className="iva-onaccent">{title}</h2>
            <p>{description}</p>

            {trustItems && trustItems.length > 0 && (
              <div className="iva-cta__trust">
                {trustItems.map((item) => (
                  <div key={item.num} className="iva-cta__trust-item">
                    <span className="iva-cta__trust-num">{item.num}</span>
                    <p className="iva-cta__trust-text">{item.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Form */}
          <form className="iva-cta__form" onSubmit={submit} noValidate>
            <p className="iva-cta__formhead">Send us a message</p>

            {sent ? (
              <div className="iva-cta__thanks">
                <span className="iva-cta__thankicon">
                  <IconCheck size={34} />
                </span>
                <h3>Message sent, thank you!</h3>
                <p>
                  We&apos;ve received your details and will be in touch within
                  one business day.
                </p>
                <Button
                  variant="primary"
                  size="md"
                  type="button"
                  onClick={() => { setSent(false); setV(EMPTY) }}
                >
                  Send another
                </Button>
              </div>
            ) : (
              <>
                <div className="iva-cta__row">
                  <Field
                    label="Name"
                    required
                    autoComplete="name"
                    value={v.name}
                    onChange={set('name')}
                    onBlur={blur('name')}
                    invalid={!!err.name}
                    hint={err.name}
                  />
                  <Field
                    type="email"
                    label="Email"
                    required
                    autoComplete="email"
                    value={v.email}
                    onChange={set('email')}
                    onBlur={blur('email')}
                    invalid={!!err.email}
                    hint={err.email}
                  />
                </div>
                <div className="iva-cta__row">
                  <Field
                    type="tel"
                    label="Phone"
                    optional
                    autoComplete="tel"
                    value={v.phone}
                    onChange={set('phone')}
                    onBlur={blur('phone')}
                    invalid={!!err.phone}
                    hint={err.phone}
                  />
                  <Field
                    as="select"
                    label="Topic"
                    required
                    value={v.subject}
                    onChange={set('subject')}
                    onBlur={blur('subject')}
                    invalid={!!err.subject}
                    hint={err.subject}
                  >
                    <option value="" disabled hidden />
                    {TOPICS.map((topic) => (
                      <option key={topic} value={topic}>
                        {topic}
                      </option>
                    ))}
                  </Field>
                </div>
                <Field
                  as="textarea"
                  label="Message"
                  required
                  value={v.message}
                  onChange={set('message')}
                  onBlur={blur('message')}
                  invalid={!!err.message}
                  hint={err.message}
                />
                <Button
                  variant="primary"
                  size="lg"
                  type="submit"
                  className="iva-cta__submit"
                >
                  Send message
                </Button>
                <p className="iva-cta__formnote">
                  We&apos;ll keep your details private and only use them to get back to you.
                </p>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

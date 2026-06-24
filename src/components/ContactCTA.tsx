'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'
import Eyebrow from '@/components/ui/Eyebrow'
import Field from '@/components/ui/Field'
import { IconHeadset, IconCheck } from '@/components/icons'

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
  message?: string
}

const EMPTY: FormValues = { name: '', email: '', phone: '', subject: '', message: '' }

interface ContactCTAProps {
  eyebrow?: string
  title?: React.ReactNode
  description?: string
}

export default function ContactCTA({
  eyebrow = 'Contact',
  title = (
    <>
      Let&apos;s take it <em>off</em> your plate.
    </>
  ),
  description = "Tell us what's eating your week. We'll match you with the right assistant, usually within a day.",
}: ContactCTAProps) {
  const [v, setV] = useState<FormValues>(EMPTY)
  const [err, setErr] = useState<FormErrors>({})
  const [sent, setSent] = useState(false)

  const set =
    (key: keyof FormValues) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setV((s) => ({ ...s, [key]: e.target.value }))
      setErr((s) => ({ ...s, [key]: undefined }))
    }

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const next: FormErrors = {}
    if (!v.name.trim()) next.name = 'Please enter your name'
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v.email)) next.email = 'Enter a valid email'
    if (!v.message.trim()) next.message = 'Tell us how we can help'
    setErr(next)
    if (Object.keys(next).length === 0) setSent(true)
  }

  return (
    <section className="iva-section iva-cta" id="contact">
      <div className="iva-container iva-cta__grid">
        {/* Left panel */}
        <div className="iva-cta__panel">
          <Eyebrow color="white">{eyebrow}</Eyebrow>
          <h2 className="iva-onaccent">{title}</h2>
          <p>{description}</p>
          <Button href="#contact" variant="light" size="lg">
            Book a free call
          </Button>
          <div className="iva-cta__call">
            <span className="iva-cta__callicon">
              <IconHeadset size={26} />
            </span>
            <div>
              <span className="iva-cta__calllab">Call us today</span>
              <a href="tel:0008596256" className="iva-cta__callnum">
                (000) 859-6256
              </a>
            </div>
          </div>
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
                  placeholder="Name"
                  value={v.name}
                  onChange={set('name')}
                  invalid={!!err.name}
                  hint={err.name}
                />
                <Field
                  type="email"
                  placeholder="Email"
                  value={v.email}
                  onChange={set('email')}
                  invalid={!!err.email}
                  hint={err.email}
                />
              </div>
              <div className="iva-cta__row">
                <Field
                  placeholder="Phone"
                  value={v.phone}
                  onChange={set('phone')}
                />
                <Field
                  placeholder="Subject"
                  value={v.subject}
                  onChange={set('subject')}
                />
              </div>
              <Field
                as="textarea"
                placeholder="Message"
                value={v.message}
                onChange={set('message')}
                invalid={!!err.message}
                hint={err.message}
              />
              <Button
                variant="primary"
                size="lg"
                type="submit"
                className="iva-cta__submit"
              >
                Submit Now
              </Button>
            </>
          )}
        </form>
      </div>
    </section>
  )
}

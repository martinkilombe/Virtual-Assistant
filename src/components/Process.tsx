import Eyebrow from '@/components/ui/Eyebrow'

const STEPS = [
  {
    step: '01',
    title: 'Tell us about your ideal assistant',
    text: 'Share the tasks, tools, and hours you need. It takes about five minutes.',
  },
  {
    step: '02',
    title: 'Meet & approve your match',
    text: 'We hand-pick a candidate from our vetted bench and introduce you within 24 hours.',
  },
  {
    step: '03',
    title: 'Launch and track the work',
    text: 'Onboard in a day and watch tasks get done. Adjust scope anytime as you grow.',
  },
]

export default function Process() {
  return (
    <section className="iva-section iva-section--white" id="process">
      <div className="iva-container">
        <div className="iva-head iva-head--center">
          <Eyebrow align="center">Our Process</Eyebrow>
          <h2>How Instant VA works</h2>
          <p className="iva-lead">
            From first hello to first task done — getting matched with the
            right assistant takes days, not weeks.
          </p>
        </div>

        <div className="iva-proc__rows">
          {STEPS.map((s) => (
            <div key={s.step} className="iva-proc-row">
              <span className="iva-proc-row__step">{s.step}</span>
              <h3 className="iva-proc-row__title">{s.title}</h3>
              <p className="iva-proc-row__body">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

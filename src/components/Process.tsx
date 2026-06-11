import Eyebrow from '@/components/ui/Eyebrow'
import ProcessCard from '@/components/ui/ProcessCard'

const STEPS = [
  {
    step: 1,
    title: 'Tell us about your ideal assistant',
    text: 'Share the tasks, tools, and hours you need. It takes about five minutes.',
  },
  {
    step: 2,
    title: 'Meet & approve your match',
    text: 'We hand-pick a candidate from our vetted bench and introduce you within 24 hours.',
  },
  {
    step: 3,
    title: 'Launch and track the work',
    text: 'Onboard in a day and watch tasks get done. Adjust scope anytime as you grow.',
  },
]

export default function Process() {
  return (
    <section className="iva-section" id="process">
      <span className="iva-blob iva-proc__orange" />
      <span className="iva-blob iva-proc__ring" />

      <div className="iva-container">
        <div className="iva-head iva-head--center">
          <Eyebrow align="center">Our Process</Eyebrow>
          <h2>How Instant VA works</h2>
          <p className="iva-lead">
            From first hello to first task done — getting matched with the
            right assistant takes days, not weeks.
          </p>
        </div>

        <div className="iva-proc__grid">
          {STEPS.map((s) => (
            <ProcessCard key={s.step} step={s.step} title={s.title}>
              {s.text}
            </ProcessCard>
          ))}
        </div>
      </div>
    </section>
  )
}

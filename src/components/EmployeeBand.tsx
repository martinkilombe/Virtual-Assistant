import Button from '@/components/ui/Button'
import Eyebrow from '@/components/ui/Eyebrow'
import StatCard from '@/components/ui/StatCard'

const STATS = [
  { value: '850+', label: 'Businesses served' },
  { value: '4.9', label: 'Average rating' },
  { value: '24h',   label: 'Avg. match time' },
]

export default function EmployeeBand() {
  return (
    <section className="iva-band">
      <div className="iva-container iva-band__grid">
        <div className="iva-band__media">
          <img
            src="/assets/img/people-band.jpg"
            alt="A virtual assistant wearing a headset, working from her laptop and phone"
            className="iva-band__photo"
            loading="lazy"
          />
          <div className="iva-band__caption">
            <span className="iva-band__caption-dot" aria-hidden="true" />
            Vetted, full-time professional
          </div>
        </div>

        <div className="iva-band__copy">
          <Eyebrow color="white">The People</Eyebrow>
          <h2 className="iva-onband">
            A real professional, <em>not</em> a chatbot.
          </h2>
          <p className="iva-band__lead">
            Every Instant VA is a vetted, full-time professional, never a bot,
            never a gig worker. They become part of your team, learn how you
            work, and grow with you.
          </p>
          <div className="iva-band__stats">
            {STATS.map((s) => (
              <StatCard key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
          <Button href="#contact" variant="light" size="lg">
            Meet your match
          </Button>
        </div>
      </div>
    </section>
  )
}

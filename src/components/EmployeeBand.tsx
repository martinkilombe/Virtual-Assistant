import Button from '@/components/ui/Button'
import Eyebrow from '@/components/ui/Eyebrow'
import StatCard from '@/components/ui/StatCard'

const STATS = [
  { value: '850+', label: 'Businesses served' },
  { value: '4.9/5', label: 'Average rating' },
  { value: '24h',   label: 'Avg. match time' },
]

export default function EmployeeBand() {
  return (
    <section className="iva-band">
      <div className="iva-container iva-band__grid">
        {/* Image placeholder — drop a real image in here later */}
        <div className="iva-band__media">
          <div className="iva-band__photo" aria-hidden="true" />
        </div>

        <div className="iva-band__copy">
          <Eyebrow color="white">Virtual Employee</Eyebrow>
          <h2 className="iva-onband">
            Find the ultimate virtual assistant for your business.
          </h2>
          <p className="iva-band__lead">
            Every Instant VA is a real, full-time professional — not a chatbot
            and not a gig worker. They become part of your team, learn how you
            work, and grow with you.
          </p>
          <div className="iva-band__stats">
            {STATS.map((s) => (
              <StatCard key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
          <Button href="#contact" variant="light" size="lg">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  )
}

const STEPS = [
  {
    num: '01',
    title: 'DISCOVERY CALL',
    desc: 'A 30-minute deep dive to map your workflow bottlenecks and goals. No fluff, no aggressive sales pitch—just a transparent, actionable operational strategy.',
    delay: '',
  },
  {
    num: '02',
    title: 'ONBOARDING & SETUP',
    desc: 'I seamlessly integrate into your current tech stack, absorb your brand voice, and document your workflows. Fully operational and autonomous within 48 hours.',
    delay: 'd1',
  },
  {
    num: '03',
    title: 'EXECUTION & RESULTS',
    desc: 'I own the execution while you focus on scaling. Expect data-backed weekly reporting, absolute metric accountability, and proactive system optimization.',
    delay: 'd2',
  },
]

export default function Process() {
  return (
    <section id="process" className="wrap">
      <div className="proc-in">
        <div className="proc-hdr">
          <div className="lbl rv">How It Works</div>
          <h2 className="rv d1">
            From Hello to<br />Handling It
          </h2>
        </div>

        <div className="steps">
          {STEPS.map((s, index) => (
            <div key={s.num} className={`step rv ${s.delay}`}>
              {/* Flex wrapper for the numbers and centered horizontal lines */}
              <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                <div className="step-num">{s.num}</div>
                
                {/* Dynamically adds the timeline connecting line between steps 01-02 and 02-03, but omits it after step 03 */}
                {index < STEPS.length - 1 && (
                  <div 
                    className="step-line" 
                    style={{
                      flexGrow: 1,
                      height: '1px',
                      background: 'var(--y)',
                      opacity: 0.3,
                      marginLeft: '1.5rem',
                      marginRight: '-1.5rem'
                    }}
                  />
                )}
              </div>
              
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

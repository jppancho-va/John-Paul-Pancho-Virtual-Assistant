import React from 'react'

const TOOLS = [
  { name: 'TheraOffice' }, { name: 'Acuity' }, { name: 'Quo VoIP' }, { name: 'Stax' }, 
  { name: 'Slice' }, { name: 'Google Workspace' }, { name: 'Microsoft 365' }, { name: 'Zoom' }, 
  { name: 'Slack' }, { name: 'Shopify' }, { name: 'Gorgias' }, { name: 'FB Business' }, 
  { name: 'TikTok Seller' }, { name: 'Meta Business' }, { name: 'Salesforce' }, { name: 'HubSpot' }, 
  { name: 'ClickUp' }, { name: 'Practice Better' }, { name: 'Zendesk' }, { name: 'Freshdesk' }, 
  { name: 'Google Meet' }, { name: 'Teams' }, { name: 'WhatsApp' }, { name: 'Telegram' }, 
  { name: 'Discord' }, { name: 'Trello' }, { name: 'Asana' }, { name: 'Monday.com' }, 
  { name: 'Notion' }, { name: 'Loom' }, { name: 'Scribe' }, { name: 'Make.com' }, 
  { name: 'Zapier' }, { name: 'ChatGPT' }, { name: 'Claude' }, { name: 'Gemini' }, 
  { name: 'Avaya' }, { name: 'Cisco Finesse' }
]

const REVIEWS = [
  { author: 'David Sellers', rating: '★★★★★', text: 'Customer Service was so good I signed up Monthly.' },
  { author: 'Tim Beglin', rating: 'Patient Feedback', text: 'Incredibly professional and efficient.' },
  { author: 'Dr. Ryan', rating: 'Patient Operations', text: 'Getting good feedback on you from my patients.' },
  { author: 'Jeff Jean-Philippe', rating: 'Patient Feedback', text: 'Always responsive and highly organized.' },
  { author: 'Uche Olomina', rating: '★★★★★', text: 'Excellent system optimization and execution.' },
  { author: 'Maegan Welsh', rating: 'Patient Feedback', text: 'Exceptional support. Handled inquiries with care.' },
  { author: 'Robert Bailey', rating: '★★★★★', text: 'Superb workflow architecture.' },
  { author: 'Beth Macpherson', rating: 'Patient Feedback', text: 'Reliable, thorough, and outstanding service.' }
]

export default function ToolsMarquee() {
  return (
    <div className="tools wrap">
      <div className="marquee-stage-flat">
        {/* TOOLS: LEFT TO RIGHT */}
        <div className="mqwrap-flat">
          <div className="mqtrack-flat to-right">
            {[...TOOLS, ...TOOLS].map((tool, i) => (
              <span key={`tool-${i}`} className="mpill-flat tool-pill">
                {tool.name}
              </span>
            ))}
          </div>
        </div>

        {/* FEEDBACK: RIGHT TO LEFT */}
        <div className="mqwrap-flat row-bottom">
          <div className="mqtrack-flat to-left">
            {[...REVIEWS, ...REVIEWS].map((rev, i) => (
              <span key={`rev-${i}`} className="mpill-flat csat-pill">
                <span className="csat-stars">{rev.rating}</span>
                <span className="csat-text">"{rev.text}"</span>
                <span className="csat-author">— {rev.author}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .marquee-stage-flat { overflow: hidden; padding: 2rem 0; width: 100%; display: flex; flex-direction: column; gap: 1.5rem; }
        .mqwrap-flat { width: 100%; overflow: hidden; background: rgba(11, 11, 11, 0.4); padding: 0.75rem 0; }
        .mqtrack-flat { display: flex; width: max-content; gap: 1rem; align-items: center; }
        .to-left { animation: scrollLeft 60s linear infinite; }
        .to-right { animation: scrollRight 60s linear infinite; }
        .mqtrack-flat:hover { animation-play-state: paused; }
        
        /* Tool Pill (Smaller) */
        .tool-pill { 
          background: rgba(20, 20, 20, 0.85); border: 1px solid rgba(255, 255, 255, 0.1); 
          color: #ffffff; padding: 0.4rem 0.9rem; border-radius: 50px; font-size: 0.75rem; 
          transition: all 0.3s ease;
        }
        .tool-pill:hover { border-color: #eaaa08; box-shadow: 0 0 15px rgba(234, 170, 8, 0.5); transform: translateY(-2px); }

        /* Feedback Pill (Larger) */
        .csat-pill { 
          background: rgba(234, 170, 8, 0.05); border: 1px solid rgba(234, 170, 8, 0.2); 
          padding: 0.8rem 1.4rem; border-radius: 8px; font-size: 0.85rem; color: #eee; 
          transition: all 0.3s ease;
        }
        .csat-pill:hover { border-color: #eaaa08; box-shadow: 0 0 20px rgba(234, 170, 8, 0.3); transform: translateY(-3px); }
        
        .csat-stars { color: #eaaa08; margin-right: 0.5rem; }
        .csat-author { color: #eaaa08; margin-left: 0.5rem; font-weight: bold; }
        
        @keyframes scrollLeft { 0% { transform: translate3d(0, 0, 0); } 100% { transform: translate3d(-50%, 0, 0); } }
        @keyframes scrollRight { 0% { transform: translate3d(-50%, 0, 0); } 100% { transform: translate3d(0, 0, 0); } }
      `}</style>
    </div>
  )
}

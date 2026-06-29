/* ─── STATS BAR ALIGNMENT ─── */
.stats-section-divider {
  width: 100%;
  padding: 80px 24px;
  background: var(--black);
  border-top: 1px solid var(--bdr);
  border-bottom: 1px solid var(--bdr);
}

.stats-grid {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: var(--max);
  margin: 0 auto;
  gap: 20px;
}

.stat-box {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

/* The Divider: Now explicitly styled to fit between flex items */
.sdv {
  width: 1px;
  height: 50px;
  background: var(--bdr);
  flex-shrink: 0; /* Ensures it doesn't get squashed */
}

/* Desktop: 4 columns visible */
@media (max-width: 768px) {
  .stats-grid { 
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    gap: 40px; 
  }
  .sdv { display: none; } /* Hide dividers on mobile */
}

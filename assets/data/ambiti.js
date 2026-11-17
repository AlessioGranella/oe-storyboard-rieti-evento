/* 15 ambiti dell'Osservatorio Sviluppo Lazio, indice OpenEconomics 0–100 (resto del Lazio, Roma esclusa = 50).
   Provincia di Rieti. Ordine dal più basso al più alto.
   [nome, valore, certo]  certo = true → valore dalla sceneggiatura v4 (Dashboard_Rieti.html, 9/11/2026);
                          certo = false → PROVVISORIO, da sostituire con la dashboard (non è sul Mac il 17/11).
   Vincoli rispettati: minimo energia 24,7 · massimo sicurezza 59,4 · dieci sotto 50, cinque sopra. */
window.AMBITI = [
  ['Energia e transizione ecologica', 24.7, true],
  ['Spopolamento e demografia', 30.0, false],
  ['Accesso ai servizi sanitari', 34.0, true],
  ['Rete scolastica e istruzione', 36.0, false],
  ['Turismo e destagionalizzazione', 38.0, false],
  ['Erosione e rischio idrogeologico', 40.0, false],
  ['Competenze e capitale umano', 41.0, false],
  ['Mobilità e trasporto pubblico', 43.1, true],
  ['Connettività digitale', 47.0, false],
  ['Infrastrutture produttive e logistica', 49.0, true],
  ['Valorizzazione patrimonio culturale', 51.0, false],
  ['Ricambio generazionale', 52.0, false],
  ['Governance e capacità istituzionale', 55.0, true],
  ['Qualità ambientale e delle acque', 57.0, false],
  ['Sicurezza del territorio', 59.4, true]
];

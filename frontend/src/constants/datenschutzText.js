// ============================================================
//  DATENSCHUTZERKLÄRUNG — TEXT ZUM BEARBEITEN
// ============================================================
//
//  In dieser Datei pflegen Sie den Text der Datenschutzerklärung.
//  Es gibt zwei Bereiche: einen für DEUTSCH und einen für ENGLISCH.
//  Bearbeiten Sie nur den Text INNERHALB der Anführungszeichen.
//
//  REGELN:
//  • Jeder Abschnitt hat eine Überschrift (heading) und einen
//    oder mehrere Absätze (paragraphs).
//  • Ein neuer Absatz = ein neuer Eintrag in der Liste, in
//    Anführungszeichen, mit Komma am Ende.
//  • Aufzählungszeichen (•) erzeugen saubere separate Zeilen.
// ============================================================


// ─────────────────────────────────────────────
//  DEUTSCH
// ─────────────────────────────────────────────
export const DATENSCHUTZ_DE = {
  title: 'Datenschutzerklärung',
  sections: [
    {
      heading: '1. Verantwortliche Stelle',
      paragraphs: [
        'Dieses Dashboard und das Meldesystem werden als wissenschaftliches Kooperationsprojekt betrieben. Gemeinsam Verantwortliche für die Datenverarbeitung sind:',
        '• Medizinische Universität Wien (Abteilung für Klinische Mikrobiologie, Währinger Gürtel 18-20, 1090 Wien, Österreich)',
        '• Hochschule Campus Wien (Favoritenstraße 226, 1100 Wien, Österreich)',
        'Inhaltlich und datenschutzrechtlich verantwortliche Ansprechperson ist:',
        'Kathrin Spettel',
        'E-Mail: kathrin.spettel@hcw.ac.at',
      ],
    },
    {
      heading: '2. Welche Daten werden verarbeitet?',
      paragraphs: [
        'Das Meldeformular richtet sich an medizinische Einrichtungen (Krankenhäuser, Labore, Pflegeheime, Reha-Zentren) mit labordiagnostisch gesichertem Nachweis von Candidozyma auris. Wir erfassen dabei bewusst keine direkt identifizierenden Daten der Patientinnen und Patienten wie Namen, Wohnadressen oder Sozialversicherungsnummern.',
        'Über das Formular werden ausschließlich folgende Daten erhoben:',
        '• Kontaktdaten der meldenden Stelle: E-Mail-Adresse für die Verifikation der Meldung und fachliche Rückfragen.',
        '• Basisdaten zum Fall: Alter (bzw. Altersgruppe) und Geschlecht.',
        '• Geografische und institutionelle Angaben: Bundesland, Ort/Stadt sowie optional der Name des behandelnden Krankenhauses bzw. der Einrichtung.',
        '• Epidemiologische Daten & Anamnese: Relevante Vorerkrankungen, Reiseanamnese, etwaige Spitalsaufenthalte im Ausland sowie ein möglicher Bezug zu anderen bekannten Fällen.',
        '• Klinische und therapeutische Daten: Art des Nachweises (Kolonisation oder manifeste Infektion), Immunstatus, durchgeführte systemische und topische Antimykotika-Therapien samt Details sowie ergänzende Freitext-Anmerkungen.',
        '• Mikrobiologische Labordaten: Entnahmestelle bzw. Isolierungsort, Datum der Probenisolierung sowie Resistenzwerte (MHK/MIC-Werte für Anidulafungin, Micafungin, Fluconazol, Caspofungin, Posaconazol, Voriconazol, 5-Flucytosin, Amphotericin B und Manogepix).',
        '• Spam- & Bot-Schutz (Cloudflare Turnstile): Vor dem Absenden wird ein Prüftoken generiert. Cloudflare prüft automatisiert im Hintergrund, ob die Eingabe menschlich ist. Dabei werden technische Verbindungs- und Gerätesignale verarbeitet. Die im Formular eingegebenen medizinischen Meldedaten werden nicht an Cloudflare übermittelt.',
        '• Server-Logdaten: Beim Aufruf der Website erfasst unser Server temporär technische Verbindungsdaten (IP-Adresse, Abrufzeitpunkt, aufgerufene Seite, Browsertyp).',
      ],
    },
    {
      heading: '3. Zweck und Rechtsgrundlage der Verarbeitung',
      paragraphs: [
        '• Freiwillige wissenschaftliche Surveillance & Ausbruchsprävention: In Österreich besteht für Candidozyma auris derzeit keine gesetzliche Meldepflicht nach dem Epidemiegesetz. Das Meldesystem dient der freiwilligen, epidemiologischen Erfassung und Resistenzbeobachtung durch medizinische Einrichtungen zum Schutz der öffentlichen Gesundheit vor multiresistenten Erregern. Die Verarbeitung erfolgt auf Basis wissenschaftlicher Forschungsaufgaben im öffentlichen Interesse sowie des Schutzes der öffentlichen Gesundheit.',
        '• Ablauf der Meldung, Qualitätssicherung & Bestätigung: Nach dem Absenden des Formulars wird der Datensatz per E-Mail an die zuständige Fachperson weitergeleitet und die meldende Person erhält eine automatisierte Eingangsbestätigung. Die E-Mail-Adresse wird verarbeitet, um den Fall fachlich zu prüfen, Unklarheiten aufzuklären und die wissenschaftliche Herkunft des Datensatzes dauerhaft nachvollziehbar zu halten.',
        '• Betriebssicherheit & Missbrauchsschutz: Die Server-Logs und Cloudflare Turnstile dienen der IT-Sicherheit, der Abwehr automatisierter Skripte und dem Schutz vor Denial-of-Service-Angriffen auf Basis unseres berechtigten Interesses an einer stabilen Infrastruktur.',
      ],
    },
    {
      heading: '4. Speicherdauer',
      paragraphs: [
        '• Zweistufiger Übernahmeprozess: Die über das Webformular übermittelten Daten werden nicht automatisch in die öffentliche Datenbank übernommen. Die Meldung wird zunächst per E-Mail an die inhaltlich verantwortliche Stelle weitergeleitet und dort einer fachlichen Validierung unterzogen.',
        '• Validierte Falldaten und E-Mail-Adresse: Nach erfolgreicher manueller Prüfung und Freigabe werden die Daten in das interne Registersystem übernommen. Die mikrobiologischen Befunde und die E-Mail-Adresse der meldenden Stelle werden im Rahmen der guten wissenschaftlichen Praxis dauerhaft aufbewahrt, um die wissenschaftliche Nachvollziehbarkeit, Dokumentation und Reproduzierbarkeit über Langzeitstudien hinweg zu sichern.',
        '• Nicht validierbare Meldungen: Meldungen, die sich bei der fachlichen Prüfung als fehlerhaft, unbegründet oder unvollständig erweisen und nicht verifiziert werden können, werden nach Abschluss der Prüfung gelöscht.',
        '• Server-Logdaten: Werden auf unserer Serverinfrastruktur rollierend nach wenigen Tagen automatisiert gelöscht.',
      ],
    },
    {
      heading: '5. Weitergabe von Daten',
      paragraphs: [
        '• Hosting: Die Plattform und die Datenbank werden auf Infrastruktur in der Europäischen Union betrieben. Externe Cloud-Speicherdienste haben keinen Zugriff auf die Rohdaten.',
        '• Veröffentlichung im öffentlichen Dashboard: Das Dashboard und die Schnittstellen stellen Daten ausschließlich in aggregierter, statistischer Form bereit. Die öffentlichen Abfragen liefern ausschließlich Zähldaten:',
        '  - Fallzahlen nach Bundesland',
        '  - Fallzahlen nach Isolationsort/Probenahmestelle',
        '  - Fallzahlen nach Kladenzugehörigkeit',
        '  - Fallzahlen nach Isolierungsjahr',
        '• Vertraulichkeit von Detaildaten: Spitalsnamen, Städte, genaue Probenahmedaten, Freitext-Anamnesen oder persönliche Kontaktdaten werden zu keinem Zeitpunkt öffentlich dargestellt oder über die Schnittstellen ausgegeben.',
        '• Keine behördliche Meldestelle: Dieses wissenschaftliche Register ersetzt keine behördlichen Meldewege. Eine automatisierte Weiterleitung der Falldaten an externe Behörden findet nicht statt.',
        '• Drittlandübermittlung (Cloudflare Turnstile): Zur Missbrauchserkennung werden Verbindungsdaten an Cloudflare (USA) übermittelt. Cloudflare ist unter dem EU-U.S. Data Privacy Framework zertifiziert. Es besteht ein entsprechender Vertrag zur Auftragsverarbeitung.',
      ],
    },
    {
      heading: '6. Ihre Rechte',
      paragraphs: [
        'Sie haben bezüglich Ihrer personenbezogenen Daten grundsätzlich das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung sowie Widerspruch gegen die Datenverarbeitung.',
        '• Rechte der meldenden Einrichtungen/Personen: Meldende Personen können jederzeit die Aktualisierung oder Löschung ihrer Kontaktdaten bzw. Korrekturen an gemeldeten Datensätzen verlangen.',
        '• Besonderer Hinweis zu den Falldaten: Da im System keine Namen, Wohnanschriften oder Sozialversicherungsnummern von Patientinnen und Patienten gespeichert werden, können die Einträge in der Datenbank im Regelfall keiner konkreten Person zugeordnet werden. Betroffenenrechte bezüglich eines konkreten Patientenfalls können daher nur ausgeübt werden, wenn zusätzliche Angaben (wie das genaue Behandlungsspital, das exakte Isolierungsdatum und das Alter) vorgelegt werden, die eine zweifelsfreie Identifizierung des Falls im internen Register ermöglichen.',
        '• Beschwerderecht bei der Aufsichtsbehörde: Sie haben das Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde: Österreichische Datenschutzbehörde (DSB), Barichgasse 40-42, 1030 Wien, E-Mail: dsb@dsb.gv.at.',
      ],
    },
    {
      heading: '7. Kontakt',
      paragraphs: [
        'Bei allen Fragen zum Datenschutz, zur Validierung, zur Korrektur oder zur Löschung von Meldungen wenden Sie sich bitte direkt an:',
        'Kathrin Spettel',
        'Hochschule Campus Wien / Kooperationsprojekt mit der MedUni Wien',
        'E-Mail: kathrin.spettel@hcw.ac.at',
      ],
    },
  ],
};


// ─────────────────────────────────────────────
//  ENGLISCH
// ─────────────────────────────────────────────
export const DATENSCHUTZ_EN = {
  title: 'Privacy Policy',
  sections: [
    {
      heading: '1. Responsible Entity',
      paragraphs: [
        'This dashboard and case reporting registry are operated as a joint scientific collaboration project. Joint controllers for data processing are:',
        '• Medical University of Vienna (Division of Clinical Microbiology, Währinger Gürtel 18-20, 1090 Vienna, Austria)',
        '• Hochschule Campus Wien (Favoritenstraße 226, 1100 Vienna, Austria)',
        'The responsible contact person for scientific and data protection matters is:',
        'Kathrin Spettel',
        'Email: kathrin.spettel@hcw.ac.at',
      ],
    },
    {
      heading: '2. What Data Is Processed?',
      paragraphs: [
        'The reporting form is intended for medical facilities (hospitals, laboratories, nursing homes, rehabilitation centers) with laboratory-confirmed detection of Candidozyma auris. We intentionally do not collect directly identifying patient information such as names, home addresses, or social security numbers.',
        'The form exclusively collects the following categories of data:',
        '• Contact details of the reporting party: Email address used for submission verification and technical clarifications.',
        '• Basic case demographics: Age (or age group) and gender.',
        '• Geographic and institutional details: Federal state, city, and optionally the name of the treating institution or hospital.',
        '• Epidemiological data & anamnesis: Relevant underlying conditions/medical history, travel history, hospitalization abroad, and potential epidemiological linkage to other known cases.',
        '• Clinical and therapeutic parameters: Type of detection (colonization vs. active infection), immune status, systemic and topical antifungal therapies including treatment details, and additional free-text notes.',
        '• Microbiological laboratory data: Specimen site/isolation site, date of isolation, and MIC values for antifungal agents (anidulafungin, micafungin, fluconazole, caspofungin, posaconazole, voriconazole, 5-flucytosine, amphotericin B, and manogepix).',
        '• Spam & Bot Protection (Cloudflare Turnstile): A verification token is generated prior to submission. Cloudflare evaluates technical device and connection signals in the background to verify human interaction. No medical case data entered into the form is transferred to Cloudflare.',
        '• Server Log Files: When accessing the website, our server temporarily logs technical connection metadata (device IP address, access timestamp, requested URL, browser user agent).',
      ],
    },
    {
      heading: '3. Purpose and Legal Basis',
      paragraphs: [
        '• Voluntary scientific surveillance & outbreak prevention: In Austria, Candidozyma auris is currently not subject to statutory mandatory reporting under the Epidemic Act. This registry serves the voluntary epidemiological surveillance and resistance monitoring by medical institutions to protect public health against multidrug-resistant pathogens. Processing is conducted on the basis of scientific research in the public interest and public health protection.',
        '• Reporting workflow, quality assurance & confirmation: Upon submission, the dataset is transmitted via email to the scientific lead, and an automated confirmation of receipt is sent to the reporting party. The email address is processed to review case validity, resolve methodological queries, and maintain the long-term scientific provenance of the record.',
        '• System security & abuse prevention: Server logs and Cloudflare Turnstile ensure IT security, protect against automated script abuse, and prevent denial-of-service attacks based on our legitimate interest in maintaining a stable and secure infrastructure.',
      ],
    },
    {
      heading: '4. Retention Period',
      paragraphs: [
        '• Two-step ingestion process: Data submitted through the web form is not automatically committed to the public database. Submissions are first transmitted via email to the scientific team for manual verification and quality review.',
        '• Validated case data and reporter email: Following manual verification and approval, records are imported into the internal registry. Microbiological findings and the reporter email address are retained permanently in accordance with good scientific practice to ensure data provenance, long-term scientific documentation, and study reproducibility.',
        '• Unverified submissions: Submissions that prove invalid, unsubstantiated, or incomplete during review and cannot be verified are deleted following the evaluation.',
        '• Server log files: Automatically deleted from our server infrastructure on a rolling basis after a few days.',
      ],
    },
    {
      heading: '5. Data Sharing',
      paragraphs: [
        '• Hosting: The web platform and database are operated on infrastructure within the European Union. External commercial cloud storage providers have no access to the raw data.',
        '• Publication on the public dashboard: The public dashboard and underlying APIs present data exclusively in aggregated, statistical form. Public queries strictly provide summary counts:',
        '  - Case counts by federal state',
        '  - Case counts by specimen site',
        '  - Case counts by clade',
        '  - Case counts by year of isolation',
        '• Confidentiality of granular data: Hospital names, cities, exact isolation dates, medical history free texts, and personal contact details are never published or exposed via public APIs.',
        '• No official reporting registry: This voluntary research registry does not replace official public health reporting channels. Automated forwarding of case data to government authorities does not take place.',
        '• International data transfers (Cloudflare Turnstile): Technical connection signals are processed by Cloudflare (USA) for bot detection. Cloudflare is certified under the EU-U.S. Data Privacy Framework, ensuring an adequate level of data protection. A data processing agreement is in place.',
      ],
    },
    {
      heading: '6. Your Rights',
      paragraphs: [
        'Under data protection law, you have the right to access, rectification, erasure, restriction of processing, and objection to processing regarding your personal data.',
        '• Rights of reporting entities: Reporting personnel may at any time request updates or deletion of their contact email or corrections to submitted records.',
        '• Specific notice on case data: Because the system stores no patient names, home addresses, or social security numbers, database entries cannot be directly linked to a specific person. Rights regarding a specific patient case can only be exercised if additional identifying details (such as the exact treating hospital, exact isolation date, and age) are provided that permit unambiguous identification of the record in our internal registry.',
        '• Right to lodge a complaint: You have the right to lodge a complaint with the competent supervisory authority: Österreichische Datenschutzbehörde (Austrian Data Protection Authority), Barichgasse 40-42, 1030 Vienna, Email: dsb@dsb.gv.at.',
      ],
    },
    {
      heading: '7. Contact',
      paragraphs: [
        'For all questions concerning data protection, verification, correction, or deletion of submissions, please contact:',
        'Kathrin Spettel',
        'Hochschule Campus Wien / Joint project with MedUni Vienna',
        'Email: kathrin.spettel@hcw.ac.at',
      ],
    },
  ],
};
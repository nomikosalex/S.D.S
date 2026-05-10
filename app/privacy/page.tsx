"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const LAST_UPDATED = "29 Απριλίου 2026 / April 29, 2026";
const EMAIL = "santorinidigitalsolutions@gmail.com";

export default function PrivacyPage() {
  const { lang } = useLanguage();
  const isEl = lang === "el";

  return (
    <main className="bg-[#060b14] min-h-screen px-6 pt-36 pb-24">
      <div className="max-w-3xl mx-auto">

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] mb-12 transition-colors duration-200"
          style={{ color: "#00d4ff" }}
        >
          ← {isEl ? "Επιστροφή" : "Back"}
        </Link>

        <h1 className="font-outfit font-bold text-white text-4xl mb-3">
          {isEl ? "Πολιτική Απορρήτου" : "Privacy Policy"}
        </h1>
        <p className="text-slate-500 text-sm mb-14">
          {isEl ? "Τελευταία ενημέρωση:" : "Last updated:"} {LAST_UPDATED}
        </p>

        <div className="prose prose-invert prose-sm max-w-none space-y-10 text-slate-400 leading-relaxed">

          {/* 1 */}
          <section>
            <h2 className="font-outfit font-semibold text-white text-xl mb-3">
              {isEl ? "1. Υπεύθυνος Επεξεργασίας" : "1. Data Controller"}
            </h2>
            {isEl ? (
              <p>
                Υπεύθυνος επεξεργασίας των προσωπικών σας δεδομένων είναι η <strong className="text-white">Santorini Digital Solutions (S.D.S)</strong>, με έδρα τη Σαντορίνη, Ελλάδα. Για οποιοδήποτε ζήτημα σχετικά με την επεξεργασία των δεδομένων σας, μπορείτε να επικοινωνήσετε μαζί μας στο: <a href={`mailto:${EMAIL}`} className="text-[#00d4ff] hover:underline">{EMAIL}</a>.
              </p>
            ) : (
              <p>
                The data controller for your personal data is <strong className="text-white">Santorini Digital Solutions (S.D.S)</strong>, based in Santorini, Greece. For any matter relating to the processing of your data, contact us at: <a href={`mailto:${EMAIL}`} className="text-[#00d4ff] hover:underline">{EMAIL}</a>.
              </p>
            )}
          </section>

          {/* 2 */}
          <section>
            <h2 className="font-outfit font-semibold text-white text-xl mb-3">
              {isEl ? "2. Ποια Δεδομένα Συλλέγουμε" : "2. What Data We Collect"}
            </h2>
            {isEl ? (
              <>
                <p className="mb-3">Κατά την επίσκεψή σας στον ιστότοπό μας ή την επικοινωνία μαζί μας, ενδέχεται να συλλέξουμε:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong className="text-white">Στοιχεία επικοινωνίας</strong>: όνομα, διεύθυνση email, αριθμός τηλεφώνου — μόνο όταν επικοινωνείτε εσείς μαζί μας μέσω email ή WhatsApp.</li>
                  <li><strong className="text-white">Δεδομένα χρήσης</strong>: πληροφορίες ανώνυμης περιήγησης (τύπος συσκευής, browser, χώρα) μέσω ανωνυμοποιημένης ανάλυσης χωρίς cookies τρίτων.</li>
                  <li><strong className="text-white">Επικοινωνία</strong>: περιεχόμενο μηνυμάτων που μας αποστέλλετε μέσω email ή WhatsApp.</li>
                </ul>
              </>
            ) : (
              <>
                <p className="mb-3">When you visit our website or contact us, we may collect:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong className="text-white">Contact details</strong>: name, email address, phone number — only when you initiate contact via email or WhatsApp.</li>
                  <li><strong className="text-white">Usage data</strong>: anonymous browsing information (device type, browser, country) via anonymised analytics without third-party cookies.</li>
                  <li><strong className="text-white">Communications</strong>: content of messages you send us via email or WhatsApp.</li>
                </ul>
              </>
            )}
          </section>

          {/* 3 */}
          <section>
            <h2 className="font-outfit font-semibold text-white text-xl mb-3">
              {isEl ? "3. Σκοπός & Νομική Βάση Επεξεργασίας" : "3. Purpose & Legal Basis of Processing"}
            </h2>
            {isEl ? (
              <div className="space-y-4">
                <p>Επεξεργαζόμαστε τα δεδομένα σας βάσει των ακόλουθων νομικών θεμελίων (Άρθρο 6 ΓΚΠΔ):</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong className="text-white">Έννομο συμφέρον (Άρθρο 6 παρ. 1 στ')</strong>: απάντηση σε επικοινωνία και διαχείριση επαγγελματικών σχέσεων.</li>
                  <li><strong className="text-white">Εκτέλεση σύμβασης (Άρθρο 6 παρ. 1 β')</strong>: παροχή των υπηρεσιών που έχετε ζητήσει.</li>
                  <li><strong className="text-white">Συναίνεση (Άρθρο 6 παρ. 1 α')</strong>: για ενημερωτικές επικοινωνίες εάν το έχετε αποδεχθεί ρητά.</li>
                </ul>
              </div>
            ) : (
              <div className="space-y-4">
                <p>We process your data on the following legal bases (Article 6 GDPR):</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong className="text-white">Legitimate interest (Art. 6(1)(f))</strong>: responding to enquiries and managing business relationships.</li>
                  <li><strong className="text-white">Contract performance (Art. 6(1)(b))</strong>: delivering the services you requested.</li>
                  <li><strong className="text-white">Consent (Art. 6(1)(a))</strong>: for marketing communications where you have given explicit consent.</li>
                </ul>
              </div>
            )}
          </section>

          {/* 4 */}
          <section>
            <h2 className="font-outfit font-semibold text-white text-xl mb-3">
              {isEl ? "4. Διάρκεια Διατήρησης" : "4. Retention Period"}
            </h2>
            {isEl ? (
              <p>
                Διατηρούμε τα δεδομένα σας μόνο για όσο χρόνο είναι απαραίτητο για τους σκοπούς για τους οποίους συλλέχθηκαν. Δεδομένα επικοινωνίας διατηρούνται για έως 3 έτη από την τελευταία επαφή. Δεδομένα σχετικά με συμβατικές σχέσεις διατηρούνται για 5 έτη σύμφωνα με την ελληνική φορολογική νομοθεσία.
              </p>
            ) : (
              <p>
                We retain your data only for as long as necessary for the purposes for which it was collected. Contact data is retained for up to 3 years from the last interaction. Data relating to contractual relationships is retained for 5 years in accordance with Greek tax law.
              </p>
            )}
          </section>

          {/* 5 */}
          <section>
            <h2 className="font-outfit font-semibold text-white text-xl mb-3">
              {isEl ? "5. Τα Δικαιώματά Σας" : "5. Your Rights"}
            </h2>
            {isEl ? (
              <>
                <p className="mb-3">Σύμφωνα με τον ΓΚΠΔ και τον Ν. 4624/2019, έχετε τα ακόλουθα δικαιώματα:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong className="text-white">Πρόσβαση (Άρθρο 15)</strong>: να γνωρίζετε ποια δεδομένα σας τηρούμε.</li>
                  <li><strong className="text-white">Διόρθωση (Άρθρο 16)</strong>: να διορθώσετε ανακριβή δεδομένα.</li>
                  <li><strong className="text-white">Διαγραφή (Άρθρο 17)</strong>: να ζητήσετε τη διαγραφή των δεδομένων σας.</li>
                  <li><strong className="text-white">Περιορισμός (Άρθρο 18)</strong>: να περιορίσετε την επεξεργασία υπό ορισμένες προϋποθέσεις.</li>
                  <li><strong className="text-white">Φορητότητα (Άρθρο 20)</strong>: να λάβετε τα δεδομένα σας σε δομημένη μορφή.</li>
                  <li><strong className="text-white">Εναντίωση (Άρθρο 21)</strong>: να αντιταχθείτε στην επεξεργασία για σκοπούς έννομου συμφέροντος.</li>
                </ul>
                <p className="mt-4">Για να ασκήσετε οποιοδήποτε δικαίωμα, επικοινωνήστε μαζί μας στο <a href={`mailto:${EMAIL}`} className="text-[#00d4ff] hover:underline">{EMAIL}</a>.</p>
              </>
            ) : (
              <>
                <p className="mb-3">Under the GDPR and Greek Law 4624/2019, you have the following rights:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong className="text-white">Access (Art. 15)</strong>: to know what data we hold about you.</li>
                  <li><strong className="text-white">Rectification (Art. 16)</strong>: to correct inaccurate data.</li>
                  <li><strong className="text-white">Erasure (Art. 17)</strong>: to request deletion of your data.</li>
                  <li><strong className="text-white">Restriction (Art. 18)</strong>: to restrict processing under certain conditions.</li>
                  <li><strong className="text-white">Portability (Art. 20)</strong>: to receive your data in a structured format.</li>
                  <li><strong className="text-white">Objection (Art. 21)</strong>: to object to processing based on legitimate interest.</li>
                </ul>
                <p className="mt-4">To exercise any right, contact us at <a href={`mailto:${EMAIL}`} className="text-[#00d4ff] hover:underline">{EMAIL}</a>.</p>
              </>
            )}
          </section>

          {/* 6 */}
          <section>
            <h2 className="font-outfit font-semibold text-white text-xl mb-3">
              {isEl ? "6. Cookies" : "6. Cookies"}
            </h2>
            {isEl ? (
              <p>
                Ο ιστότοπός μας χρησιμοποιεί μόνο τεχνικά αναγκαία cookies για τη λειτουργία του (π.χ. προτιμήσεις γλώσσας). Δεν χρησιμοποιούμε cookies παρακολούθησης ή διαφήμισης τρίτων.
              </p>
            ) : (
              <p>
                Our website uses only technically necessary cookies for its operation (e.g. language preferences). We do not use third-party tracking or advertising cookies.
              </p>
            )}
          </section>

          {/* 7 */}
          <section>
            <h2 className="font-outfit font-semibold text-white text-xl mb-3">
              {isEl ? "7. Κοινοποίηση Δεδομένων" : "7. Data Sharing"}
            </h2>
            {isEl ? (
              <p>
                Δεν πωλούμε ούτε ενοικιάζουμε τα προσωπικά σας δεδομένα σε τρίτους. Ενδέχεται να κοινοποιήσουμε δεδομένα μόνο σε παρόχους υπηρεσιών που ενεργούν ως εκτελούντες επεξεργασία για λογαριασμό μας (π.χ. φιλοξενία ιστοσελίδας), υπό κατάλληλες συμβατικές εγγυήσεις ΓΚΠΔ.
              </p>
            ) : (
              <p>
                We do not sell or rent your personal data to third parties. We may share data only with service providers acting as data processors on our behalf (e.g. web hosting), under appropriate GDPR contractual safeguards.
              </p>
            )}
          </section>

          {/* 8 */}
          <section>
            <h2 className="font-outfit font-semibold text-white text-xl mb-3">
              {isEl ? "8. Αρχή Εποπτείας" : "8. Supervisory Authority"}
            </h2>
            {isEl ? (
              <p>
                Εάν θεωρείτε ότι η επεξεργασία των δεδομένων σας παραβιάζει τον ΓΚΠΔ ή την ελληνική νομοθεσία, έχετε δικαίωμα να υποβάλετε καταγγελία στην <strong className="text-white">Αρχή Προστασίας Δεδομένων Προσωπικού Χαρακτήρα (ΑΠΔΠΧ)</strong>: <a href="https://www.dpa.gr" target="_blank" rel="noopener noreferrer" className="text-[#00d4ff] hover:underline">www.dpa.gr</a>.
              </p>
            ) : (
              <p>
                If you believe that the processing of your data violates the GDPR or Greek law, you have the right to lodge a complaint with the <strong className="text-white">Hellenic Data Protection Authority (HDPA)</strong>: <a href="https://www.dpa.gr" target="_blank" rel="noopener noreferrer" className="text-[#00d4ff] hover:underline">www.dpa.gr</a>.
              </p>
            )}
          </section>

          {/* 9 */}
          <section>
            <h2 className="font-outfit font-semibold text-white text-xl mb-3">
              {isEl ? "9. Αλλαγές στην Πολιτική" : "9. Changes to This Policy"}
            </h2>
            {isEl ? (
              <p>
                Διατηρούμε το δικαίωμα να ενημερώνουμε την παρούσα Πολιτική Απορρήτου ανά πάσα στιγμή. Η ημερομηνία τελευταίας ενημέρωσης αναγράφεται πάντα στην κορυφή αυτής της σελίδας.
              </p>
            ) : (
              <p>
                We reserve the right to update this Privacy Policy at any time. The date of the latest revision is always shown at the top of this page.
              </p>
            )}
          </section>

          {/* 10 */}
          <section>
            <h2 className="font-outfit font-semibold text-white text-xl mb-3">
              {isEl ? "10. Επικοινωνία" : "10. Contact"}
            </h2>
            {isEl ? (
              <p>
                Για οποιοδήποτε ερώτημα σχετικά με αυτή την Πολιτική Απορρήτου ή για την άσκηση των δικαιωμάτων σας, επικοινωνήστε μαζί μας στο: <a href={`mailto:${EMAIL}`} className="text-[#00d4ff] hover:underline">{EMAIL}</a>
              </p>
            ) : (
              <p>
                For any questions about this Privacy Policy or to exercise your rights, contact us at: <a href={`mailto:${EMAIL}`} className="text-[#00d4ff] hover:underline">{EMAIL}</a>
              </p>
            )}
          </section>

        </div>
      </div>
    </main>
  );
}

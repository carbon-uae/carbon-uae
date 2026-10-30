import styles from "./Process.module.css";

const steps = [
  {
    title: "Inquiry & Quotation",
    description: "Tell us what you need, where it will be used and when you need it. We’ll recommend the right route and share a clear quotation.",
  },
  {
    title: "Design & Sample Approval",
    description: "We align artwork, materials and finishing details, then move forward once your sample and specifications are approved.",
  },
  {
    title: "Printing & Production",
    description: "Our production team turns the approved direction into consistent, high-quality print using modern machinery.",
  },
  {
    title: "Delivery",
    description: "Finished work is checked, packed and delivered with the timing and care your project deserves.",
  },
  {
    title: "Customer Feedback",
    description: "We stay close after delivery, learn from the experience and keep your next order even smoother.",
  },
];

export default function Process() {
  return (
    <section id="process" className={`${styles.process} section-shell`} aria-labelledby="process-title">
      <div className="container">
        <div className={styles.heading}>
          <h2 id="process-title" className="section-title">
            From brief to <em>beautifully finished.</em>
          </h2>
        </div>

        <ol className={styles.timeline}>
          {steps.map((step) => (
            <li key={step.title} className={styles.step}>
              <div className={styles.marker} aria-hidden="true" />
              <div className={styles.stepBody}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

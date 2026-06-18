import InquiryForm from './InquiryForm';
import styles from './inquire.module.css';
import { Suspense } from 'react';

export const metadata = {
  title: 'Inquire Now | Alexan Tours',
  description: 'Fill out your details and trip preferences to submit an inquiry for booking.',
};

export default function InquirePage() {
  return (
    <main className={`container section ${styles.page}`}>
      <div className={styles.heading}>
        <p className={styles.label}>Inquire Now</p>
        <h1 className={styles.title}>Start your booking inquiry</h1>
        <p className={styles.subtitle}>
          Tell us which trip you are interested in, share your travel details, and ask any booking questions. We will prepare your inquiry and open your email client so you can send it directly.
        </p>
      </div>

      <Suspense fallback={<div>Loading form…</div>}>
        <InquiryForm />
      </Suspense>
    </main>
  );
}

"use client";

import { useEffect, useState, FormEvent } from 'react';
import { useSearchParams } from 'next/navigation';
import styles from './inquire.module.css';

export default function InquiryForm() {
  const searchParams = useSearchParams();
  const initialTrip = searchParams?.get('trip') ?? '';
  const initialDestination = searchParams?.get('destination') ?? '';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [trip, setTrip] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    if (initialTrip) {
      setTrip(initialTrip);
    } else if (initialDestination) {
      setTrip(initialDestination);
    }
  }, [initialTrip, initialDestination]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !trip.trim() || !message.trim()) {
      setError('Please fill in your name, email, trip interest, and message.');
      return;
    }

    const recipient = 'alexantours@gmail.com';
    const subject = encodeURIComponent(`Inquiry from Alexan Tours website: ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nTrip Interested In: ${trip}\n\nAdditional queries:\n${message}`
    );

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setPopupOpen(true);
    setError('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formRow}>
        <label className={styles.formGroup}>
          <span>Your Name</span>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className={styles.formInput}
            placeholder="John Doe"
            required
          />
        </label>

        <label className={styles.formGroup}>
          <span>Email Address</span>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={styles.formInput}
            placeholder="you@example.com"
            required
          />
        </label>
      </div>

      <div className={styles.formRow}>
        <label className={styles.formGroup}>
          <span>Phone Number</span>
          <input
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className={styles.formInput}
            placeholder="+254 700 000 000"
          />
        </label>

        <label className={styles.formGroup}>
          <span>Trip / Package Interested In</span>
          <input
            type="text"
            value={trip}
            onChange={(event) => setTrip(event.target.value)}
            className={styles.formInput}
            placeholder="e.g. Majestic Shores of Zanzibar"
            required
          />
        </label>
      </div>

      <label className={styles.formGroup}>
        <span>Additional Queries</span>
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className={styles.formTextarea}
          placeholder="Write your booking questions, preferred travel dates, or special requests."
          required
        />
      </label>

      {error && <p className={styles.errorText}>{error}</p>}
      <button type="submit" className={styles.submitButton}>
        Send Inquiry
      </button>

      {popupOpen && (
        <div className={styles.popupOverlay} onClick={() => setPopupOpen(false)}>
          <div className={styles.popupDialog} role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
            <h2>Inquiry Sent</h2>
            <p>Your details have been prepared and will be sent to <strong>alexantours@gmail.com</strong>.</p>
            <p>We will reach out as soon as possible to help you book your trip.</p>
            <button type="button" className={styles.closeButton} onClick={() => setPopupOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </form>
  );
}

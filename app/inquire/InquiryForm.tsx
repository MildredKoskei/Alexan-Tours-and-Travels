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
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [countryOrigin, setCountryOrigin] = useState('');
  const [duration, setDuration] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [childAges, setChildAges] = useState({
    '0-2': false,
    '3-12': false,
    '13-18': false,
  });
  const [safariType, setSafariType] = useState('Bush Only');
  const [requestQuote, setRequestQuote] = useState(false);
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

    const fullName = `${firstName} ${lastName}`.trim();

    if (!fullName || !email.trim() || !trip.trim() || !message.trim()) {
      setError('Please fill in your name, email, trip interest, and message.');
      return;
    }

    const recipient = 'alexantours@gmail.com';
    const subject = encodeURIComponent(
      `Inquiry from Alexan Tours website: ${fullName}${requestQuote ? ' (Quote Requested)' : ''}`
    );

    const bodyText = `Name: ${fullName}\nFirst Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPhone: ${phone}\nCountry of Origin: ${countryOrigin}\nTrip Interested In: ${trip}\nDuration (days): ${duration}\nTravel Start: ${startDate}\nTravel End: ${endDate}\nAdults: ${adults}\nChildren: ${children}\nChild Age Ranges: ${Object.entries(childAges).filter(([k,v])=>v).map(([k])=>k).join(', ') || 'N/A'}\nSafari Type: ${safariType}\nRequest Quote: ${requestQuote ? 'Yes' : 'No'}\n\nAdditional queries:\n${message}`;

    const body = encodeURIComponent(bodyText);

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setPopupOpen(true);
    setError('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formRow}>
        <label className={styles.formGroup}>
          <span>First Name</span>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={styles.formInput}
            placeholder="First Name"
            required
          />
        </label>

        <label className={styles.formGroup}>
          <span>Last Name</span>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={styles.formInput}
            placeholder="Last Name"
            required
          />
        </label>
      </div>

      <div className={styles.formRow}>
        <label className={styles.formGroup}>
          <span>Country of Origin</span>
          <input
            type="text"
            value={countryOrigin}
            onChange={(e) => setCountryOrigin(e.target.value)}
            className={styles.formInput}
            placeholder="e.g. Kenya"
          />
        </label>

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
      </div>
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

        <label className={styles.formGroup}>
          <span>Duration of Tours (no. of days)</span>
          <input
            type="number"
            min={1}
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className={styles.formInput}
            placeholder="e.g. 7"
          />
        </label>
      </div>

      <div className={styles.formRow}>
        <label className={styles.formGroup}>
          <span>Travel Start Date</span>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className={styles.formInput}
          />
        </label>

        <label className={styles.formGroup}>
          <span>Travel End Date</span>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className={styles.formInput}
          />
        </label>
      </div>

      <div className={styles.formRow}>
        <label className={styles.formGroup}>
          <span>No. of Adults</span>
          <input
            type="number"
            min={1}
            value={adults}
            onChange={(e) => setAdults(Number(e.target.value))}
            className={styles.formInput}
          />
        </label>

        <label className={styles.formGroup}>
          <span>No. of Children (0 if none)</span>
          <input
            type="number"
            min={0}
            value={children}
            onChange={(e) => setChildren(Number(e.target.value))}
            className={styles.formInput}
          />
        </label>
      </div>

      <div className={styles.formRow}>
        <fieldset style={{border: 'none', padding: 0}}>
          <legend>Children Age Ranges (check all that apply)</legend>
          <label style={{display: 'inline-flex', gap: 8, alignItems: 'center', marginRight: 12}}>
            <input type="checkbox" checked={childAges['0-2']} onChange={() => setChildAges(prev=>({...prev, '0-2': !prev['0-2']}))} /> 0-2 years
          </label>
          <label style={{display: 'inline-flex', gap: 8, alignItems: 'center', marginRight: 12}}>
            <input type="checkbox" checked={childAges['3-12']} onChange={() => setChildAges(prev=>({...prev, '3-12': !prev['3-12']}))} /> 3-12 years
          </label>
          <label style={{display: 'inline-flex', gap: 8, alignItems: 'center'}}>
            <input type="checkbox" checked={childAges['13-18']} onChange={() => setChildAges(prev=>({...prev, '13-18': !prev['13-18']}))} /> 13-18 years
          </label>
        </fieldset>
      </div>

      <div className={styles.formRow}>
        <fieldset style={{border: 'none', padding: 0}}>
          <legend>Type of Safari</legend>
          <label style={{display: 'inline-flex', gap: 8, alignItems: 'center', marginRight: 12}}>
            <input type="radio" name="safariType" checked={safariType==='Bush Only'} onChange={()=>setSafariType('Bush Only')} /> Bush Only
          </label>
          <label style={{display: 'inline-flex', gap: 8, alignItems: 'center', marginRight: 12}}>
            <input type="radio" name="safariType" checked={safariType==='Bush and Beach'} onChange={()=>setSafariType('Bush and Beach')} /> Bush and Beach
          </label>
          <label style={{display: 'inline-flex', gap: 8, alignItems: 'center'}}>
            <input type="radio" name="safariType" checked={safariType==='Beach Only'} onChange={()=>setSafariType('Beach Only')} /> Beach Only
          </label>
        </fieldset>
      </div>

      <label style={{display: 'flex', gap: 12, alignItems: 'center'}} className={styles.formGroup}>
        <input type="checkbox" checked={requestQuote} onChange={()=>setRequestQuote(prev=>!prev)} />
        <span>Request a Quote</span>
      </label>

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

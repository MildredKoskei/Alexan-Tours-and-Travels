"use client";

import { Map, Building2, FileCheck, Umbrella, Presentation } from 'lucide-react';
import styles from './Services.module.css';

const services = [
  {
    title: "Safari Planning",
    desc: "Experience the wild with our expertly coordinated and guided safaris across Africa's premier reserves.",
    icon: <Map size={36} />
  },
  {
    title: "Hotel Booking",
    desc: "Exclusive reservations at luxury resorts and hotels to ensure comfort throughout your journey.",
    icon: <Building2 size={36} />
  },
  {
    title: "Visa Processing",
    desc: "Seamless and stress-free visa planning and processing for all your international travels.",
    icon: <FileCheck size={36} />
  },
  {
    title: "Beach Vacations",
    desc: "Curated beach getaways in pristine coastal destinations for ultimate relaxation.",
    icon: <Umbrella size={36} />
  },
  {
    title: "Event Management",
    desc: "Professional conferencing and event management services tailored to your corporate needs.",
    icon: <Presentation size={36} />
  }
];

export default function Services() {
  return (
    <section id="services" className="section container">
      <h2 className="section-title">Our <span className="text-gradient">Services</span></h2>
      <div className={styles.servicesGrid}>
        {services.map((srv, index) => (
          <div key={index} className={`glass hover-scale ${styles.serviceCard}`}>
            <div className={styles.iconWrapper}>
              {srv.icon}
            </div>
            <div>
              <h3 className={styles.serviceTitle}>{srv.title}</h3>
              <p className={styles.serviceDesc}>{srv.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

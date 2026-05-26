"use client";

import styles from './Blog.module.css';

const posts = [
  {
    title: 'Enjoy the Adventures of Africa',
    excerpt: 'Discover why Africa is the ultimate destination for wildlife, culture, and luxury travel.',
    link: '#'
  },
  {
    title: '10 Reasons Why Everyone Should Go On A Cruise',
    excerpt: 'Find out how cruising makes your holiday effortless, memorable and safe.',
    link: '#'
  },
  {
    title: 'New Park Entry Fees: What You Need to Know',
    excerpt: 'Stay ahead of travel changes with the latest updates on East African park fees.',
    link: '#'
  }
];

export default function Blog() {
  return (
    <section id="blog" className="section container">
      <div className={styles.head}>
        <div>
          <p className={styles.label}>Magazine & News</p>
          <h2 className="section-title">
            Latest <span className="text-gradient">Travel Stories</span>
          </h2>
        </div>
      </div>

      <div className={styles.grid}>
        {posts.map((post, index) => (
          <article key={index} className={`glass ${styles.card}`}>
            <div className={styles.cardBody}>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </div>
            <a href={post.link} className="btn btn-outline">
              Read More
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

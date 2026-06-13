import { Link } from 'react-router-dom';
import Countdown from '../components/Countdown';
import { useEffect, useState } from 'react';

function Home() {
  const [scrollElements, setScrollElements] = useState<HTMLElement[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      scrollElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;

        if (elementTop < window.innerHeight && elementBottom > 0) {
          element.classList.add('visible');
        }
      });
    };

    const elements = document.querySelectorAll('.scroll-fade');
    setScrollElements(Array.from(elements) as HTMLElement[]);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollElements]);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <p className="couple-names">Janith & Nimali</p>
          <h1>Together Forever</h1>
          <div className="gold-line"></div>
          <p className="wedding-date">25 DECEMBER 2026</p>
          <p className="venue-info">Grand Ballroom Hotel, Colombo</p>

          <Countdown />

          <Link to="/rsvp" className="btn-primary-gold">
            RSVP NOW
          </Link>
        </div>
      </section>

      {/* Invitation Message */}
      <section className="invitation-section">
        <div className="invitation-content scroll-fade">
          <h2>You Are Invited</h2>
          <div className="gold-line"></div>
          <p className="invitation-message">
            With hearts full of joy, we invite you to celebrate the union of our lives.
            Join us as we exchange vows and create memories that will last a lifetime.
            Your presence and blessings mean the world to us.
          </p>
        </div>
      </section>

      {/* Couple Story */}
      <section className="couple-story">
        <h2 className="section-title scroll-fade">Our Story</h2>

        <div className="story-grid">
          <div className="story-item scroll-fade">
            <div className="story-image-card">
              <img
                src="/images/gallery-1.jpg"
                alt="Our journey began"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://via.placeholder.com/350x300?text=Our+Journey';
                }}
              />
            </div>
            <p className="story-text">
              Our journey began on a beautiful spring day when our eyes first met. It was love
              at first sight, a moment we knew would change our lives forever.
            </p>
          </div>

          <div className="story-item scroll-fade">
            <div className="story-image-card">
              <img
                src="/images/gallery-2.jpg"
                alt="Growing together"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://via.placeholder.com/350x300?text=Growing+Together';
                }}
              />
            </div>
            <p className="story-text">
              Through every season and season, we've grown stronger together. Every laugh, every
              tear, every moment has brought us closer to this beautiful chapter.
            </p>
          </div>

          <div className="story-item scroll-fade">
            <div className="story-image-card">
              <img
                src="/images/gallery-3.jpg"
                alt="And now, forever"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://via.placeholder.com/350x300?text=Forever+Begins';
                }}
              />
            </div>
            <p className="story-text">
              Today, we take the next step in our love story. With you by our side, we're ready
              to write the most beautiful chapters of our lives together.
            </p>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="events-section">
        <h2 className="section-title scroll-fade">Wedding Events</h2>

        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="event-card scroll-fade">
            <h3>Wedding Ceremony</h3>
            <div className="gold-line" style={{ margin: '15px auto' }}></div>
            <p className="event-time">10:00 AM</p>
            <p className="event-venue">St. Mary's Church, Colombo</p>
            <p className="event-description">
              Join us for a beautiful and intimate ceremony as we exchange our vows. We look
              forward to sharing this sacred moment with our loved ones.
            </p>
          </div>

          <div className="event-card scroll-fade">
            <h3>Reception & Dinner</h3>
            <div className="gold-line" style={{ margin: '15px auto' }}></div>
            <p className="event-time">6:00 PM</p>
            <p className="event-venue">Grand Ballroom Hotel, Colombo</p>
            <p className="event-description">
              Celebrate with us as we share an elegant dinner, heartfelt toasts, and joyful
              dancing. An evening filled with love, laughter, and beautiful moments.
            </p>
          </div>
        </div>
      </section>

      {/* Countdown Timer */}
      <section className="countdown-section">
        <h2 className="section-title scroll-fade">Time Until Our Big Day</h2>
        <Countdown />
      </section>

      {/* Venue Section */}
      <section className="venue-section">
        <h2 className="section-title scroll-fade">Our Venue</h2>
        <p
          style={{
            textAlign: 'center',
            marginBottom: '40px',
            color: 'var(--muted)',
            fontSize: '16px',
          }}
          className="scroll-fade"
        >
          Grand Ballroom Hotel, Colombo, Sri Lanka
        </p>
        <div className="map-container scroll-fade">
          <iframe
            title="Wedding Venue"
            src="https://www.google.com/maps?q=Colombo,Sri%20Lanka&output=embed"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="rsvp-section">
        <div className="rsvp-form-card scroll-fade">
          <h2>Confirm Your Attendance</h2>
          <div className="gold-line"></div>

          <form>
            <div className="form-group">
              <label className="form-label">Full Name *</label>
              <input type="text" className="form-input" required />
            </div>

            <div className="form-group">
              <label className="form-label">Email Address *</label>
              <input type="email" className="form-input" required />
            </div>

            <div className="form-group">
              <label className="form-label">Will you attend? *</label>
              <select className="form-select" required>
                <option value="">Please select</option>
                <option value="yes">Yes, I will attend</option>
                <option value="no">Sorry, I cannot attend</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Number of Guests</label>
              <input type="number" className="form-input" min="1" defaultValue="1" />
            </div>

            <div className="form-group">
              <label className="form-label">Dietary Restrictions</label>
              <input type="text" className="form-input" placeholder="None, Vegetarian, Vegan, etc." />
            </div>

            <div className="form-group">
              <label className="form-label">Message & Wishes</label>
              <textarea className="form-textarea" placeholder="Share your wishes for us..."></textarea>
            </div>

            <Link to="/rsvp" className="btn-submit" style={{ textDecoration: 'none' }}>
              SUBMIT RSVP
            </Link>
          </form>
        </div>
      </section>
    </>
  );
}

export default Home;

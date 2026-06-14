import { useNavigate } from 'react-router-dom';
import Countdown from '../components/Countdown';
import { useEffect, useState } from 'react';

function Home() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attendance: '',
    guests: '1',
    dietary: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('RSVP Data:', formData);
    navigate('/thank-you');
  };

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-fade');
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;

        if (elementTop < window.innerHeight && elementBottom > 0) {
          element.classList.add('visible');
        }
      });
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

          <a href="#rsvp-section" className="btn-primary-gold">
            RSVP NOW
          </a>
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

      {/* Gallery Section */}
      <section style={{ padding: '80px 20px', backgroundColor: 'var(--white)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
          <h2 className="section-title scroll-fade">Our Gallery</h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px',
              marginTop: '50px',
            }}
          >
            {[1, 2, 3, 4, 5, 6].map((image) => (
              <div
                key={image}
                style={{
                  height: '300px',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                  border: '2px solid rgba(201, 164, 76, 0.2)',
                  transition: 'transform 0.3s ease, border-color 0.3s ease',
                  cursor: 'pointer',
                }}
                className="scroll-fade"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-5px)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201, 164, 76, 0.2)';
                }}
              >
                <img
                  src={`/images/gallery-${image}.jpg`}
                  alt={`Gallery ${image}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                  onError={(e) => {
                    e.currentTarget.src = `https://via.placeholder.com/300x300?text=Photo+${image}`;
                  }}
                />
              </div>
            ))}
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
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        <div
          style={{
            maxWidth: '800px',
            margin: '60px auto 0',
            padding: '0 20px',
            textAlign: 'center',
          }}
          className="scroll-fade"
        >
          <h3 style={{ marginBottom: '15px', fontSize: '24px' }}>Venue Details</h3>
          <div className="gold-line" style={{ margin: '15px auto' }}></div>
          <p style={{ color: 'var(--muted)', lineHeight: '1.8', fontSize: '15px' }}>
            Grand Ballroom Hotel is a luxury venue in the heart of Colombo, featuring elegant
            architecture and world-class hospitality. Easy parking available for all guests.
          </p>
          <p style={{ color: 'var(--muted)', marginTop: '15px', fontSize: '14px' }}>
            <strong>Address:</strong> Grand Ballroom Hotel, Colombo, Sri Lanka
          </p>
        </div>
      </section>

      {/* RSVP Section */}
      <section id="rsvp-section" className="rsvp-section">
        <div className="rsvp-form-card scroll-fade">
          <h2>Confirm Your Attendance</h2>
          <div className="gold-line"></div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Full Name *</label>
              <input
                type="text"
                name="name"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email Address *</label>
              <input
                type="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Will you attend? *</label>
              <select
                name="attendance"
                className="form-select"
                value={formData.attendance}
                onChange={handleChange}
                required
              >
                <option value="">Please select</option>
                <option value="yes">Yes, I will attend</option>
                <option value="no">Sorry, I cannot attend</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Number of Guests</label>
              <input
                type="number"
                name="guests"
                className="form-input"
                value={formData.guests}
                onChange={handleChange}
                min="1"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Dietary Restrictions</label>
              <input
                type="text"
                name="dietary"
                className="form-input"
                placeholder="None, Vegetarian, Vegan, etc."
                value={formData.dietary}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Message & Wishes</label>
              <textarea
                name="message"
                className="form-textarea"
                placeholder="Share your wishes for us..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="btn-submit">
              SUBMIT RSVP
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Home;

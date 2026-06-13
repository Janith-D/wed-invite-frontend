import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RSVP() {
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

  return (
    <section className="rsvp-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="rsvp-form-card">
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
  );
}

export default RSVP;

function Location() {
  return (
    <section className="venue-section" style={{ paddingTop: '100px', minHeight: '90vh' }}>
      <h2 className="section-title scroll-fade">Wedding Venue</h2>
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
  );
}

export default Location;

function Gallery() {
  return (
    <section style={{ paddingTop: '100px', paddingBottom: '60px', backgroundColor: 'var(--white)' }}>
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
  );
}

export default Gallery;

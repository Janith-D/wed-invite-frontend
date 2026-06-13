import { Link } from 'react-router-dom';

function ThankYou() {
  return (
    <section
      style={{
        paddingTop: '100px',
        minHeight: '90vh',
        backgroundColor: 'var(--white)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: '600px', padding: '0 20px' }}>
        <div style={{ marginBottom: '40px' }}>
          <svg
            style={{ width: '80px', height: '80px', margin: '0 auto', color: 'var(--gold)' }}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <h1 style={{ fontSize: '42px', marginBottom: '20px', fontFamily: "'Playfair Display', serif" }}>
          Thank You!
        </h1>

        <div className="gold-line" style={{ margin: '25px auto' }}></div>

        <p style={{ fontSize: '18px', color: 'var(--muted)', lineHeight: '1.8', marginBottom: '30px' }}>
          Your RSVP has been received successfully. We are thrilled to have you join us on our
          special day. See you soon!
        </p>

        <Link
          to="/"
          style={{
            backgroundColor: 'var(--gold)',
            color: 'var(--white)',
            padding: '12px 40px',
            borderRadius: '30px',
            textDecoration: 'none',
            display: 'inline-block',
            fontWeight: '600',
            fontSize: '14px',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--dark)';
            (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
            (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--gold)';
            (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
            (e.currentTarget as HTMLElement).style.boxShadow = 'none';
          }}
        >
          Back to Invitation
        </Link>
      </div>
    </section>
  );
}

export default ThankYou;


interface ProfilesCardProps {
  className?: string;
}

export function ProfilesCard({ className }: ProfilesCardProps) {
  return (
    <article className={`card ${className || ''}`} style={{
      margin: 'auto',
      width: 'min(300px, 100%)',
      backgroundColor: '#fefefe',
      borderRadius: '1rem',
      padding: '0.5rem',
      color: '#141417'
    }}>
      <section className="card__hero" style={{
        backgroundColor: '#fef4e2',
        borderRadius: '0.5rem 0.5rem 0 0',
        padding: '1.5rem',
        fontSize: '0.875rem'
      }}>
        <header className="card__hero-header" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          gap: '1rem',
          fontWeight: '700'
        }}>
          <span>$150/hr</span>
          <div className="card__icon">
            <svg
              height="20"
              width="20"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </header>

        <p className="card__job-title" style={{
          margin: '2rem 0',
          fontSize: '2rem',
          fontWeight: '600',
          paddingRight: '2rem'
        }}>
          Senior Backend Engineer
        </p>
      </section>

      <footer className="card__footer" style={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'start',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        padding: '0.75rem',
        rowGap: '1rem',
        fontWeight: '700',
        fontSize: '0.875rem'
      }}>
        <div className="card__job-summary" style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          gap: '0.75rem'
        }}>
          <div className="card__job-icon">
            <svg
              height="35"
              width="28"
              viewBox="0 0 250 250"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#4285F4"
                d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
              />
              <path
                fill="#34A853"
                d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
              />
              <path
                fill="#FBBC05"
                d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
              />
              <path
                fill="#EB4335"
                d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
              />
            </svg>
          </div>
          <div className="card__job">
            <p className="card__job-title">
              Senior Backend <br />
              Engineer
            </p>
          </div>
        </div>

        <button className="card__btn" style={{
          width: '100%',
          fontWeight: '400',
          border: 'none',
          display: 'block',
          cursor: 'pointer',
          textAlign: 'center',
          padding: '0.5rem 1.25rem',
          borderRadius: '1rem',
          backgroundColor: '#141417',
          color: '#fff',
          fontSize: '1rem'
        }}>
          view
        </button>
      </footer>

      <style dangerouslySetInnerHTML={{
        __html: `
          @media (min-width: 340px) {
            .card__footer {
              flex-direction: row !important;
              align-items: center !important;
              justify-content: space-between !important;
              gap: 1rem !important;
            }
            .card__btn {
              width: max-content !important;
            }
          }
        `
      }} />
    </article>
  );
}

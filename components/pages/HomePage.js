'use client';

import Link from 'next/link';
import CompareSlider from '@/components/CompareSlider';
import Icon from '@/components/Icon';
import WhatsAppLink from '@/components/WhatsAppLink';
import { useLanguage } from '@/components/LanguageProvider';
import { siteConfig } from '@/lib/config';

// Six supplied photos for the homepage gallery. Each opens Evershine's Instagram page.
const HOME_GALLERY = [
  { src: '/assets/images/gallery/evershine-porsche-front.jpg', alt: 'Grey Porsche 911 front view in the Evershine showroom under hexagonal lights' },
  { src: '/assets/images/gallery/cadillac-tail-light.jpg', alt: 'Black classic Cadillac tail light and chrome fin close-up in a showroom' },
  { src: '/assets/images/gallery/bentley-showroom.jpg', alt: 'Black Bentley in a bright Evershine showroom under geometric LED ceiling lights' },
  { src: '/assets/images/gallery/evershine-g-class.jpg', alt: 'Black Mercedes-Benz G-Class in the Evershine showroom' },
  { src: '/assets/images/gallery/evershine-rx7.jpg', alt: 'Blue Mazda RX-7 in the Evershine showroom' },
  { src: '/assets/images/cars/rolls-royce-ghost.jpg', alt: 'Brown Rolls-Royce Ghost in a luxury showroom' },
];

// Uses the language context for every visible string, so it is a client component.
export default function HomePage() {
  const { t } = useLanguage();

  return (
    <>
      <div className="container hero-frame">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-media">
          <img
            src="/assets/images/hero/hero-khobar-water-tower-sunset.jpg"
            width={2048}
            height={768}
            alt={t('Black sports car on a palm-lined waterfront road at sunset, with the Khobar Water Tower and the sea behind')}
            fetchPriority="high"
          />
        </div>
        <div className="hero-overlay" aria-hidden="true"></div>
        <div className="hero-content">
          <p className="eyebrow">{t('Premium detailing & protection in Al Khobar')}</p>
          <h1 id="hero-title">
            <span className="hero-line">{t('More than a car')}</span>
            <span className="hero-line accent">{t('care center')}</span>
          </h1>
          <p className="hero-lead">
            {t('Premium detailing, nano ceramic coating, paint protection film, and interior and exterior care for luxury vehicles in Al Khobar. Trusted since 2004.')}
          </p>
          <div className="hero-actions">
            <WhatsAppLink
              className="btn btn-primary"
              message="Hello Evershine, I would like to book via WhatsApp."
              fallback="/contact#enquiry"
            >
              <Icon name="chat" className="btn-icon" />
              <span>{t('Book via WhatsApp')}</span>
            </WhatsAppLink>
            <Link className="btn btn-outline" href="/services">
              {t('Our Services')}
            </Link>
          </div>
        </div>
      </section>
      </div>

      <section className="feature-row" aria-label={t('Quick links')}>
        <div className="container feature-grid-3">
          <Link className="feature-card is-red" href="/services">
            <Icon name="calendar" className="card-icon" />
            <span className="feature-foot">
              <span className="feature-body">
                <strong>{t('Book Now')}</strong>
                <span>{t('Begin with your car care journey with Evershine.')}</span>
              </span>
              <Icon name="arrow" className="arrow" />
            </span>
          </Link>
          <Link className="feature-card" href="/services?services=ceramic-coating">
            <video
              className="feature-bg"
              poster="/assets/images/services/ceramic-coating-poster.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-hidden="true"
            >
              <source src="/assets/videos/ceramic-coating.webm" type="video/webm" />
              <source src="/assets/videos/ceramic-coating.mp4" type="video/mp4" />
            </video>
            <Icon name="shield" className="card-icon" />
            <span className="feature-foot">
              <span className="feature-body">
                <strong>{t('Nano Ceramic Coating & Paint Protection Film')}</strong>
                <span>{t('Long lasting protection and deep gloss.')}</span>
              </span>
              <Icon name="arrow" className="arrow" />
            </span>
          </Link>
          <Link className="feature-card" href="/work">
            <img className="feature-bg" src="/assets/images/gallery/showroom-combined.jpg" alt="" loading="lazy" />
            <Icon name="camera" className="card-icon" />
            <span className="feature-foot">
              <span className="feature-body">
                <strong>{t('Our Gallery')}</strong>
                <span>{t('Explore our latest work and car care transformations.')}</span>
              </span>
              <Icon name="arrow" className="arrow" />
            </span>
          </Link>
        </div>
      </section>

      <section className="section home-services" aria-labelledby="services-title">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">{t('Our services')}</p>
              <h2 className="section-title" id="services-title">
                {t('Complete Car Care Under One Roof')}
              </h2>
            </div>
            <Link className="link-arrow" href="/services">
              {t('View All Services')} <Icon name="arrow" className="btn-icon" />
            </Link>
          </div>
          <div className="service-strip">
            <Link className="service-card" href="/services?services=ceramic-coating">
              <video className="service-video" poster="/assets/images/services/ceramic-coating-poster.jpg"
                autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
                <source src="/assets/videos/ceramic-coating.webm" type="video/webm" />
                <source src="/assets/videos/ceramic-coating.mp4" type="video/mp4" />
              </video>
              <span className="service-card-body">
                <Icon name="shield" className="card-icon" />
                <strong>{t('Nano Ceramic Coating')}</strong>
                <Icon name="arrow" className="arrow" />
              </span>
            </Link>
            <Link className="service-card" href="/services?services=ppf">
              <video className="service-video" poster="/assets/images/services/ppf-poster.jpg"
                autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
                <source src="/assets/videos/paint-protection-film.webm" type="video/webm" />
                <source src="/assets/videos/paint-protection-film.mp4" type="video/mp4" />
              </video>
              <span className="service-card-body">
                <Icon name="film" className="card-icon" />
                <strong>{t('Paint Protection Film')}</strong>
                <Icon name="arrow" className="arrow" />
              </span>
            </Link>
            <Link className="service-card" href="/services?services=polishing">
              <video className="service-video" poster="/assets/images/services/polishing-poster.jpg"
                autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
                <source src="/assets/videos/polishing.webm" type="video/webm" />
                <source src="/assets/videos/polishing.mp4" type="video/mp4" />
              </video>
              <span className="service-card-body">
                <Icon name="sparkle" className="card-icon" />
                <strong>{t('Polishing')}</strong>
                <Icon name="arrow" className="arrow" />
              </span>
            </Link>
            <Link className="service-card" href="/services?services=window-tinting">
              <video className="service-video" poster="/assets/images/services/window-tinting-poster.jpg"
                autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
                <source src="/assets/videos/window-tinting.webm" type="video/webm" />
                <source src="/assets/videos/window-tinting.mp4" type="video/mp4" />
              </video>
              <span className="service-card-body">
                <Icon name="window" className="card-icon" />
                <strong>{t('Window Tinting')}</strong>
                <Icon name="arrow" className="arrow" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-tight home-results" aria-labelledby="results-title">
        <div className="container compare-wrap">
          <div>
            <p className="eyebrow">{t('Before & after')}</p>
            <h2 id="results-title">{t('Real Results')}</h2>
            <p>{t('See the difference professional car care makes. Slide to compare before and after.')}</p>
            <Link className="link-arrow" href="/services#before-after" style={{ marginTop: 16 }}>
              {t('Learn More')} <Icon name="arrow" className="btn-icon" />
            </Link>
          </div>
          <CompareSlider
            beforeSrc="/assets/images/before-after/mclaren-before.jpg"
            beforeAlt={t('Black McLaren bonnet before paint correction: dull, hazy finish with surface marks')}
            afterSrc="/assets/images/before-after/mclaren-after.jpg"
            afterAlt={t('Black McLaren bonnet after paint correction: deep gloss and clear reflections')}
          />
        </div>
      </section>

      <section className="section-tight home-about" aria-labelledby="about-title">
        <div className="container split about-preview">
          <img
            src="/assets/images/about/reception-original.jpg"
            alt={t('Evershine reception with the official Evershine logo on a dark sign above the reception desk')}
            loading="lazy"
            width={1670}
            height={942}
          />
          <div>
            <p className="eyebrow">{t('About Evershine')}</p>
            <h2 id="about-title">{t('The Total Car Care Center')}</h2>
            <p>
              {t('Evershine Car Care Center in Al Khobar looks after cars with professional detailing, protection and finishing work. Trusted since 2004.')}
            </p>
            <Link className="btn btn-outline btn-sm" href="/about" style={{ marginTop: 18 }}>
              {t('Learn More')}
            </Link>
          </div>
        </div>
      </section>

      <section className="section-tight home-branch" aria-labelledby="branch-title">
        <div className="container">
          <div className="branch-card branch-banner">
            <img
              src="/assets/images/branch/showroom-original.jpg"
              alt={t('Evershine showroom exterior at night in Al Khobar')}
              loading="lazy"
              width={2170}
              height={725}
            />
            <div className="branch-body">
              <p className="eyebrow">{t('Our branch')}</p>
              <h2 id="branch-title">{t('Visit Our Branch')}</h2>
              <p className="branch-name">{t('Al Khobar')}</p>
              <p>{t('Visit Evershine Car Care Center in Al Khobar.')}</p>
              <a
                className="btn btn-light btn-sm stretch-link"
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener"
              >
                {t('Get Directions')} <Icon name="arrow" className="btn-icon" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight home-work" aria-labelledby="work-title">
        <div className="container">
          <div className="work-head">
            <div>
              <p className="eyebrow">{t('Our work')}</p>
              <h2 id="work-title">{t('Our Work')}</h2>
              <p>{t('Explore our latest work and car care transformations.')}</p>
            </div>
            <Link className="btn btn-outline btn-sm" href="/work">
              {t('View Gallery')} <Icon name="arrow" className="btn-icon" />
            </Link>
          </div>
          <ul className="home-gallery" aria-label={t('Our work photos')}>
            {HOME_GALLERY.map((item) => (
              <li key={item.src}>
                <a
                  className="home-gallery-item"
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener"
                  title={t('Open Evershine on Instagram in a new tab')}
                  aria-label={t(item.alt) + ' (' + t('opens Instagram in a new tab') + ')'}
                >
                  <img src={item.src} alt="" loading="lazy" width={500} height={476} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-tight home-contact" aria-labelledby="contact-title">
        <div className="container">
          <div className="cta-band">
            <div>
              <h2 id="contact-title">{t('Ready to book your car care?')}</h2>
              <p>{t('Message us on WhatsApp or send an enquiry, and our team will get back to you.')}</p>
            </div>
            <div className="actions">
              <WhatsAppLink
                className="btn btn-primary"
                message="Hello Evershine, I would like to make an enquiry."
                fallback="/contact#enquiry"
              >
                {t('Message on WhatsApp')}
              </WhatsAppLink>
              <Link className="btn btn-outline" href="/contact">
                {t('Contact Us')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

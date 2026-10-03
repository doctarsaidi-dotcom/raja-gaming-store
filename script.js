* {
  box-sizing: border-box;
}

:root {
  --bg-dark: #0a0d17;
  --bg-soft: #121a2d;
  --card: rgba(19, 28, 46, 0.9);
  --card-strong: #1c2842;
  --primary: #8b5cf6;
  --secondary: #2dd4bf;
  --text: #edf2ff;
  --muted: #9ca9c0;
  --highlight: #ffb703;
  --danger: #ef4444;
  --border: rgba(255, 255, 255, 0.08);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background:
    radial-gradient(circle at top, rgba(139, 92, 246, 0.28), transparent 25%),
    linear-gradient(180deg, var(--bg-dark), #0d1220 50%, #0b1020);
  color: var(--text);
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
textarea {
  font: inherit;
}

.container {
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(18px);
  background: rgba(10, 13, 23, 0.7);
  border-bottom: 1px solid var(--border);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 78px;
  gap: 24px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: "Orbitron", sans-serif;
  letter-spacing: 0.08em;
  font-weight: 700;
  font-size: 0.9rem;
}

.brand-mark {
  display: inline-grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border-radius: 10px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  font-weight: 800;
}

.menu {
  display: flex;
  align-items: center;
  gap: 24px;
  color: var(--muted);
}

.menu a {
  transition: color 0.2s ease;
}

.menu a:hover {
  color: var(--text);
}

.nav-btn,
.primary-btn,
.secondary-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  border: 1px solid transparent;
  transition: 0.2s ease;
  font-weight: 600;
}

.nav-btn,
.primary-btn {
  background: linear-gradient(135deg, var(--primary), #6d6ef5);
  color: white;
  padding: 0.9rem 1.4rem;
  box-shadow: 0 12px 30px rgba(109, 110, 245, 0.35);
}

.secondary-btn {
  background: transparent;
  border-color: rgba(255, 255, 255, 0.14);
  color: var(--text);
  padding: 0.8rem 1.3rem;
}

.primary-btn:hover,
.secondary-btn:hover,
.nav-btn:hover {
  transform: translateY(-1px);
}

.hero {
  padding: 64px 0 40px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 36px;
}

.eyebrow {
  margin: 0 0 10px;
  color: var(--secondary);
  font-size: 0.78rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-weight: 700;
}

.hero-copy h1,
.section-heading h2,
.offer-box h2,
.payment-box h2 {
  margin: 0;
  font-family: "Orbitron", sans-serif;
  letter-spacing: 0.04em;
}

.hero-copy h1 {
  font-size: clamp(2.5rem, 5vw, 5rem);
  line-height: 1.05;
}

.hero-text {
  margin: 18px 0 28px;
  color: var(--muted);
  font-size: 1.06rem;
  line-height: 1.7;
  max-width: 560px;
}

.hero-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}

.stats {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
  margin-top: 28px;
}

.stats div {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stats strong {
  font-size: clamp(1.2rem, 2vw, 2rem);
  font-weight: 800;
}

.stats span {
  color: var(--muted);
}

.hero-card {
  display: flex;
  justify-content: center;
}

.game-spotlight {
  position: relative;
  overflow: hidden;
  border-radius: 26px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.35);
  width: min(100%, 440px);
}

.game-spotlight img {
  width: 100%;
  height: 560px;
  object-fit: cover;
}

.badge {
  position: absolute;
  top: 16px;
  left: 16px;
  padding: 0.5rem 0.8rem;
  border-radius: 999px;
  background: rgba(34, 197, 94, 0.15);
  border: 1px solid rgba(34, 197, 94, 0.4);
  color: #bbf7d0;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 700;
}

.spotlight-info {
  position: absolute;
  left: 18px;
  right: 18px;
  bottom: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 1rem 1.1rem;
  border-radius: 16px;
  background: rgba(9, 11, 18, 0.7);
  border: 1px solid var(--border);
}

.spotlight-info span {
  font-weight: 600;
}

.spotlight-info strong {
  color: var(--highlight);
}

.games,
.admin-section,
.payments {
  padding: 56px 0;
}

.section-heading {
  margin-bottom: 24px;
}

.section-heading h2 {
  font-size: clamp(1.8rem, 3vw, 2.7rem);
}

.games-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.game-card {
  background: rgba(18, 22, 34, 0.88);
  border: 1px solid var(--border);
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.18);
}

.game-card img {
  width: 100%;
  height: 230px;
  object-fit: cover;
}

.game-body {
  padding: 18px 18px 20px;
}

.game-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
  color: var(--muted);
  font-size: 0.82rem;
}

.game-card h3 {
  margin: 0 0 10px;
  font-size: 1.3rem;
}

.game-card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.6;
}

.game-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 16px;
}

.price {
  font-size: 1.2rem;
  color: var(--highlight);
  font-weight: 800;
}

.buy-btn {
  padding: 0.7rem 1rem;
  border-radius: 10px;
  background: rgba(139, 92, 246, 0.12);
  border: 1px solid rgba(139, 92, 246, 0.4);
  color: #e9defd;
  font-weight: 700;
  cursor: pointer;
}

.offers {
  padding-bottom: 18px;
}

.offer-box,
.payment-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 22px 28px;
  background: linear-gradient(120deg, rgba(45, 212, 191, 0.12), rgba(139, 92, 246, 0.1));
  border: 1px solid var(--border);
  border-radius: 22px;
}

.offer-box p,
.payment-info p {
  color: var(--muted);
  margin: 0;
}

.payment-box {
  align-items: flex-start;
}

.payment-info {
  flex: 2;
}

.payment-number-wrap {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: rgba(11, 16, 28, 0.7);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 18px 20px;
}

.payment-label {
  color: var(--muted);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.7rem;
}

.payment-number {
  font-size: clamp(1.4rem, 2vw, 2rem);
  font-weight: 800;
  color: var(--highlight);
  letter-spacing: 0.06em;
}

.payment-number-wrap small {
  color: var(--muted);
}

.admin-box {
  background: rgba(18, 22, 34, 0.88);
  border: 1px solid var(--border);
  border-radius: 22px;
  padding: 26px;
}

.login-form,
.add-game-form {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.login-form label,
.add-game-form label {
  font-weight: 600;
  color: #edf2ff;
}

input,
textarea {
  width: 100%;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border);
  border-radius: 12px;
  color: var(--text);
  padding: 0.9rem 1rem;
}

input::placeholder,
textarea::placeholder {
  color: #8da0c2;
}

textarea {
  resize: vertical;
}

.full-width {
  width: 100%;
}

.admin-panel {
  margin-top: 22px;
  border-top: 1px solid var(--border);
  padding-top: 22px;
}

.hidden {
  display: none;
}

.panel-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 14px;
}

.panel-top h3 {
  margin: 0;
}

.small-btn {
  padding: 0.7rem 1rem;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.footer {
  padding: 28px 0 40px;
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  border-top: 1px solid var(--border);
  padding-top: 18px;
  color: var(--muted);
}

.modal {
  position: fixed;
  inset: 0;
  display: grid;
  place-items: center;
  background: rgba(3, 7, 18, 0.7);
  z-index: 100;
}

.modal-content {
  position: relative;
  width: min(420px, calc(100% - 32px));
  padding: 28px 22px 22px;
  border-radius: 18px;
  background: #121a2d;
  border: 1px solid var(--border);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

.close-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 34px;
  height: 34px;
  border: 1px solid var(--border);
  border-radius: 50%;
  background: transparent;
  color: var(--text);
  font-size: 1.5rem;
  cursor: pointer;
}

.modal-content h3 {
  margin: 0 0 10px;
  font-size: 1.5rem;
}

.modal-content p {
  color: var(--muted);
  line-height: 1.7;
}

.modal-content strong {
  color: var(--highlight);
  font-size: 1.2rem;
}

@media (max-width: 860px) {
  .hero-grid,
  .games-grid,
  .form-grid,
  .offer-box,
  .payment-box {
    grid-template-columns: 1fr;
  }

  .hero-grid {
    display: block;
  }

  .hero-copy {
    margin-bottom: 28px;
  }

  .games-grid {
    display: grid;
  }

  .menu {
    display: none;
  }

  .offer-box,
  .payment-box {
    display: block;
    text-align: left;
  }

  .offer-box > * + *,
  .payment-box > * + * {
    margin-top: 18px;
  }
}

@media (max-width: 560px) {
  .nav {
    min-height: 68px;
  }

  .brand {
    font-size: 0.75rem;
  }

  .nav-btn {
    padding: 0.7rem 1rem;
  }

  .game-spotlight img {
    height: 420px;
  }

  .panel-top,
  .footer-inner {
    flex-direction: column;
    align-items: flex-start;
  }
}

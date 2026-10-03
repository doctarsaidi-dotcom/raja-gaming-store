const STORAGE_KEY = 'rajaGamingStoreGames';
let isAdminLoggedIn = false;

const defaultGames = [
  {
    id: 1,
    title: 'Cyber Legends',
    genre: 'Action RPG',
    platform: 'PC / Console',
    price: '$39.99',
    description: 'Fight through a futuristic world filled with drones, secrets, and epic bosses.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 2,
    title: 'Street Clash',
    genre: 'Battle Arena',
    platform: 'PC / Mobile',
    price: '$24.99',
    description: 'Fast-paced battles, hero upgrades, and tactical team play in a neon city.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 3,
    title: 'Desert Drift',
    genre: 'Racing',
    platform: 'PS5 / XBOX',
    price: '$29.99',
    description: 'Cruise through harsh deserts, unlock custom builds, and beat your rivals.',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 4,
    title: 'Night Siege',
    genre: 'Shooter',
    platform: 'PC / PS5',
    price: '$44.99',
    description: 'Take part in tactical missions and survive in a hostile futuristic warzone.',
    image: 'https://images.unsplash.com/photo-1528819622761-6bcf032dd7d0?auto=format&fit=crop&w=900&q=80'
  }
];

const gamesGrid = document.querySelector('#gamesGrid');
const loginForm = document.querySelector('#loginForm');
const passwordInput = document.querySelector('#password');
const adminPanel = document.querySelector('#adminPanel');
const addGameForm = document.querySelector('#addGameForm');
const logoutBtn = document.querySelector('#logoutBtn');
const paymentModal = document.querySelector('#paymentModal');
const closeModalBtn = document.querySelector('#closeModal');
const modalGameTitle = document.querySelector('#modalGameTitle');

function getStoredGames() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultGames));
    return defaultGames;
  }

  try {
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) && parsed.length ? parsed : defaultGames;
  } catch (error) {
    return defaultGames;
  }
}

function saveGames(games) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(games));
}

function renderGames() {
  const games = getStoredGames();

  gamesGrid.innerHTML = games
    .map(
      (game) => `
        <article class="game-card">
          <img src="${game.image || 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80'}" alt="${game.title}" />
          <div class="game-body">
            <div class="game-meta">
              <span>${game.genre}</span>
              <span>${game.platform}</span>
            </div>
            <h3>${game.title}</h3>
            <p>${game.description}</p>
            <div class="game-footer">
              <span class="price">${game.price}</span>
              <div class="admin-actions">
                <button class="buy-btn" type="button" data-title="${game.title}">Buy Now</button>
                ${isAdminLoggedIn ? `<button class="delete-btn" type="button" data-delete-id="${game.id}">Delete</button>` : ''}
              </div>
            </div>
          </div>
        </article>
      `
    )
    .join('');

  document.querySelectorAll('.buy-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const selectedTitle = button.dataset.title || 'this game';
      modalGameTitle.textContent = selectedTitle;
      paymentModal.classList.remove('hidden');
      paymentModal.setAttribute('aria-hidden', 'false');
    });
  });

  document.querySelectorAll('.delete-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const gameId = Number(button.dataset.deleteId);
      const updatedGames = getStoredGames().filter((game) => game.id !== gameId);
      saveGames(updatedGames);
      renderGames();
    });
  });
}

function showAdminPanel() {
  isAdminLoggedIn = true;
  adminPanel.classList.remove('hidden');
  renderGames();
}

function hideAdminPanel() {
  isAdminLoggedIn = false;
  adminPanel.classList.add('hidden');
  passwordInput.value = '';
  renderGames();
}

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const enteredPassword = passwordInput.value.trim();
  if (enteredPassword === 'hamisi') {
    showAdminPanel();
    passwordInput.value = '';
  } else {
    alert('Incorrect password. Use the admin password: hamisi');
  }
});

logoutBtn.addEventListener('click', () => {
  hideAdminPanel();
});

closeModalBtn.addEventListener('click', () => {
  paymentModal.classList.add('hidden');
  paymentModal.setAttribute('aria-hidden', 'true');
});

paymentModal.addEventListener('click', (event) => {
  if (event.target === paymentModal) {
    paymentModal.classList.add('hidden');
    paymentModal.setAttribute('aria-hidden', 'true');
  }
});

addGameForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const title = document.querySelector('#gameTitle').value.trim();
  const genre = document.querySelector('#gameGenre').value.trim();
  const platform = document.querySelector('#gamePlatform').value.trim();
  const price = document.querySelector('#gamePrice').value.trim();
  const description = document.querySelector('#gameDescription').value.trim();
  const image = document.querySelector('#gameImage').value.trim();

  if (!title || !genre || !platform || !price || !description) {
    alert('Please fill in all required fields.');
    return;
  }

  const games = getStoredGames();
  const newGame = {
    id: Date.now(),
    title,
    genre,
    platform,
    price,
    description,
    image: image || 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80'
  };

  games.unshift(newGame);
  saveGames(games);
  renderGames();
  addGameForm.reset();
  alert('Game added successfully!');
});

renderGames();

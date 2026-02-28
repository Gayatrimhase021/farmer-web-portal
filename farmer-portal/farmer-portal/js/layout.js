// Injects shared navbar + modals + footer into every page
// Auto-detects if running from root or /pages/ subfolder
document.addEventListener('DOMContentLoaded', () => {
  const isSubPage = window.location.pathname.includes('/pages/');
  const root = isSubPage ? '../' : '';
  const page = window.location.pathname.split('/').pop() || 'index.html';

  function active(p) { return page === p ? 'active' : ''; }

  document.body.insertAdjacentHTML('afterbegin', `
  <nav>
    <div class="nav-brand">
      <div class="logo-icon">🌾</div>
      <h2>Krishi Darpan<span>Farmer Web Portal</span></h2>
    </div>
    <ul class="nav-links">
      <li><a href="${root}index.html" class="${active('index.html')}">Home</a></li>
      <li><a href="${root}pages/crops.html" class="${active('crops.html')}">Crops</a></li>
      <li><a href="${root}pages/weather.html" class="${active('weather.html')}">Weather</a></li>
      <li><a href="${root}pages/market.html" class="${active('market.html')}">Market Prices</a></li>
      <li><a href="${root}pages/schemes.html" class="${active('schemes.html')}">Govt. Schemes</a></li>
    </ul>
    <div class="nav-auth">
      <button class="btn-login" onclick="openModal('login')">Login</button>
      <button class="btn-signup" onclick="openModal('signup')">Sign Up</button>
    </div>
  </nav>

  <div class="modal-overlay" id="modal-login">
    <div class="modal">
      <button class="modal-close" onclick="closeModal('login')">✕</button>
      <h3>🌾 Farmer Login</h3>
      <div class="form-group"><label>Mobile Number / Aadhaar</label><input type="text" placeholder="Enter mobile or Aadhaar number"></div>
      <div class="form-group"><label>Password</label><input type="password" placeholder="Enter password"></div>
      <button class="form-submit" onclick="fakeLogin()">Login to Portal</button>
      <p style="text-align:center;margin-top:1rem;font-size:0.85rem;color:#4a5c3f;">
        Don't have an account? <a onclick="closeModal('login');openModal('signup')" style="color:#2d6a35;cursor:pointer;font-weight:600;">Sign Up</a>
      </p>
    </div>
  </div>

  <div class="modal-overlay" id="modal-signup">
    <div class="modal">
      <button class="modal-close" onclick="closeModal('signup')">✕</button>
      <h3>🌱 Farmer Registration</h3>
      <div class="form-group"><label>Full Name</label><input type="text" placeholder="As per Aadhaar card"></div>
      <div class="form-group"><label>Mobile Number</label><input type="tel" placeholder="10-digit mobile number"></div>
      <div class="form-group">
        <label>State</label>
        <select>
          <option>Maharashtra</option><option>Punjab</option><option>Uttar Pradesh</option>
          <option>Madhya Pradesh</option><option>Haryana</option><option>Rajasthan</option>
          <option>Bihar</option><option>Gujarat</option><option>Karnataka</option><option>Andhra Pradesh</option>
        </select>
      </div>
      <div class="form-group"><label>Aadhaar Number</label><input type="text" placeholder="12-digit Aadhaar number"></div>
      <button class="form-submit" onclick="fakeSignup()">Register Now</button>
    </div>
  </div>`);

  document.body.insertAdjacentHTML('beforeend', `
  <footer>
    <div class="footer-grid">
      <div class="footer-brand">
        <h3>🌾 Krishi Darpan</h3>
        <p>India's trusted digital platform for farmers. Bringing agriculture information, government schemes, and market intelligence to every farmer's fingertips.</p>
      </div>
      <div class="footer-col">
        <h4>Quick Links</h4>
        <a href="${root}index.html">Home</a>
        <a href="${root}pages/crops.html">Crop Guide</a>
        <a href="${root}pages/weather.html">Weather</a>
        <a href="${root}pages/market.html">Mandi Prices</a>
        <a href="${root}pages/schemes.html">Schemes</a>
      </div>
      <div class="footer-col">
        <h4>Helpline</h4>
        <a>Kisan Call Center: 1800-180-1551</a>
        <a>PM Kisan Helpline: 155261</a>
        <a>Soil Health: 1800-11-0001</a>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <a href="mailto:farmerportal@gmail.com">farmerportal@gmail.com</a>
        <a>Nashik, Maharashtra</a>
        <a>Mon–Sat: 9AM – 6PM</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Krishi Darpan – Farmer Web Portal. All rights reserved.</span>
      <span>Made with ❤️ for Indian Farmers</span>
    </div>
  </footer>
  <div id="toast"></div>`);

  document.querySelectorAll('.modal-overlay').forEach(el => {
    el.addEventListener('click', e => { if (e.target === el) el.classList.remove('open'); });
  });
});

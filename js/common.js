// ===== TOAST =====
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// ===== MODALS =====
function openModal(name) {
  document.getElementById('modal-' + name).classList.add('open');
}
function closeModal(name) {
  document.getElementById('modal-' + name).classList.remove('open');
}
function fakeLogin() {
  closeModal('login');
  showToast('✅ Login successful! Welcome back.');
}
function fakeSignup() {
  closeModal('signup');
  showToast('✅ Registration submitted! You will receive an OTP shortly.');
}

// Close modal on overlay click
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.modal-overlay').forEach(el => {
    el.addEventListener('click', e => {
      if (e.target === el) el.classList.remove('open');
    });
  });
});

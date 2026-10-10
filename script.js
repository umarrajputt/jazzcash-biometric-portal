const roleButtons = document.querySelectorAll('.role-btn');
const biometricStatus = document.getElementById('biometricStatus');
const scanButton = document.getElementById('scanButton');
const loginForm = document.getElementById('loginForm');

roleButtons.forEach((button) => {
  button.addEventListener('click', () => {
    roleButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    const selected = button.dataset.role;
    biometricStatus.textContent = `${selected} access ready — biometrics pending`;
  });
});

scanButton.addEventListener('click', () => {
  biometricStatus.textContent = 'Fingerprint matched successfully';
  biometricStatus.style.color = '#7ef0c9';

  setTimeout(() => {
    biometricStatus.style.color = '#9db8bf';
  }, 1600);
});

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const activeRole = document.querySelector('.role-btn.active')?.dataset.role || 'L0';
  const panel = document.querySelector('.login-panel');
  panel.classList.add('success-flash');

  setTimeout(() => {
    panel.classList.remove('success-flash');
  }, 800);

  biometricStatus.textContent = `${activeRole} access granted — identity verified`;
  biometricStatus.style.color = '#7ef0c9';
});

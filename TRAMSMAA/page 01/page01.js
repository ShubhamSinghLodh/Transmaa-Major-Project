// Basic interactivity for Transmaa UI
document.addEventListener('DOMContentLoaded', function() {
  const loginBtn = document.getElementById('loginBtn');
  const usernameInput = document.getElementById('username');
  const phoneInput = document.getElementById('phone');
  const greeting = document.getElementById('greeting');
  const confirmBtn = document.getElementById('confirmBtn');
  const fromLocation = document.getElementById('fromLocation');
  const toLocation = document.getElementById('toLocation');

  // Login button
  loginBtn.addEventListener('click', function() {
    const username = usernameInput.value.trim() || 'User';
    const phone = phoneInput.value.trim();
    if (username && phone) {
      greeting.textContent = `Hi ${username}`;
      // alert(`Logged in as ${username} (${phone})`);
      console.log(`Logged in as ${username} (${phone})`);
      phoneInput.value = '';
      usernameInput.value = '';
    } else {
      alert('Please enter username and phone');
    }
  });

  // Confirm booking button
  confirmBtn.addEventListener('click', function() {
    const from = fromLocation.value.trim();
    const to = toLocation.value.trim();
    if (from && to) {
      console.log('Booking confirmed:', { from, to });
      // alert(`Booking confirmed: Load from ${from} to ${to}`);
      // Clear forms
      fromLocation.value = '';
      toLocation.value = '';
    } else {
      alert('Please enter from and to locations');
    }
  });
});

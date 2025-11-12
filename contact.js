// Basic client-side validation + redirect to home after submit
const form = document.getElementById('contact-form');

function setError(input, message) {
  const wrap = input.closest('.field');
  const small = wrap.querySelector('.error');
  small.textContent = message || '';
  if (message) {
    input.setAttribute('aria-invalid', 'true');
  } else {
    input.removeAttribute('aria-invalid');
  }
}

function validate() {
  let ok = true;

  // Required fields
  const requiredIds = ['first_name','last_name','email','phone'];
  requiredIds.forEach(id => {
    const el = document.getElementById(id);
    if (!el.value.trim()) {
      setError(el, 'This field is required');
      ok = false;
    } else {
      setError(el, '');
    }
  });

  // Email format
  const email = document.getElementById('email');
  if (email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    setError(email, 'Please enter a valid email');
    ok = false;
  }

  // Phone format (lenient)
  const phone = document.getElementById('phone');
  if (phone.value && !/^[0-9+\-()\s]{7,20}$/.test(phone.value)) {
    setError(phone, 'Please enter a valid phone number');
    ok = false;
  }

  return ok;
}

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!validate()) return;

  // Simulate submission success (no backend here)
  alert('Thanks! Your message has been submitted.');

  // Go back to homepage
  window.location.href = 'index.html';
});

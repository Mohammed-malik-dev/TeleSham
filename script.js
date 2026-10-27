const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
const toast = document.getElementById('toast');
let toastTimer;

menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.textContent = open ? '✕' : '☰';
});

nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.textContent = '☰';
  nav.querySelectorAll('a').forEach(item => item.classList.remove('active'));
  link.classList.add('active');
}));

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}

document.querySelectorAll('.details').forEach(button => button.addEventListener('click', () => {
  showToast(`تم اختيار «${button.dataset.name}». أضف بيانات المنتج ورابط الشراء لربط هذا الزر فعلياً.`);
}));

document.getElementById('subscribeForm').addEventListener('submit', event => {
  event.preventDefault();
  const email = document.getElementById('email');
  if (!email.checkValidity()) { email.reportValidity(); return; }
  document.getElementById('formMessage').textContent = 'شكراً لاشتراكك! هذه واجهة تجريبية، ويجب ربط النموذج بخدمة بريد لإتمام الاشتراك.';
  email.value = '';
});

document.getElementById('year').textContent = new Date().getFullYear();

'use strict';

/* ==========================================================================
   CuraLife — script.js
   Modules: Navbar | Reveal | Counters | Doctor Booking | Form Validation |
            Testimonial Slider | FAQ Accordion | Scroll To Top | Footer Year
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initSmoothScroll();
  initReveal();
  initCounters();
  initDoctorBooking();
  initAppointmentForm();
  initTestimonialSlider();
  initFaqAccordion();
  initScrollTop();
  document.getElementById('year').textContent = new Date().getFullYear();
});

/* ---------- Navbar: scrolled state + mobile menu ---------- */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('navbar--scrolled', window.scrollY > 10);
  }, { passive: true });

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ---------- Smooth scroll for in-page anchor links ---------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId.length < 2) return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

/* ---------- Fade-in on scroll ---------- */
function initReveal() {
  const items = document.querySelectorAll('[data-reveal]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  items.forEach((item) => observer.observe(item));
}

/* ---------- Animated number counters ---------- */
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach((counter) => observer.observe(counter));
}

function animateCounter(el) {
  const target = parseFloat(el.dataset.count);
  const decimals = parseInt(el.dataset.decimal || '0', 10);
  const suffix = el.dataset.suffix || '';
  const duration = 1200;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = target * eased;
    el.textContent = decimals > 0
      ? value.toFixed(decimals) + suffix
      : Math.round(value).toLocaleString('en-IN') + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

/* ---------- Doctor "Book Appointment" buttons pre-fill the form ---------- */
function initDoctorBooking() {
  const departmentSelect = document.getElementById('department');

  document.querySelectorAll('[data-book-doctor]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const department = btn.dataset.bookDepartment;
      const doctor = btn.dataset.bookDoctor;

      departmentSelect.value = department;
      departmentSelect.dispatchEvent(new Event('change'));

      const doctorSelect = document.getElementById('doctor');
      doctorSelect.value = doctor;

      document.getElementById('appointment').scrollIntoView({ behavior: 'smooth', block: 'start' });
      document.getElementById('fullName').focus({ preventScroll: true });
    });
  });
}

/* ---------- Appointment form: department -> doctor mapping, validation, submit ---------- */
const DOCTORS_BY_DEPARTMENT = {
  'Cardiology': ['Dr. Ananya Sharma'],
  'Neurology': ['Dr. Rohan Mehta'],
  'Pediatrics': ['Dr. Kavya Reddy'],
  'Orthopedics': ['Dr. Arjun Nair'],
  'Dermatology': ['Dr. Sneha Patil'],
  'Dental Care': ['Dr. Vivek Iyer']
};

function initAppointmentForm() {
  const form = document.getElementById('appointmentForm');
  const departmentSelect = document.getElementById('department');
  const doctorSelect = document.getElementById('doctor');
  const dateInput = document.getElementById('date');
  const formBody = document.getElementById('formBody');
  const formSuccess = document.getElementById('formSuccess');
  const bookAnotherBtn = document.getElementById('bookAnotherBtn');

  dateInput.min = new Date().toISOString().split('T')[0];

  departmentSelect.addEventListener('change', () => {
    const doctors = DOCTORS_BY_DEPARTMENT[departmentSelect.value] || [];
    doctorSelect.innerHTML = '';
    doctors.forEach((name) => {
      const option = document.createElement('option');
      option.value = name;
      option.textContent = name;
      doctorSelect.appendChild(option);
    });
    doctorSelect.disabled = doctors.length === 0;
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm(form)) {
      formBody.hidden = true;
      formSuccess.hidden = false;
    }
  });

  bookAnotherBtn.addEventListener('click', () => {
    form.reset();
    doctorSelect.innerHTML = '<option value="" selected>Select a department first</option>';
    doctorSelect.disabled = true;
    clearAllErrors(form);
    formSuccess.hidden = true;
    formBody.hidden = false;
  });
}

function validateForm(form) {
  clearAllErrors(form);
  let isValid = true;

  const fullName = form.fullName.value.trim();
  if (fullName.length < 2) {
    setError('fullName', 'Please enter your full name.');
    isValid = false;
  }

  const email = form.email.value.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    setError('email', 'Please enter a valid email address.');
    isValid = false;
  }

  const phone = form.phone.value.trim();
  if (!/^\d{10}$/.test(phone.replace(/\D/g, ''))) {
    setError('phone', 'Please enter a valid 10-digit phone number.');
    isValid = false;
  }

  const date = form.date.value;
  if (!date) {
    setError('date', 'Please select a preferred date.');
    isValid = false;
  } else if (date < new Date().toISOString().split('T')[0]) {
    setError('date', 'Please choose a date from today onward.');
    isValid = false;
  }

  if (!form.department.value) {
    setError('department', 'Please select a department.');
    isValid = false;
  }

  if (!form.doctor.value) {
    setError('doctor', 'Please select a doctor.');
    isValid = false;
  }

  return isValid;
}

function setError(fieldId, message) {
  const field = document.getElementById(fieldId);
  const error = document.getElementById('err-' + fieldId);
  field.classList.add('is-invalid');
  error.textContent = message;
}

function clearAllErrors(form) {
  form.querySelectorAll('.is-invalid').forEach((field) => field.classList.remove('is-invalid'));
  form.querySelectorAll('.form__error').forEach((error) => { error.textContent = ''; });
}

/* ---------- Testimonial slider ---------- */
function initTestimonialSlider() {
  const track = document.getElementById('testimonialTrack');
  const slides = track.children;
  const dotsWrap = document.getElementById('testimonialDots');
  const prevBtn = document.getElementById('testPrev');
  const nextBtn = document.getElementById('testNext');
  let index = 0;

  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('button');
    dot.className = 'testimonial-dot';
    dot.setAttribute('aria-label', `Go to testimonial ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
  }
  const dots = dotsWrap.children;

  function goTo(i) {
    index = (i + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    Array.from(dots).forEach((dot, di) => dot.classList.toggle('is-active', di === index));
  }

  prevBtn.addEventListener('click', () => goTo(index - 1));
  nextBtn.addEventListener('click', () => goTo(index + 1));

  goTo(0);
}

/* ---------- FAQ accordion (single item open at a time) ---------- */
function initFaqAccordion() {
  const items = document.querySelectorAll('.faq-item');

  items.forEach((item) => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');
      items.forEach((other) => {
        other.classList.remove('is-open');
        other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('is-open');
        question.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ---------- Scroll to top button ---------- */
function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('is-visible', window.scrollY > 500);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
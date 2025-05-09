function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll); // প্রথম লোডে দেখার জন্য

















  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // পেজ রিলোড বন্ধ

    // ইনপুট ফিল্ড থেকে মান নেওয়া
    const name = document.querySelector('input[name="text"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    // mailto লিংক তৈরি
    const subject = encodeURIComponent("Message from " + name);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoLink = `mailto:sadikurrhman6530@gmail.com?subject=${subject}&body=${body}`;

    // মেইল ক্লায়েন্ট ওপেন করা
    window.location.href = mailtoLink;
  });




















  const toggle = document.getElementById('menu-toggle');
  const nav = document.querySelector('header nav');

  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

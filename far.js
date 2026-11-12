// اعتبارسنجی فرم و نمایش پیام موفقیت
const form = document.getElementById("contactForm");
const successBox = document.getElementById("formSuccess");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  successBox.hidden = true;

  if (!form.checkValidity()) {
    // کلاس was-validated باعث نمایش پیام‌های خطای بوت‌استرپ می‌شود
    form.classList.add("was-validated");
    return;
  }

  // اینجا می‌توانید داده‌ها را به سرور بفرستید (fetch)
  const data = {
    firstName: form.firstName.value.trim(),
    lastName: form.lastName.value.trim(),
    email: form.email.value.trim(),
    phone: form.phone.value.trim(),
    message: form.message.value.trim(),
  };
  console.log("Form data:", data);

  form.reset();
  form.classList.remove("was-validated");
  successBox.hidden = false;
});


// ===================== FOOTER =====================

// سال جاری در کپی‌رایت
document.getElementById("year").textContent = new Date().getFullYear();

// برگشت نرم به بالای صفحه
document.getElementById("backToTop").addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// فرم خبرنامه
const newsletterForm = document.getElementById("newsletterForm");
const newsletterEmail = document.getElementById("newsletterEmail");
const newsletterMsg = document.getElementById("newsletterMsg");

newsletterForm.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!newsletterEmail.checkValidity()) {
    newsletterMsg.textContent = "Enter a valid email address.";
    newsletterMsg.className = "newsletter-msg err";
    return;
  }

  newsletterMsg.textContent = "You're in! Check your inbox for our next special.";
  newsletterMsg.className = "newsletter-msg ok";
  newsletterForm.reset();
});
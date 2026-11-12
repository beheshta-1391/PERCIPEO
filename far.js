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
function scrollToBooking() {
  document.getElementById("booking").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("ticketForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const ride = document.getElementById("ride").value;
  const tickets = document.getElementById("tickets").value;

  const message = `🎉 Thank you, ${name}! You have successfully booked ${tickets} ticket(s) for ${ride}. Enjoy your day at Fantasy World!`;
  document.getElementById("confirmation").innerText = message;

  this.reset();
});

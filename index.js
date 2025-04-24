const data = [
  { day: "mon", amount: 17.45 },
  { day: "tue", amount: 34.91 },
  { day: "wed", amount: 52.36 },
  { day: "thu", amount: 31.07 },
  { day: "fri", amount: 23.39 },
  { day: "sat", amount: 43.28 },
  { day: "sun", amount: 25.48 },
];

const days = document.querySelectorAll(".bar");
const total = data.reduce((sum, item) => sum + item.amount, 0);

days.forEach((bar, i) => {
  const percent = data[i].amount / total;
  const height = percent * 100;
  bar.style.height = `calc(7 * ${height}px)`;
});
days.forEach((day) => {
  day.addEventListener("mouseenter", () => {
    toggleTooltip(day, true);
  });

  day.addEventListener("mouseleave", () => {
    toggleTooltip(day, false);
  });
});

const toggleTooltip = (element, show) => {
  const parent = element.closest(".day");
  const toolTip = parent.querySelector(".tool-tip");
  const dayKey = element.dataset.day;

  if (toolTip && dayKey) {
    const match = data.find((item) => item.day === dayKey);
    if (match) toolTip.textContent = `$${match.amount}`;
    toolTip.classList.toggle("show", show);
  }
};

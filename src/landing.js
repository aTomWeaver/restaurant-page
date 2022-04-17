export default function renderLanding() {
  // IMAGE
  const imgCtr = document.createElement("div");
  const link = document.createElement("a");
  link.href = "https://www.youtube.com/watch?v=t5OmwqF0WIw";
  const img = document.createElement("img");
  img.src = "https://i.redd.it/hj4dr1lonal31.png";
  img.id = "main-image";
  link.append(img);
  imgCtr.appendChild(link);

  // QUOTE
  const quoteCtr = document.createElement("div");
  const quote = document.createElement("p");
  quote.innerText = '"Suck it down and poop like a regular man."';
  quoteCtr.append(quote);

  // HOURS
  const Weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const Hours = [
    "5am - 10pm",
    "5am - 10pm",
    "5am - 10pm",
    "5am - 10pm",
    "5am - 10pm",
    "7am - 11pm",
    "Closed",
  ];

  const hoursCtr = document.createElement("div");
  hoursCtr.id = "hours-ctr";
  const hoursTitle = document.createElement("h2");
  hoursTitle.innerText = "Hours";
  const hours = document.createElement("div");
  hours.id = "hours";

  // render weekdays and hours from array and append to 'hours' div
  for (let i = 0; i < 7; i++) {
    const day = document.createElement("p");
    day.innerText = `${Weekdays[i]}: ${Hours[i]}`;
    hours.appendChild(day);
  }
  hoursCtr.append(hoursTitle, hours);

  // APPEND CONTENT
  const content = document.getElementById("content");
  content.innerHTML = "";
  content.classList.remove("content-wide");
  content.classList.add("content-narrow");
  content.append(imgCtr, quoteCtr, hoursCtr);
  document.body.append(content);
}

let points = 0;
let pointsPerSecond = 1;
let pointsPerClick = 1;
let clickUpgradeCost = 10;
let idleUpgradeCost = 20;

// Function to update points every second (idle)
setInterval(function () {
  points += pointsPerSecond; // Increment points every second
  updatePoints();
}, 1000);

function clickUpgrade() {
  pointsPerClick += 1; // Increase points per click by 1
}

// Function to update points per second
function updatePointsPerSecond() {
  document.getElementById("pointsPerSecond").textContent = pointsPerSecond;
}

function idleUpgrade() {
  pointsPerSecond += 1; // Increase points per second by 1
  setInterval(function () {
    points += pointsPerSecond; // Increase points every second
    updatePoints();
  }, 1000);
  updatePointsPerSecond();
}

// Function to update points
function updatePoints() {
  document.getElementById("points").textContent = points;
}

// Function to handle button click
document.getElementById("clickButton").addEventListener("click", function () {
  points += pointsPerClick; // Increment points by 1 per click
  updatePoints();
});

// Function to handle click upgrade
document.getElementById("upgradeClick").addEventListener("click", function () {
  if (points >= clickUpgradeCost) {
    points -= clickUpgradeCost;
    clickUpgradeCost *= 2;
    updatePoints();
    clickUpgrade();
    updateClickUpgradeCost(); // Update click upgrade cost display
  }
});

// Function to handle idle upgrade
document.getElementById("upgradeIdle").addEventListener("click", function () {
  if (points >= idleUpgradeCost) {
    points -= idleUpgradeCost;
    idleUpgradeCost *= 2;
    updatePoints();
    idleUpgrade();
    updateIdleUpgradeCost(); // Update idle upgrade cost display
  }
});

// Function to update click upgrade cost
function updateClickUpgradeCost() {
  document.getElementById("clickUpgradeCost").textContent = clickUpgradeCost;
}

// Function to update idle upgrade cost
function updateIdleUpgradeCost() {
  document.getElementById("idleUpgradeCost").textContent = idleUpgradeCost;
}

// Initial update of upgrade costs
updateClickUpgradeCost();
updateIdleUpgradeCost();

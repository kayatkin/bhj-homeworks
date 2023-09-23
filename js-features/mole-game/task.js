document.addEventListener("DOMContentLoaded", () => {
    let deadCount = 0;
    let lostCount = 0;
    let isGameActive = true;
  
    function getHole(index) {
      return document.getElementById(`hole${index}`);
    }
  
    function handleHoleClick(index) {
      if (!isGameActive) {
        return;
      }
  
      const hole = getHole(index);
  
      if (hole.classList.contains("hole_has-mole")) {
        deadCount++;
      } else {
        lostCount++;
        document.getElementById("lost").textContent = lostCount;
      }
  
      document.getElementById("dead").textContent = deadCount;
  
      if (deadCount === 10) {
        isGameActive = false;
        alert("Победа!");
      } else if (lostCount === 5) {
        isGameActive = false;
        alert("Вы проиграли.");
      }
    }
  
    for (let i = 1; i <= 9; i++) {
      const hole = getHole(i);
      hole.addEventListener("click", () => {
        handleHoleClick(i);
      });
    }
  });
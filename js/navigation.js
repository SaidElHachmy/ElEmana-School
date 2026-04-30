// 🧭 SECTION NAVIGATION SYSTEM
function showSection(sectionId) {
    
    stopAllVideos();
  const sections = document.querySelectorAll(".section");

  sections.forEach(sec => sec.classList.remove("active"));

  const target = document.getElementById(sectionId);

  if (target) {
    target.classList.add("active");
  }
  
  
  
    // 🔥 RESET when leaving years
  if (sectionId !== "years" && typeof resetSchoolUI === "function") {
    resetSchoolUI();
  }

  // 📚 LOAD LIBRARY WHEN OPENED
  if (sectionId === "library") {
    loadBooks();
  }
  
  if (sectionId === "schedule" && window.loadSchedule) {
  loadSchedule();
}

  if (sectionId === "staff" && window.loadStaff) {
  loadStaff();
}
  
  
  
}

function stopAllVideos() {
  document.querySelectorAll("video").forEach(video => {
    video.pause();
    video.currentTime = 0; // 🔥 RESET TO START
  });

  // reset single-play trackers
  if (typeof currentPlayingVideo !== "undefined") currentPlayingVideo = null;
  if (typeof currentHomePlayingVideo !== "undefined") currentHomePlayingVideo = null;
}






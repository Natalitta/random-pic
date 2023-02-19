function rightAnswer() {        
     if (gameType === "flag") {
         if (displayFlag === 0) {
          return "canada"
         } else if (displayFlag === 1) {
         return "germany"
         } else if (displayFlag === 2) {
         return "ireland"
         } else if (displayFlag === 3) {
         return "japan"
         } else if (displayFlag === 4) {
         return "morocco"
         } else if (displayFlag === 5) {
         return "spain"
         } else if (displayFlag === 6) {
         return "france"
         } else if (displayFlag === 7) {
         return "ukraine"
         } else if (displayFlag === 8) {
         return "brazil"
         } else if (displayFlag === 9) {
         return "australia"}

     } else if (gameType === "landmark"){
         if (displayLandmark === 0) {
         return "canada"
         } else if (displayLandmark === 1) {
         return "germany"
         } else if (displayLandmark === 2) {
         return "ireland"
         } else if (displayLandmark === 3) {
         return "japan"
         } else if (displayLandmark === 4) {
         return "morocco"
         } else if (displayLandmark === 5) {
         return "spain"
         } else if (displayLandmark === 6) {
         return "france"
         } else if (displayLandmark === 7) {
         return "ukraine"
         } else if (displayLandmark === 8) {
         return "brazil"
         } else if (displayLandmark === 9) {
         return "australia"
         }
     } 
     }

        
     function displayLandmarkImage() {

          let landmarkImg = new Array (); 
          landmarkImg[0] = 'assets/images/landmarks/canada.jpg';
          landmarkImg[1] = 'assets/images/landmarks/germany.jpg';
          landmarkImg[2] = 'assets/images/landmarks/ireland.jpg';
          landmarkImg[3] = 'assets/images/landmarks/japan.jpg';
          landmarkImg[4] = 'assets/images/landmarks/morocco.jpg';
          landmarkImg[5] = 'assets/images/landmarks/spain.jpg';
          landmarkImg[6] = 'assets/images/landmarks/france.jpg';
          landmarkImg[7] = 'assets/images/landmarks/ukraine.jpg';
          landmarkImg[8] = 'assets/images/landmarks/brazil.jpg';
          landmarkImg[9] = 'assets/images/landmarks/australia.jpg';
         
          displayLandmark = Math.floor(Math.random() * landmarkImg.length);
          return document.getElementById("image").innerHTML = '<img src="'+landmarkImg[displayLandmark]+'" class="img">';  
      }
      runGame("landmark");

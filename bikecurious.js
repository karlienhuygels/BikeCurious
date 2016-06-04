var teller = 0;

function main() {
      var letterArray = [
            "foto2.JPG",
            "foto3.JPG",
            "foto4.JPG",
            "foto5.JPG",
            "foto6.JPG",
            "foto1.JPG"
      ];
      var mijnBody = document.getElementsByClassName("parallax1")[0];
      if (teller < (letterArray.length-1)) {
            mijnBody.style.backgroundImage = "url('" + letterArray[teller] + "')";
            teller++;
      } else {
            mijnBody.style.backgroundImage = "url('" + letterArray[teller] + "')";
            teller = 0;
      }
}

window.onload = function() {
      setInterval(main, 2000);
}

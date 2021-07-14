window.onscroll = function() {
    var distanceScrolled = document.documentElement.scrollTop;
    var navbar = document.getElementById('mmm');

    if (distanceScrolled > 76) {
      navbar.classList.add('scrolled');
    }else{
      navbar.classList.remove('scrolled');
    }
}
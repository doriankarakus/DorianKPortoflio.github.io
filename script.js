document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.read-more-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            var details = this.nextElementSibling;
            if (details.style.display === "none" || details.style.display === "") {
                details.style.display = "block";
                this.textContent = "Show Less";
            } else {
                details.style.display = "none";
                this.textContent = "Read More";
            }
        });
    });
});
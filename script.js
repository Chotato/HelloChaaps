document.addEventListener("DOMContentLoaded", function () 
{
    const slides = document.querySelectorAll(".slide");
    const nextBtn = document.getElementById("next-btn");
    const prevBtn = document.getElementById("prev-btn");
    let current = 0;
    let interval = setInterval(showNextSlide, 6000);

    function showSlide(index) 
    {
        slides[current].classList.remove("active");
        current = (index + slides.length) % slides.length;
        slides[current].classList.add("active");
    }

    function showNextSlide() 
    {
        showSlide(current + 1);
    }

    function showPrevSlide() 
    {
        showSlide(current - 1);
    }

    nextBtn.addEventListener("click", () => 
    {
        showNextSlide();
        resetTimer();
    });

    prevBtn.addEventListener("click", () => 
    {
        showPrevSlide();
        resetTimer();
    });

    function resetTimer() 
    {
        clearInterval(interval);
        interval = setInterval(showNextSlide, 6000);
    }
});

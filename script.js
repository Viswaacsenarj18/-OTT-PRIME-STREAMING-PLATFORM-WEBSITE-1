const movies = ["John Wick", "Extraction", "Tenet", "Avengers"];

function filterMovies() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let searchResults = document.getElementById("searchResults");
    searchResults.innerHTML = "";

    if (input === "") {
        searchResults.style.display = "none";
        return;
    }

    let filteredMovies = movies.filter(movie => movie.toLowerCase().includes(input));
    if (filteredMovies.length > 0) {
        searchResults.style.display = "block";
        filteredMovies.forEach(movie => {
            let div = document.createElement("div");
            div.textContent = movie;
            div.onclick = () => {
                document.getElementById("searchInput").value = movie;
                searchResults.style.display = "none";
            };
            searchResults.appendChild(div);
        });
    }
}
function filterMovies() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let movies = document.querySelectorAll(".movie-list img");

    movies.forEach(movie => {
        let altText = movie.alt.toLowerCase(); // Movie name from alt attribute
        let movieContainer = movie.closest(".genre"); // Get the genre section

        if (altText.includes(input)) {
            movie.style.display = "block";  // Show matching movie
            movieContainer.style.display = "block"; // Show the section
        } else {
            movie.style.display = "none"; // Hide non-matching movies
        }
    });

    // Hide empty categories (when no movie is visible)
    document.querySelectorAll(".genre").forEach(genre => {
        let visibleMovies = genre.querySelectorAll("img:not([style*='display: none'])");
        if (visibleMovies.length === 0) {
            genre.style.display = "none";
        }
    });
    function filterMovies() {
        let input = document.getElementById("searchInput").value.toLowerCase();
        let movies = document.querySelectorAll(".movie-list img");
    
        movies.forEach(movie => {
            let altText = movie.alt.toLowerCase();
            let movieContainer = movie.closest(".category"); // Updated from ".genre" to ".category"
    
            if (altText.includes(input)) {
                movie.style.display = "block";
                if (movieContainer) movieContainer.style.display = "block";
            } else {
                movie.style.display = "none";
            }
        });
        
    
        // Hide empty categories
        document.querySelectorAll(".category").forEach(category => {
            let visible = category.querySelectorAll("img:not([style*='display: none'])");
            if (visible.length === 0) {
                category.style.display = "none";
            }
        });
    }
    
}
window.addEventListener("load", () => {
    setTimeout(() => {
        const splash = document.getElementById("splash-screen");
        splash.style.display = "none";
    }, 4000); // Match the total animation + delay time
});

function filterSports() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.sport-card');
  
    cards.forEach(card => {
      const title = card.querySelector('h2').textContent.toLowerCase();
      card.style.display = title.includes(input) ? '' : 'none';
    });
  }
  
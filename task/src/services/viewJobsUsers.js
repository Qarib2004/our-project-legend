document.addEventListener("DOMContentLoaded", () => {
  // URL-dən id parametrini yoxla
  let userId = new URLSearchParams(window.location.search).get("id");

  // Əgər id yoxdursa, default olaraq 1 ID istifadə et
  if (!userId) {
    console.warn(
      "User ID is missing in the URL. Using default ID for testing."
    );
    userId = "1"; // Default ID
  }

  // API URL-si düzgün interpolasiya ilə təyin edilir
  const apiUrl = `https://flower-honeysuckle-empress.glitch.me/users/${userId}`;

  // Şəkil və LinkedIn URL-lərini istifadəçi ID-lərinə görə təyin edirik
  const profileImages = {
    1: "https://i.pinimg.com/736x/4b/cc/54/4bcc54ebe6d0e6700e3df3047c1129c8.jpg",
    2: "https://i.pinimg.com/736x/e5/7b/0e/e57b0ecd4c1e013ba7bfc003f7b5b91d.jpg",
    3: "https://i.pinimg.com/736x/2e/96/1d/2e961d92b033ac3a0d561a579c191d15.jpg",
    4: "https://i.pinimg.com/736x/3b/e5/8f/3be58f2ec9ac4377f336f59cb2f5475e.jpg",
    5: "https://i.pinimg.com/736x/2b/0e/95/2b0e957d6179c04e3a2654b1ed6a4feb.jpg",
  };

  const linkedinUrls = {
    1: "https://www.linkedin.com/in/elvin-abbasov-42b660159/",
    2: "https://www.linkedin.com/in/sara-aliyeva-486880186/",
    3: "https://www.linkedin.com/in/john-nelson-22053718b/",
    4: "https://www.linkedin.com/in/anna-mamedova-8b97a2247/",
    5: "https://www.linkedin.com/in/phillip-david-guliyev-4a223b191/",
  };

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        return response.text().then((errorText) => {
          // Səhv mesajını düzgün interpolasiya etdik
          throw new Error(`Error: ${response.status} - ${errorText}`);
        });
      }
      return response.json();
    })
    .then((data) => {
      const user = data;

      document.getElementById("name_title").innerText = user.name;
      document.getElementById("name").innerText = user.name;
      document.getElementById("email").innerText = user.email;
      document.getElementById("createdAt").innerText = new Date(
        user.createdAt
      ).toLocaleDateString();
      document.getElementById("experience-year").innerText =
        user.experienceYear;
      document.getElementById("bio").innerText = user.bio;
      document.getElementById("skills").innerText = user.skills.join(", ");

      // LinkedIn URL və profil şəkli üçün doğru URL təyin edirik
      const profileImageUrl = profileImages[userId];
      const linkedinUrl = linkedinUrls[userId];

      document.getElementById("linkedin-url").href = linkedinUrl;
      document.getElementById("linkedin-url").innerText = linkedinUrl;
      document.getElementById("profile-img").src = profileImageUrl;

      // previous page düyməsi
      document.querySelector(".go-back-btn").addEventListener("click", () => {
        window.location.href = "index.html";
      });
    })
    .catch((error) => {
      // Xətanın düzgün interpolasiyası
      console.error("Error fetching user data:", error);
      alert(`Error loading user details: ${error.message}`);
    });
});

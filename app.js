document.getElementById("search-button").addEventListener("click", function () {
  const username = document.getElementById("search-input").value;
  if (username) {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("User not found");
        }
        return response.json();
      })
      .then((data) => {
        document.getElementById("profile-image").src = data.avatar_url;
        document.getElementById("profile-name").textContent =
          data.name || "No name provided";
        document.getElementById(
          "profile-username"
        ).textContent = `@${data.login}`;
        document.getElementById("profile-username").href = data.html_url;
        document.getElementById("profile-bio").textContent =
          data.bio || "This profile has no bio";
        document.getElementById(
          "repos"
        ).innerHTML = `Repos: <span>${data.public_repos}</span>`;
        document.getElementById(
          "followers"
        ).innerHTML = `Followers: <span>${data.followers}</span>`;
        document.getElementById(
          "following"
        ).innerHTML = `Following: <span>${data.following}</span>`;
        document.getElementById(
          "location"
        ).innerHTML = `<img src="./images/location.svg" /> ${
          data.location || "Not Available"
        }`;
        document.getElementById(
          "website"
        ).innerHTML = `<img src="./images/url.svg" /> ${
          data.blog || "Not Available"
        }`;
        document.getElementById("website").href = data.blog || "#";
        document.getElementById(
          "twitter"
        ).innerHTML = `<img src="./images/twitter.svg" /> ${
          data.twitter_username ? `@${data.twitter_username}` : "Not Available"
        }`;
        document.getElementById(
          "company"
        ).innerHTML = `<img src="./images/building.svg" /> ${
          data.company || "Not Available"
        }`;
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("User not found!");
      });
  } else {
    alert("Please enter a GitHub username");
  }
});

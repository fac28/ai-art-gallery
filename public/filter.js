const imageContainers = document.querySelectorAll(".gallery-container");

function isTagged (tags, userFilter) {
  return tags.split(", ").some(function (tag) {
    return tag === userFilter;
  });
}

function hideImage (userFilter) {
  let allHidden = true;

  if (userFilter === "all") {
    imageContainers.forEach(function (imageContainer) {
      imageContainer.setAttribute("hidden", false);
    });
    return;
  }

  imageContainers.forEach(function (imageContainer) {
    const tags = imageContainer.querySelector(".main__tags").innerText;

    if (isTagged(tags, userFilter) === true) {
      imageContainer.setAttribute("hidden", false);
      allHidden = false;
    } else {
      imageContainer.setAttribute("hidden", true);
    }
  });

  if (allHidden) {
    const p = document.createElement("p");
    p.className = "main__no-images";
    p.innerText = "No images found";
    const main = document.querySelector("main");
    main.appendChild(p);
  }
}

const selectElement = document.querySelector(".filter");

selectElement.addEventListener("change", function (event) {
  const userFilter = event.target.value;
  const main = document.querySelector("main");
  const p = main.querySelector(".main__no-images");
  if (p) {
    main.removeChild(p);
  }

  hideImage(userFilter);
});

function getData(url) {
  $.ajax({
    url: url,
    dataType: "json",
    beforeSend: function (xhr) {
      xhr.setRequestHeader(
        "Authorization",
        "tcMkpcOiRNYnwn96kIxxOicKoMYgVA46D2OnifKSwjX70kUwUQWIzgLv"
      );
    },

    success: function (data) {
      const photos = data.photos;
      let photoHtml = "";

      photos.forEach(function (photo) {
        const imageUrl = photo.src.original;

        photoHtml += `
              <img src="${imageUrl}" class="rounded mb-4">
          `;
      });

      $("#photoContainer").html(photoHtml);
    },
    error: function (error) {
      console.error(error);
    },
  });
}

window.onload = function () {
  const url =
    "https://api.pexels.com/v1/search?page=1&query=random&per_page=20";
  getData(url);
};

function getNaturePhotos() {
  const url =
    "https://api.pexels.com/v1/search?page=1&query=nature&per_page=20";
  getData(url);
}

function getSunshinePhotos() {
  const url =
    "https://api.pexels.com/v1/search?page=1&query=sunshine&per_page=20";
  getData(url);
}

function getAnimalPhotos() {
  const url =
    "https://api.pexels.com/v1/search?page=1&query=animal&per_page=20";
  getData(url);
}

function getPeoplePhotos() {
  const url =
    "https://api.pexels.com/v1/search?page=1&query=people&per_page=20";
  getData(url);
}

function getVehiclePhotos() {
  const url =
    "https://api.pexels.com/v1/search?page=1&query=vehicle&per_page=20";
  getData(url);
}

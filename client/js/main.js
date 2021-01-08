(async function main() {
  const response = await fetch("http://localhost:3000/");
  const data = await response.json();
  const tbody = document.querySelector("tbody");

  data.forEach((value) => {
    const tr = document.createElement("tr");
    tr.innerHTML = renderData(value);
    tbody.appendChild(tr);
  });
  var options = {
    valueNames: [
      "abv",
      "address",
      "category",
      "city",
      "coordinates",
      "country",
      "description",
      "ibu",
      "name",
      "state",
      "website",
    ],
    page: 20,
    pagination: true,
  };
  new List("data", options);
})();

function renderData(data) {
  return `<td class="abv">${data.abv || ""}</td>
          <td class="address">${data.address || ""}</td>
          <td class="category">${data.category || ""}</td>
          <td class="city">${data.city || ""}</td>
          <td class="coordinates">${data.coordinates || ""}</td>
          <td class="country">${data.country || ""}</td>
          <td class="description">${data.description || ""}</td>
          <td class="ibu">${data.ibu || ""}</td>
          <td class="name">${data.name || ""}</td>
          <td class="state">${data.state || ""}</td>
          <td class="website">${data.website || ""}</td>`;
}

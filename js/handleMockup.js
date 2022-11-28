const inputMockupEl = document.querySelector("#url");
const btnMockupEl = document.querySelector(".custom-btn");
const iframeMockupEl = document.querySelectorAll(".mockup-wrapper iframe");
const isValidUrl = (urlString) => {
  var urlPattern = new RegExp(
    "^(https?:\\/\\/)?" + // validate protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // validate fragment locator
  return !!urlPattern.test(urlString);
};
/**
 * lấy ra cái link trong input (url)
 * link attribute src
 */

btnMockupEl.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(inputMockupEl.value);
  const url = inputMockupEl.value;
  if (isValidUrl(url)) {
    iframeMockupEl.forEach((item) => {
      item.setAttribute("src", url);
    });
  } else {
    alert("khong biet cai nao la link a");
  }
});

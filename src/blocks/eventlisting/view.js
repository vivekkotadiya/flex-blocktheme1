let eventPaged = 2;
function geteventList(paged, position, tax) {
  const params = new URLSearchParams();
  params.append("action", "geteventList");
  params.append("paged", paged);
  params.append("taxonomy", tax);
  getEventPosts(gb_ajax.ajaxurl, params, position);
}

async function getEventPosts(url, body, position) {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Cache-Control": "no-cache",
    },
    body: body,
  });

  var data = await response.json();

  if (response.status == 200) {
    if (data.html != "") {
      position.querySelector(".row").innerHTML +=
        data.html;
      position.querySelector(".listing-event__loadMore").dataset.paged =
        data.max_page;
      position
        .querySelector(".listing-event__loadMore")
        .classList.remove("active");
    }
  }
}
const intersectionObserver = new IntersectionObserver((entries) => {
  if (entries[0].intersectionRatio <= 0) return;
  var eventList = document.querySelector(".listing-event");
  var page = eventList.querySelector(".listing-event__loadMore").dataset.paged;
  var tax = eventList.querySelector(".listing-event__loadMore").dataset.tax;
  if (eventPaged <= page) {
    eventList.querySelector(".listing-event__loadMore").classList.add("active");
    geteventList(eventPaged, eventList, tax);
    eventPaged++;
  }
});
// start observing
if (document.querySelector(".listing-event__loadMore")) {
  intersectionObserver.observe(
    document.querySelector(".listing-event__loadMore")
  );
}

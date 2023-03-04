function elementBlogOverlayHeight() {
  document.querySelectorAll('.listing-blog .listing-blog__detail').forEach(function (resizeBlogItem) {

    resizeBlogItem.parentElement.parentElement.classList.remove("listing-blog__item--active");

    resizeBlogItem.removeAttribute("style");

    if(resizeBlogItem?.previousElementSibling){
      resizeBlogItem.previousElementSibling.removeAttribute("style");
    }
  

    let resizeItemHeight = resizeBlogItem.offsetHeight;

    if(resizeBlogItem?.previousElementSibling){
      resizeBlogItem.previousElementSibling.setAttribute("style","padding-bottom:" + resizeItemHeight + "px");
    }
   if(resizeBlogItem){
    resizeBlogItem.setAttribute("style","height:" + resizeItemHeight + "px");
   }
  

  }); 
}

document.addEventListener("DOMContentLoaded", function () {

  if (document.querySelector(".listing-blog")) {

    elementBlogOverlayHeight();

    if(document.body.classList.contains('page--is-touch')){
      deviceTouch = true;
    } else {
      deviceTouch = false;
    }

    let documentWidth = document.body.clientWidth;

    window.addEventListener('resize', function() {
      if(documentWidth != document.body.clientWidth){
        documentWidth = document.body.clientWidth;
			  elementBlogOverlayHeight();
      }
		});

    document.querySelectorAll(".listing-blog").forEach(function (blogList) {
      
      blogList.addEventListener(
        "click",
        function (e) {
          e = e || window.event;

          var target = e.target;

          if (e.target.classList.contains("listing-blog__filter-tax")) {
            e.preventDefault();
            document
              .querySelectorAll(".listing-blog__filter-tax")
              .forEach(function (tax) {
                tax.classList.remove("active-tax");
              });

            getblogList(0, target.dataset.id, blogList, true);

            target.classList.toggle("active-tax");
          } 
          
          else if (
            deviceTouch
            && !target.classList.contains("row-wrapper")
            && !target.classList.contains("row")
            && !target.classList.contains("listing-blog__content")
            && !target.classList.contains("listing-blog__loadMore")
            && !target.classList.contains("fa-spinner")
            && !target.closest(".listing-blog__item").classList.contains("listing-blog__item--active")
          ) {

            blogList.querySelectorAll('.listing-blog__item').forEach(function (blogItem) {
              blogItem.classList.remove("listing-blog__item--active");
            });

            target.closest(".listing-blog__item").classList.add("listing-blog__item--active");
          }

          return false;
        },
        false
      );
    });
  }
});
let blogPaged = 2;
function getblogList(paged, taxonomy, position, isFilter) {
  let featuredPostId = '';
 let filterEle = document.getElementsByClassName("listing-blog__filter");
  if(filterEle != undefined){
    featuredPostId = filterEle[0].dataset.featured;
  }
 
  const params = new URLSearchParams();
  params.append("action", "getblogList");
  params.append("paged", paged);
  params.append("taxonomy", taxonomy);

  if(featuredPostId != ''){
    params.append("featuredPostId", featuredPostId);
  }

  getBlogsPosts(gb_ajax.ajaxurl, params, position, isFilter);
}

async function getBlogsPosts(url, body, position, isFilter) {
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
      if (isFilter == true) {
        position.querySelector(".listing-blog__content .row").innerHTML =
          data.html;
          elementBlogOverlayHeight();
      } else {
        position.querySelector(".listing-blog__content .row").innerHTML +=
          data.html;
          elementBlogOverlayHeight();
      }
      position.querySelector(".listing-blog__loadMore").dataset.paged =
        data.max_page;
      position
        .querySelector(".listing-blog__loadMore")
        .classList.remove("active");
    }
    if (isFilter == true) {
      blogPaged = 2;
    }
  }
}

const intersectionObserver = new IntersectionObserver((entries) => {
  if (entries[0].intersectionRatio <= 0) return;
  var blogList = document.querySelector(".listing-blog");
  var tax = blogList.querySelector(".listing-blog__filter-tax.active-tax")
    .dataset.id;
  var page = blogList.querySelector(".listing-blog__loadMore").dataset.paged;
  if (blogPaged <= page) {
    blogList.querySelector(".listing-blog__loadMore").classList.add("active");
    getblogList(blogPaged, tax, blogList, false);
    blogPaged++;
  }
});
// start observing
if (document.querySelector(".listing-blog__loadMore")) {
  intersectionObserver.observe(
    document.querySelector(".listing-blog__loadMore")
  );
}

let imgList = [...document.querySelectorAll('img')];
let length = imgList.length;

const imgLazyLoad = (function () {
  let count = 0;

  return function () {
    let deleteIndexList = [];
    imgList.forEach((img, index) => {
      let rect = img.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        img.src = img.dataset.src;
        deleteIndexList.push(index);
        count++;
        if (count === length) {
          document.removeEventListener('scroll', imgLazyLoad);
        }
      }
    });
    imgList = imgList.filter((img, index) => !deleteIndexList.includes(index));
  };
})();

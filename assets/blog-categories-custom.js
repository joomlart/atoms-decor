let getCategory =  document.querySelectorAll(".category-item > a");
let arr_Cat = [...getCategory];
arr_Cat.map((item) => {
  let cutstring = item.innerHTML;
  cutstring = cutstring.replace('/blogs/', '');
  cutstring = cutstring.replace('-', ' ')
  item.innerHTML = cutstring;
}
);

function addMove() {
  let move =  document.querySelectorAll(".footer .newsletter-form__field-wrapper .field__input");
  move.classList.add('move');;
}


// if (move !== null && move.value === "")
// {
//   move.classList.add("mystyle");
// }

const moveTR = (ev) => {
  const EL_tr = ev.currentTarget.closest("tr");
  const sel = EL_tr.closest("table").id === "table1" ? "#table2" : "#table1";
  document.querySelector(sel + " tbody").append(EL_tr);
};

document.querySelectorAll("table button")
  .forEach(EL => EL.addEventListener("click", moveTR));
function finishToDo(div) {
  div.disabled = true;
  div = div.parentElement.parentElement;
  div.classList.add("finished");
};
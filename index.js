var viz;
function initViz() {
  // var url = url = "http://public.tableau.com/views/RegionalSampleWorkbook/Storms";
  // var url = "https://10ax.online.tableau.com/t/utaustindataninjasdev320155/views/chart1/Story1";
  var url =
    "https://10ax.online.tableau.com/t/utaustindataninjasdev320155/views/HackathonProjectStorylines/Story1";
  var containerDiv = d3.select("#vizContainer").node();
  viz = new tableau.Viz(containerDiv, url);
}
initViz();

var i = 0;

function moveSlideShow(direction) {
  console.log(direction);
  if (direction == "L") {
    if (i === 0) {
      i = 6;
      workbook.activateSheetAsync(i);
      i = i - 1;
    } else {
      i = i - 1;
      workbook.activateSheetAsync(i);
    }
  } else if (direction == "R") {
    if (i === 6) {
      i = 0;
      workbook.activateSheetAsync(i);
      i = i + 1;
    } else {
      i = i + 1;
      workbook.activateSheetAsync(i);
    }
  }
}

d3.select("#left").on("click", function() {
  workbook = viz.getWorkbook();
  console.log(workbook);
  moveSlideShow("L");
});
d3.select("#right").on("click", function() {
  workbook = viz.getWorkbook();
  console.log(workbook);
  moveSlideShow("R");
});

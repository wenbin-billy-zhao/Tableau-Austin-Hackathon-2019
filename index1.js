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

function moveSlideShow(direction) {
  console.log(direction);
  if (direction == "L") {
    let MyWorkSheet = workbook
      .getActiveSheet()
      .activatePreviousStoryPointAsync();
  } else if (direction == "R") {
    let MyWorkSheet = workbook.getActiveSheet().activateNextStoryPointAsync();
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

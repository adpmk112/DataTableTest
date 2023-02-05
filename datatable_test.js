var reviewInfoCheck = 0;
var dataTable;

$(document).ready(function () {
  drawTable();
});

$(document).on("click", "#showVoting", function () {
  reviewInfoCheck = 1;
  dataTable.destroy();
  drawTable();
});

function imgHoverAnimate() {
  var imgElement = document.getElementById("photo");
  imgElement.classList.add("imgPreview");
}

function dropDownShow(id) {
  document.getElementById("myDropdown" + id).classList.toggle("show");

  window.onclick = function (event) {
    if (
      !event.target.matches(".dropbtn") &&
      !event.target.matches(".fa-caret-down")
    ) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
    if (event.target.matches("aTagId86")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        openDropdown.classList.toggle("show");
      }
    }
  };
}

function drawTable() {
  $(document).ready(function () {
    dataTable = $("#pTable").DataTable({
      //   data:[
      //     new Anime("Kimetsu no Yaiba", "From 2019","Drama, Action, Adventure, Dark Fantasy","Beginners/Fans"),
      //     new Anime("Re:Zero -Starting Life in Another World", "From 2016","Isekai, Adventure, Dark Fantasy, Time loop",
      //     "Fans/Freaks")
      //   ],

      //  data:pData,

      data: pData,

      pageLength: 0,
      lengthMenu: [2, 3, 5, 10],

      columns: [
        {
          data: "photo",
          render: function (data, type, row) {
            return (
              '<img src="' +
              data +
              '" onmouseover="imgHoverAnimate()" id="photo" alt="Anime icon" class="img-circle" width="40" height="40">'
            );
          },
        },
        { data: "name" },
        { data: "airDate" },
        { data: "genre" },
        { data: "recommendedFor" },
        // {data: 'review',
        //     render : {
        //     _: 'rating',
        //     sort: 'nb_voting'
        // },}
        {
          data: "rating",
        },
        {
          data: "link",
          render: function (data, type, row) {
            return (
              '<form action="' +
              data +
              '"> <button type="submit" class="btn btn-primary"><i class="fas fa-angle-double-right"></i></button> </form>'
            );
          },
        },
      ],
      columnDefs: [
        {
          targets: [0],
          // visible: false,
          // searchable: false,
          orderable: false,
        },
        {
          targets: [4],
          searchable: false,
        },
      ],
    });
  });
}

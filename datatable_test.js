var reviewInfoCheck = 0;
var dataTable;

$(document).ready(function () {
  drawTable();
});

function imgHoverAnimate() {
  var imgElement = document.getElementById("photo");
  imgElement.classList.add("imgPreview");
}

function drawTable() {
  $(document).ready(function () {
    dataTable = $("#pTable").DataTable({

      data: pData,
      pageLength: 0,
      lengthMenu: [10, 20, 30, 40],

      columns: [
        {
          data: "photo",
          render: function (data, type, row) {
            return (
              '<img src="' +
              data +
              '" onmouseover="imgHoverAnimate()" id="photo" class="img-circle" width="40" height="40">'
            );
          },
        },
        { data: "name" },
        { data: "airDate" },
        { data: "genre" },
        { data: "recommendedFor" },
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
      dom: 'Bfrtip',
      buttons:[
        {
          extend : 'copy',
          text: 'Copy',
          filename: 'Copy report'
        },
        {
          extend: 'excel',
          text: 'Excel',
          filename: 'Anime report'
        },
        {
          extend: 'csv',
          text: 'CSV',
          filename: 'Anime report'
        },
        {
          extend: 'print',
          text: 'Print',
          filename: 'Anime report'
        }
      ]
    });
  });
}

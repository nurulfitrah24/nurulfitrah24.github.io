const endpoint_url='https://51018024.p-web.click/event-tari/api';

function getTariList() {
  fetch(endpoint_url + "/events/eventlist")
    .then(status)
    .then(json)
    .then(function(data) {
      var daftarevent = "";
      data.event.forEach(function(daftar) {
        daftarevent += `
        <div class="album py-5 bg-light">
          <div class="container">
              <div class="col">
                <div class="card shadow-sm">
                   <img src="${daftar.gambar}" alt="" >
                  <div class="card-body">
                    <h4>${daftar.nama_event}</h4>
                    <p class="card-text">${daftar.deskripsi}</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <a href="detailtari.html?id=${daftar.kode_event}" type="button" class="btn btn-warning">Info Tempat</button></a>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              </div>
              </div>
            ` ;
        });
          document.getElementById("daftarevent").innerHTML = daftarevent;
        })
    .catch(error);
}

function getTariDetail(id) {
  fetch( endpoint_url + "/tari/taridetail/id/" + id )
    .then(status)
    .then(json)
    .then(function(data) {
      var detailtari = "";
        data.tari.forEach(function(detail) {
        detailtari += `
                <h2 style="text-align:center;margin-top:30px;">${detail.nama_event}</h2>
                <div class="card mb-3" style="margin:0 auto;width:80%">
                  <img src="${detail.poster}" width="50%" height="50%" style="display: block; margin: auto;">
                  <div class="card-body">
                    <h5 class="card-title">Informasi Tempat</h5>
                    <p class="card-text">${detail.tempat}</p>
                  </div>
                </div>
          `;
        });
              document.getElementById("detailtari").innerHTML = detailtari;
        })
  .catch(error);
}

var btnResult = document.getElementById("btnResult");
btnResult.onclick = function () {

    var diemChuan = document.getElementById("diemChuan").value * 1;
    var diemToan = document.getElementById("diemToan").value * 1;
    var diemLy = document.getElementById("diemLy").value * 1;
    var diemHoa = document.getElementById("diemHoa").value * 1;
    var khuVuc = document.getElementById("khuVuc").value * 1;
    var doiTuong = document.getElementById("doiTuong").value * 1;
    var tongDiem = 0;

    tongDiem = diemToan + diemLy + diemHoa + khuVuc + doiTuong;

    if (diemToan == 0 || diemLy == 0 || diemHoa == 0) {
        document.getElementById("diemDatDuoc").innerHTML = "Tổng điểm : " + tongDiem;
        document.getElementById("result").innerHTML = "Kết quả : Trượt " + "(Do có môn bị điểm 0)";
    } else if (tongDiem >= diemChuan) {
        document.getElementById("diemDatDuoc").innerHTML = "Tổng điểm : " + tongDiem;
        document.getElementById("result").innerHTML = "Kết quả : Đỗ";
    } else {
        document.getElementById("diemDatDuoc").innerHTML = "Tổng điểm : " + tongDiem;
        document.getElementById("result").innerHTML = "Kết quả : Trượt";
    }

}

/*
Tính tiền Điện
■ Input
- thông tin tiêu thụ bao nhiêu số điện
■ Process
- Tạo biến
  + soDien
  + tienDien
  + quyDoi

- Xử lý
  if (soDien <= 50) {
    tienDien = soDien * 500 ;
  } else if ( 50 < soDien && soDien <= 100) {
    tienDien = 50 * 500 + (soDien - 50) * 650 ;
  } else if ( 100 < soDien && soDien <= 200) {
    tienDien = 50 * 500 + 50 * 650 + (soDien - 100) * 850 ;
  }  else if ( 200 < soDien && soDien <= 350) {
    tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soDien - 200) * 1100 ;
  } else {
    tienDien = 50 * 500 + 50 * 650 + 100 * 850 + 200 * 1100 + (soDien - 350) * 1300 ;
  }

- Xuất kết quả
  + ketQua.innerHTML = 

■ Output
- Xuất ra số tiền điện phải trả
*/

var btnTienDien = document.getElementById("btnTienDien");
btnTienDien.onclick = function () {
    var chuHo = document.getElementById("chuHo").value ;
    var soDien = document.getElementById("soDien").value * 1;
    var tienDien = 0 ;

    if (soDien <= 50) {
        tienDien = soDien * 500 ;
      } else if ( 50 < soDien && soDien <= 100) {
        tienDien = 50 * 500 + (soDien - 50) * 650 ;
      } else if ( 100 < soDien && soDien <= 200) {
        tienDien = 50 * 500 + 50 * 650 + (soDien - 100) * 850 ;
      }  else if ( 200 < soDien && soDien <= 350) {
        tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soDien - 200) * 1100 ;
      } else {
        tienDien = 50 * 500 + 50 * 650 + 100 * 850 + 200 * 1100 + (soDien - 350) * 1300 ;
      }

      document.getElementById("tienDien").innerHTML = "Tiền điện của nhà " + chuHo + " là : " + tienDien + " VND";

}

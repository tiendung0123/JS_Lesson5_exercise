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
  var chuHo = document.getElementById("chuHo").value;
  var soDien = document.getElementById("soDien").value * 1;
  var tienDien = 0;

  if (soDien <= 50) {
    tienDien = soDien * 500;
  } else if (50 < soDien && soDien <= 100) {
    tienDien = 50 * 500 + (soDien - 50) * 650;
  } else if (100 < soDien && soDien <= 200) {
    tienDien = 50 * 500 + 50 * 650 + (soDien - 100) * 850;
  } else if (200 < soDien && soDien <= 350) {
    tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soDien - 200) * 1100;
  } else {
    tienDien = 50 * 500 + 50 * 650 + 100 * 850 + 200 * 1100 + (soDien - 350) * 1300;
  }

  const config = { style: "currency", currency: "VND" };
  const formated = new Intl.NumberFormat("vi-VN", config);

  document.getElementById("tienDien").innerHTML = "Tiền điện của nhà " + chuHo + " là : " + formated.format(tienDien);

}

/*
Chương trình tính thuế thu nhập
■ Input
- Nhập thông tin cá nhân
  + Họ tên
  + Tổng thu nhập năm
  + Số người phụ thuộc
■ Process
- Tạo biến
  + btnThue
  + hoTen
  + thuNhap
  + phuThuoc
  + thuNhapChiuThue
  + tienThue

- Xử lý
  thuNhapChiuThue = thuNhap - 4 - phuThuoc * 1.6 ;

  if (thuNhapChiuThue <= 60) {
    tienThue = thuNhapChiuThue * 0.05 ;
  } else if (60 < thuNhapChiuThue && thuNhapChiuThue <= 120) {
    tienThue = thuNhapChiuThue * 0.1 ;
  } else if (120 < thuNhapChiuThue && thuNhapChiuThue <= 210) {
    tienThue = thuNhapChiuThue * 0.15 ;
  } else if (210 < thuNhapChiuThue && thuNhapChiuThue <= 384) {
    tienThue = thuNhapChiuThue * 0.2 ;
  } else if (384 < thuNhapChiuThue && thuNhapChiuThue <= 624) {
    tienThue = thuNhapChiuThue * 0.25 ;
  } else if (624 < thuNhapChiuThue && thuNhapChiuThue <= 960) {
    tienThue = thuNhapChiuThue * 0.3 ;
  } else {
    tienThue = thuNhapChiuThue * 0.35 ;
  }

- Xuất kết quả
  + ketQua.innerHTML = 

■ Output
- Tính thuế thu nhập cá nhân phải trả theo quy định
*/

var btnThue = document.getElementById("btnThue");
btnThue.onclick = function () {
  var hoTen = document.getElementById("hoTen").value;
  var thuNhap = document.getElementById("thuNhap").value * 1;
  var phuThuoc = document.getElementById("phuThuoc").value * 1;
  var thuNhapChiuThue = 0;
  var tienThue = 0;

  thuNhapChiuThue = thuNhap - 4 - phuThuoc * 1.6;

  if (thuNhapChiuThue <= 60) {
    tienThue = thuNhapChiuThue * 0.05;
  } else if (60 < thuNhapChiuThue && thuNhapChiuThue <= 120) {
    tienThue = thuNhapChiuThue * 0.1;
  } else if (120 < thuNhapChiuThue && thuNhapChiuThue <= 210) {
    tienThue = thuNhapChiuThue * 0.15;
  } else if (210 < thuNhapChiuThue && thuNhapChiuThue <= 384) {
    tienThue = thuNhapChiuThue * 0.2;
  } else if (384 < thuNhapChiuThue && thuNhapChiuThue <= 624) {
    tienThue = thuNhapChiuThue * 0.25;
  } else if (624 < thuNhapChiuThue && thuNhapChiuThue <= 960) {
    tienThue = thuNhapChiuThue * 0.3;
  } else {
    tienThue = thuNhapChiuThue * 0.35;
  }

  document.getElementById("thuNhapChiuThue").innerHTML = "Thu nhập chịu thuế là : " + thuNhapChiuThue + " (triệu đồng)";
  document.getElementById("tienThue").innerHTML = "Tiền thuế cần nộp là : " + tienThue.toFixed(2) + " (triệu đồng)";
}

/*
Chương trình tính cáp
■ Input
- Nhập mã khách hàng
- Nhập loại khách hàng
- Số kết nối 
  + Doanh nghiệp : cho nhập số kết nối
  + Nhà dân : chỉ có 1 nên không cần nhập số kết nối (hide or disabled)

■ Process
- Tạo biến
  + maKhachHang (TH đã đăng kí, có thông tin loign)
  + loaiKhachHang (dropdownlist : Doanh nghiệp, Nhà dân)
  + soKetNoi
  + chiPhi
- Xử lý
  + Tạo flowchat

- Xuất kết quả
  + ketQua.innerHTML = 

■ Output
- Tính hóa đơn của khách hàng, theo quy định và mức giá đã đưa ra.
*/

// function myFunction () {
//   document.getElementById("soKetNoi").disabled = true ;
// }

function myFunction() {
  var loaiKhachHang = document.getElementById("loaiKhachHang").value;

  if (loaiKhachHang == 2) {
    document.getElementById("soKetNoi").disabled = true;
  } else {
    document.getElementById("soKetNoi").disabled = false;
  }
}

var btnTienCap = document.getElementById("btnTienCap");
btnTienCap.onclick = function () {
  var maKhachHang = document.getElementById("maKhachHang").value;
  var loaiKhachHang = document.getElementById("loaiKhachHang").value;
  var soKetNoi = document.getElementById("soKetNoi").value * 1;
  var soKenhCaoCap = document.getElementById("soKenhCaoCap").value * 1;
  var chiPhi = 0;

  if (loaiKhachHang == 2) {
    chiPhi = 4.5 + 20.5 + 7.5 * soKenhCaoCap;
  } else {
    if (soKetNoi <= 10) {
      chiPhi = 15 + 75 + 50 * soKenhCaoCap;
    } else {
      chiPhi = 15 + 75 + (soKetNoi - 10) * 5 + 50 * soKenhCaoCap;
    }
  }

  document.getElementById("chiPhi").innerHTML = "Chi phí hóa đơn của khách hàng " + maKhachHang + " là : " + chiPhi + " $";
}
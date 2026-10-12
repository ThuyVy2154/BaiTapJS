// -------------------------------------------------------------
// BÀI 1: TÍNH TIỀN LƯƠNG NHÂN VIÊN
// -------------------------------------------------------------
document.getElementById('btnTinhLuong').onclick = function () {
  const LUONG_MOT_NGAY = 100000;
  const soNgayLam = Number(document.getElementById('soNgayLam').value);

  const tongLuong = soNgayLam * LUONG_MOT_NGAY;

  const tagKetQua = document.getElementById('ketQuaB1');
  tagKetQua.classList.remove('d-none');
  tagKetQua.innerHTML = `Tổng tiền lương: <strong>${tongLuong.toLocaleString()} VND</strong>`;
};

// -------------------------------------------------------------
// BÀI 2: TÍNH GIÁ TRỊ TRUNG BÌNH CỦA 5 SỐ THỰC
// -------------------------------------------------------------
document.getElementById('btnTinhTB').onclick = function () {
  const num1 = Number(document.getElementById('num1').value);
  const num2 = Number(document.getElementById('num2').value);
  const num3 = Number(document.getElementById('num3').value);
  const num4 = Number(document.getElementById('num4').value);
  const num5 = Number(document.getElementById('num5').value);

  const giaTriTB = (num1 + num2 + num3 + num4 + num5) / 5;

  const tagKetQua = document.getElementById('ketQuaB2');
  tagKetQua.classList.remove('d-none');
  tagKetQua.innerHTML = `Giá trị trung bình: <strong>${giaTriTB}</strong>`;
};

// -------------------------------------------------------------
// BÀI 3: QUY ĐỔI TIỀN USD SANG VND
// -------------------------------------------------------------
document.getElementById('btnDoiTien').onclick = function () {
  const TY_GIA_USD = 23500;
  const soTienUSD = Number(document.getElementById('soTienUSD').value);

  const soTienVND = soTienUSD * TY_GIA_USD;

  const tagKetQua = document.getElementById('ketQuaB3');
  tagKetQua.classList.remove('d-none');
  tagKetQua.innerHTML = `Số tiền quy đổi: <strong>${soTienVND.toLocaleString()} VND</strong>`;
};

// -------------------------------------------------------------
// BÀI 4: TÍNH DIỆN TÍCH, CHU VI HÌNH CHỮ NHẬT
// -------------------------------------------------------------
document.getElementById('btnTinhHCN').onclick = function () {
  const chieuDai = Number(document.getElementById('chieuDai').value);
  const chieuRong = Number(document.getElementById('chieuRong').value);

  const dienTich = chieuDai * chieuRong;
  const chuVi = (chieuDai + chieuRong) * 2;

  const tagKetQua = document.getElementById('ketQuaB4');
  tagKetQua.classList.remove('d-none');
  tagKetQua.innerHTML = `Diện tích: <strong>${dienTich}</strong> | Chu vi: <strong>${chuVi}</strong>`;
};

// -------------------------------------------------------------
// BÀI 5: TÍNH TỔNG 2 KÝ SỐ
// -------------------------------------------------------------
document.getElementById('btnTongKySo').onclick = function () {
  const soNhap = Math.abs(Number(document.getElementById('soHaiChuSo').value));

  // Lấy chữ số hàng đơn vị và hàng chục
  const soHangDv = soNhap % 10;
  const soHangChuc = Math.floor(soNhap / 10);

  const tongHaiKySo = soHangChuc + soHangDv;

  const tagKetQua = document.getElementById('ketQuaB5');
  tagKetQua.classList.remove('d-none');
  tagKetQua.innerHTML = `Chữ số hàng chục: <strong>${soHangChuc}</strong>, Hàng đơn vị: <strong>${soHangDv}</strong><br>Tổng 2 ký số: <strong>${tongHaiKySo}</strong>`;
};
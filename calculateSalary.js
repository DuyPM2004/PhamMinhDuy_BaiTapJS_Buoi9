/**
 * Đầu vào:
 * - Tạo biến luongNgay và gán giá trị 100000 (lương mỗi ngày).
 * - Tạo biến soNgayLam và cho phép người dùng nhập số ngày làm việc.
 *
 * Xử lý:
 * - Tạo biến tongTien và gán giá trị 0.
 * - Cập nhật tongTien bằng cách nhân luongNgay với soNgayLam.
 *
 * Đầu ra:
 * - In ra tongTien (tiền lương của nhân viên).
 */
function tinhLuong() {
   const luongNgay = parseFloat(document.getElementById("luongNgay").value); // Chuyển đổi thành số
   const soNgayLam = parseFloat(document.getElementById("soNgayLam").value); // Chuyển đổi thành số

   if (isNaN(luongNgay) || isNaN(soNgayLam) || luongNgay <= 0 || soNgayLam <= 0) {
       document.getElementById("tongTien").innerHTML = "Vui lòng nhập số hợp lệ cho lương và số ngày làm việc.";
   } else {
       let tongTien = luongNgay * soNgayLam;
       document.getElementById("tongTien").innerHTML = `Tiền lương nhân viên = ${tongTien} VND`;
   }
}

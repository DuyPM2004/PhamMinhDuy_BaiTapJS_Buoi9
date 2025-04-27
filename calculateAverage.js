/**
 * Đầu vào:
 * - Khai báo 5 biến số thực và được gán giá trị từ các input field.
 * - Khai báo biến result_DTB để lưu giá trị điểm trung bình.
 * Xử lý:
 * - Kiểm tra xem tất cả các giá trị nhập vào có hợp lệ không (là số và không rỗng).
 * - Tính điểm trung bình bằng cách cộng 5 số lại và chia cho 5.
 * Đầu ra:
 * - Xuất kết quả điểm trung bình ra màn hình.
 */
function TinhDTB() {
    const x1 = Number(document.getElementById("number_x1").value);
    const x2 = Number(document.getElementById("number_x2").value);
    const x3 = Number(document.getElementById("number_x3").value);
    const x4 = Number(document.getElementById("number_x4").value);
    const x5 = Number(document.getElementById("number_x5").value);

    if ([x1, x2, x3, x4, x5].some(val => isNaN(val) || val === "" || val <= 0)) {
        document.getElementById("result_DTB").innerHTML = "Vui lòng nhập đầy đủ 5 số hợp lệ!";
        return;
    }
    
    let result_DTB = (x1 + x2 + x3 + x4 + x5) / 5;

    document.getElementById("result_DTB").innerHTML = `Giá trị trung bình của 5 số = ${result_DTB}`;
}

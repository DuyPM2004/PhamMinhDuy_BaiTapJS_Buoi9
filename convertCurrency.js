/**
 * Đầu vào:
 * - Một biến lưu giá USD (giá trị cố định là 23,500 VND cho mỗi USD).
 * - Một biến lưu số lượng USD người dùng nhập vào (lấy từ trường input).
 * - Một biến tongTien khởi tạo bằng 0, dùng để lưu kết quả tính tiền sau khi đổi.
 *
 * Xử lý:
 * - Kiểm tra xem giá trị người dùng nhập vào có phải là một số hợp lệ (lớn hơn 0 hay không).
 * - Nếu hợp lệ, tính tổng số tiền sau khi đổi bằng cách nhân giá USD với số lượng USD.
 *   => tongTien = giaUSD * soLuong
 * - Nếu không hợp lệ, hiển thị thông báo lỗi yêu cầu người dùng nhập lại.
 *
 * Đầu ra:
 * - In ra số tiền sau khi đổi (tổng tiền đã được tính) lên màn hình trong phần tử có id là "tongTienDoi".
 * - Nếu không hợp lệ, hiển thị thông báo lỗi.
 */
function doiTien(){
    const giaUSD = 23500;  
    const soLuong = Number(document.getElementById("soLuong").value);  
    let tongTien = 0;

    if (isNaN(soLuong) || soLuong <= 0) {
        document.getElementById("tongTienDoi").innerHTML = `
            <div style="border: 2px solid red; padding: 10px; margin-top: 20px;">
                Vui lòng nhập một số hợp lệ và lớn hơn 0!
            </div>
        `;
    } else {
        
        tongTien = giaUSD * soLuong;
        document.getElementById("tongTienDoi").innerHTML = `
            <div style="border: 2px solid green; padding: 10px; margin-top: 20px;">
                Số tiền sau khi đổi = ${tongTien} VND
            </div>
        `;
    }
}

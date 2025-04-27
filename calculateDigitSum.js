/**
 * Đầu vào:
 * - Biến a là một số nguyên có 2 chữ số, được người dùng nhập vào.
 *
 * Xử lý:
 * - Kiểm tra nếu số nhập vào là một số có 2 chữ số (từ 10 đến 99).
 * - Tách từng chữ số của số này bằng cách sử dụng phép toán chia lấy phần dư và chia lấy phần nguyên.
 * - Tính tổng của các chữ số bằng cách cộng dồn từng chữ số đã tách.
 *
 * Đầu ra:
 * - Nếu số nhập vào là hợp lệ (2 chữ số), hiển thị tổng của hai chữ số.
 * - Nếu số không hợp lệ, hiển thị thông báo yêu cầu nhập số có 2 chữ số.
 */
function devideNumber() {
    let a = Number(document.getElementById("number").value); 
    let b, total = 0;

    if (a >= 10 && a <= 99) {  
        while (a > 0) {
            b = a % 10;
            total += b;
            a = Math.floor(a / 10);
        }
        document.getElementById("total").innerHTML = `
            <div style="border: 2px solid green; padding: 10px; margin-top: 20px;">
                Tổng 2 chữ số là: <b>${total}</b>
            </div>
        `;
    } else {
        document.getElementById("total").innerHTML = `
            <div style="border: 2px solid red; padding: 10px; margin-top: 20px;">
                Vui lòng nhập đúng số có 2 chữ số!
            </div>
        `;
    }
}

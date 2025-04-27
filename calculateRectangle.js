/**
 * Đầu vào:
 * - Biến a là chiều dài hình chữ nhật.
 * - Biến b là chiều rộng hình chữ nhật.
 * Xử lý:
 * - Biến P = (a + b) * 2 (P là chu vi hình chữ nhật).
 * - Biến S = a * b (S là diện tích hình chữ nhật).
 * Đầu ra:
 * - Xuất kết quả chu vi và diện tích ra màn hình.
 */
function calculate() {
    const a = Number(document.getElementById("length").value);
    const b = Number(document.getElementById("width").value);

    if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
        document.getElementById("result").innerHTML = "Vui lòng nhập chiều dài và chiều rộng hợp lệ (lớn hơn 0).";
        return;
    }

    let P = (a + b) * 2; 
    let S = a * b;      

    document.getElementById("result").innerHTML = `
        Chu vi hình chữ nhật = ${P} <br> 
        Diện tích hình chữ nhật = ${S}
    `;
}

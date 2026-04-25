/*
Câu 4: Viết chương trình quản lý khách hàng của một công ty bất động sản. Tạo đối
tượng Khách hàng bao gồm các thông tin như sau: Mã khách hàng, Tên khách
hàng, Số điện thoại, Địa chỉ ,Email.
Yêu cầu:
    - Thêm mới được một khách hàng
    - Hiển thị được danh sách khách hàng
*/

class KhachHang{
    constructor(maKhachHang,tenKhachHang, soDienThoai, diaChi, email){
        this.maKhachHang = maKhachHang;
        this.tenKhachHang = tenKhachHang;
        this.soDienThoai = soDienThoai;
        this.diaChi = diaChi;
        this.email = email;
    }
}

let danhSach = [];

function themKhachHang(maKhachHang, tenKhachHang, soDienThoai, diaChi, email) {
    let kh = new KhachHang(maKhachHang, tenKhachHang, soDienThoai, diaChi, email);
    danhSach.push(kh);
}

function hienThiDanhSach() {
    console.log("===== DANH SÁCH KHÁCH HÀNG =====");

    let maxMa = Math.max(...danhSach.map(x => x.maKhachHang.length)) + 2;
    let maxTen = Math.max(...danhSach.map(x => x.tenKhachHang.length)) + 2;
    let maxSdt = Math.max(...danhSach.map(x => x.soDienThoai.length)) + 2;
    let maxDc = Math.max(...danhSach.map(x => x.diaChi.length)) + 2;
    let maxEmail = Math.max(...danhSach.map(x => x.email.length)) + 2;

    console.log(
        "Mã".padEnd(maxMa) + "|" +
        "Tên".padEnd(maxTen) + "|" +
        "SĐT".padEnd(maxSdt) + "|" +
        "ĐC".padEnd(maxDc) + "|" +
        "Email"
    );

    for (let kh of danhSach) {
        console.log(
            kh.maKhachHang.padEnd(maxMa) + "|" +
            kh.tenKhachHang.padEnd(maxTen) + "|" +
            kh.soDienThoai.padEnd(maxSdt) + "|" +
            kh.diaChi.padEnd(maxDc) + "|" +
            kh.email.padEnd(maxEmail)
        );
    }
}

// INPUT
themKhachHang("01", "An", "0123", "HN", "an@gmail.com");
themKhachHang("02", "Binh", "0456", "HP", "binh@gmail.com");
themKhachHang("22", "Nhi", "0222222", "QN", "nhi@gmail.com");
themKhachHang("15", "Bi", "0548522", "PT", "bi@gmail.com");

hienThiDanhSach();

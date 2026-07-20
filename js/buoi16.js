console.log("Buổi 16");

// cú pháp Function Declaration: function ten_function(){ lệnh};

//cú pháp Function Expression

let tinhTong = function (a, b) {
console.log("======Tinh Tong======");
let tong = a + b;
console.log(tong);
return tong;
};

let tong = tinhTong(10, 20);
console.log("tong = ", tong);

// tinh tien (giá , sluong) trả về số tiền

let tinhTien = function (a, b){
    console.log("Tinh Tiền");
    return a*b;
};

let soTien = tinhTien( 3, 10000);
console.log("Tong tien la: ", soTien);
// 
// ARROW FUNTION
// HÀM MŨI TÊN
// => tối giản code dành cho hàm chỉ có 1 return
let tinhTong_v3 = (a,b) => {
    return a+b;
}
console.log("🧡 ARROW FCN", tinhTong_v3(5,8));

//chỉ có 1 tham số
let tinhBinhPhuong = so => so*so;
console.log("🧡 Tính Bình Phương", tinhBinhPhuong(5));

let kiemTraSchan = a => a % 2 ==0 ? "Đây là số chẵn" : "Đây là số lẻ "

console.log("🧡 Kiểm tra số ", kiemTraSchan(8)) 

let tinhHieu_v1 = (a, b) => a-b;
let tinhHieu_v2 = (a, b) => {
    return a-b;
}
let tinhTich = (a, b) => a*b;
let tinhTich_v2 = (a, b) => {
    return a*b;
}
let kiemTraDuTuoi = tuoi => tuoi >= 18 ? "đủ tuổi" : "không đủ tuổi";

let kiemTraDuTuoi_v2 = tuoi => {
    if ( tuoi >= 18) 
       return "Đủ tuổi";
     else return "Không đủ tuổi "
}

console.log("🧡 Tinh HIỆU V1", tinhHieu_v1(9,3));
console.log("🧡 Tinh HIỆU V2", tinhHieu_v2(9,3));
console.log("🧡 Tinh Tích V1", tinhTich(9,3));
console.log("🧡 Tinh Tích V2", tinhTich_v2(9,3));
console.log("🧡 Kiem tra Tuoi", kiemTraDuTuoi(13));
console.log("🧡 Kiem tra Tuoi", kiemTraDuTuoi_v2(13));

// default param _ tạo giá trị dự dòng để tránh undifite
// xinChao
 let xinChao = (name = "bạn") => {
    console.log("🧡  Xin Chào", name);
 }
xinChao("S là Ngyeu của tôi!")
xinChao() // nếu quên truyền gtri thì sẽ ra mặc  định là bạn

// ham giam gia (giaTien, phan trăm giam)

let giamGia = ( gia, phanTram = 0 ) => gia - gia*phanTram/100 ;

console.log("🧡 tong tien", giamGia(100000, 6).toLocaleString());
console.log("🧡 tong tien", giamGia(200000).toLocaleString());
console.log("🧡 tong tien", giamGia(100000, 8).toLocaleString());
console.log("🧡 tong tien", giamGia(100000).toLocaleString());


//callback function
// hàm ơcợc gọi lại
// callback_fn : sẽ là 1 hàm nào đó bât skif
let thucHienChucNang = (callback_fn) =>
{
    console.log("🧡=== Vào hàm callback==== ");
    callback_fn();
    console.log("🧡=== Kết thúc hàm callback==== ");

}

thucHienChucNang(xinChao);

let hienThiKetQua = ketQua => {
    console.log("🧡 Ket Qua :", ketQua);
}

let tinhTong_cb = (a, b, fnc) => {
    let tong = a +b ;
    fnc(tong)
}

tinhTong_cb(3, 5, hienThiKetQua)

//=> tính tổng , hienThiKetQua(8) { clg ket qua :>>>>}

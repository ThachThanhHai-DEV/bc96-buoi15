dom("#r1").innerText= "Hello 1"
dom("#r2").innerText= "Hello 2"
dom("#r3").innerText= "Hello 3"
dom("#r4").innerText= "Hello 4"

function dom(sel){
    return document.querySelector(sel)
}

let a = 10 , b = 20 ;
tong(a, b); //sử dụng hàm ứng với số biến lúc tạo
tong(45, 12);
// cú pháp :khai báo fnc
function tong(a, b){
    console.log("a + b = ", a + b)
}


function reload()
{
    console.log("Vui lòng reload lại web")
}

reload();
reload();
reload();
reload();
reload();
reload();
reload();
reload();

//các loại funtion
// funtion return 
// funtion tham số
    //có tham số
    // tong(a ,b) : 2 tham số a và b
    // xinChao(name) : tham số name
    // Không tham số
    // reload()
    // test()
// xin chào ten_nguoi_dung
function xinChao(ten){
    console.log ("Xin Chào ", ten)
}

xinChao("hai")
xinChao(75.5)
xinChao(7.0)
xinChao(true)

function dienTichHCN(a ,b){
    console.log('Diện tích HCN với chiều độ dài các cạnh lần lượt là ${a}, ${b} là: ', a*b)
}

dienTichHCN(3 ,5)

function dtb(a, b, c){
    let diem = ( a+b+c)/3;
    console.log('Điểm TB là :' ,diem.toFixed(2))
    return diem // trả về 1 gtri, ngưng hàm. 
    // nếu gọi return thì phải có thằng hứng giá trị
}

function xeploai(diemTB){
    let kq =""
    if (diemTB >=8){
        kq ="HSG"
    } else if (diemTB >=6.5){
        kq = "HSK"
    } else if (diemTB >=5){
        kq ="HSTB"
    } else { kq = "HSY"}
  console.log( "XEP LOAI :", kq)
}

a=8;
b=9;
c=10;
 xeploai(dtb(a,b,c));

 function tong(a,b){
    return a+b;
 }
 let res = tong(10,30);
 console.log("Tong la: ", res)
 


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


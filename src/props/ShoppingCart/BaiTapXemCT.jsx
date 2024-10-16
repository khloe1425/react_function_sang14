import React, { useState } from 'react'
import DanhSachPhone from './DanhSachPhone'
import Phone from './Phone'
import TablePhone from './TablePhone'
import Cart from './Cart'

const BaiTapXemCT = () => {

    let arrPhone = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
    ]



    //! STATE

    let [phoneObj, setPhoneObj] = useState(arrPhone[0])

    /**
     * * Giỏ hàng (Component)
     * Xác định state: 
     *  + Giỏ hàng thay đổi => danh sách sp của giỏ hàng đổi
     *TODO  + Kiểu dữ liệu? => array object (sp)
     *      + arrCart 
     *          -C1: tạo object y chang với arrPhone
     **          -C2: tạo object cho mảng giỏ hàng 
     *              + maSP,tenSP, giaBan, hinhAnh, soLuong 
     *              + thanhTien (lưu ở hóa đơn): không cần lưu vì có thể tính từ các giaBan và soLuong
     */

    let arrCartDefault = []

    let [arrCart, setArrCart] = useState(arrCartDefault)

    //! FUNCTIONS STATE
    // Nếu component cha có quá nhiều function thì nên tách function riêng qua component con

    //* Phải đặt ở component thỏa 2 đk 

    let addToCart = (product) => {
        console.log(product)

        // TH1: giỏ hàng ban đầu rỗng => add thêm sản phẩm
        // TH2: giỏ hàng đã có sp  (sp 1) => cần add sp 2 => giỏ hàng [sp1, sp2]
        // TH3: giỏ hàng đã có sp (sp 1) => cần add sp 1 => tăng số lương sp 1

        //! Copy sp từ giỏ hàng cũ => sang giỏ hàng mới (xử lý TH1 & TH2)
        // map, for, Spread operator (array [...arrayOld], object {...objOld})  (bị tham chiếu)
        let newArrCart = [...arrCart]

        //* B1: tạo object sp của giỏ hàng
        let productCart = {
            maSP: product.maSP,
            tenSP: product.tenSP,
            giaBan: product.giaBan,
            hinhAnh: product.hinhAnh,
            soLuong: 1
        }
        //* B2 Thêm vào trong mảng mới 
        //*2.1 tìm trong mảng cart có san phẩm đó chưa (tìm theo mã) (TH3)
        let proFind = newArrCart.find((pro) => {
            return pro.maSP == productCart.maSP
        })
        //*2.2 Kiểm tra => nếu có sp, tăng số lượng. Ngược lại, thêm mới
        if (proFind) {
            //tìm thấy
            proFind.soLuong += 1
        } else {
            newArrCart.push(productCart)
        }


        //* B3 set giá trị mới cho state
        setArrCart(newArrCart)

    }

    //input: maSP, số lượng (1, -1)
    let changeSL = (maSP, sl) => {
        console.log(maSP, sl)
        let newArrCart = [...arrCart]
        let proFind = newArrCart.find((pro) => {
            return pro.maSP == maSP
        })

        if (proFind) {
            //?tìm thấy

            proFind.soLuong += sl
            if (proFind.soLuong < 1) {
                // alert("Số lượng tối thiểu là 1")
                // proFind.soLuong = 1

                alert("Số lượng tối thiểu là 1. Bạn muốn xóa không?")
                xoaSP(maSP)
            } else {
                setArrCart(newArrCart)
            }

            //? // 1 -1 => 0 <=0
            // if (proFind.soLuong + sl <= 0) {
            //     console.log(proFind.soLuong)
            //     proFind.soLuong = 1
            //     // setArrCart(newArrCart)
            // } else {
            //     proFind.soLuong += sl => 0

            // }

        }



    }

    // input: maSP
    let xoaSP = (maSPXoa) => {
        console.log(maSPXoa)
        // B1: tìm sp cần xóa dựa vào mã (for, find, findIndex)
        // B2 Xóa sp (split)

        // filter: lọc các sản phẩm muốn giữ lại =>  mã sp !=  maSPXoa => mảng mới
        // sản phảm muốn loại (muốn xóa): mã sp ==  maSPXoa 

        let newArrCart = arrCart.filter((product) => {
            return product.maSP !== maSPXoa
        })

        setArrCart(newArrCart)
    }

    //TH1: tính tổng số lượng mặt hàng => arrCart.length 
    //TH2: tổng số lượng tất cả sản phẩm => tổng của sp.soLuong
    let tinhTongSL = () => {
        // duyệt để tính tổng (map, for, reduce)

        //? reduce => trả về kết quả tính toán
        //? reduce(hàm xử lý tính, giá trị ban đầu của biến tổng )
        // let sumFinal = arrCart.reduce((sumTerm, productCart, index) => {
        //     sumTerm += productCart.soLuong
        //     return sumTerm
        // }, 0)

        // return sumFinal

        return arrCart.reduce((sumTerm, productCart, index) => sumTerm += productCart.soLuong, 0)

    }

    let tinhTongTien = () => {

        // let tongTien = arrCart.reduce((tong, productCart) => {  
        //     tong += productCart.soLuong * productCart.giaBan
        //     return tong
        // }, 0)

        // return tongTien

        return arrCart.reduce((tong, productCart) => tong += productCart.soLuong * productCart.giaBan, 0)


    }

    let changeInput = (valueSL, maSP) => {
        console.log(valueSL, maSP)
        let spFind = arrCart.find(productCart => productCart.maSP == maSP)

        if (spFind) {
            spFind.soLuong = valueSL
        }
        let newArrCart = [...arrCart]
        setArrCart(newArrCart)
    }


    let showDetail = (newPhoneObj) => {
        setPhoneObj(newPhoneObj)
    }
    let renderPhoneList = () => {

        return arrPhone.map((phone) => {

            return <div className="col-4" key={`phone-${phone.maSP}`}>

                <Phone addToCart={addToCart} phone={phone} showDetail={showDetail} />

            </div>
        })

    }


    return (
        <>
            <h1>Bài tập shopping cart</h1>
            <p className='alert alert-info w-25'>Số lượng : {tinhTongSL()}  - Tổng tiền: {tinhTongTien().toLocaleString()}</p>
            <DanhSachPhone renderPhoneList={renderPhoneList} />
            <TablePhone phoneObj={phoneObj} />

            <Cart changeInput={changeInput} xoaSP={xoaSP} changeSL={changeSL} arrCart={arrCart} />

        </>

    )
}

export default BaiTapXemCT




// Rút gọn arrow function
// 1. chỉ có 1 tham số => bỏ dấu ()
// let myFunc= first => { 
//     console.log(first)
//  }

// 2. chỉ có 1 lệnh return trong hàm => bỏ dấu { }, bỏ từ return
// let myFunc2 = first => first

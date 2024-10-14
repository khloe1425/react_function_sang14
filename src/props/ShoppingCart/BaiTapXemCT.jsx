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
            //tìm thấy

            // 1 -1 => 0 <=0
            if (proFind.soLuong + sl <= 0) {
                console.log(proFind.soLuong)
                proFind.soLuong = 1
                // setArrCart(newArrCart)
            } else {
                proFind.soLuong += sl => 0

            }
        }
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
            <DanhSachPhone renderPhoneList={renderPhoneList} />
            <TablePhone phoneObj={phoneObj} />

            <Cart changeSL={changeSL} arrCart={arrCart} />

        </>

    )
}

export default BaiTapXemCT
import React, { useState } from 'react'
import DanhSachPhone from './DanhSachPhone'
import Phone from './Phone'
import TablePhone from './TablePhone'

const BaiTapXemCT = () => {

    let arrPhone = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
    ]

    /**
     * lưu thông tin chi tiết của 1 phone vào state (click button => thông tin chi tiết đổi)
     * 1 biến chứa được toàn bộ thông tin của phone => Object 
     * 
     * State & props
     * Component BaiTapXemCT 
     * + ĐK 1: Chứa gián tiếp/trực tiếp UI cần render lại
     * + ĐK 2: Chứa gián tiếp/trực tiếp button nơi gọi setState
     * => Nơi khai báo state, tạo setSate
     */
    //TODO: useState(arrPhone[0]) : phần tử đầu làm giá trị mặc định của phoneObj (state)
    let [phoneObj, setPhoneObj] = useState(arrPhone[0])

    let showDetail = (newPhoneObj) => {
        // cung cấp cho setPhoneObj  đối tượng phone mới (dữ liệu phone cần xem chi tiết)
        setPhoneObj(newPhoneObj)
    }

    let renderPhoneList = () => {
        //2. trả kết quả ra ngoài hàm để binding lên UI
        return arrPhone.map((phone) => {
            //1. tạo mảng mới chứa các object jsx (col-4)
            // let { maSP, tenSP, hinhAnh, giaBan } = phone
            return <div className="col-4" key={`phone-${phone.maSP}`}>

                <Phone phone={phone} showDetail={showDetail} />

            </div>
        })

    }

    



    /**
     * Binding data sau khi chia Component
     ** C1: truyền renderPhoneList xuống cho con DanhSachPhone
     * C2: Khai báo hàm renderPhoneList ở con, truyền arrPhone xuống con (shoeshop)
     */


    
    
    
     return (
        <>
            <DanhSachPhone renderPhoneList={renderPhoneList} />

            <TablePhone phoneObj={phoneObj} />
        </>

    )
}

export default BaiTapXemCT
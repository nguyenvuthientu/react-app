import React, {Component} from 'react';
import './../css/MyService/MyService.css';
import service1 from '../images/IconCPO1.png';
import service2 from '../images/IconCPO2.png';
import service3 from '../images/IconCPO3.png';

class MyService extends Component{
    render(){
        return(
            <div className='MyService'>
                <h2>DỊCH VỤ CỦA CHÚNG TÔI</h2>
                <hr/>
                <div className='services'>
                    <div className="box-service">
                        <img src={service1} />
                        <span>TRUY VẤN THÔNG TIN <br/>
                            ĐIỆN TỬ</span>
                    </div>
                    <div className="box-service">
                        <img src={service2} />
                        <span>YÊU CẦU THUÊ <br /> DỊCH VỤ WEB</span>
                    </div>
                    <div className="box-service">
                        <img src={service3} />
                        <span>YÊU CẦU GIẢI QUYẾT <br/> QUYỀN LỢI <br /> DÀNH CHO KHÁCH HÀNG</span>
                    </div>
                    <div className="box-service">
                        <img src={service3} />
                        <span>YÊU CẦU GIẢI QUYẾT <br/> QUYỀN LỢI <br/> 
                            (DÀNH CHO KHÁCH HÀNG CHƯA CÓ TÀI KHOẢN)</span>
                    </div>
                    <div className="box-service">
                        <img src={service3} />
                        <span>THANH TOÁN ONLINE <br /> (DÀNH CHO KHÁCH HÀNG CHƯA CÓ TÀI KHOẢN)</span>
                    </div>
                    <div className="box-service">
                        <img src={service3} />
                        <span>THANH TOÁN QRCODE</span>
                    </div>
                    <div className="box-service">
                        <img src={service3} />
                        <span>CÔNG CỤ HỖ TRỢ <br /> PHÂN BỐ TỶ LỆ ĐẦU TƯ</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyService;
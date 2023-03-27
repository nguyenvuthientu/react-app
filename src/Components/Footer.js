import React, { Component } from 'react';
import '../css/Footer/Footer.css';
import logo from '../images/Logo-Footer.png';

class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='footer-top'>
                    <img src={logo} className="logo" />
                    <div className="info-boscharete">
                        <h3>VỀ BOSCHARETE</h3>
                        <ul>
                            <li><a href="">Giới thiệu công ty</a></li>
                            <li><a href="">Lời chào TGĐ</a></li>
                            <li><a href="">Tầm nhìn & Sứ mệnh</a></li>
                            <li><a href="">Cột mốc</a></li>
                            <li><a href="">Liên hệ</a></li>
                        </ul>
                    </div>
                    <div className="info-boscharete">
                        <h3>SẢN PHẨM</h3>
                        <ul>
                            <li><a href="">Dịch vụ đám mây</a></li>
                            <li><a href="">Cung cấp website</a></li>
                            <li><a href="">Cung cấp cơ sở hạ tầng</a></li>
                            <li><a href="">Dịch vụ trí tuệ nhân tạo</a></li>
                            <li><a href="">Boscharete - Outsource lập trình</a></li>
                            <li><a href="">Boscharete - Lập trình nhúng</a></li>
                            <li><a href="">Boscharete - Lập trình điện tử</a></li>
                        </ul>
                    </div>
                    <div className="info-boscharete">
                        <h3>DỊCH VỤ KHÁCH HÀNG</h3>
                        <ul>
                            <li><a href="">Thanh toán phí</a></li>
                            <li><a href="">Giải quyết quyền lợi cho khách hàng</a></li>
                            <li><a href="">Chương trình chăm sóc khách hàng đặc biệt</a></li>
                            <li><a href="">Quy định đánh giá lập trình</a></li>
                            <li><a href="">Câu hỏi thường gặp</a></li>
                            <li><a href="">Tài liệu và mẫu đơn</a></li>
                            <li><a href="">Bản tin đầu tư</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="copy-right"><i className="fa fa-copyright fa-lg"></i> <b>Công ty TNHH Boscharete Việt Nam.</b> Bảo lưu mọi quyền.</div>
                    <div className="contact-icon">
                        <a href=""><i className="fa fa-apple"></i></a>
                        <a href=""><i className="fa fa-google"></i></a>
                        <a href=""><i className="fa fa-facebook"></i></a>
                        <a href=""><i className="fa fa-youtube"></i></a>
                        <a href=""><i className="fa fa-pinterest"></i></a>
                    </div>
                </div>             
            </div>
        )
    }
}

export default Footer;
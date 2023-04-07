import React, { Component } from 'react';
import './../css/MainNavMobile/MainNavMobile.css';

class MainNavMobile extends Component {

    OpenLoginForm1 = () => {
        this.props.OpenLoginForm();
    }

    OnSignOut = () => {
        this.props.OnSignOut();
    }

    ToogleCollapsedHead = (e) => {
        let contentEle = e.target.parentNode.parentElement.nextElementSibling;
        e.target.classList.toggle('collapsed');
        if (contentEle.style.maxHeight) {
              if(contentEle.style.maxHeight === 'fit-content'){
                contentEle.style.maxHeight = contentEle.scrollHeight + "px";
              }
              setTimeout(() => {contentEle.style.maxHeight = null}, 200);
                  
        } else {
            contentEle.style.maxHeight = contentEle.scrollHeight + "px";
        } 
    }

    ToogleCollapsed = (e) => {
        let contentEle = e.target.parentNode.parentElement.nextElementSibling;
        e.target.classList.toggle('collapsed');
        if (contentEle.style.maxHeight) {
              contentEle.style.maxHeight = null;
        } else {
            let content = document.getElementById('main-nav-mobile-content');
            content.style.maxHeight = 'fit-content';
            contentEle.style.maxHeight = contentEle.scrollHeight + "px";
        } 
    }

    render() {
        let loggedInObj = null;
        let loggedIn = false;
        let loggedInCache = localStorage.getItem('isLoggedIn');

        if (loggedInCache) {

            loggedInObj = JSON.parse(loggedInCache);
            loggedIn = loggedInObj.isLoggedIn;
        }

        return (
            <div className='main-nav-mobile' id='main-nav-mobile'>
                {
                    loggedIn ? (
                        <div>
                            <div className='main-nav-mobile-signin'>
                                <i className='fa fa-user'></i> <a href='#'>NGUYỄN VŨ THIÊN TÚ</a>
                            </div>
                            <div className='main-nav-change-password'>
                                <div className='main-nav-mobile-signin'>
                                    <i className='fa fa-user'></i> <a href='#'>Thay đổi mật khẩu</a>
                                </div>
                                <div className='main-nav-mobile-signin' onClick={this.OnSignOut}>
                                    <a href='#'>Đăng xuất</a> <i className="fa fa-sign-out" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>

                    ) : <div className='main-nav-mobile-signin' onClick={this.OpenLoginForm1}>
                        <i className='fa fa-sign-in fa-lg'></i> <a href='#'>Đăng nhập</a>
                    </div>
                }

                <div className='main-nav-mobile-menu'>
                    <div className='main-nav-mobile-menu-item'><span>VỀ BOSCHARETE</span></div>
                    {
                        !loggedIn ? <div className='main-nav-mobile-menu-item'><span>CHỨC NĂNG</span></div>
                        : <div className='main-nav-mobile-menu-item' style={{padding: '0'}}>
                        <div className='head'>
                            <span>CHỨC NĂNG</span>
                            <div className='menu-item-toggle-collapsed-mobile' 
                                id='menu-item-toggle-collapsed-mobile'
                                onClick={this.ToogleCollapsedHead}>
                                <i className="fa fa-plus collapsed" aria-hidden="true"></i>
                            </div>                         
                        </div>
                        <div className='content' id='main-nav-mobile-content'>
                            <div className='menu-function-item-mobile'>
                                <div className='menu-function-item-parent-mobile'>
                                    <div>
                                        <i className="fa fa-folder" aria-hidden="true"></i>
                                        <span>Thông tin dịch vụ web</span>
                                    </div>
                                    <div className='menu-item-toggle-collapsed' 
                                        id='menu-item-toggle-collapsed' onClick={this.ToogleCollapsed}>
                                        <i className="fa fa-plus collapsed" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div className='sub-content-menu-function-mobile'>
                                    <div className='sub-content-menu-function-item-mobile'>
                                        <i className="fa fa-caret-right" aria-hidden="true"></i>
                                        <span>Danh sách mobility AI</span>
                                    </div>
                                    <div className='sub-content-menu-function-item-mobile'>
                                        <i className="fa fa-caret-right" aria-hidden="true"></i>
                                        <span>Thông tin lập trình AI</span>
                                    </div>
                                </div>
                            </div>
                            <div className='menu-function-item-mobile'>
                                <div className='menu-function-item-parent-mobile'>
                                    <div>
                                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                        <span>Gửi yêu cầu</span>
                                    </div>
                                    <div className='menu-item-toggle-collapsed' 
                                        id='menu-item-toggle-collapsed' onClick={this.ToogleCollapsed}>
                                        <i className="fa fa-plus collapsed" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div className='sub-content-menu-function-mobile'>
                                    <div className='sub-content-menu-function-item-mobile'>
                                        <i className="fa fa-caret-right" aria-hidden="true"></i>
                                        <span>Danh sách embedded</span>
                                    </div>
                                    <div className='sub-content-menu-function-item-mobile'>
                                        <i className="fa fa-caret-right" aria-hidden="true"></i>
                                        <span>Thông tin lập trình nhúng</span>
                                    </div>
                                </div>
                            </div>
                            <div className='menu-function-item-mobile'>
                                <div className='menu-function-item-parent-mobile'>
                                    <div>
                                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                        <span>Thanh toán online cho Boscharete</span>
                                    </div>
                                </div>
                            </div>
                            <div className='menu-function-item-mobile'>
                                <div className='menu-function-item-parent-mobile'>
                                    <div>
                                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                        <span>Thông tin nhân viên Boscharete</span>
                                    </div>
                                </div>
                            </div>
                            <div className='menu-function-item-mobile'>
                                <div className='menu-function-item-parent-mobile'>
                                    <div>
                                        <i className="fa fa-folder" aria-hidden="true"></i>
                                        <span>Quản trị mạng người dùng</span>
                                    </div>
                                    <div className='menu-item-toggle-collapsed' 
                                        id='menu-item-toggle-collapsed' onClick={this.ToogleCollapsed}>
                                        <i className="fa fa-plus collapsed" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div className='sub-content-menu-function-mobile'>
                                    <div className='sub-content-menu-function-item-mobile'>
                                        <i className="fa fa-caret-right" aria-hidden="true"></i>
                                        <span>Quản lý thông tin khách hàng</span>
                                    </div>
                                    <div className='sub-content-menu-function-item-mobile'>
                                        <i className="fa fa-caret-right" aria-hidden="true"></i>
                                        <span>Quản lý lớp lập trình nhúng</span>
                                    </div>
                                    <div className='sub-content-menu-function-item-mobile'>
                                        <i className="fa fa-caret-right" aria-hidden="true"></i>
                                        <span>Quản lý lớp đồ họa</span>
                                    </div>
                                    <div className='sub-content-menu-function-item-mobile'>
                                        <i className="fa fa-caret-right" aria-hidden="true"></i>
                                        <span>Quản lý hệ thống AI cao thế</span>
                                    </div>
                                    <div className='sub-content-menu-function-item-mobile'>
                                        <i className="fa fa-caret-right" aria-hidden="true"></i>
                                        <span>Quản lý trí tuệ nhân tạo ghép</span>
                                    </div>
                                    <div className='sub-content-menu-function-item-mobile'>
                                        <i className="fa fa-caret-right" aria-hidden="true"></i>
                                        <span>Quản lý hệ thống AI big bang</span>
                                    </div>
                                    <div className='sub-content-menu-function-item-mobile'>
                                        <i className="fa fa-caret-right" aria-hidden="true"></i>
                                        <span>Quản lý giao diện nhận dạng</span>
                                    </div>
                                </div>
                            </div>
                            <div className='menu-function-item-mobile'>
                                <div className='menu-function-item-parent-mobile'>
                                    <div>
                                        <i className="fa fa-cog" aria-hidden="true"></i>
                                        <span>Quản trị hệ thống Admin</span>
                                    </div>
                                    <div className='menu-item-toggle-collapsed' 
                                        id='menu-item-toggle-collapsed' onClick={this.ToogleCollapsed}>
                                        <i className="fa fa-plus collapsed" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div className='sub-content-menu-function-mobile'>
                                    <div className='sub-content-menu-function-item-mobile'>
                                        <i className="fa fa-caret-right" aria-hidden="true"></i>
                                        <span>Danh mục hệ thống</span>
                                    </div>
                                    <div className='sub-content-menu-function-item-mobile'>
                                        <i className="fa fa-caret-right" aria-hidden="true"></i>
                                        <span>Người dùng</span>
                                    </div>
                                    <div className='sub-content-menu-function-item-mobile'>
                                        <i className="fa fa-caret-right" aria-hidden="true"></i>
                                        <span>Nhóm người dùng</span>
                                    </div>
                                    <div className='sub-content-menu-function-item-mobile'>
                                        <i className="fa fa-caret-right" aria-hidden="true"></i>
                                        <span>Setting</span>
                                    </div>
                                    <div className='sub-content-menu-function-item-mobile'>
                                        <i className="fa fa-caret-right" aria-hidden="true"></i>
                                        <span>Quản lý job và đồng bộ</span>
                                    </div>
                                    <div className='sub-content-menu-function-item-mobile'>
                                        <i className="fa fa-caret-right" aria-hidden="true"></i>
                                        <span>Tracking log</span>
                                    </div>
                                </div>
                            </div>
                            <div className='menu-function-item-mobile'>
                                <div className='menu-function-item-parent-mobile'>
                                    <div>
                                        <i className="fa fa-folder" aria-hidden="true"></i>
                                        <span>Điều chỉnh thông tin</span>
                                    </div>
                                    <div className='menu-item-toggle-collapsed' 
                                        id='menu-item-toggle-collapsed' onClick={this.ToogleCollapsed}>
                                        <i className="fa fa-plus collapsed" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div className='sub-content-menu-function-mobile'>
                                    <div className='sub-content-menu-function-item-mobile'>
                                        <i className="fa fa-caret-right" aria-hidden="true"></i>
                                        <span>Điều chỉnh nhận dạng</span>
                                    </div>
                                    <div className='sub-content-menu-function-item-mobile'>
                                        <i className="fa fa-caret-right" aria-hidden="true"></i>
                                        <span>Điều chỉnh nguồn lực</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    }
                    
                    <div className='main-nav-mobile-menu-item' style={{padding: '0'}}><span>LIÊN HỆ</span></div>
                </div>

            </div>
        )
    }
}

export default MainNavMobile;
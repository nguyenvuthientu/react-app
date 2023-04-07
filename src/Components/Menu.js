import React, {Component} from 'react';
import '../css/Menu/Menu.css';

class Menu extends Component{

    ToogleCollapsed = (e) => {
        
        let contentEle = e.target.parentNode.parentElement.nextElementSibling;
        e.target.classList.toggle('collapsed');
        if (contentEle.style.maxHeight) {
             contentEle.style.maxHeight = null;
        } else {
             contentEle.style.maxHeight = contentEle.scrollHeight + "px";
        } 
    }

    render(){

        if(!this.props.IsGoToFunctionAfterLogin){
            return null
        }

        return(
            <div className='menu-function' id='menu-function'>
                <div className='menu-function-head'>
                    <h4>DỊCH VỤ</h4>
                </div>
                <div className='menu_function-content'>
                    <div className='menu-function-item'>
                        <div className='menu-function-item-parent'>
                            <div>
                                <i className="fa fa-folder" aria-hidden="true"></i>
                                <span>Thông tin dịch vụ web</span>
                            </div>
                            <div 
                                className='menu-item-toggle-collapsed' 
                                id='menu-item-toggle-collapsed'
                                onClick={this.ToogleCollapsed}
                                >
                                <i className="fa fa-plus collapsed" aria-hidden="true"></i>
                            </div>
                        </div>                   
                        <div className='sub-content-menu-function'>
                            <div className='sub-content-menu-function-item'>
                                <i className="fa fa-caret-right" aria-hidden="true"></i>
                                <span>Danh sách mobility AI</span>
                            </div>
                            <div className='sub-content-menu-function-item'>
                                <i className="fa fa-caret-right" aria-hidden="true"></i>
                                <span>Thông tin lập trình AI</span>
                            </div>
                        </div>
                    </div>
                    <div className='menu-function-item'>
                        <div className='menu-function-item-parent'>
                            <div>
                                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                <span>Gửi yêu cầu</span>
                            </div>
                            <div 
                                className='menu-item-toggle-collapsed' id='menu-item-toggle-collapsed'
                                onClick={this.ToogleCollapsed}>
                                <i className="fa fa-plus collapsed" aria-hidden="true"></i>
                            </div>  
                        </div>
                        <div className='sub-content-menu-function'>
                            <div className='sub-content-menu-function-item'>
                                <i className="fa fa-caret-right" aria-hidden="true"></i>
                                <span>Danh sách embedded</span>
                            </div>
                            <div className='sub-content-menu-function-item'>
                                <i className="fa fa-caret-right" aria-hidden="true"></i>
                                <span>Thông tin lập trình nhúng</span>
                            </div>
                        </div>
                    </div>
                    <div className='menu-function-item'>
                        <div className='menu-function-item-parent'>
                            <div>
                                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                <span>Thanh toán online cho Boscharete</span>
                            </div> 
                        </div>
                    </div>
                    <div className='menu-function-item'>
                        <div className='menu-function-item-parent'>
                            <div>
                                <i className="fa fa-phone" aria-hidden="true"></i>
                                <span>Thông tin nhân viên Boscharete</span>
                            </div> 
                        </div>
                    </div>
                    <div className='menu-function-item'>
                        <div className='menu-function-item-parent'>
                            <div>
                                <i className="fa fa-book" aria-hidden="true"></i>
                                <span>Quản trị mạng người dùng</span>
                            </div>
                            <div 
                                className='menu-item-toggle-collapsed' 
                                id='menu-item-toggle-collapsed'
                                onClick={this.ToogleCollapsed}
                                >
                                <i className="fa fa-plus collapsed" aria-hidden="true"></i>
                            </div>
                        </div>                   
                        <div className='sub-content-menu-function'>
                            <div className='sub-content-menu-function-item'>
                                <i className="fa fa-caret-right" aria-hidden="true"></i>
                                <span>Quản lý thông tin khách hàng</span>
                            </div>
                            <div className='sub-content-menu-function-item'>
                                <i className="fa fa-caret-right" aria-hidden="true"></i>
                                <span>Quản lý lớp lập trình nhúng</span>
                            </div>
                            <div className='sub-content-menu-function-item'>
                                <i className="fa fa-caret-right" aria-hidden="true"></i>
                                <span>Quản lý lớp đồ họa</span>
                            </div>
                            <div className='sub-content-menu-function-item'>
                                <i className="fa fa-caret-right" aria-hidden="true"></i>
                                <span>Quản lý hệ thống AI cao thế</span>
                            </div>
                            <div className='sub-content-menu-function-item'>
                                <i className="fa fa-caret-right" aria-hidden="true"></i>
                                <span>Quản lý trí tuệ nhân tạo ghép</span>
                            </div>
                            <div className='sub-content-menu-function-item'>
                                <i className="fa fa-caret-right" aria-hidden="true"></i>
                                <span>Quản lý hệ thống AI big bang</span>
                            </div>
                            <div className='sub-content-menu-function-item'>
                                <i className="fa fa-caret-right" aria-hidden="true"></i>
                                <span>Quản lý giao diện nhận dạng</span>
                            </div>
                        </div>
                    </div>
                    <div className='menu-function-item'>
                        <div className='menu-function-item-parent'>
                            <div>
                                <i className="fa fa-cog" aria-hidden="true"></i>
                                <span>Quản trị hệ thống Admin</span>
                            </div>
                            <div 
                                className='menu-item-toggle-collapsed' 
                                id='menu-item-toggle-collapsed'
                                onClick={this.ToogleCollapsed}
                                >
                                <i className="fa fa-plus collapsed" aria-hidden="true"></i>
                            </div>
                        </div>                   
                        <div className='sub-content-menu-function'>
                            <div className='sub-content-menu-function-item'>
                                <i className="fa fa-caret-right" aria-hidden="true"></i>
                                <span>Danh mục hệ thống</span>
                            </div>
                            <div className='sub-content-menu-function-item'>
                                <i className="fa fa-caret-right" aria-hidden="true"></i>
                                <span>Người dùng</span>
                            </div>
                            <div className='sub-content-menu-function-item'>
                                <i className="fa fa-caret-right" aria-hidden="true"></i>
                                <span>Nhóm người dùng</span>
                            </div>
                            <div className='sub-content-menu-function-item'>
                                <i className="fa fa-caret-right" aria-hidden="true"></i>
                                <span>Setting</span>
                            </div>
                            <div className='sub-content-menu-function-item'>
                                <i className="fa fa-caret-right" aria-hidden="true"></i>
                                <span>Quản lý job và đồng bộ</span>
                            </div>
                            <div className='sub-content-menu-function-item'>
                                <i className="fa fa-caret-right" aria-hidden="true"></i>
                                <span>Tracking log</span>
                            </div>
                        </div>
                    </div>
                    <div className='menu-function-item'>
                        <div className='menu-function-item-parent'>
                            <div>
                                <i className="fa fa-folder" aria-hidden="true"></i>
                                <span>Điều chỉnh thông tin</span>
                            </div>
                            <div 
                                className='menu-item-toggle-collapsed' 
                                id='menu-item-toggle-collapsed'
                                onClick={this.ToogleCollapsed}
                                >
                                <i className="fa fa-plus collapsed" aria-hidden="true"></i>
                            </div>
                        </div>                   
                        <div className='sub-content-menu-function'>
                            <div className='sub-content-menu-function-item'>
                                <i className="fa fa-caret-right" aria-hidden="true"></i>
                                <span>Điều chỉnh nhận dạng</span>
                            </div>
                            <div className='sub-content-menu-function-item'>
                                <i className="fa fa-caret-right" aria-hidden="true"></i>
                                <span>Điều chỉnh nguồn lực</span>
                            </div>                        
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu;
import React from 'react'
import { Breadcrumb, Typography } from 'antd';
import { Link, useLocation } from 'react-router-dom'

const {Item} = Breadcrumb;
const {Text} = Typography;

const mapObj:any = {
    'userinfo':'Thông tin người dùng',
    'dashboard':'Dashboard',
    'device':'Thiết bị',
    'list-device':'Danh sách thiết bị',
    'detail-device':'Chi tiết thiết bị',
    'update-device':'Cập nhật thiết bị',
    'add-device':'Thêm thiết bị',
    'service': 'Dịch vụ',
    'list-service':'Danh sách dịch vụ',
    'add-service':'Thêm dịch vụ',
    'detail-service':'Chi tiết dịch vụ',
    'update-service':'Cập nhật dịch vụ',
    'numbering':'Cấp số',
    'list-numbering':'Danh sách cấp số',
    'add-numbering':'Thêm cấp số',
    'detail-numbering':'Thông tin cấp số',
    'report':'Báo cáo',
    'system-setting':'Cài đặt hệ thống',
    'list-role':'Danh sách vai trò',
    'update-role':'Cập nhật vai trò',
    'add-role':'Thêm vai trò',
    'list-account':'Danh sách tài khoản',
    'add-account':'Thêm tài khoản',
    'update-account':'Thông tin tài khoản',
    'list-userlog':'Nhật ký người dùng',
}
const BreadCrumb: React.FC = () => {
    const location = useLocation();
    const breadCrumbView = () => {
        const { pathname } = location;
        const re:RegExp = /\b(?:userinfo|dashboard|device|list-device|detail-device|update-device|add-device|service|list-service|add-service|detail-service|update-service|numbering|list-numbering|add-numbering|report|system-setting|list-role|update-role|add-role|list-account|add-account|update-account|list-userlog)\b/gi
        const pathNames:string[] = pathname.replace(re,m => mapObj[m]).split("/").filter((x) => x); 
        const path:string[] = pathname.split("/").filter((x)=>x);
        //console.log(pathNames);
        return (
            <div>
                <Breadcrumb separator=">">
                    {pathNames.map((name, index) => {
                        const routeTo = `/${path.slice(0, index + 1).join("/")}`;
                        const isLast = index === pathNames.length - 1;
                        return isLast ? (
                            <Item key={name}>
                                <Text strong style={{color:'#FF9138'}}>{name}</Text>
                            </Item>
                        ) : (
                            <Item key={name}>
                                <Link to={`${routeTo}`} style={{color:'black',fontWeight:'bold'}}>{name}</Link>
                                {/* <Text strong>{name}</Text> */}
                            </Item>
                        )
                    })}
                </Breadcrumb>
            </div>
        )
    }
    return (
        <div>
            {breadCrumbView()}
        </div>
    )
}

export default BreadCrumb
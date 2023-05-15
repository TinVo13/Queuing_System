import React from 'react'
import { Button, Col, ConfigProvider, Input, Layout, Row, Space, Typography } from 'antd'
import { PlusCircleOutlined, SearchOutlined } from '@ant-design/icons';
import Table, { ColumnsType } from 'antd/es/table';
import { NavLink, useNavigate } from 'react-router-dom';
import { RoleType } from '../../../../type/types';
import { DocumentData, QuerySnapshot, onSnapshot } from 'firebase/firestore';
import { GetAllRole, roleCollection } from '../../../../firebase/controller';


const { Text } = Typography;
const ListRole: React.FC = () => {
    const navigate = useNavigate();
    const [role, setRole] = React.useState<RoleType[]>([]);
    const [searchText, setSearchText] = React.useState<string>("");
    const [listRole,setListRole] = React.useState<string[]>([]);

    const handleAddRole = () => {
        navigate('/system-setting/list-role/add-role');
    }
    React.useEffect(() =>
        onSnapshot(roleCollection, (snapshot: QuerySnapshot<DocumentData>) => {
            setRole(snapshot.docs.map((doc) => {
                return {
                    key: doc.id,
                    ...doc.data()
                }
            }))
        }), []);
    React.useEffect(()=>{
        const getRole = async () => {
            setListRole(await GetAllRole());
        }
        getRole();
    },[]);
    console.log(listRole);
    const columns: ColumnsType<RoleType> = [
        {
            title: 'Tên vai trò',
            key: 'tenVaiTro',
            dataIndex: 'tenVaiTro',
            filteredValue: [searchText],
            onFilter: (value: any, record) => {
                return String(record.moTa).toLowerCase().includes(value.toLowerCase()) ||
                    String(record.tenVaiTro).toLowerCase().includes(value.toLowerCase());
            }
        },
        {
            title: 'Số người dùng',
            key: 'soNguoiDung',
            dataIndex: 'soNguoiDung'
        },
        {
            title: 'Mô tả',
            key: 'moTa',
            dataIndex: 'moTa',
        },
        {
            key: 'capNhat',
            render: (_, record) => (
                <Space>
                    <NavLink to={`/system-setting/list-role/update-role/${record.key}`}>Cập nhật</NavLink>
                </Space>
            )
        }
    ]
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#FF9138'
                }
            }}>
            <Layout>
                <Space direction='vertical'>
                    <Row justify={'space-evenly'}>
                        <Col span={22} style={{ paddingLeft: 16 }}>
                            <Row justify={'space-between'}>
                                <Text className='label-h1' strong>Danh sách vai trò</Text>
                                <Space direction='vertical'>
                                    <Text strong>Từ khóa</Text>
                                    {/* <Input.Search/> */}
                                    <Input
                                        size='large'
                                        type='text'
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value)}
                                        placeholder='Nhập từ khóa'
                                        suffix={<SearchOutlined style={{ color: '#FF7506' }} />}
                                        style={{ width: 300 }} />
                                </Space>
                            </Row>
                        </Col>
                        <Col span={2}></Col>
                    </Row>
                    <Row justify={'space-evenly'}>
                        <Col span={22} style={{ paddingLeft: 16 }}>
                            <Table
                                columns={columns}
                                dataSource={role}
                                rowClassName={(record, index) => (index % 2 === 0 ? 'table-row-light' : 'table-row-dark')}
                                bordered
                                size='middle' />
                        </Col>
                        <Col span={2}>
                            <Layout>
                                <Row justify={'end'} align={'middle'}>
                                    <Button style={{ background: '#FFF2E7', height: 94, width: 80 }} onClick={() => handleAddRole()}>
                                        <Space direction='vertical' align='center'>
                                            <PlusCircleOutlined style={{ display: 'flex', justifyContent: 'center', height: 23, width: 23, background: '#FF7506', color: '#FFF2E7', borderRadius: 5 }} />
                                            <Text style={{ whiteSpace: 'initial', color: '#FF9138' }} strong>Thêm vai trò</Text>
                                        </Space>
                                    </Button>
                                </Row>
                            </Layout>
                        </Col>
                    </Row>
                </Space>
            </Layout>
        </ConfigProvider>
    )
}

export default ListRole
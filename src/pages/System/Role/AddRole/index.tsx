import React from 'react'
import { Button, Card, Checkbox, Col, ConfigProvider, Form, Input, Layout, Row, Space, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import TextArea from 'antd/es/input/TextArea';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import { optionsCheckbox, optionsCheckboxs } from '../../../../components/Selection/ItemSelection';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { AddRoleType, RoleType } from '../../../../type/types';
import { useAppDispatch } from '../../../../store/store';
import { ADD_ROLE } from '../../../../store/features/roleSlide';


const { Text } = Typography;
const AddRole: React.FC = () => {
  const navigate = useNavigate();
  const [checkedList, setCheckedList] = React.useState<CheckboxValueType[]>([]);
  const [indeterminate, setIndeterminate] = React.useState(true);
  const [checkAll, setCheckAll] = React.useState(false);
  const [checkedListB, setCheckedListB] = React.useState<CheckboxValueType[]>([]);
  const [indeterminateB, setIndeterminateB] = React.useState(true);
  const [checkAllB, setCheckAllB] = React.useState(false);
  const dispatch = useAppDispatch();
  const onChange = (list: CheckboxValueType[]) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < optionsCheckbox.length);
    setCheckAll(list.length === optionsCheckbox.length);
  };
  const onChangeB = (list: CheckboxValueType[]) => {
    setCheckedListB(list);
    setIndeterminateB(!!list.length && list.length < optionsCheckboxs.length);
    setCheckAllB(list.length === optionsCheckboxs.length);
  };
  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    setCheckedList(e.target.checked ? optionsCheckbox : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };
  const onCheckAllChangeB = (e: CheckboxChangeEvent) => {
    setCheckedListB(e.target.checked ? optionsCheckboxs : []);
    setIndeterminateB(false);
    setCheckAllB(e.target.checked);
  };
  const handleCancel = () => {
    navigate('/system-setting/list-role');
  }
  const handleConfirm = (values: AddRoleType) => {
    const a: string[] = [];
    const b: string[] = [];
    for (var i = 0; i < checkedList.length; i++) {
      if (checkedList.length === 0) {
        return;
      }
      a.push(checkedList[i].toString());
    }
    for (var i = 0; i < checkedListB.length; i++) {
      if (checkedListB.length === 0) {
        return;
      }
      b.push(checkedListB[i].toString());
    }
    if (values.moTa === undefined) {
      values.moTa = "";
    }
    values.chucNang = a.concat(b);
    values.soNguoiDung = 1;
    dispatch(ADD_ROLE({ role: values }));
    //addRole(values);
    navigate('/system-setting/list-role');
  }

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#FF9138'
        }
      }}>
      <Layout style={{ margin: '0 16px' }}>
        <Space direction='vertical'>
          <Row>
            <Col span={24}>
              <Text className='label-h1' strong>Danh sách thiết bị</Text>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form onFinish={(values: AddRoleType) => handleConfirm(values)}>
                <Space direction='vertical' size={'large'} style={{ width: '100%' }}>
                  <Card>
                    <Space direction='vertical' style={{ width: '100%' }}>
                      <Row>
                        <Text strong className='label-h2'>Thông tin vai trò</Text>
                      </Row>
                      <Row gutter={24}>
                        <Col span={12}>
                          <Space direction='vertical' style={{ width: '100%' }}>
                            <div>
                              <Text strong>Tên vai trò:</Text><Text type='danger'>*</Text>
                            </div>
                            <Form.Item
                              name={'tenVaiTro'}
                              hasFeedback
                              rules={[{
                                required: true,
                                message: 'Vui lòng nhập tên vai trò!'
                              }]}>
                              <Input type='text' placeholder='Nhập tên vai trò' size='large' />
                            </Form.Item>
                          </Space>
                          <Space direction='vertical' style={{ width: '100%' }}>
                            <div>
                              <Text strong>Mô tả:</Text>
                            </div>
                            <Form.Item
                              name={'moTa'}>
                              <TextArea autoSize={{ minRows: 5 }} placeholder='Mô tả dịch vụ' />
                            </Form.Item>
                          </Space>
                          <Space>
                            <Text type='danger'>* <Text>Là trường thông tin bắt buộc</Text></Text>
                          </Space>
                        </Col>
                        <Col span={12}>
                          <Space direction='vertical' style={{ width: '100%' }}>
                            <div>
                              <Text strong>Phân quyền chức năng:</Text>
                            </div>
                            <Card style={{ background: '#FFF2E7' }}>
                              <Space direction='vertical'>
                                <Space direction='vertical'>
                                  <Text className='label-h2' strong>Nhóm chức năng A</Text>
                                  <Form.Item
                                    valuePropName='checked'
                                  >
                                    <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                                      Tất cả
                                    </Checkbox>
                                    <Checkbox.Group options={optionsCheckbox} value={checkedList} onChange={onChange} />
                                  </Form.Item>
                                </Space>
                                <Space direction='vertical'>
                                  <Text className='label-h2' strong>Nhóm chức năng B</Text>
                                  <Form.Item
                                    valuePropName='checked'
                                    >
                                    <Checkbox indeterminate={indeterminateB} onChange={onCheckAllChangeB} checked={checkAllB}>
                                      Tất cả
                                    </Checkbox>
                                    <Checkbox.Group options={optionsCheckboxs} value={checkedListB} onChange={onChangeB} />
                                  </Form.Item>
                                </Space>
                              </Space>
                            </Card>
                          </Space>
                        </Col>
                      </Row>
                    </Space>
                  </Card>
                  <Row justify={'center'} align={'middle'}>
                    <Space>
                      <Form.Item>
                        <Button className='btn-cancel' onClick={handleCancel}>Hủy bỏ</Button>
                      </Form.Item>
                      <Form.Item>
                        <Button htmlType='submit' className='btn-submit' type='ghost'>Thêm</Button>
                      </Form.Item>
                    </Space>
                  </Row>
                </Space>
              </Form>
            </Col>
          </Row>
        </Space>
      </Layout>
    </ConfigProvider>
  )
}

export default AddRole;
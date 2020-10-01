// @flow
import React, { useEffect, useState } from 'react';
import { Container, ItemContainer, Descriptions, Image, Close } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { CloseCircleOutlined } from '@ant-design/icons';
import { Popconfirm, message } from 'antd';
import {
  addDataFromLocalStorageAction,
  deleteTournamentsPanelAction,
} from '../../store/TournamentsPanel/getTournamentsPanelAction';


export default function TournamentsPanel() {
  const dispatch = useDispatch();
  const [data,setData] = useState();
  const storedData = useSelector(state => state.TournamentsPanel.data);

  const deletedItem = (id) => {
    dispatch(
      deleteTournamentsPanelAction(id),
    );
  };

  const confirm = (id) => {
    deletedItem(id);
    message.success('successfully deleted');
  };

  useEffect(() => {
    const LocalStorageData = JSON.parse(localStorage.getItem("data"));
    dispatch(
      addDataFromLocalStorageAction(LocalStorageData),
    );
    setData(LocalStorageData);
  },0);

  useEffect(() => {
    const LocalStorageData = JSON.parse(localStorage.getItem("data"));
    setData(LocalStorageData);
  },[storedData]);

  return (
    <Container>
      {
        data?.map(el => {
          const imageSrc = Object.keys(el.images)[0];
          return <ItemContainer>
            <Popconfirm
              title="Are you sure delete this item?"
              onConfirm={() => confirm(el.id)}
              okText="Yes"
              cancelText="No"
            >
              <Close>
                <CloseCircleOutlined />
              </Close>
            </Popconfirm>
            <Image src={`https://cdn-images.win.gg/${el?.images[imageSrc]?.filePath}`}/>
            <Descriptions>
              <p>{el.title}</p>
              <p>{el.description}</p>
            </Descriptions>
          </ItemContainer>
           }
        )
      }
    </Container>
  );
}

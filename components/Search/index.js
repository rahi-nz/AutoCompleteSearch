// @flow
import React, { useState } from 'react';
import {request} from '../../store/request';
import { AutoComplete } from 'antd';
import debounce from 'lodash/debounce';
import { ResultContainer, Image, Descriptions} from './style';
import { getData } from '../../resources/Api';
import { addTournamentsPanelAction } from '../../store/TournamentsPanel/getTournamentsPanelAction';
import { useDispatch } from 'react-redux';


const { Option } = AutoComplete;

export default function Home() {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState([]);
  const [notFound, setNotFound] = useState('');
  const [result, setResult] = useState();


  /**
   * this method call search api and create options of searchBar
   * @param value
   */
  const handleSearch = async value => {
    if (value) {
      if(value.length > 1) {
        const response = await request.get(getData(value));
        if(response.ok) {
          const data = response?.data[0]?.documents;
          setResult(data);
          if (!response?.data?.length) {
            setNotFound("NO RESULT FOUND");
            setSearchValue([]);
          } else {
            setNotFound('');
            const options = data?.map(item => {
              const imageSrc = item.images ? `https://cdn-images.win.gg/${item?.images[Object.keys(item.images)[0]]?.filePath}` : 'https://via.placeholder.com/50';
              return <Option
                key={item.id}
                value={item.title}
              >
                <ResultContainer>
                  <Image src={imageSrc} alt={item.title}/>
                  <Descriptions>
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                  </Descriptions>
                </ResultContainer>
              </Option>
            });
            setSearchValue(options);
          }
        }
      }
    } else {
      setSearchValue([]);
    }
  };
  /**
   * Selected item
   * @params value, option
   */
  const onSelect = async (value, option) => {
    if(option.value) {
      dispatch(
        addTournamentsPanelAction(value,result),
      );
    }
  };

  return (
    <AutoComplete
      dataSource={searchValue}
      onSearch={debounce(handleSearch, 300)}
      onChange={onSelect}
      placeholder='Search here'
      notFoundContent={notFound}
    />
  );
}

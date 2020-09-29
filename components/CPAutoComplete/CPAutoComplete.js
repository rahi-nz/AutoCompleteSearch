// @flow
import React from 'react';
import { Input, AutoComplete } from 'antd';

type PropTypes = {
  value: string,
  style: string,
  options: Array,
  trigger: string,
  onChange: Function,
  onSearch: Function,
  onSelect: Function,
  inputSize: number,
  className: string,
  placeholder: string,
  defaultValue: string,
  notFoundContent: string,
  inputPlaceholder: string,
  dropdownClassName: string,
  dropdownMatchSelectWidth: string,
};

const CPAutoComplete = ({
  value,
  style,
  options,
  trigger,
  onChange,
  onSearch,
  onSelect,
  className,
  inputSize,
  placeholder,
  defaultValue,
  notFoundContent,
  inputPlaceholder,
  dropdownClassName,
  dropdownMatchSelectWidth,
}: PropTypes) => {
  return (
    <AutoComplete
      style={style}
      value={value}
      options={options}
      trigger={trigger}
      onChange={onChange}
      onSearch={onSearch}
      onSelect={onSelect}
      className={className}
      placeholder={placeholder}
      defaultValue={defaultValue}
      notFoundContent={notFoundContent}
      dropdownClassName={dropdownClassName}
      dropdownMatchSelectWidth={dropdownMatchSelectWidth}
    >
      <Input.Search size="large" placeholder="search here" enterButton />
    </AutoComplete>
  );
};

export default CPAutoComplete;

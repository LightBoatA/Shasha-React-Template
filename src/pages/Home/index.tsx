import React, { useCallback, useMemo } from 'react';
import './index.less';
import { useSelector, useDispatch } from "react-redux";
import { updateNumber } from '../../redux/numberSlice';
import { StoreState } from '../../redux/store';

interface IProps {

}
export const Home: React.FC<IProps> = props => {

  const number = useSelector((state: StoreState) => state.number.value);
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch(updateNumber(8642))
  }, [dispatch])

  return useMemo(() => {
    return (
      <div className="page-home">
        <h1>{number}</h1>
        <button onClick={handleClick}>change to 8642</button>
      </div>
    );
  }, [handleClick, number]);
};

export default Home;
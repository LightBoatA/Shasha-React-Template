import React, { useMemo } from 'react';
import './index.less';

interface IProps {

}
export const Home: React.FC<IProps> = props => {

  return useMemo(() => {
    return (
      <div className="page-home">
        首页
      </div>
    );
  }, []);
};

export default Home;
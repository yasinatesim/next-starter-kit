import { useSelector } from 'react-redux';

import { getCount } from '../selectors';

const useCount = () => useSelector(getCount);

export default useCount;

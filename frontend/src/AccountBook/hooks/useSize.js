import { useMediaQuery } from '@material-ui/core';

const useSize = () => {
  const isMobileSize = useMediaQuery((theme) => theme.breakpoints.down('xs'));
  return { isMobileSize };
};
export default useSize;

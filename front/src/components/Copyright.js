import { Link, Typography } from '@mui/material';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="primary"
      align="center"
      {...props}
      m="100"
    >
      {'Copyright © '}
      <Link color="primary" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default Copyright;

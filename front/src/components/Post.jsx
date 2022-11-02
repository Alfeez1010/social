import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from '@mui/material';
import Data from './data';

import React from 'react';
import { useSelector } from 'react-redux';

function Post() {
  const name = useSelector((state) => state.user.name);

  return (
    <Box>
      {Data.products.map((products) => (
        <Card sx={{ marginBottom: '10px' }}>
          <CardHeader
            avatar={
              <Avatar
                sx={{ bgcolor: 'red' }}
                src="/assets/two.jpeg"
                aria-label="recipe"
              ></Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVert />
              </IconButton>
            }
            title="Mr_alfee"
            subheader="September 14, 2022"
          />
          <div>
            <CardMedia
              key={products.id}
              component="img"
              height="10%"
              image={products.image}
              alt=""
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {products.description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                />
              </IconButton>
              <IconButton aria-label="share">
                <Share />
              </IconButton>
            </CardActions>
          </div>
        </Card>
      ))}{' '}
    </Box>
  );
}

export default Post;

import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';

function Rightbar() {
  return (
    <Box flex={1.5} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position="fixed" width={260}>
        <Typography variant="h6" fontWeight={250}>
          Online Friends
        </Typography>
        <AvatarGroup max={10} width="100" gap={5} mr={5}>
          <Avatar alt="Remy Sharp" src="assets/1.jpg" />
          <Avatar alt="Travis Howard" src="assets/4.jpeg" />
          <Avatar alt="Remy Sharp" src="assets/6.jpg" />
          <Avatar alt="Travis Howard" src="assets/two.jpeg" />
          <Avatar alt="Cindy Baker" src="assets/three.jpg" />
          <Avatar alt="Agnes Walker" src="assets/7.jpg" />
          <Avatar alt="Trevor Henderson" src="assets/three.jpg" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={250} mt={1} mb={1}>
          Trending Posts{' '}
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={4}>
          <ImageListItem>
            <img
              src="https://media.timeout.com/images/102530837/1024/768/image.jpg"
              alt=""
            />
            ,
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1580518337843-f959e992563b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWN0b3JzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"
              alt=""
            />
            ,
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YWN0b3JzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1615672968547-811b8e470371?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            ,
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1600297485496-4d5f07d8adb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            ,
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1600385546605-536b691202df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=476&q=80"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={250} mt={1} mb={1}>
          Latest Convesation
        </Typography>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://mui.com/static/images/avatar/3.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="https://mui.com/static/images/avatar/3.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://mui.com/static/images/avatar/3.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
      ;
    </Box>
  );
}

export default Rightbar;

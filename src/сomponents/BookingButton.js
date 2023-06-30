import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Chip from '@mui/material/Chip';
import { Grid, Button, Container, Box } from '@mui/material';

import TelegramIcon from '@mui/icons-material/Telegram';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function BookingButton() {
  const [open, setOpen] = React.useState(false);

  const toggler = () => {
    setOpen((isOpen) => !isOpen);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="outlined"
        onClick={toggler}
        sx={{
          position: 'fixed',
          zIndex: 1111111,
          right: '1.2rem',
          bottom: '2rem',
          marginRight: 0,
          borderRadius: '50%',
          height: '70px',
          width: '74px',
          borderColor: 'inherite',
          background: 'green',
          color: 'white',
          '&:hover': {
            background: 'green',
            color: 'white',
            opacity: [0.7, 0.7, 0.7],
          },
          '@media (max-width: 900px)': {
            position: 'fixed',
            bottom: '3rem',
            right: '1rem',
          },
        }}
      >
        Бронь
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        sx={{
          height: '100%',
        }}
      >
        <AppBar sx={{ position: 'relative', background: 'green' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Забронировать
            </Typography>
          </Toolbar>
        </AppBar>

        <Box
          sx={{
            p: 2,
            backgroundImage:
              'url(https://img.freepik.com/free-vector/leaves-wallpaper-with-metallic-foil-concept_79603-942.jpg?w=1060&t=st=1684069914~exp=1684070514~hmac=6b2628b3ca607fc24c7a4c0ace3aba8e6aa0f57e26e343663ad7a5f60df85f67)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '100%',
          }}
        >
          <Container
            maxWidth="md"
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              borderRadius: '10%',
              boxShadow: '0px 0px 110px lightgreen',
              marginTop: '30px',
            }}
          >
            <Grid
              container
              rowSpacing={{ xs: 4, sm: 3, xl: 5 }}
              align="center"
              alignItems="center"
              justifyContent="center"
            >
              <Grid item xs={12} sm={12} md={12}>
                <Typography variant="h5" align="center" gutterBottom={true}>
                  Для бронирования мы предлагаем несколько вариантов
                </Typography>
              </Grid>

              <Grid item xs={12} sm={12} md={12}>
                <Divider>
                  <Chip label="По номеру телефона" />
                </Divider>
              </Grid>

              <Grid item xs={6} sm={6} md={6}>
                <Button
                  href="tel:+79785255685"
                  variant="contained"
                  target="_blank"
                  sx={{
                    borderColor: '#fff',
                    color: '#000',
                    backgroundColor: 'inherit',
                  }}
                >
                  +7 978 525 56 85
                </Button>
              </Grid>

              <Grid item xs={12} sm={12} md={12}>
                <Divider>
                  <Chip label="В мессенджерах" />
                </Divider>
              </Grid>

              <Grid item xs={6}>
                <Button
                  href="tg://resolve?domain=+79788573511"
                  variant="contained"
                  target="_blank"
                  sx={{
                    borderColor: '#fff',
                    color: '#000',
                    backgroundColor: 'inherit',
                    rowGap: '10px',
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2em"
                    height="2em"
                    viewBox="0 0 240 240"
                    id="telegram"
                  >
                    <linearGradient
                      id="a"
                      x1="-683.305"
                      x2="-693.305"
                      y1="534.845"
                      y2="511.512"
                      gradientTransform="matrix(6 0 0 -6 4255 3247)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#37aee2"></stop>
                      <stop offset="1" stop-color="#1e96c8"></stop>
                    </linearGradient>
                    <path
                      fill="url(#a)"
                      d="M240 120c0 66.3-53.7 120-120 120S0 186.3 0 120 53.7 0 120 0s120 53.7 120 120z"
                    ></path>
                    <path
                      fill="#c8daea"
                      d="M98 175c-3.9 0-3.2-1.5-4.6-5.2L82 132.2 152.8 88l8.3 2.2-6.9 18.8L98 175z"
                    ></path>
                    <path
                      fill="#a9c9dd"
                      d="M98 175c3 0 4.3-1.4 6-3 2.6-2.5 36-35 36-35l-20.5-5-19 12-2.5 30v1z"
                    ></path>
                    <linearGradient
                      id="b"
                      x1="128.991"
                      x2="153.991"
                      y1="118.245"
                      y2="78.245"
                      gradientTransform="matrix(1 0 0 -1 0 242)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#eff7fc"></stop>
                      <stop offset="1" stop-color="#fff"></stop>
                    </linearGradient>
                    <path
                      fill="url(#b)"
                      d="M100 144.4l48.4 35.7c5.5 3 9.5 1.5 10.9-5.1L179 82.2c2-8.1-3.1-11.7-8.4-9.3L55 117.5c-7.9 3.2-7.8 7.6-1.4 9.5l29.7 9.3L152 93c3.2-2 6.2-.9 3.8 1.3L100 144.4z"
                    ></path>
                  </svg>
                  Telegram
                </Button>
              </Grid>

              <Grid item xs={6}>
                <Button
                  href="viber://add?number=+79788573511"
                  variant="contained"
                  target="_blank"
                  sx={{
                    borderColor: '#fff',
                    color: '#000',
                    backgroundColor: 'inherit',
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2em"
                    height="2em"
                    enable-background="new 0 0 32 32"
                    viewBox="0 0 32 32"
                    id="viber"
                  >
                    <path
                      fill="#FFF"
                      d="M26.648,4.324c-0.719-0.663-3.63-2.775-10.12-2.803c0,0-7.651-0.458-11.378,2.962
		c-2.073,2.073-2.803,5.114-2.882,8.88C2.188,17.129,2.092,24.185,8.894,26.1h0.005l-0.005,2.922c0,0-0.045,1.184,0.736,1.422
		c0.94,0.294,1.495-0.606,2.396-1.574c0.493-0.533,1.172-1.314,1.688-1.909c4.655,0.391,8.229-0.504,8.637-0.634
		c0.94-0.306,6.258-0.985,7.119-8.042C30.364,11.001,29.039,6.402,26.648,4.324z"
                    ></path>
                    <path
                      fill="#A18DC5"
                      d="M27.648,5.824c-0.719-0.663-3.63-2.775-10.12-2.803c0,0-7.651-0.458-11.378,2.962
		c-2.073,2.073-2.803,5.114-2.882,8.88c-0.048,2.27-0.098,5.732,1.355,8.546c0.978,1.18,2.338,2.147,4.271,2.691h0.005l-0.005,2.922
		c0,0-0.045,1.184,0.736,1.422c0.94,0.294,1.495-0.606,2.396-1.574c0.493-0.533,1.172-1.314,1.688-1.909
		c4.655,0.391,8.229-0.504,8.637-0.634c0.94-0.306,6.258-0.985,7.119-8.042c0.662-5.385,0.107-9.298-1.191-11.814
		C28.077,6.236,27.869,6.015,27.648,5.824z"
                    ></path>
                    <path
                      fill="#455A64"
                      d="M9.984,31.001c-0.159,0-0.326-0.025-0.503-0.081c-0.904-0.275-1.109-1.335-1.086-1.918l0.004-2.529
		c-6.861-2.181-6.706-9.549-6.631-13.122c0.078-3.707,0.78-6.334,2.209-8.27c0.164-0.223,0.477-0.269,0.699-0.105
		c0.222,0.164,0.27,0.477,0.105,0.699c-1.301,1.762-1.94,4.208-2.014,7.697c-0.077,3.64-0.22,10.413,6.25,12.243
		c0.087,0.022,0.168,0.067,0.232,0.131c0.094,0.094,0.149,0.221,0.149,0.354l-0.005,2.922c-0.005,0.186,0.045,0.84,0.382,0.942
		c0.438,0.14,0.746-0.154,1.453-0.956c0.136-0.155,0.279-0.317,0.431-0.48c0.489-0.528,1.164-1.305,1.676-1.896
		c0.104-0.121,0.259-0.186,0.42-0.171c4.857,0.406,8.41-0.602,8.443-0.612c0.089-0.029,0.22-0.063,0.381-0.104
		c1.545-0.394,5.651-1.439,6.393-7.522c0.803-6.535-0.139-11.337-2.652-13.522c-0.489-0.451-3.21-2.652-9.794-2.681
		c-0.074-0.004-4.462-0.246-8.09,1.111C8.175,3.229,7.889,3.097,7.792,2.839C7.696,2.58,7.827,2.292,8.085,2.195
		c3.831-1.433,8.285-1.184,8.473-1.174c6.925,0.029,9.903,2.45,10.429,2.935c2.761,2.401,3.822,7.515,2.978,14.389
		c-0.825,6.762-5.577,7.972-7.138,8.37c-0.136,0.035-0.245,0.062-0.322,0.087c-0.723,0.229-4.247,0.998-8.579,0.677
		c-0.492,0.567-1.088,1.25-1.533,1.73c-0.147,0.158-0.284,0.313-0.415,0.462C11.4,30.326,10.806,31.001,9.984,31.001z"
                    ></path>
                    <path
                      fill="#FFF"
                      d="M22.735,20.13v0.011c-0.612,1.076-1.756,2.266-2.934,1.886l-0.012-0.017
			c-1.195-0.334-4.009-1.784-5.788-3.2c-0.917-0.725-1.756-1.58-2.401-2.401c-0.583-0.73-1.172-1.597-1.744-2.639
			c-1.207-2.181-1.473-3.155-1.473-3.155C8.005,9.438,9.188,8.294,10.27,7.682h0.012c0.521-0.272,1.019-0.181,1.353,0.221
			c0,0,0.703,0.838,1.002,1.252c0.283,0.385,0.663,1.002,0.861,1.348c0.345,0.617,0.13,1.246-0.21,1.506l-0.68,0.544
			c-0.345,0.277-0.3,0.792-0.3,0.792s1.008,3.812,4.774,4.774c0,0,0.516,0.045,0.793-0.3l0.544-0.679
			c0.26-0.34,0.889-0.555,1.506-0.21c0.833,0.47,1.892,1.201,2.594,1.863C22.917,19.117,23.007,19.609,22.735,20.13L22.735,20.13z"
                    ></path>
                    <path
                      fill="#455A64"
                      d="M20.258,22.6c-0.207,0-0.412-0.033-0.61-0.096l-0.171-0.065c-1.376-0.443-4.095-1.89-5.786-3.237
			c-0.902-0.712-1.785-1.595-2.483-2.483c-0.644-0.805-1.246-1.717-1.79-2.707c-1.221-2.207-1.505-3.222-1.517-3.264
			c-0.461-1.43,0.854-2.783,2.122-3.5l0.144-0.065c0.679-0.302,1.397-0.145,1.852,0.401l0,0c0,0,0.716,0.856,1.022,1.278
			c0.302,0.41,0.698,1.058,0.89,1.392c0.482,0.862,0.184,1.751-0.339,2.152l-0.671,0.537c-0.11,0.089-0.117,0.325-0.114,0.358
			c0,0,0,0,0,0c0.008,0,0.998,3.465,4.4,4.334c0.052-0.014,0.211-0.044,0.279-0.129l0.544-0.679
			c0.433-0.567,1.401-0.747,2.141-0.334c0.738,0.417,1.884,1.173,2.693,1.936c0.532,0.432,0.678,1.126,0.372,1.814v0.019
			l-0.065,0.126C22.875,20.907,21.793,22.6,20.258,22.6z M20.106,21.588c0.792,0.125,1.675-0.809,2.159-1.633l0.027-0.056
			c0.157-0.301,0.127-0.543-0.088-0.718c-0.639-0.602-1.619-1.305-2.524-1.815c-0.337-0.189-0.749-0.07-0.863,0.079l-0.551,0.688
			c-0.354,0.442-0.903,0.49-1.123,0.49l-0.104-0.004c-4.084-1.038-5.169-4.978-5.213-5.145c-0.021-0.164-0.068-0.878,0.47-1.31
			l0.68-0.544c0.132-0.101,0.322-0.45,0.086-0.872c-0.215-0.375-0.58-0.959-0.828-1.295c-0.295-0.407-0.981-1.225-0.983-1.227
			c-0.192-0.231-0.438-0.256-0.738-0.099l-0.102,0.053c-0.758,0.455-1.84,1.386-1.551,2.284c0.008,0.029,0.284,0.987,1.434,3.066
			c0.517,0.941,1.087,1.805,1.697,2.569c0.653,0.832,1.477,1.654,2.321,2.321c1.793,1.428,4.565,2.818,5.612,3.111L20.106,21.588z"
                    ></path>
                    <path
                      fill="#FFF"
                      d="M23,13.5c-0.276,0-0.5-0.224-0.5-0.5c0-3.033-2.467-5.5-5.5-5.5c-0.276,0-0.5-0.224-0.5-0.5
		s0.224-0.5,0.5-0.5c3.584,0,6.5,2.916,6.5,6.5C23.5,13.276,23.276,13.5,23,13.5z"
                    ></path>
                    <path
                      fill="#FFF"
                      d="M21,13.5c-0.276,0-0.5-0.224-0.5-0.5c0-1.93-1.57-3.5-3.5-3.5c-0.276,0-0.5-0.224-0.5-0.5
		s0.224-0.5,0.5-0.5c2.481,0,4.5,2.019,4.5,4.5C21.5,13.276,21.276,13.5,21,13.5z"
                    ></path>
                    <path
                      fill="#FFF"
                      d="M19,13.5c-0.276,0-0.5-0.224-0.5-0.5c0-0.827-0.673-1.5-1.5-1.5c-0.276,0-0.5-0.224-0.5-0.5
		s0.224-0.5,0.5-0.5c1.378,0,2.5,1.122,2.5,2.5C19.5,13.276,19.276,13.5,19,13.5z"
                    ></path>
                    <circle cx="6.5" cy="3.5" r=".5" fill="#455A64"></circle>
                  </svg>
                  Viber
                </Button>
              </Grid>

              <Grid item xs={12} sm={12} md={12}>
                <Divider>
                  <Chip label="Через сервис бронирования" />
                </Divider>
              </Grid>

              <Grid>
                <Typography paragraph>
                  Так же вы можете произвести бронь через наших партнеров
                  сервиса по бронирования жилья
                </Typography>
                <Button
                  href="https://sutochno.ru/front/searchapp/detail/1159093?search_history=1&guests_adults=1&occupied=2023-05-23;2023-05-24&id=1&term=%D0%A4%D0%B5%D0%BE%D0%B4%D0%BE%D1%81%D0%B8%D1%8F+%D1%83%D0%BB%D0%B8%D1%86%D0%B0+%D0%A7%D0%B5%D1%80%D0%BD%D1%8B%D1%88%D0%B5%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE,+8&SW.lat=45.054253592389855&SW.lng=35.3779242195129&NE.lat=45.0617361612155&NE.lng=35.39487578048703"
                  variant="contained"
                  target="_blank"
                  sx={{
                    borderColor: 'rgb(0, 0, 0)',
                    color: '#000',
                    fontWeight: 500,
                    backgroundColor: 'rgba(255, 255, 255, 0.6)',
                    marginBottom: '20px',
                  }}
                >
                  СУТОЧНО.РУ
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Dialog>
    </>
  );
}

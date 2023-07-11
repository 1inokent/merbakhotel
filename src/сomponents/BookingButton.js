import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Chip from '@mui/material/Chip';
import { Grid, Button, Container, Box } from '@mui/material';

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
                  href="tel:+79788573511"
                  variant="contained"
                  target="_blank"
                  sx={{
                    borderColor: '#fff',
                    color: '#000',
                    backgroundColor: 'inherit',
                  }}
                >
                  +7 978 857 35 11
                </Button>
              </Grid>

              <Grid item xs={6} sm={6} md={6}>
                <Button
                  href="tel:+7978368727"
                  variant="contained"
                  target="_blank"
                  sx={{
                    borderColor: '#fff',
                    color: '#000',
                    backgroundColor: 'inherit',
                  }}
                >
                  +7 978 836 87 27
                </Button>
              </Grid>

              <Grid item xs={12} sm={12} md={12}>
                <Divider>
                  <Chip label="В мессенджерах" />
                </Divider>
              </Grid>

              <Grid item xs={6}>
                <Button
                  href="tg://resolve?domain=+7978368727"
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
                  href="https://wa.me/+7978368727"
                  variant="contained"
                  target="_blank"
                  sx={{
                    borderColor: '#fff',
                    color: '#000',
                    backgroundColor: 'inherit',
                  }}
                >
                  <svg
                    style={{ color: 'rgb(23, 242, 7)' }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="2em"
                    height="2em"
                    fill="currentColor"
                    class="bi bi-whatsapp"
                    viewBox="0 0 16 16"
                  >
                    {' '}
                    <path
                      d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
                      fill="#17f207"
                    ></path>{' '}
                  </svg>
                  Whatsapp
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

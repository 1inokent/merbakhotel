import React from 'react';

import CarouselDesktop from './CarouselDesktop';
import BookingButton from './BookingButton';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';

import { Container, Grid } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import styles from './RoomSectionDesktop.module.css';

import {
  TbWifi,
  TbTeapot,
  TbAirConditioning,
  TbDeviceDesktop,
  TbMicrowave,
  TbFridge,
} from 'react-icons/tb';

const styleButton = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 630,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  m: '5px 0 px 0',
};

export default function RoomSectionDesktop({ rooms, descriptionRoom }) {
  const [openOneRoom, setOpenOneRoom] = React.useState(false);
  const [openTwoRoom, setOpenTwoRoom] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleOpenOneRoom = () => setOpenOneRoom(true);
  const handleCloseOneRoom = () => setOpenOneRoom(false);

  const handleOpenTwoRoom = () => setOpenTwoRoom(true);
  const handleCloseTwoRoom = () => setOpenTwoRoom(false);

  return (
    <div className={styles.container}>
      <h2>НАШИ НОМЕРА</h2>

      <div className={styles.boxOne}>
        <div className={styles.description__twoRoom}>
          <h4>Двухкомнатный номер</h4>
          <p>
            Уютный семейный двух комнатный номер от двух до пяти человек 32м2
          </p>
          <Button
            onClick={handleOpenTwoRoom}
            sx={{
              marginTop: '30px',
              border: '#0080001f  solid',
              color: '#000',
            }}
          >
            Подробнее
          </Button>
          <div>
            <Modal
              open={openTwoRoom}
              onClose={handleCloseTwoRoom}
              aria-labelledby="responsive-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={styleButton}>
                <Container>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <Typography variant="h6" sx={{}}>
                        Удобства в номерах:
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Divider variant="middle" />
                    </Grid>
                    <Grid
                      item
                      xs={4}
                      sx={{ display: 'flex', alignContent: 'center' }}
                    >
                      <Typography>
                        <TbWifi className={styles.cardIcons} />
                        <Typography paragraph>
                          бесплатный интернет Wi-Fi
                        </Typography>
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography>
                        <TbAirConditioning className={styles.cardIcons} />
                        <Typography paragraph>Кондиционер</Typography>
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography>
                        <TbTeapot className={styles.cardIcons} />
                        <Typography paragraph>Чайник</Typography>
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Divider variant="middle" />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography>
                        <TbDeviceDesktop className={styles.cardIcons} />
                        <Typography paragraph>Телевизор</Typography>
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography>
                        <TbMicrowave className={styles.cardIcons} />
                        <Typography paragraph>Микроволновка</Typography>
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography>
                        <TbFridge className={styles.cardIcons} />
                        <Typography paragraph>Холодильник</Typography>
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Divider variant="middle" />
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h6">Описание комнаты:</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography paragraph>
                      Просторный номер площадью 32 квадратных метра.В номере
                      есть собственный душ и туалет.В распоряжении гостей две
                      двуспальные кровати и одна односпальная кровать. Мы также
                      предлагаем бесплатную уборку номера и замену постельного
                      белья.Для вашего удобства доступны две общие кухни и
                      удобная веранда на этаже.Во дворе отеля также имеется
                      мангал, который вы можете использовать для приготовления
                      ужинов на свежем воздухе. Кроме того, мы предоставляем
                      бесплатную парковку для гостей отеля, чтобы вы могли быть
                      уверены в сохранности своего автомобиля. Мы стремимся
                      сделать ваше пребывание комфортным и приятным.
                    </Typography>
                  </Grid>
                </Container>
              </Box>
            </Modal>
          </div>
        </div>
        <CarouselDesktop images={rooms[0]} descriptionRoom={``} />
      </div>

      <div className={styles.boxTwo}>
        <div className={styles.description__oneRoom}>
          <h4>Однокомнатный номер</h4>
          <p>Комфортный однокомнатный номер от двух до четырёх человек 16м2</p>

          <Button
            onClick={handleOpenOneRoom}
            sx={{
              marginTop: '30px',
              border: '#0080001f  solid',
              color: '#000',
            }}
          >
            Подробнее
          </Button>
          <div>
            <Modal
              open={openOneRoom}
              onClose={handleCloseOneRoom}
              aria-labelledby="responsive-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={styleButton}>
                <Container>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <Typography variant="h6" sx={{}}>
                        Удобства в номерах:
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Divider variant="middle" />
                    </Grid>
                    <Grid
                      item
                      xs={4}
                      sx={{ display: 'flex', alignContent: 'center' }}
                    >
                      <Typography>
                        <TbWifi className={styles.cardIcons} />
                        <Typography paragraph>
                          бесплатный интернет Wi-Fi
                        </Typography>
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography>
                        <TbAirConditioning className={styles.cardIcons} />
                        <Typography paragraph>Кондиционер</Typography>
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography>
                        <TbTeapot className={styles.cardIcons} />
                        <Typography paragraph>Чайник</Typography>
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Divider variant="middle" />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography>
                        <TbDeviceDesktop className={styles.cardIcons} />
                        <Typography paragraph>Телевизор</Typography>
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography>
                        <TbMicrowave className={styles.cardIcons} />
                        <Typography paragraph>Микроволновка</Typography>
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography>
                        <TbFridge className={styles.cardIcons} />
                        <Typography paragraph>Холодильник</Typography>
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Divider variant="middle" />
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h6">Описание комнаты:</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography paragraph>
                      У нас есть уютный однокомнатный номер площадью 16
                      квадратных метров.В номере есть собственный душ и туалет.
                      В распоряжении гостей две двуспальные кровати. Мы также
                      предлагаем бесплатную уборку номера и замену постельного
                      белья. Для вашего удобства доступны две общие кухни и
                      удобная веранда на этаже. Во дворе отеля также имеется
                      мангал, который вы можете использовать для приготовления
                      ужинов на свежем воздухе. Кроме того, мы предоставляем
                      бесплатную парковку для гостей отеля, чтобы вы могли быть
                      уверены в сохранности своего автомобиля. Мы стремимся
                      сделать ваше пребывание комфортным и приятным.
                    </Typography>
                  </Grid>
                </Container>
              </Box>
            </Modal>
          </div>
        </div>
        <CarouselDesktop images={rooms[1]} />
      </div>
    </div>
  );
}

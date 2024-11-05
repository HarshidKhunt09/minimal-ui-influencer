'use client';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import { _user } from 'src/_mock';
import { SeoIllustration } from 'src/assets/illustrations';

import AppWidget from '../app-widget';
import AppWelcome from '../app-welcome';
import AppWidgetSummary from '../app-widget-summary';
import AppAreaInstalled from '../app-area-installed';
import AppCurrentBalance from '../app-current-balance';

// ----------------------------------------------------------------------

export function OverviewAppView() {
  return (
    <Container maxWidth='xl'>
      <Grid container spacing={3}>
        <Grid xs={12} md={8}>
          <AppWelcome
            title={`Welcome back 👋 \n ${_user.displayName}`}
            img={<SeoIllustration />}
            action={
              <Button variant="contained" color="primary">
                View Earnings
              </Button>
            }
          />
        </Grid>

        <Grid xs={12} md={4}>
        <Stack spacing={3}>
            <AppWidget
              title="Conversion"
              total={38566}
              icon="solar:user-rounded-bold"
              chart={{
                series: 48,
              }}
            />

            <AppWidget
              title="Applications"
              total={55566}
              icon="fluent:mail-24-filled"
              color="info"
              chart={{
                series: 75,
              }}
            />
          </Stack>
        </Grid>

        <Grid xs={12} md={4}>
          <Stack spacing={3}>
            <AppWidgetSummary
              title="Total Active Users"
              percent={2.6}
              total={18765}
              chart={{
                series: [5, 18, 12, 51, 68, 11, 39, 37, 27, 20],
              }}
            />
            <AppCurrentBalance
              title="Current Balance"
              currentBalance={187650}
              sentAmount={25500}
            />
          </Stack>
        </Grid>

        <Grid xs={12} md={8}>
          <AppAreaInstalled
            title="Area Installed"
            subheader="(+43%) than last year"
            chart={{
              categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
              ],
              series: [
                {
                  year: '2019',
                  data: [
                    {
                      name: 'Asia',
                      data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 35, 51, 49],
                    },
                    {
                      name: 'America',
                      data: [10, 34, 13, 56, 77, 88, 99, 77, 45, 13, 56, 77],
                    },
                  ],
                },
                {
                  year: '2020',
                  data: [
                    {
                      name: 'Asia',
                      data: [51, 35, 41, 10, 91, 69, 62, 148, 91, 69, 62, 49],
                    },
                    {
                      name: 'America',
                      data: [56, 13, 34, 10, 77, 99, 88, 45, 77, 99, 88, 77],
                    },
                  ],
                },
              ],
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

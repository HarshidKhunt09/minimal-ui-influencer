import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';

import { _user } from 'src/_mock';

import { Label } from 'src/components/label';

// ----------------------------------------------------------------------

export function NavUpgrade() {
  return (
    <Stack
      sx={{
        px: 2,
        py: 5,
        textAlign: 'center',
      }}
    >
      <Stack alignItems="center">
        <Box sx={{ position: 'relative' }}>
          <Avatar src={_user.photoURL} alt={_user.displayName} sx={{ width: 48, height: 48 }}>
            {_user.displayName.charAt(0).toUpperCase()}
          </Avatar>

          <Label
            color="success"
            variant="filled"
            sx={{
              top: -6,
              px: 0.5,
              left: 40,
              height: 20,
              position: 'absolute',
              borderBottomLeftRadius: 2,
            }}
          >
            Influencer
          </Label>
        </Box>

        <Stack spacing={0.5} sx={{ mb: 2, mt: 1.5, width: 1 }}>
          <Typography variant="subtitle2" noWrap>
            {_user.displayName}
          </Typography>

          <Typography variant="body2" noWrap sx={{ color: 'text.disabled' }}>
            {_user.email}
          </Typography>
        </Stack>

        <Button variant="contained" href={paths.profile} target="_blank" rel="noopener">
          Profile
        </Button>
      </Stack>
    </Stack>
  );
}
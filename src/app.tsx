import * as React from "react"
import Box from "@mui/material/Box"
import { Grid, TextField, Button } from "@mui/material"

export default function App() {
  const formValues = {
    weight: "",
    reps: 0,
    rpe: 0,
    minIncrement: 0,
  }

  const handleChange = () => {}
  const handleSubmit = () => {}
  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }} width={200}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            name="weight"
            label="Weight"
            value={formValues.weight}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            type="number"
            inputProps={{ step: "0.1" }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="reps"
            label="# of Reps"
            value={formValues.reps}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            type="number"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="rpe"
            label="RPE"
            value={formValues.rpe}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            type="number"
            inputProps={{ step: "0.1" }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="minIncrement"
            label="Minimum Weight Increment"
            value={formValues.minIncrement}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            type="number"
            inputProps={{ step: "0.1" }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

export const Sidebar = ({ earthquake, size, setSize }) => (
  <div className="aside">
    <Card sx={{ minWidth: 275 }}>
      <CardContent>

        {/* Titolo della Card */}
        <Typography variant="h5" component="div" gutterBottom>
          Erdbeben Info
        </Typography>

        {/* I tuoi dati */}
        <Typography variant="body1">
          <strong>Stärke:</strong> {earthquake?.properties?.mag ?? ""}
        </Typography>

        <Typography variant="body1">
          <strong>Epizentrum/Lage:</strong> {earthquake?.geometry?.coordinates?.[1] ?? ""}, {earthquake?.geometry?.coordinates?.[0] ?? ""}
        </Typography>

        <Typography variant="body1">
          <strong>Zeitpunkt:</strong> {earthquake?.properties?.time ? new Date(earthquake?.properties?.time).toLocaleString() : ""}
        </Typography>

      </CardContent>
    </Card>
    <aside>
      <Slider min={1}
        max={3}
        step={0.5}
        value={size}
        onChange={(e, newValue) => setSize(newValue)}
        aria-label="Size"
        valueLabelDisplay="auto" />
    </aside>
  </div>

);
import { Button } from "@mui/material";

export function ClientComponent() {
  return (
    <div className="my-5 mx-5 flex flex-row gap-4">
      <Button variant="contained">HELLO WORLD</Button>
      <Button variant="outlined">HELLO WORLD</Button>
      <Button variant="text">HELLO WORLD</Button>
    </div>
  );
}

export default ClientComponent;

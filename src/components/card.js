import * as React from "react"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardContent from "@mui/material/CardContent"
import Avatar from "@mui/material/Avatar"
import Typography from "@mui/material/Typography"
import { red } from "@mui/material/colors"

export default function RecipeReviewCard(props) {
  const {
    name,
    email,
    userName,
    dob,
    createdAt,
    updatedAt,
    about,
    address,
    lat,
    long,
  } = props

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {name.slice(0, 1)}
          </Avatar>
        }
        title={userName}
        subheader={createdAt}
      />
      <CardContent>
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              style={{
                position: "relative",
                textAlign: "right",
                height: "200px",
              }}
              width="538"
              height="327"
              id="gmap_canvas"
              src={`https://maps.google.com/maps?q=${lat},${long}&basemap=roadmap&zoom=21&t=&z=19&ie=UTF8&iwloc=&output=embed`}
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div>
        </div>
        {address}
      </CardContent>
    </Card>
  )
}

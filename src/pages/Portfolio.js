import React, { useState } from "react";
import "../App.css";
import { useStyles } from "../styles/PortfolioStyles";
import {
  Typography,
  Grid,
  Tabs,
  Tab,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Grow,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import resumeData from "../utils/resumeData";

function Portfolio() {
  const classes = useStyles();
  const [tabValue, setTabValue] = useState("All");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Grid container className="section pb_45">
      <Grid item className="section_title mb_20">
        <span></span>
        <h2>Portfolio</h2>
      </Grid>

      <Grid item xs={12}>
        <Tabs
          value={tabValue}
          indicatorColor="white"
          className={classes.custom_tabs}
          onChange={(event, newValue) => setTabValue(newValue)}
        >
          <Tab
            label="All"
            value="All"
            className={tabValue === "All" ? classes.customTabs_item_active : classes.customTabs_item}
          />

          {[...new Set(resumeData.data.projects.map((item) => item.tag))].map((tag) => (
            <Tab
              key={tag}
              label={tag}
              value={tag}
              className={tabValue === tag ? classes.customTabs_item_active : classes.customTabs_item}
            />
          ))}
        </Tabs>
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={3}>
          {resumeData.data.projects.map((project) => (
            <>
              {tabValue === project.tag || tabValue === "All" ? (
                <Grid key={project.title} item xs={12} sm={6} md={4} lg={3}>
                  <Grow in timeout={1000}>
                    <Card className={classes.custom_card} onClick={() => setIsOpen(project)}>
                      <CardActionArea>
                        <CardMedia
                          className={classes.custom_card_image}
                          image={project.imageUrl}
                          title={project.title}
                        />
                        <CardContent>
                          <Typography variant="outlined" className={classes.custom_card_title}>
                            {project.title}
                          </Typography>
                          <br />
                          <Typography variant="caption" className={classes.custom_card_caption}>
                            {project.caption}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>
              ) : null}
            </>
          ))}
        </Grid>
      </Grid>

      <Dialog maxWidth={"lg"} open={isOpen} onClose={() => setIsOpen(false)}>
        <DialogTitle onClose={() => setIsOpen(false)}>{isOpen.title}</DialogTitle>
        <img src={isOpen.imageUrl} alt="" className={classes.dialogbox_image} />
        <DialogContent>
          <Typography className={classes.dialogbox_description}>{isOpen.description}</Typography>
        </DialogContent>
        <DialogActions className={classes.dialogbox_actions}>
          {isOpen?.links?.map((link) => (
            <a
              key={link.link + isOpen.imageUrl}
              href={link.link}
              target="_blank"
              rel="noreferrer"
              className={classes.dialogbox_icon}
            >
              {" "}
              {link.icon}
            </a>
          ))}
        </DialogActions>
      </Dialog>
    </Grid>
  );
}

export default Portfolio;

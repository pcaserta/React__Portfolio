import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardText
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card
            shadow={5}
            style={{ minWidth: "450", margin: "auto", marginRight: "0px" }}
          >
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://scotch-res.cloudinary.com/image/upload/w_1050,q_auto:good,f_auto/v1540545426/tzs50mjrlopv85r3qjpq.jpg) center / cover"
              }}
            >
              APOTHECA
            </CardTitle>
            <CardText>
              This is a full stack application built with MoongooseDB, Express,
              React, and Node.js
            </CardText>
            <CardActions border style={{ textAlign: "center" }}>
              <Button colored>
                <a
                  href="https://github.com/kenzrad/apotheca"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>
              </Button>
              <Button colored>
                <a
                  href="https://enigmatic-meadow-75915.herokuapp.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Heroku
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}></CardMenu>
          </Card>
          {/* Project 2 */}

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://i2.wp.com/www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo.jpg?resize=825%2C510&ssl=1) center / cover"
              }}
            >
              Portfolio
            </CardTitle>
            <CardText>
              This is the site you are currently on. Built with React.js,
              React-MDL, HTML and CSS.
            </CardText>
            <CardActions border style={{ textAlign: "center" }}>
              <Button colored>
                <a
                  href="https://github.com/pcaserta/React__Portfolio"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>
              </Button>
              <Button colored>
                <a
                  href="https://pcaserta.github.io/React__Portfolio/#/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GitHub Pages
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}></CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://c4.wallpaperflare.com/wallpaper/570/369/129/node-js-javascript-hexagon-abstract-wallpaper-preview.jpg) center / cover"
              }}
            >
              Liri-Node-App
            </CardTitle>
            <CardText>
              Back-end application built with Javascript, Node.JS, Moment.JS
            </CardText>
            <CardActions border style={{ textAlign: "center" }}>
              <Button colored>
                <a
                  href="https://github.com/pcaserta/liri-node-app"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>
              </Button>
              <Button colored>
                <a
                  href="https://pcaserta.github.io/React__Portfolio/#/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Live Demo
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}></CardMenu>
          </Card>
          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://c4.wallpaperflare.com/wallpaper/570/369/129/node-js-javascript-hexagon-abstract-wallpaper-preview.jpg) center / cover"
              }}
            >
              Bamazon
            </CardTitle>
            <CardText>
              Back-end application built with Javascript, Node.JS, MySQL,
              Inquirer
            </CardText>
            <CardActions border style={{ textAlign: "center" }}>
              <Button colored>
                <a
                  href="https://github.com/pcaserta/liri-node-app"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>
              </Button>
              <Button colored>
                <a
                  href="https://pcaserta.github.io/React__Portfolio/#/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Live Demo
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}></CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://c8.alamy.com/comp/DWJC73/javascript-against-futuristic-black-and-blue-background-DWJC73.jpg) center / cover"
              }}
            >
              Vinylly
            </CardTitle>
            <CardText>
              Front-end application built with JavaScript HTML CSS and external
              APIs.
            </CardText>
            <CardActions border style={{ textAlign: "center" }}>
              <Button colored>
                <a
                  href="https://github.com/kenzrad/vinylly"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>
              </Button>
              <Button colored>
                <a
                  href="https://pcaserta.github.io/React__Portfolio/#/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Live Demo
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://i2.wp.com/www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo.jpg?resize=825%2C510&ssl=1) center / cover"
              }}
            >
              JavaScript Project #2
            </CardTitle>
            <CardText>
              This is my first react project brought to you by me. It is a
              full-stack function website.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}></CardMenu>
          </Card>
          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://i2.wp.com/www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo.jpg?resize=825%2C510&ssl=1) center / cover"
              }}
            >
              JavaScript Project #3
            </CardTitle>
            <CardText>
              This is my first react project brought to you by me. It is a
              full-stack function website.
            </CardText>
            <CardActions border>
              <Button colored>
                <a
                  href="https://www.linkedin.com/in/patrick-caserta-46530312b/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>
              </Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 4 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://i2.wp.com/www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo.jpg?resize=825%2C510&ssl=1) center / cover"
              }}
            >
              JavaScript Project #4
            </CardTitle>
            <CardText>
              This is my first react project brought to you by me. It is a
              full-stack function website.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://i2.wp.com/www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo.jpg?resize=825%2C510&ssl=1) center / cover"
              }}
            >
              MongoDB Project #1
            </CardTitle>
            <CardText>
              This is my first react project brought to you by me. It is a
              full-stack function website.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://i2.wp.com/www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo.jpg?resize=825%2C510&ssl=1) center / cover"
              }}
            >
              MongoDB Project #2
            </CardTitle>
            <CardText>
              This is my first react project brought to you by me. It is a
              full-stack function website.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://i2.wp.com/www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo.jpg?resize=825%2C510&ssl=1) center / cover"
              }}
            >
              MongoDB Project #3
            </CardTitle>
            <CardText>
              This is my first react project brought to you by me. It is a
              full-stack function website.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 4 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://i2.wp.com/www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo.jpg?resize=825%2C510&ssl=1) center / cover"
              }}
            >
              MongoDB Project #4
            </CardTitle>
            <CardText>
              This is my first react project brought to you by me. It is a
              full-stack function website.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    }
  }
  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Node.JS</Tab>
          <Tab>JavaScript</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;

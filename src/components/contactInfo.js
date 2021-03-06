import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class ContactInfo extends Component {
  render() {
    return (
      <Grid>
        <Cell col={2}>
          <div>
            <a
              href={this.props.link}
              rel="noopener noreferrer"
              target="_blank"
              style={{ color: "black" }}
            >
              <i
                className={this.props.logo}
                aria-hidden="true"
                style={{ paddingRight: ".90em" }}
              />
            </a>
          </div>
        </Cell>
        <Cell col={10}>
          <div style={{ display: "flex", fontSize: "25px", padding: "1em" }}>
            {this.props.info}
          </div>
        </Cell>
      </Grid>
    );
  }
}

export default ContactInfo;

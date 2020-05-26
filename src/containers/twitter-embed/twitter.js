import React from "react";
import "./twitter.css";
import {TwitterTimelineEmbed} from "react-twitter-embed";
import { twitterDetails } from "../../portfolio";
import { Fade } from "react-reveal";

var widthScreen=window.screen.width;
export default function Twitter() {
	if (twitterDetails.userName){
		return (
			<Fade bottom duration={1000} distance="20px">
            
			</Fade>
  );  
	} else {  
		return null;
	}
}
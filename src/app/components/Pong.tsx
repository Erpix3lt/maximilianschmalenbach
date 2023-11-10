'use client'

import React from "react";
//@ts-ignore
import { type Sketch } from "@p5-wrapper/react";
//@ts-ignore
import { NextReactP5Wrapper } from "@p5-wrapper/next";

//@ts-ignore
const sketch: Sketch = p5 => {
    var xBall = 50;
    var yBall = 50;
    var xSpeed = 5;
    var ySpeed = -5;
    var score = 0;
    let width = 0;
    let height = 0;
    let paddleHeight = 0;
    let accentColor = '#3B82F6'
    let gameState = "playing";

    p5.setup = () => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight);
        width = p5.windowWidth;
        height = p5.windowHeight;
        paddleHeight = height - 20;
    }

    p5.draw = () => {
        p5.clear()
        if (gameState === "playing") {
            p5.noStroke();
            p5.rect(p5.mouseX, paddleHeight, 90, 15);
    
            move();
            display();
            paddle();  // Move this line before bounce()
            bounce();
        
            if (yBall > height) {
                gameState = "lost";
            }
        } else if (gameState === "lost") {
            p5.noStroke();
            p5.fill(accentColor);
            p5.textSize(32);
            p5.text("Game Over! Your Score: " + score, width / 2 - 150, height / 2);
        }
    }    

    function move() {
        xBall += xSpeed
        yBall += ySpeed
    }

    function bounce() {
        if (xBall < 10 ||
            xBall > width - 10) {
            xSpeed *= -1;
        }
        if (yBall < 10 ||
            yBall > height - 10) {
            ySpeed *= -1;
        }
    }

    function display() {
        p5.fill(accentColor);
        p5.ellipse(xBall, yBall, 20, 20)
    }

    function paddle() {
        if (
            yBall + 10 > paddleHeight && // Check if the ball is at or below the top of the paddle
            yBall < paddleHeight + 15 && // Check if the ball is at or above the bottom of the paddle
            xBall > p5.mouseX &&          // Check if the ball is to the right of the left edge of the paddle
            xBall < p5.mouseX + 90        // Check if the ball is to the left of the right edge of the paddle
        ) {
            ySpeed *= -1; // Reverse the y-direction of the ball
            score++;
        }
    }
};

export default function Page() {
    return (
        <div>
            <NextReactP5Wrapper sketch={sketch} />
        </div>
    )
}

import { update as updatesnake,draw as drawsnake, SNAKE_SPEED,getSnakeHead,snakeIntersection } from './snake.js'
import {outsideGrid} from './grid.js'

import {update as updateFood,draw as drawFood } from './food.js'
let lastRenderTime=0
let gameover=false
const gameBoard=document.getElementById('game-board')
function main(currentTime)
{
    if(gameover)
    {
        if(confirm('you lost .press ok to restart.')){
            window.location='/'

        }
        return 
       
    }
    window.requestAnimationFrame(main)
    const secondsSinceLastRender=(currentTime-lastRenderTime)/1000
    if(secondsSinceLastRender < 1 / SNAKE_SPEED) return
  

    lastRenderTime=currentTime
    update()
    draw()
    
}
window.requestAnimationFrame(main)
function update()
{
    updatesnake()
    updateFood()
    checkdeath()

}
function draw()
{
    gameBoard.innerHTML=''
    drawsnake(gameBoard)
    drawFood(gameBoard)

}
function checkdeath()
{
    gameover=outsideGrid(getSnakeHead()) ||snakeIntersection()


}
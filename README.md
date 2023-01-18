# Creature Coders

<div id="readme-top"></div>

<img width="1402" alt="Creature Coders" src="https://user-images.githubusercontent.com/98194118/213310156-1f83ef3b-f81d-4345-9843-77371d1f9538.png">

## Table of Contents

  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#architecture-diagram">Architecture Diagram</a></li>
      </ul>
    </li>
    <li><a href="#local-installation">Local Installation</a></li>
    <li><a href="#web-deployment">Web Deployment</a></li> 
	<li><a href="#authors">Team Error 007 Authors</a></li>
	<li><a href="#credits">Credits</a></li>
  </ol>

<!-- ABOUT THE PROJECT -->

## About The Project
<div id="about-the-project" align="center">

<p>Creature Coders is a game designed for ages 10+ that will allow you to traverse the NYC subway system as a local New York City animal, while learning how to code in a fun and intuitive way. 

To play the game, each user picks a pet avatar and traverses the levels on our subway map inspired by NYC. The beginning games focus on logic and basic concepts, and the later games bring in some javascript syntax and code. After you win each game, you’re rewarded with points and PidgeCoins, which you can use to buy hats in the hat shop.</p>

</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!--BUILT WITH -->

## Built With

### Tools

- [Amazon Web Services](https://aws.amazon.com/)
  - AWS IAM (Identity Access Management)
  - Amazon ECR (Elastic Container Registry)
  - Amazon ECS (Elastic Container Services)
  - AWS Cloud Watch
- [PostgreSQL Instance](https://aws.amazon.com/rds/)
  - Amazon RDS (Relational Database Service)
- [Visual Studio Code](https://code.visualstudio.com/)

### Technologies

- [HTML](https://html.spec.whatwg.org/)
- [Styled Components](https://styled-components.com/)
- [React.js](https://reactjs.org/)
- [Blockly](https://developers.google.com/blockly)
- [JavaScript](https://www.javascript.com/)
- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Sequelize](https://sequelize.org/)
- [npm](https://www.npmjs.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Features

- User can log in, sign up, or start playing first two games as a trial. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ARCHITECTURE DIAGRAM -->

<div id="architecture-diagram">

## Architecture Diagram

![Architecture Diagram](https://user-images.githubusercontent.com/98194118/213309568-e53cb4da-2a02-485d-8ec1-4b4a70084c2a.png)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

</div>

<!-- LOCAL INSTALLATION -->

<div id="local-installation">

## Local Installation

<p align="right">(<a href="#readme-top">back to top</a>)</p>
</div>

<!-- WEB DEPLOYMENT -->

<div id="web-deployment">

## Web Deployment

![CI/CD](https://user-images.githubusercontent.com/98194118/213311296-4b5d92f4-703d-4a29-9bfc-6efdd5d0f3e4.png)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
</div>

<!-- TEAM ERROR 007 AUTHORS -->

<div id="authors">

## Team Error 007 Authors

- [@JulianMartos](https://github.com/JulianMartos)
- [@Eli-Meyer42](https://github.com/Eli-Meyer42)
- [@kendallperry](https://github.com/kendallperry)
- [@peterTorres7](https://github.com/peterTorres7)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
</div>

<!-- CREDITS -->

<div id="credits">

## Creature Coders Credits

![pigeon](https://user-images.githubusercontent.com/98194118/169086011-39d44ddd-4fdf-42b5-b50f-f235e5d2152f.png)

Creature coders was originally created, designed and developed by:

- [@sommerh](https://github.com/sommerh)
- [@kendallperry](https://github.com/kendallperry)
- [@AngelRobish](https://github.com/AngelRobish)
- [@CaitlinPSherman](https://github.com/CaitlinPSherman)

Check out the original <a href=https://github.com/pigeon-programmers/creature-coders-web>Creature Coders Repo</a>.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
</div>


**Log in as a seeded user:**
1.  To log in as a registered user, you can use username: `Grace` , password: `123` for access to all games and levels. 
2.  For a user mid-way through levels, you can log in as username: `Pippin`, password `123`. 

**Sign up as a new user:**
1.  You can sign up as a new user, you will then be taken to choose your pet! 
2.  Select a pet of your choice from the drop down menu. Roll the dice 🎲 until you get a name you like!
3.  You will have access to the first two tutorial levels from the map 🗺, but will need to pass each level to gain access to future levels! 🏆



**Steps to run Creature Coders locally!**

* Clone our repo into a new directory. 
* `npm install`
* Create postgres database `creature-coders` 
* `npm run seed`
* `npm run start:dev`
* Once your server is up and running, check out http://localhost:8080/ and enjoy! 🦝
 

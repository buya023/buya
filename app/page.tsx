import Image from "next/image";
import { SiLeetcode } from "react-icons/si";

export default function Home() {
  return (
    <div>
      <ul className="sticky" id="mainMenu">
        <li className="mainMenuList">
          <a href="#home">Home</a>
        </li>
        <li className="mainMenuList">
          <a href="#project">Project</a>
        </li>
        <li className="mainMenuList">
          <a href="#class">Online class</a>
        </li>
        <li className="mainMenuList">
          <a href="#competition">Competition</a>
        </li>
        <li className="mainMenuList">
          <a href="#about">About me</a>
        </li>
        <li className="mainMenuList">
          <a href="/blogs/blogs.html">Blog</a>
        </li>
      </ul>

      {/* Introduction */}
      <section className="intro" id="home">
        <h1 className="section__title section__title--intro">
          Hi, I am <strong>Buya</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">
          Software engineer
        </p>
        <div className="ani" />
      </section>

      {/* My projects */}
      <section className="my-services" id="project">
        <h2 className="section__title section__title--services">My projects</h2>
        <div className="services">
          <div className="service">
            <h3>
              <a
                href="https://github.com/Buya023/PersonalWebSite"
                target="_blank"
                rel="noopener noreferrer"
                className="gameName"
              >
                Flappy bird
              </a>
            </h3>
            <a
              href="https://github.com/Buya023/PersonalWebSite"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/img/flappy.png"
                alt="Flappy bird project"
                width={300}
                height={240}
                className="projectPic"
              />
            </a>
            <p>The flappy bird made by PyGame and 100% Python3.</p>
          </div>

          <div className="service">
            <h3>Drum kit</h3>
            <Image
              src="/img/drum.png"
              alt="Drum kit"
              width={300}
              height={240}
              className="projectPic"
            />
            <p>
              Make sounds of the instruments in pictures by clicking the w, a,
              s, d, j, k, l buttons in keyboard. Mostly made by html and css
            </p>
          </div>

          <div className="service">
            <h3>Dice game</h3>
            <Image
              src="/img/dicee.png"
              alt="Dice game"
              width={300}
              height={240}
              className="projectPic"
            />
            <p>
              The game start by clicking space bar and ultimately show a result.
              Mostly made by css and html.
            </p>
          </div>
        </div>

        <a
          href="https://github.com/Buya023?tab=repositories"
          className="btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Projects
        </a>
      </section>

      {/* Online courses */}
      <section className="onlineClass" id="class">
        <h2 className="section__title course__title--services">
          My online courses
        </h2>
        <div className="services">
          <div className="service">
            <h3>Web development</h3>
            <a href="https://www.udemy.com/course/the-complete-web-development-bootcamp/">
              <Image
                src="/img/web-dev.png"
                alt="Web development course"
                width={300}
                height={200}
                className="projectPic"
              />
            </a>
            <p>
              I learned basics of web development. I learned CSS, HTML, NODE,
              REACT etc
            </p>
          </div>

          <div className="service">
            <h3>Python хэл - Програмчлалын суурь ойлголт</h3>
            <a href="https://melearn.mn/course/python">
              <Image
                src="/img/python.png"
                alt="Python course"
                width={300}
                height={200}
                className="projectPic"
              />
            </a>
            <p>
              I learned basics of programing and intermediate Python. I utilized
              libraries such as PyGame and Turtle. I solved numerous quizzes. I
              developed a functional Flappy Bird game as a capstone project.
            </p>
          </div>

          <div className="service">
            <h3>Data structure</h3>
            <a href="https://www.udemy.com/course/data-structures-and-algorithms-bootcamp-in-python/">
              <Image
                src="/img/data-structure.png"
                alt="Data structure course"
                width={300}
                height={200}
                className="projectPic"
              />
            </a>
            <p>
              I took the course to learn various ways to solve coding problems.
              also, it will helps me to develop myself to become better problem
              solver
            </p>
          </div>
        </div>
      </section>

      {/* Competitions */}
      <section className="my-services" id="competition">
        <h2 className="section__title section__title--services">
          Coding competition
        </h2>
        <div className="services">
          <div className="service">
            <h3>AtCoder</h3>
            <p>
              <Image
                src="/img/at-coder.png"
                alt="AtCoder"
                width={100}
                height={100}
                style={{ margin: "20px auto", display: "block" }}
              />
            </p>
            <a
              href="https://atcoder.jp/users/Buya"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here to see AtCoder
            </a>
          </div>

          <div className="service">
            <h3>Leetcode</h3>
            <Image
              src="/img/LeetCode_logo_black.png"
              alt="LeetCode"
              width={100}
              height={100}
              style={{ margin: "20px auto", display: "block" }}
            />
            <a
              href="https://leetcode.com/Buyanjargargal/"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here to see Leetcode
            </a>
          </div>

          <div className="service">
            <h3>CodeForce</h3>
            <p>
              <Image
                src="/img/codeforce-logo.png"
                alt="CodeForce"
                width={100}
                height={100}
                style={{ margin: "20px auto", display: "block" }}
              />
            </p>
            <a
              href="https://codeforces.com/profile/buya4"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here to see CodeForce
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <a href="mailto:buyanjargal023@gmail.com" className="footer__link">
          Contact Me
        </a>
        <ul className="social-list">
          <li className="social-list__item">
            <a
              className="social-list__link"
              href="https://leetcode.com/Buyanjargargal/"
            >
              <SiLeetcode />
            </a>
          </li>
          <li className="social-list__item">
            <a
              className="social-list__link"
              href="https://www.linkedin.com/in/buyanjargargal-tserendendev-21a495227/"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li className="social-list__item">
            <a
              className="social-list__link"
              href="https://github.com/Buya023?tab=repositories"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

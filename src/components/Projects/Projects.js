import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import plant from "../../Assets/Projects/flower.png";
import fruits from "../../Assets/Projects/fruits.png";
import car from "../../Assets/Projects/cars.png";
import fake from "../../Assets/Projects/fake.png";
import lstm from "../../Assets/Projects/lstm.png";
import chat from "../../Assets/Projects/chat.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fake}
              isBlog={false}
              title="FAKE NEWS DETECTION"
              description="Using random forest model, developed a machine learning-based system to classify news articles as real or fake."
              ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="CHATBOT USING NLP"
              description="Built a chatbot using Natural Language Processing techniques and RNN model to assist customers with common queries."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={car}
              isBlog={false}
              title="VEHICLE CLASSIFICATION AND TRACKING SYSTEM"
              description="Designed a computer vision-based system to detect and track vehicles in real-time using yolov8 and deepsort."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={plant}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lstm}
              isBlog={false}
              title="TEXT GENERATION USING LSTM"
              description="Developed a text generation model using Long Short-Term Memory (LSTM) neural networks to generate coherent and contextually relevant text based on a given input."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fruits}
              isBlog={false}
              title="Calories Count in Fruits"
              description="Developed a machine learning model to estimate the calorie content in various fruits based on their nutritional attributes. Applied feature engineering and regression techniques to accurately predict calorie counts, aiding in dietary analysis and health-conscious decision making."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

export function ThreeColumns(): React.JSX.Element {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "200px",
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        />
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "200px",
                                height: "100px",
                                backgroundColor: "blue",
                            }}
                        />
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "200px",
                                height: "100px",
                                backgroundColor: "green",
                            }}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export function ButtonComponent(): React.JSX.Element {
    return (
        <div>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
        </div>
    );
}

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript and my name is
                Nicholas Wang
            </header>
            <h1 className="header">Welcome to my React App</h1>
            <p>Hello World I love to eat French Fries</p>
            <img src="public\kirb.png" alt="Kirby :)" />
            <ul>
                <li>First thing</li>
                <li>Another thing</li>
                <li>A third item</li>
            </ul>
            <ButtonComponent />
            <ThreeColumns />
            <p>I also like to run and do computer related stuff</p>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;

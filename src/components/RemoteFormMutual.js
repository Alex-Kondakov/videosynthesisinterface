import React, { useState, useEffect, useContext } from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Card from 'react-bootstrap/Card'
import { RemoteContext } from "../context/RemoteContext"

const RemoteFormMutual = () => {
    const contextData = useContext(RemoteContext)
    const [delays, setDelays] = useState('Fetching...')
    const [inOutro, setInOutro] = useState('Fetching...')
    const [example, setExample] = useState('Fetching...')

    useEffect(() => {
        setDelays([
            <Col><FloatingLabel controlId="delay1" label="Delay #1" className="mb-3">
                    <Form.Control type="text" placeholder="1" />
                </FloatingLabel>
            </Col>,
            <Col><FloatingLabel controlId="delay2" label="Delay #2" className="mb-3">
                    <Form.Control type="text" placeholder="2" />
                </FloatingLabel>
            </Col>,
            <Col><FloatingLabel controlId="outputWidth" label="Output width" className="mb-3">
                    <Form.Control type="text" placeholder="1920" />
                </FloatingLabel>
            </Col>,
            <Col><FloatingLabel controlId="outputHeight" label="Output height" className="mb-3">
                    <Form.Control type="text" placeholder="1080" />
                </FloatingLabel>
            </Col>
        ])
        setInOutro([
            <FloatingLabel controlId="introUrl" label="Intro URL" className="mb-3">
                <Form.Control type="text" placeholder="google.com" />
            </FloatingLabel>,
            <FloatingLabel controlId="outroUrl" label="Outro URL" className="mb-3">
                <Form.Control type="text" placeholder="google.com" />
            </FloatingLabel>

        ])

        setExample(JSON.stringify(contextData))
    }, [contextData])

    return (
        <Card>
            <Card.Header>New task</Card.Header>
            <Card.Body>
                <Form.Group>
                    <Card.Title>Delays and output video resolution</Card.Title>
                    <Row>
                        {delays}
                    </Row>
                    <Card.Title>Intro and outro</Card.Title>
                    {inOutro}
                    {/*{example}*/}

                </Form.Group>
            </Card.Body>
        </Card>
    )
}

export default RemoteFormMutual
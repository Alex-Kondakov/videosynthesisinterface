import React, { useState, useEffect, useRef } from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Alert from 'react-bootstrap/Alert'
import Col from 'react-bootstrap/Col'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const RemoteFormMutual = () => {
    const myPreset = useRef(null)
    const myDelay1 = useRef(null)
    const myDelay2 = useRef(null)
    const myWidth = useRef(null)
    const myHeight = useRef(null)
    const myIntro = useRef(null)
    const myOutro = useRef(null)
    const [delaysWH, setDelaysWH] = useState('Fetching...')
    const [inOutro, setInOutro] = useState('Fetching...')
    const [preset, setPreset] = useState('Fetching...')
    const [taskName, setTaskName] = useState('')
    const [example, setExample] = useState('')
 
    useEffect(() => {
        setTaskName(new Date().getTime().toString())
        setPreset(
            <Form.Select size="lg" ref={myPreset}>
                <option>VSS-PRESET-TOP</option>
                <option>VSS-PRESET-STATIC</option>
                <option>VSS-PRESET-PUZZLE</option>
            </Form.Select>
        )
        setDelaysWH([
            <Col>
                <FloatingLabel controlId="delay1" label="Delay #1" className="mb-3">
                    <Form.Control type="text" placeholder="1" defaultValue="1" ref={myDelay1}/>
                </FloatingLabel>
            </Col>,
            <Col>
                <FloatingLabel controlId="delay2" label="Delay #2" className="mb-3">
                    <Form.Control type="text" placeholder="2" defaultValue="2" ref={myDelay2}/>
                </FloatingLabel>
            </Col>,
            <Col>
                <FloatingLabel controlId="outputWidth" label="Output width" className="mb-3">
                    <Form.Control type="text" placeholder="1600" defaultValue="1600" ref={myWidth}/>
                </FloatingLabel>
            </Col>,
            <Col>
                <FloatingLabel controlId="outputHeight" label="Output height" className="mb-3">
                    <Form.Control type="text" placeholder="900" defaultValue="900" ref={myHeight}/>
                </FloatingLabel>
            </Col>
        ])
        setInOutro([
            <FloatingLabel controlId="introUrl" label="Intro URL" className="mb-3">
                <Form.Control type="text" placeholder="google.com" ref={myIntro}/>
            </FloatingLabel>,
            <FloatingLabel controlId="outroUrl" label="Outro URL" className="mb-3">
                <Form.Control type="text" placeholder="google.com" ref={myOutro}/>
            </FloatingLabel>

        ])

    }, [])

    return (
        <Card>
            <Card.Header>New task</Card.Header>
            <Card.Body>
                <Form.Group>
                    <Alert variant="success">
                        <Alert.Heading>New task name generated automatically: <b>{taskName}</b></Alert.Heading>
                        <p>
                            Each URL you pass into this form must be a direct url to download input file. Avoid using of special characters in texts. Known issues with % " ' symbols which are restricted by FFmpeg. Limit text lines sizes to avoid overflows. Use numeric values only in appropriate fields to avoid crashing of tasks.
                        </p>
                        <hr />
                        <p className="mb-0">
                            Use this name for tracking task both on VSDaemon and VSServer.
                        </p>
                    </Alert>
                    <Card.Title>Pick preset</Card.Title>
                    {preset}
                    <br></br>
                    <Card.Title>Delays and output video resolution</Card.Title>
                    <Row>
                        {delaysWH}
                    </Row>
                    <Card.Title>Intro and outro</Card.Title>
                    {inOutro}
                    <Button variant="outline-success" onClick={() => setExample(JSON.stringify([taskName, myPreset.current.value, myDelay1.current.value, myDelay2.current.value]))}>Generate</Button>
                    {example}
                </Form.Group>
            </Card.Body>
        </Card>
    )
}

export default RemoteFormMutual